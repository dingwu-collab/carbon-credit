// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { 
//   ArrowUpRight, 
//   ArrowDownRight, 
//   ArrowRightLeft, 
//   Search, 
//   Bell,
//   Leaf
// } from "lucide-react";
// import { 
//   AreaChart, 
//   Area, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip 
// } from "recharts";

// // Navigation Handlers
// const handleStartTrading = () => {
//     // Navigate to trading page
//     window.location.href = "/trade-execution"; 
// };

// const handleViewReport = () => {
//     // Navigate to ESG page
//     window.location.href = "/esg-scoring";
// };

// // Mock Data
// const portfolioHistory = [
//   { time: "00:00", value: 41200 },
//   { time: "04:00", value: 41500 },
//   { time: "08:00", value: 41350 },
//   { time: "12:00", value: 42100 },
//   { time: "16:00", value: 42800 },
//   { time: "20:00", value: 42500 },
//   { time: "24:00", value: 42950 },
// ];

// const marketAssets = [
//   { id: "VCT", name: "Verra Carbon Token", type: "Forestry", price: 12.50, change: 2.4, holding: 450, holdingValue: 5625.00, iconColor: "bg-green-100 text-green-600" },
//   { id: "GSS", name: "Gold Standard Solar", type: "Renewable", price: 18.20, change: -1.1, holding: 120, holdingValue: 2184.00, iconColor: "bg-yellow-100 text-yellow-600" },
//   { id: "BCR", name: "Blue Carbon Reserve", type: "Ocean Capture", price: 32.00, change: 5.6, holding: 850, holdingValue: 27200.00, iconColor: "bg-blue-100 text-blue-600" },
//   { id: "BIO", name: "Biochar Removal", type: "Tech Removal", price: 145.00, change: 0.5, holding: 0, holdingValue: 0, iconColor: "bg-purple-100 text-purple-600" },
// ];

// export function UserDashboard() {
//   return (
//     <div className="max-w-6xl mx-auto space-y-8">
      
//       {/* Top Navigation Bar */}
//       <div className="flex items-center justify-between py-2">
//         <div className="flex items-center gap-4">
//           <h1 className="text-xl font-bold">Portfolio</h1>
//           <div className="relative hidden md:block">
//             <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//             <input 
//               type="text" 
//               placeholder="Search assets..." 
//               className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
        
//             <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
//                 Connect Wallet
//             </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* LEFT COLUMN: Portfolio & Actions */}
//         <div className="lg:col-span-2 space-y-8">
            
//             {/* Portfolio Hero Section */}
//             <div className="space-y-4">
//                 <p className="text-gray-500 font-medium">Total Balance</p>
//                 <div className="flex items-baseline gap-2">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900">$42,950.00</h2>
//                     <span className="text-green-600 font-medium flex items-center bg-green-50 px-2 py-1 rounded-lg">
//                         <ArrowUpRight className="h-4 w-4 mr-1" /> +$1,250 (3.21%)
//                     </span>
//                 </div>
                
//                 {/* Main Chart */}
//                 <div className="h-[250px] w-full -ml-4">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <AreaChart data={portfolioHistory} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//                             <defs>
//                                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
//                                     <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
//                                 </linearGradient>
//                             </defs>
//                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
//                             <XAxis 
//                                 dataKey="time" 
//                                 axisLine={false} 
//                                 tickLine={false} 
//                                 tick={{ fill: '#6b7280', fontSize: 12 }} 
//                                 dy={10}
//                             />
//                             <YAxis 
//                                 domain={['dataMin - 1000', 'dataMax + 1000']} 
//                                 axisLine={false} 
//                                 tickLine={false} 
//                                 tick={{ fill: '#6b7280', fontSize: 12 }} 
//                                 tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`} 
//                                 width={45}
//                             />
//                             <Tooltip 
//                                 cursor={{ stroke: '#16a34a', strokeWidth: 1, strokeDasharray: '4 4' }}
//                                 contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
//                                 itemStyle={{ color: '#16a34a', fontWeight: 'bold' }}
//                                 formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
//                             />
//                             <Area 
//                                 type="monotone" 
//                                 dataKey="value" 
//                                 stroke="#16a34a" 
//                                 strokeWidth={2} 
//                                 fill="url(#colorValue)" 
//                                 activeDot={{ r: 6, strokeWidth: 0, fill: '#16a34a' }} 
//                             />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>

