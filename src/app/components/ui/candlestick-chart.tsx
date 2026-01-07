"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

// 1. Types for your data
interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// 2. Sample Data (Replace this with your real data later)
const priceHistory = [
  { time: "9:00", open: 14.80, high: 14.95, low: 14.75, close: 14.90 },
  { time: "10:00", open: 14.90, high: 15.20, low: 14.85, close: 15.10 },
  { time: "11:00", open: 15.10, high: 15.15, low: 14.80, close: 14.90 },
  { time: "12:00", open: 14.90, high: 15.40, low: 14.90, close: 15.30 },
  { time: "13:00", open: 15.30, high: 15.70, low: 15.25, close: 15.60 },
  { time: "14:00", open: 15.60, high: 15.65, low: 15.30, close: 15.40 },
  { time: "15:00", open: 15.40, high: 15.90, low: 15.35, close: 15.80 },
];

// 3. The Custom Shape Component that draws the Candle
const CandleShape = (props: any) => {
  const {
    fill,
    x,
    y,
    width,
    height,
    payload, // This contains the full data object (open, high, low, close)
  } = props;

  const { open, high, low, close } = payload;

  // Determine color: Green if close > open, Red if close < open
  const isUp = close > open;
  const candleColor = isUp ? "#22c55e" : "#ef4444"; 

  // Calculate pixel ratio: height of the bar (High-Low) / value difference
  // Prevent division by zero if high === low
  const ratio = Math.abs(height / (high - low)) || 0;

  // Calculate coordinates for Open and Close relative to the High (y)
  // Recharts 'y' corresponds to the 'high' value (top of the bar)
  const yOpen = y + (high - open) * ratio;
  const yClose = y + (high - close) * ratio;

  // Body height must be at least 2px to be visible
  const bodyHeight = Math.max(Math.abs(yOpen - yClose), 2);
  const bodyY = Math.min(yOpen, yClose);

  // Line coordinates (wick)
  // x + width / 2 centers the line in the bar space
  const wickX = x + width / 2;

  return (
    <g stroke={candleColor} fill={candleColor} strokeWidth="2">
      {/* Wick (Line from High to Low) */}
      <path d={`M ${wickX},${y} L ${wickX},${y + height}`} />
      
      {/* Candle Body (Rectangle from Open to Close) */}
      <rect
        x={x}
        y={bodyY}
        width={width}
        height={bodyHeight}
        stroke="none"
        rx={1} // Optional: slight rounding on corners
      />
    </g>
  );
};

// 4. Custom Tooltip to show O/H/L/C clearly
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { open, high, low, close } = payload[0].payload;
    return (
      <div className="bg-popover text-popover-foreground rounded-md border p-3 shadow-md text-sm outline-none">
        <div className="font-semibold mb-2">{label}</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <span className="text-muted-foreground">Open:</span>
          <span className="font-mono">{open.toFixed(2)}</span>
          
          <span className="text-muted-foreground">High:</span>
          <span className="font-mono">{high.toFixed(2)}</span>
          
          <span className="text-muted-foreground">Low:</span>
          <span className="font-mono">{low.toFixed(2)}</span>
          
          <span className="text-muted-foreground">Close:</span>
          <span className="font-mono">{close.toFixed(2)}</span>
        </div>
      </div>
    );
  }
  return null;
};

// 5. Main Component
export default function CandlestickChart({ data = priceHistory }: { data?: CandleData[] }) {
  // Calculate min/max domain to zoom in the chart vertically
  const minValue = Math.min(...data.map((d) => d.low)) * 0.99;
  const maxValue = Math.max(...data.map((d) => d.high)) * 1.01;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
              
              <XAxis 
                dataKey="time" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={10}
                fontSize={12}
              />
              
              <YAxis 
                domain={[minValue, maxValue]} 
                tickLine={false} 
                axisLine={false}
                fontSize={12}
                tickFormatter={(val) => `$${val.toFixed(0)}`}
                width={40}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

              {/* We use a Bar chart but override the shape.
                We pass [low, high] array so Recharts knows the full height range.
              */}
              <Bar
                dataKey={(d) => [d.low, d.high]}
                shape={<CandleShape />}
                animationDuration={500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}