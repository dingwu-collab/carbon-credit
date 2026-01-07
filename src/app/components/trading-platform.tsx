import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, TrendingDown, ArrowUpDown, DollarSign, LineChart as LineChartIcon, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
// CHANGED: Import your new component
import CandlestickChart from "./ui/candlestick-chart";

// CHANGED: Data now includes Open, High, Low, Close (OHLC)
const priceHistory = [
  { time: "9:00", open: 14.80, high: 14.95, low: 14.75, close: 14.80 },
  { time: "10:00", open: 14.80, high: 15.20, low: 14.85, close: 15.10 },
  { time: "11:00", open: 15.10, high: 15.15, low: 14.80, close: 14.90 },
  { time: "12:00", open: 14.90, high: 15.40, low: 14.90, close: 15.30 },
  { time: "13:00", open: 15.30, high: 15.70, low: 15.25, close: 15.60 },
  { time: "14:00", open: 15.60, high: 15.65, low: 15.30, close: 15.40 },
  { time: "15:00", open: 15.40, high: 15.90, low: 15.35, close: 15.80 },
];

const orderBook = {
  bids: [
    { price: 15.45, amount: 250, total: 3862.5 },
    { price: 15.40, amount: 180, total: 2772.0 },
    { price: 15.35, amount: 320, total: 4912.0 },
    { price: 15.30, amount: 150, total: 2295.0 },
    { price: 15.25, amount: 200, total: 3050.0 },
  ],
  asks: [
    { price: 15.50, amount: 220, total: 3410.0 },
    { price: 15.55, amount: 190, total: 2954.5 },
    { price: 15.60, amount: 280, total: 4368.0 },
    { price: 15.65, amount: 160, total: 2504.0 },
    { price: 15.70, amount: 240, total: 3768.0 },
  ],
};

const recentTrades = [
  { time: "14:52", price: 15.48, amount: 50, type: "buy" },
  { time: "14:48", price: 15.45, amount: 120, type: "sell" },
  { time: "14:43", price: 15.50, amount: 75, type: "buy" },
  { time: "14:38", price: 15.42, amount: 200, type: "sell" },
  { time: "14:32", price: 15.47, amount: 90, type: "buy" },
];

export function TradingPlatform() {
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  
  // CHANGED: State to track which chart to show
  const [chartType, setChartType] = useState<"line" | "candle">("line");

  const handlePlaceOrder = () => {
    if (!amount || !price) {
      toast.error("Please enter amount and price");
      return;
    }

    toast.success(`${orderType === "buy" ? "Buy" : "Sell"} order placed`, {
      description: `${amount} credits at $${price} per tonne`,
    });

    setAmount("");
    setPrice("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>Carbon Credit Exchange</h2>
        <p className="text-gray-600">Trade verified carbon credits with real-time pricing</p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600">Current Price</p>
          <p className="text-2xl mt-1">$15.48</p>
          <div className="flex items-center gap-1 text-green-600 mt-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">+2.3%</span>
          </div>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">24h Volume</p>
          <p className="text-2xl mt-1">2,847</p>
          <p className="text-sm text-gray-500 mt-1">tonnes CO₂e</p>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">24h High</p>
          <p className="text-2xl mt-1">$15.85</p>
          <div className="flex items-center gap-1 text-gray-500 mt-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">+5.1%</span>
          </div>
        </Card>

        <Card className="p-4">
          <p className="text-sm text-gray-600">24h Low</p>
          <p className="text-2xl mt-1">$14.72</p>
          <div className="flex items-center gap-1 text-red-600 mt-1">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm">-1.2%</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHANGED: Price Chart Section with Toggle */}
        <Card className="p-6 lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Price Chart (Today)</h3>
            
            {/* Toggle Buttons */}
            <div className="flex items-center bg-muted/50 p-1 rounded-lg border">
              <Button
                variant={chartType === "line" ? "secondary" : "ghost"}
                size="sm"
                className="h-7 px-3 text-xs"
                onClick={() => setChartType("line")}
              >
                <LineChartIcon className="w-3.5 h-3.5 mr-1.5" />
                Line
              </Button>
              <Button
                variant={chartType === "candle" ? "secondary" : "ghost"}
                size="sm"
                className="h-7 px-3 text-xs"
                onClick={() => setChartType("candle")}
              >
                <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
                Candle
              </Button>
            </div>
          </div>

          <div className="flex-1 min-h-[300px]">
            {chartType === "line" ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="time" />
                  <YAxis 
                    domain={[14.5, 16.0]} 
                    tickFormatter={(val) => `$${val.toFixed(2)}`}
                  />
                  <Tooltip />
                  {/* Note: dataKey changed from "price" to "close" to match new data format */}
                  <Line 
                    type="monotone" 
                    dataKey="close" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    dot={true} 
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              // The Candlestick Component
              <CandlestickChart data={priceHistory} />
            )}
          </div>
        </Card>

        {/* Order Form (Unchanged) */}
        <Card className="p-6">
          <h3 className="mb-4">Place Order</h3>

          <Tabs value={orderType} onValueChange={(v) => setOrderType(v as "buy" | "sell")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Amount (tonnes)</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Price (per tonne)</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Total</span>
                  <span>${amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : "0.00"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Fee (0.5%)</span>
                  <span>
                    ${amount && price ? ((parseFloat(amount) * parseFloat(price)) * 0.005).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>

              <Button onClick={handlePlaceOrder} className="w-full bg-green-600 hover:bg-green-700">
                Place Buy Order
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Amount (tonnes)</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Price (per tonne)</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Total</span>
                  <span>${amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : "0.00"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Fee (0.5%)</span>
                  <span>
                    ${amount && price ? ((parseFloat(amount) * parseFloat(price)) * 0.005).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>

              <Button onClick={handlePlaceOrder} className="w-full bg-red-600 hover:bg-red-700">
                Place Sell Order
              </Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      {/* Order Book and Recent Trades (Unchanged) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpDown className="w-5 h-5 text-gray-600" />
            <h3>Order Book</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Price (USD)</span>
                <span>Amount</span>
                <span>Total</span>
              </div>

              {/* Asks */}
              <div className="space-y-1 mb-3">
                {orderBook.asks.reverse().map((ask, idx) => (
                  <div key={idx} className="flex justify-between text-sm text-red-600">
                    <span>{ask.price.toFixed(2)}</span>
                    <span>{ask.amount}</span>
                    <span>{ask.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Spread */}
              <div className="py-2 border-y text-center">
                <span className="text-lg">15.48</span>
                <span className="text-xs text-gray-500 ml-2">Spread: $0.05</span>
              </div>

              {/* Bids */}
              <div className="space-y-1 mt-3">
                {orderBook.bids.map((bid, idx) => (
                  <div key={idx} className="flex justify-between text-sm text-green-600">
                    <span>{bid.price.toFixed(2)}</span>
                    <span>{bid.amount}</span>
                    <span>{bid.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-600" />
            <h3>Recent Trades</h3>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Time</span>
              <span>Price (USD)</span>
              <span>Amount</span>
            </div>

            <div className="space-y-2">
              {recentTrades.map((trade, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-600">{trade.time}</span>
                  <span className={trade.type === "buy" ? "text-green-600" : "text-red-600"}>
                    {trade.price.toFixed(2)}
                  </span>
                  <span>{trade.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-medium">Smart Contract Settlement:</span> All trades are settled automatically via
              blockchain with instant transfer of ownership and payment.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}