//             {/* Quick Action Buttons */}
//             <div className="pt-2">
//                 <Button 
//                     onClick={handleStartTrading}
//                     className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-md transition-all rounded-xl flex items-center justify-center gap-3"
//                 >
//                     <ArrowRightLeft className="w-5 h-5" />
//                     Start Trading
//                 </Button>
                
//                 <div className="flex justify-center mt-3 gap-1 text-xs text-gray-500">
//                     <span>Buy, Sell, Swap or</span>
//                     <button className="text-green-600 font-medium hover:underline flex items-center gap-0.5">
//                         <Leaf className="w-3 h-3" /> Retire Assets
//                     </button>
//                 </div>
//             </div>

//             {/* Assets & Market Lists */}
//             <div className="space-y-4">
//                 <h3 className="text-xl font-semibold">Your Assets</h3>
//                 <Card className="overflow-hidden border-gray-200 shadow-sm">
//                     <div className="divide-y divide-gray-100">
//                         {marketAssets.filter(a => a.holding > 0).map((asset) => (
//                             <AssetRow key={asset.id} asset={asset} isHolding={true} />
//                         ))}
//                     </div>
//                 </Card>
//             </div>
//              <div className="space-y-4">
//                 <h3 className="text-xl font-semibold">Market</h3>
//                 <Card className="overflow-hidden border-gray-200 shadow-sm">
//                     <div className="divide-y divide-gray-100">
//                         {marketAssets.map((asset) => (
//                             <AssetRow key={asset.id} asset={asset} isHolding={false} />
//                         ))}
//                     </div>
//                 </Card>
//             </div>
//         </div>

//         {/* RIGHT COLUMN: Sidebar Stats & Learn */}
//         <div className="space-y-6">
            
//             {/* Impact Card with WORKING BUTTON */}
//             <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
//                 <div className="flex items-center gap-3 mb-4">
//                     <div className="p-2 bg-white rounded-full shadow-sm">
//                         <Leaf className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                         <p className="text-sm text-green-800 font-medium">ESG Scoring</p>
//                         <p className="text-xs text-green-600"></p>
//                     </div>
//                 </div>
//                 <div className="space-y-2">
//                     <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>Score</span>
//                         <span>86/100</span>
//                     </div>
//                     <div className="w-full bg-white rounded-full h-2">
//                         <div className="bg-green-500 h-2 rounded-full" style={{ width: "86%" }}></div>
//                     </div>

//                     {/* --- FIXED BUTTON --- */}
//                     <Button 
//                         onClick={handleViewReport}
//                         variant="outline" 
//                         className="w-full mt-4 bg-white border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
//                     >
//                         View ESG Report
//                     </Button>
//                     {/* --------------------- */}

//                 </div>
//             </Card>

//             <div className="space-y-4">
//                  <div className="flex items-center justify-between">
//                     <h3 className="font-semibold text-gray-600">Trending Projects</h3>
//                     <span className="text-sm text-blue-600 cursor-pointer">View all</span>
//                  </div>
//                  <div className="space-y-3">
//                     <TrendingItem name="Amazon Protection" change="+12.5%" code="AMZ-01" />
//                     <TrendingItem name="Direct Air Capture" change="+8.2%" code="DAC-X" />
//                     <TrendingItem name="Soil Carbon" change="-2.4%" code="SOL-02" />
//                  </div>
//             </div>

