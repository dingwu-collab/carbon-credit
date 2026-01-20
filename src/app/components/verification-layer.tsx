import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock, XCircle, Radio, Database, Shield, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";

const verificationQueue = [
  {
    id: "VER-2026-045",
    project: "Industrial Solar Installation",
    submitter: "GreenTech Manufacturing",
    credits: 850,
    status: "pending_oracle",
    timestamp: "2 hours ago",
    iotData: true,
  },
  {
    id: "VER-2026-046",
    project: "Energy Efficiency Upgrade",
    submitter: "EcoBuilding Solutions",
    credits: 420,
    status: "pending_auditor",
    timestamp: "5 hours ago",
    iotData: false,
  },
  {
    id: "VER-2026-047",
    project: "Wind Farm Phase 2",
    submitter: "Renewable Energy Co",
    credits: 1200,
    status: "under_review",
    timestamp: "1 day ago",
    iotData: true,
  },
];

const iotSensorData = [
  { time: "00:00", energy: 145, expected: 140 },
  { time: "04:00", energy: 168, expected: 165 },
  { time: "08:00", energy: 192, expected: 185 },
  { time: "12:00", energy: 215, expected: 210 },
  { time: "16:00", energy: 188, expected: 190 },
  { time: "20:00", energy: 156, expected: 155 },
];

const oracleNodes = [
  { name: "Verra Registry", status: "active", uptime: 99.9 },
  { name: "Auditor Consortium", status: "active", uptime: 99.7 },
  { name: "IoT Data Validator", status: "active", uptime: 98.5 },
  { name: "MAS Compliance Check", status: "active", uptime: 100 },
];

export function VerificationLayer() {
  const handleApprove = (id: string) => {
    toast.success(`Verification ${id} approved`, {
      description: "Credits will be minted and added to the blockchain",
    });
  };

  const handleReject = (id: string) => {
    toast.error(`Verification ${id} rejected`, {
      description: "Submitter has been notified to provide additional documentation",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>Verification, Oracles & IoT Layer</h2>
        <p className="text-gray-600">Real-world data validation and blockchain integration</p>
      </div>

      {/* Oracle Network Status */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-5 h-5 text-blue-600" />
          <h3>Oracle Network Status</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {oracleNodes.map((node) => (
            <div key={node.name} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">{node.name}</span>
              </div>
              <div className="text-xs text-gray-600">
                <p>Status: {node.status}</p>
                <p>Uptime: {node.uptime}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-900">
          <Shield className="w-4 h-4 inline mr-2" />
          Oracles are running on a permissioned Chainlink network with multi-signature validation
        </div>
      </Card>

      {/* Verification Queue */}
      <Card className="p-6">
        <h3 className="mb-4">Pending Verifications</h3>

        <div className="space-y-4">
          {verificationQueue.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{item.id}</span>
                    <Badge
                      className={
                        item.status === "pending_oracle"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "pending_auditor"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {item.status.replace(/_/g, " ")}
                    </Badge>
                    {item.iotData && (
                      <Badge className="bg-green-100 text-green-800">
                        <Radio className="w-3 h-3 mr-1" />
                        IoT Data
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{item.project}</p>
                  <p className="text-xs text-gray-500">Submitted by {item.submitter} • {item.timestamp}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">{item.credits}</p>
                  <p className="text-xs text-gray-500">credits</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleApprove(item.id)}
                >
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleReject(item.id)}
                >
                  <XCircle className="w-3 h-3 mr-1" />
                  Reject
                </Button>
                <Button size="sm" variant="outline">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* IoT Data Monitoring */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-green-600" />
          <h3>Real-Time IoT Data Stream</h3>
          <Badge className="bg-green-100 text-green-800 ml-auto">Live</Badge>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">Project: Industrial Solar Installation (VER-2026-045)</p>
          <p className="text-xs text-gray-500">Sensor ID: IoT-SG-2847 • Last update: 30 seconds ago</p>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={iotSensorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={2} name="Actual Output (kWh)" />
            <Line
              type="monotone"
              dataKey="expected"
              stroke="#6b7280"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Expected"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-3 bg-green-50 rounded">
            <p className="text-xs text-gray-600">Performance</p>
            <p className="text-lg text-green-600">102.3%</p>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <p className="text-xs text-gray-600">CO₂ Offset Today</p>
            <p className="text-lg text-blue-600">4.2 tonnes</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="text-xs text-gray-600">Data Points</p>
            <p className="text-lg text-purple-600">8,640</p>
          </div>
        </div>
      </Card>

      {/* Verification Workflow */}
      <Card className="p-6">
        <h3 className="mb-4">Verification Workflow</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">1</span>
            </div>
            <div>
              <p className="font-medium">Data Collection</p>
              <p className="text-sm text-gray-600">
                IoT sensors or manual submission with registry documentation
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">2</span>
            </div>
            <div>
              <p className="font-medium">Oracle Validation</p>
              <p className="text-sm text-gray-600">
                Trusted oracles verify data consistency and registry confirmation
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">3</span>
            </div>
            <div>
              <p className="font-medium">Auditor Review</p>
              <p className="text-sm text-gray-600">
                Accredited ESG partners and auditors sign off on verification
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">4</span>
            </div>
            <div>
              <p className="font-medium">Smart Contract Execution</p>
              <p className="text-sm text-gray-600">
                Credits automatically minted and added to blockchain with immutable timestamp
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Verifications */}
      <Card className="p-6">
        <h3 className="mb-4">Recent Verification History</h3>
        <div className="space-y-2">
          {[
            { id: "VER-2026-044", result: "approved", credits: 650, time: "3 hours ago" },
            { id: "VER-2026-043", result: "approved", credits: 890, time: "8 hours ago" },
            { id: "VER-2026-042", result: "rejected", credits: 320, time: "12 hours ago" },
            { id: "VER-2026-041", result: "approved", credits: 1100, time: "1 day ago" },
          ].map((ver) => (
            <div key={ver.id} className="flex items-center justify-between p-3 border-l-4 rounded bg-gray-50"
              style={{ borderLeftColor: ver.result === "approved" ? "#10b981" : "#ef4444" }}
            >
              <div className="flex items-center gap-3">
                {ver.result === "approved" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <div>
                  <p className="font-medium">{ver.id}</p>
                  <p className="text-sm text-gray-600">{ver.credits} credits • {ver.time}</p>
                </div>
              </div>
              <Badge className={ver.result === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {ver.result}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}