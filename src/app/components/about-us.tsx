import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, Target, Zap, CheckCircle2, AlertTriangle } from "lucide-react";

const targetIndustries = [
  {
    category: "Financial Services & Capital Markets",
    icon: Building2,
    color: "blue",
    entities: [
      "Banks and financial institutions",
      "Green loan and sustainability-linked loan providers",
      "Exchanges involved in ESG and sustainable finance products",
    ],
  },
  {
    category: "Carbon & Environmental Markets",
    icon: Target,
    color: "green",
    entities: [
      "Carbon project developers",
      "Carbon credit brokers and traders",
      "Verification bodies and registry providers",
      "ESG and sustainability consultants",
    ],
  },
  {
    category: "SMEs in High-Emission or Transition Sectors",
    icon: Users,
    color: "orange",
    entities: [
      "Manufacturing",
      "Logistics and transportation",
      "Construction",
      "SMEs seeking to decarbonise but constrained by high upfront costs",
    ],
  },
  {
    category: "Renewable Energy & Green Infrastructure Developers",
    icon: Zap,
    color: "purple",
    entities: [
      "Solar energy developers",
      "Energy efficiency and retrofitting solution providers",
      "Sustainability projects that generate carbon credits",
    ],
  },
];

const painPoints = [
  "Carbon credits are difficult for SMEs to access and are highly illiquid.",
  "Smaller companies are often excluded from major registries and trading desks.",
  "ESG performance does not translate directly into cheaper or better financing.",
  "Financial institutions face challenges verifying ESG claims and preventing greenwashing.",
  "Lack of transparency and trust in carbon credit ownership and usage.",
];

const solutionFeatures = [
  {
    title: "Blockchain-Based Carbon Credit Tokenisation",
    description:
      "Verified carbon credits are converted into on-chain digital tokens, ensuring immutability, transparency, and fractional ownership.",
  },
  {
    title: "Trade for Liquidity",
    description:
      "Tokens can be bought and sold on our exchange platform, providing immediate liquidity and price discovery for carbon credits.",
  },
  {
    title: "Hold as ESG Assets",
    description:
      "Companies can hold tokenized carbon credits as part of their ESG portfolio, demonstrating commitment to sustainability.",
  },
  {
    title: "Use as Collateral",
    description:
      "Leverage carbon credit tokens as collateral for green or sustainability-linked loans, unlocking better financing terms.",
  },
];

export function AboutUs() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="mb-4">About Verdi</h2>
        <p className="text-lg text-gray-700 mb-4">
          Verdi is a blockchain-based carbon credit tokenisation exchange that bridges the gap between environmental
          impact and financial value.
        </p>
        <p className="text-gray-600">
          We empower SMEs and financial institutions to participate in carbon markets with transparency, liquidity, and
          trust—leveraging blockchain technology to solve critical industry pain points.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="mb-3">Our Mission</h3>
          <p className="text-lg text-gray-700">
            To democratize access to carbon markets and enable ESG performance to translate directly into financial
            benefits, creating a sustainable future where every tonne of CO₂ reduction has verifiable value.
          </p>
        </div>
      </Card>

      {/* Target Industries */}
      <div>
        <h3 className="mb-6 text-center">Who We Serve</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetIndustries.map((industry, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    industry.color === "blue"
                      ? "bg-blue-100"
                      : industry.color === "green"
                      ? "bg-green-100"
                      : industry.color === "orange"
                      ? "bg-orange-100"
                      : "bg-purple-100"
                  }`}
                >
                  <industry.icon
                    className={`w-6 h-6 ${
                      industry.color === "blue"
                        ? "text-blue-600"
                        : industry.color === "green"
                        ? "text-green-600"
                        : industry.color === "orange"
                        ? "text-orange-600"
                        : "text-purple-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">{industry.category}</h4>
                  <ul className="space-y-2">
                    {industry.entities.map((entity, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{entity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pain Points */}
      <Card className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <h3>Key Industry Pain Points We Address</h3>
        </div>
        <div className="space-y-4">
          {painPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
              <span className="text-2xl text-orange-600 font-bold leading-none mt-1">{idx + 1}</span>
              <p className="text-gray-800 flex-1">{point}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Solution */}
      <div>
        <div className="text-center mb-6">
          <h3 className="mb-2">Our Fintech Solution</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive blockchain-based platform that tokenizes carbon credits and integrates them into the
            financial ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionFeatures.map((feature, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h4>{feature.title}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <Card className="p-8 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-6 text-white text-center">Why Choose Verdi?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h4 className="text-white mb-2">Trust & Transparency</h4>
              <p className="text-blue-100 text-sm">
                Blockchain ensures immutable records and prevents double-counting
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h4 className="text-white mb-2">Liquidity & Access</h4>
              <p className="text-blue-100 text-sm">
                SMEs can trade fractional credits and access markets previously closed to them
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <h4 className="text-white mb-2">Financial Integration</h4>
              <p className="text-blue-100 text-sm">
                ESG performance translates into better loan terms and lower interest rates
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Technology Stack */}
      <Card className="p-8">
        <h3 className="mb-6 text-center">Our Technology Foundation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Ethereum Layer 2", desc: "Scalable blockchain" },
            { name: "Hyperledger Besu", desc: "Permissioned network" },
            { name: "Chainlink Oracles", desc: "Real-world data" },
            { name: "IoT Integration", desc: "Automated verification" },
            { name: "AI Scoring", desc: "ESG credibility" },
            { name: "Smart Contracts", desc: "Automated execution" },
            { name: "MAS Compliant", desc: "Regulatory ready" },
            { name: "Bank APIs", desc: "Seamless integration" },
          ].map((tech, idx) => (
            <div key={idx} className="p-4 border rounded-lg text-center">
              <p className="font-medium mb-1">{tech.name}</p>
              <p className="text-xs text-gray-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 text-center bg-gray-50">
        <h3 className="mb-3">Ready to Join the Carbon Revolution?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you're an SME looking to monetize your carbon reduction efforts, or a financial institution seeking
          verified ESG investment opportunities, Verdi provides the infrastructure you need.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Badge className="bg-green-600 text-white px-4 py-2 text-sm">For SMEs</Badge>
          <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">For Banks</Badge>
          <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">For Developers</Badge>
          <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">For Auditors</Badge>
        </div>
      </Card>
    </div>
  );
}
