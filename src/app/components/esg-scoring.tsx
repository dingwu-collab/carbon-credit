import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { TrendingUp, AlertCircle, CheckCircle2, Zap, Leaf, Users } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const esgMetrics = [
  { category: "Environmental", score: 87, max: 100 },
  { category: "Social", score: 72, max: 100 },
  { category: "Governance", score: 91, max: 100 },
  { category: "Carbon Impact", score: 94, max: 100 },
  { category: "Transparency", score: 85, max: 100 },
];

const companyComparison = [
  { name: "Your Company", environmental: 87, social: 72, governance: 91, overall: 83 },
  { name: "Industry Avg", environmental: 65, social: 68, governance: 70, overall: 68 },
  { name: "Top Quartile", environmental: 92, social: 88, governance: 95, overall: 92 },
];

const impactMetrics = [
  { icon: Leaf, label: "CO₂ Reduced", value: "2,847 tonnes", change: "+23%" },
  { icon: Zap, label: "Renewable Energy", value: "68%", change: "+12%" },
  { icon: Users, label: "Community Impact", value: "1,240 people", change: "+8%" },
];

const aiInsights = [
  {
    type: "warning",
    title: "Scope 3 Emissions Gap",
    description: "AI detected 15% underreporting in supply chain emissions. Consider expanding data collection.",
    priority: "high",
  },
  {
    type: "success",
    title: "Strong Governance Performance",
    description: "Your governance score exceeds 90% of peers. This can improve loan terms by up to 0.5%.",
    priority: "medium",
  },
  {
    type: "info",
    title: "Verification Opportunity",
    description: "IoT sensors can automate 60% of your energy reporting. Estimated cost reduction: $12K/year.",
    priority: "medium",
  },
];

export function ESGScoring() {
  const overallScore = Math.round(esgMetrics.reduce((acc, m) => acc + m.score, 0) / esgMetrics.length);

  return (
    <div className="space-y-6">
      <div>
        <h2>ESG Credibility & Impact Scoring</h2>
        <p className="text-gray-600">AI-powered analysis of your environmental, social, and governance performance</p>
      </div>

      {/* Overall Score */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 mb-2">Overall ESG Score</p>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl">{overallScore}</span>
              <span className="text-xl text-gray-500">/ 100</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Badge className="bg-green-600 text-white">A- Rating</Badge>
              <span className="text-sm text-gray-600">Top 25% in your sector</span>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">vs Last Quarter</p>
                <p className="text-xl text-green-600">+7 points</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {impactMetrics.map((metric, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <metric.icon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
            <p className="text-2xl mb-1">{metric.value}</p>
            <Badge className="bg-green-100 text-green-800">{metric.change} YoY</Badge>
          </Card>
        ))}
      </div>

      {/* ESG Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="mb-6">ESG Category Breakdown</h3>
          <div className="space-y-5">
            {esgMetrics.map((metric, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span>{metric.category}</span>
                  <span className="font-medium">{metric.score}/100</span>
                </div>
                <Progress value={metric.score} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4">Performance Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={esgMetrics}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Your Score" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Peer Comparison */}
      <Card className="p-6">
        <h3 className="mb-4">Industry Benchmark Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={companyComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="environmental" fill="#10b981" name="Environmental" />
            <Bar dataKey="social" fill="#3b82f6" name="Social" />
            <Bar dataKey="governance" fill="#8b5cf6" name="Governance" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* AI Insights */}
      <Card className="p-6">
        <h3 className="mb-4">AI-Powered Insights & Recommendations</h3>
        <div className="space-y-4">
          {aiInsights.map((insight, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${
                insight.type === "warning"
                  ? "bg-orange-50 border-orange-500"
                  : insight.type === "success"
                  ? "bg-green-50 border-green-500"
                  : "bg-blue-50 border-blue-500"
              }`}
            >
              <div className="flex items-start gap-3">
                {insight.type === "warning" && <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />}
                {insight.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />}
                {insight.type === "info" && <Zap className="w-5 h-5 text-blue-600 mt-0.5" />}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4>{insight.title}</h4>
                    <Badge
                      className={
                        insight.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Data Sources */}
      <Card className="p-6 bg-gray-50">
        <h4 className="mb-3">Data Sources & Standards</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["GRI Standards", "TCFD Framework", "ISSB Standards", "IoT Sensors"].map((source) => (
            <div key={source} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>{source}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
