import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Activity, Users, Coins, TrendingUp, Shield, Database } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const systemMetrics = [
  { name: "Jan", credits: 4500, transactions: 120, volume: 67500 },
  { name: "Feb", credits: 5200, transactions: 145, volume: 78000 },
  { name: "Mar", credits: 6100, transactions: 168, volume: 91500 },
  { name: "Apr", credits: 7300, transactions: 203, volume: 109500 },
  { name: "May", credits: 8900, transactions: 247, volume: 133500 },
  { name: "Jun", credits: 10200, transactions: 289, volume: 153000 },
];

const registryDistribution = [
  { name: "Verra", value: 45, color: "#10b981" },
  { name: "Gold Standard", value: 30, color: "#3b82f6" },
  { name: "National", value: 15, color: "#f59e0b" },
  { name: "Others", value: 10, color: "#6b7280" },
];

const verificationStats = [
  { status: "Approved", count: 234, percentage: 78 },
  { status: "Pending", count: 45, percentage: 15 },
  { status: "Under Review", count: 21, percentage: 7 },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2>System Overview</h2>
        <p className="text-gray-600">Monitoring all layers of the carbon credit ecosystem</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Credits Tokenized</p>
              <p className="text-2xl mt-1">10,234</p>
            </div>
            <Coins className="w-8 h-8 text-green-600" />
          </div>
          <div className="mt-4">
            <Badge className="bg-green-100 text-green-800">+12% this month</Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl mt-1">847</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <Badge className="bg-blue-100 text-blue-800">289 SMEs</Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Trading Volume</p>
              <p className="text-2xl mt-1">$153K</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mt-4">
            <Badge className="bg-purple-100 text-purple-800">289 trades</Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Verification Rate</p>
              <p className="text-2xl mt-1">98.3%</p>
            </div>
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mt-4">
            <Badge className="bg-orange-100 text-orange-800">High Trust</Badge>
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-gray-600" />
            <h3>System Growth</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={systemMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="credits" stroke="#10b981" strokeWidth={2} name="Credits" />
              <Line type="monotone" dataKey="transactions" stroke="#3b82f6" strokeWidth={2} name="Transactions" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-gray-600" />
            <h3>Registry Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={registryDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {registryDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Verification Status */}
      <Card className="p-6">
        <h3 className="mb-4">Verification Pipeline Status</h3>
        <div className="space-y-4">
          {verificationStats.map((stat) => (
            <div key={stat.status}>
              <div className="flex justify-between items-center mb-2">
                <span>{stat.status}</span>
                <span className="text-sm text-gray-600">{stat.count} credits</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    stat.status === "Approved"
                      ? "bg-green-600"
                      : stat.status === "Pending"
                      ? "bg-yellow-600"
                      : "bg-blue-600"
                  }`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="mb-4">Recent Platform Activity</h3>
        <div className="space-y-3">
          {[
            { action: "New credit tokenization", entity: "SolarTech Pte Ltd", time: "2 min ago", type: "mint" },
            { action: "Verification approved", entity: "Green Energy Solutions", time: "15 min ago", type: "verify" },
            { action: "Trade executed", entity: "DBS Bank × EcoStart", time: "23 min ago", type: "trade" },
            { action: "Loan collateralized", entity: "CleanAir Industries", time: "1 hr ago", type: "loan" },
            { action: "Oracle data update", entity: "IoT Sensor Network", time: "2 hr ago", type: "oracle" },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "mint"
                      ? "bg-green-500"
                      : activity.type === "verify"
                      ? "bg-blue-500"
                      : activity.type === "trade"
                      ? "bg-purple-500"
                      : activity.type === "loan"
                      ? "bg-orange-500"
                      : "bg-gray-500"
                  }`}
                />
                <div>
                  <p>{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.entity}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