//             <div className="space-y-4 pt-4 border-t border-gray-100">
//                 <h3 className="font-semibold text-gray-600">Learn & Earn</h3>
//                 <div className="group cursor-pointer">
//                     <div className="aspect-video bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
//                         <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
//                              <span className="text-xs">Carbon Cycles</span>
//                         </div>
//                     </div>
//                     <a href="#" className="block">
//                         <h4 className="font-medium group-hover:text-blue-600">What is Tokenized Carbon?</h4>
//                     </a>
//                     <p className="text-sm text-gray-500">Learn how blockchain ensures transparency.</p>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sub-components
// function AssetRow({ asset, isHolding }: { asset: any, isHolding: boolean }) {
//     return (
//         <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
//             <div className="flex items-center gap-4">
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${asset.iconColor}`}>
//                     <span className="font-bold text-lg">{asset.id[0]}</span>
//                 </div>
//                 <div>
//                     <p className="font-semibold text-gray-900">{asset.name}</p>
//                     <p className="text-sm text-gray-500">{asset.id} • {asset.type}</p>
//                 </div>
//             </div>
//             <div className="text-right">
//                 <p className="font-medium text-gray-900">
//                     {isHolding ? `$${asset.holdingValue.toLocaleString()}` : `$${asset.price.toFixed(2)}`}
//                 </p>
//                 <p className={`text-sm font-medium flex items-center justify-end ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                     {asset.change >= 0 ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
//                     {Math.abs(asset.change)}%
//                 </p>
//             </div>
//         </div>
//     );
// }

// function TrendingItem({ name, change, code }: { name: string, change: string, code: string }) {
//     const isPositive = change.includes('+');
//     return (
//         <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
//             <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
//                     {code.substring(0,2)}
//                 </div>
//                 <div>
//                     <p className="text-sm font-medium text-gray-900">{name}</p>
//                     <p className="text-xs text-gray-500">{code}</p>
//                 </div>
//             </div>
//             <Badge variant="secondary" className={isPositive ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}>
//                 {change}
//             </Badge>
//         </div>
//     );
// }

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  ArrowRightLeft, 
  Search, 
  Leaf
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ResponsiveContainer,
  Tooltip 
} from "recharts";

// 1. Define Props Interface
interface UserDashboardProps {
  onNavigate: (tab: string) => void;
}

// Mock Data (Unchanged)
const portfolioHistory = [
  { time: "00:00", value: 41200 },
  { time: "04:00", value: 41500 },
  { time: "08:00", value: 41350 },
  { time: "12:00", value: 42100 },
  { time: "16:00", value: 42800 },
  { time: "20:00", value: 42500 },
  { time: "24:00", value: 42950 },
];

const marketAssets = [
  { id: "VCT", name: "Verra Carbon Token", type: "Forestry", price: 12.50, change: 2.4, holding: 450, holdingValue: 5625.00, iconColor: "bg-green-100 text-green-600" },
  { id: "GSS", name: "Gold Standard Solar", type: "Renewable", price: 18.20, change: -1.1, holding: 120, holdingValue: 2184.00, iconColor: "bg-yellow-100 text-yellow-600" },
  { id: "BCR", name: "Blue Carbon Reserve", type: "Ocean Capture", price: 32.00, change: 5.6, holding: 850, holdingValue: 27200.00, iconColor: "bg-blue-100 text-blue-600" },
  { id: "BIO", name: "Biochar Removal", type: "Tech Removal", price: 145.00, change: 0.5, holding: 0, holdingValue: 0, iconColor: "bg-purple-100 text-purple-600" },
];

// 2. Destructure the prop here
export function UserDashboard({ onNavigate }: UserDashboardProps) {

  // 3. Update Handlers
  const handleStartTrading = () => {
    onNavigate("trading"); // Switch to Trading tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewReport = () => {
    onNavigate("esg"); // Switch to ESG tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                Connect Wallet
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Portfolio & Actions */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Portfolio Hero Section */}
            <div className="space-y-4">
                <p className="text-gray-500 font-medium">Total Balance</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">$42,950.00</h2>
                    <span className="text-green-600 font-medium flex items-center bg-green-50 px-2 py-1 rounded-lg">
                        <ArrowUpRight className="h-4 w-4 mr-1" /> +$1,250 (3.21%)
                    </span>
                </div>
                
                {/* Main Chart */}
                <div className="h-[250px] w-full -ml-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={portfolioHistory} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis 
                                dataKey="time" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#6b7280', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                domain={['dataMin - 1000', 'dataMax + 1000']} 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#6b7280', fontSize: 12 }} 
                                tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`} 
                                width={45}
                            />
                            <Tooltip 
                                cursor={{ stroke: '#16a34a', strokeWidth: 1, strokeDasharray: '4 4' }}
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                itemStyle={{ color: '#16a34a', fontWeight: 'bold' }}
                                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#16a34a" 
                                strokeWidth={2} 
                                fill="url(#colorValue)" 
                                activeDot={{ r: 6, strokeWidth: 0, fill: '#16a34a' }} 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2">
                <Button 
                    onClick={handleStartTrading}
                    className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-md transition-all rounded-xl flex items-center justify-center gap-3"
                >
                    <ArrowRightLeft className="w-5 h-5" />
                    Start Trading
                </Button>
                
                <div className="flex justify-center mt-3 gap-1 text-xs text-gray-500">
                    <span>Buy, Sell, Swap or</span>
                    <button className="text-green-600 font-medium hover:underline flex items-center gap-0.5">
                        <Leaf className="w-3 h-3" /> Retire Assets
                    </button>
                </div>
            </div>

            {/* Assets & Market Lists */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Your Assets</h3>
                <Card className="overflow-hidden border-gray-200 shadow-sm">
                    <div className="divide-y divide-gray-100">
                        {marketAssets.filter(a => a.holding > 0).map((asset) => (
                            <AssetRow key={asset.id} asset={asset} isHolding={true} />
                        ))}
                    </div>
                </Card>
            </div>
             <div className="space-y-4">
                <h3 className="text-xl font-semibold">Market</h3>
                <Card className="overflow-hidden border-gray-200 shadow-sm">
                    <div className="divide-y divide-gray-100">
                        {marketAssets.map((asset) => (
                            <AssetRow key={asset.id} asset={asset} isHolding={false} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Stats & Learn */}
        <div className="space-y-6">
            
            {/* Impact Card with WORKING BUTTON */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                        <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-green-800 font-medium">ESG Scoring</p>
                        <p className="text-xs text-green-600"></p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                        <span>Score</span>
                        <span>86/100</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "86%" }}></div>
                    </div>

                    <Button 
                        onClick={handleViewReport}
                        variant="outline" 
                        className="w-full mt-4 bg-white border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
                    >
                        View ESG Report
                    </Button>

                </div>
            </Card>

            <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-600">Trending Projects</h3>
                    <span className="text-sm text-blue-600 cursor-pointer">View all</span>
                 </div>
                 <div className="space-y-3">
                    <TrendingItem name="Amazon Protection" change="+12.5%" code="AMZ-01" />
                    <TrendingItem name="Direct Air Capture" change="+8.2%" code="DAC-X" />
                    <TrendingItem name="Soil Carbon" change="-2.4%" code="SOL-02" />
                 </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="font-semibold text-gray-600">Learn & Earn</h3>
                <div className="group cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                             <img src ="/image.png" alt="Carbon Cycle" className="w-full h-auto rounded object-contain"/>
                          {/* <span className="text-xs">Carbon Cycles</span> */}
                        </div>
                    </div>
                    <a href="https://www.carbonmark.com/post/the-rise-of-tokenized-carbon-credits-why-blockchain-is-changing-everything" className="block">
                        <h4 className="font-medium group-hover:text-blue-600">What is Tokenized Carbon?</h4>
                    </a>
                    <p className="text-sm text-gray-500">Learn how blockchain ensures transparency.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components (Unchanged)
function AssetRow({ asset, isHolding }: { asset: any, isHolding: boolean }) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${asset.iconColor}`}>
                    <span className="font-bold text-lg">{asset.id[0]}</span>
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{asset.name}</p>
                    <p className="text-sm text-gray-500">{asset.id} • {asset.type}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-medium text-gray-900">
                    {isHolding ? `$${asset.holdingValue.toLocaleString()}` : `$${asset.price.toFixed(2)}`}
                </p>
                <p className={`text-sm font-medium flex items-center justify-end ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.change >= 0 ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {Math.abs(asset.change)}%
                </p>
            </div>
        </div>
    );
}

function TrendingItem({ name, change, code }: { name: string, change: string, code: string }) {
    const isPositive = change.includes('+');
    return (
        <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                    {code.substring(0,2)}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500">{code}</p>
                </div>
            </div>
            <Badge variant="secondary" className={isPositive ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}>
                {change}
            </Badge>
        </div>
    );
}