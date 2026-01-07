import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { DollarSign, Shield, TrendingDown, CheckCircle2, Calculator } from "lucide-react";
import { toast } from "sonner";

const availableCredits = [
  { id: "CC-001", project: "Solar Farm", amount: 500, value: 7740 },
  { id: "CC-003", project: "Reforestation", amount: 1000, value: 15480 },
];

const activeLoans = [
  {
    id: "LOAN-2026-001",
    bank: "DBS Bank",
    principal: 50000,
    rate: 4.2,
    maturity: "2027-01-15",
    collateral: 350,
    status: "active",
  },
  {
    id: "LOAN-2026-002",
    bank: "OCBC Green Finance",
    principal: 75000,
    rate: 3.8,
    maturity: "2026-12-20",
    collateral: 500,
    status: "active",
  },
];

export function LoanCollateral() {
  const [loanAmount, setLoanAmount] = useState("50000");
  const [esgScore, setEsgScore] = useState(86);
  const [pledgedCredits, setPledgedCredits] = useState(300);

  // Calculate interest rate based on ESG score
  const baseRate = 5.5;
  const esgDiscount = ((esgScore - 50) / 100) * 2; // Up to 2% discount
  const collateralDiscount = pledgedCredits > 0 ? 0.5 : 0;
  const finalRate = Math.max(baseRate - esgDiscount - collateralDiscount, 2.5);

  const handleApplyLoan = () => {
    toast.success("Loan application submitted", {
      description: `Your application for $${parseInt(loanAmount).toLocaleString()} at ${finalRate.toFixed(2)}% has been sent to partner banks`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>ESG Collateral & Green Financing</h2>
        <p className="text-gray-600">Leverage carbon credits to access better loan terms</p>
      </div>

      {/* Loan Calculator */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-blue-600" />
          <h3>AI-Powered Loan Pricing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Loan Amount (SGD)</label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="50000"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600">Your ESG Score</label>
                <span className="text-sm font-medium">{esgScore}/100</span>
              </div>
              <Slider
                value={[esgScore]}
                onValueChange={(v) => setEsgScore(v[0])}
                min={50}
                max={100}
                step={1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">
                Higher ESG scores qualify for lower interest rates
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600">Carbon Credits as Collateral</label>
                <span className="text-sm font-medium">{pledgedCredits} tonnes</span>
              </div>
              <Slider
                value={[pledgedCredits]}
                onValueChange={(v) => setPledgedCredits(v[0])}
                min={0}
                max={1000}
                step={50}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">
                Collateral value: ${(pledgedCredits * 15.48).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
            <h4 className="mb-4">Your Personalized Rate</h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm text-gray-600">Base Rate</span>
                <span>{baseRate.toFixed(2)}%</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-sm text-gray-600">ESG Discount</span>
                <span className="text-green-600">-{esgDiscount.toFixed(2)}%</span>
              </div>

              {pledgedCredits > 0 && (
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-sm text-gray-600">Collateral Discount</span>
                  <span className="text-green-600">-{collateralDiscount.toFixed(2)}%</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <span className="font-medium">Final Interest Rate</span>
                <span className="text-2xl text-green-600">{finalRate.toFixed(2)}%</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 rounded p-3">
                <TrendingDown className="w-4 h-4" />
                <span>
                  You save ${((parseInt(loanAmount) * (baseRate - finalRate)) / 100).toLocaleString()} annually
                </span>
              </div>
            </div>

            <Button onClick={handleApplyLoan} className="w-full mt-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Apply for Loan
            </Button>
          </div>
        </div>
      </Card>

      {/* Available Credits for Collateral */}
      <Card className="p-6">
        <h3 className="mb-4">Available Carbon Credits</h3>
        <div className="space-y-3">
          {availableCredits.map((credit) => (
            <div key={credit.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{credit.id}</span>
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                </div>
                <p className="text-sm text-gray-600">{credit.project}</p>
              </div>
              <div className="text-right">
                <p className="text-lg">{credit.amount} tonnes</p>
                <p className="text-sm text-gray-600">${credit.value.toLocaleString()} value</p>
              </div>
              <Button size="sm" variant="outline">
                <Shield className="w-3 h-3 mr-1" />
                Pledge
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Active Loans */}
      <Card className="p-6">
        <h3 className="mb-4">Your Active Loans</h3>
        <div className="space-y-4">
          {activeLoans.map((loan) => (
            <div key={loan.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{loan.id}</span>
                    <Badge className="bg-blue-100 text-blue-800">{loan.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{loan.bank}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">${loan.principal.toLocaleString()}</p>
                  <p className="text-sm text-green-600">{loan.rate}% APR</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Maturity Date</p>
                  <p>{loan.maturity}</p>
                </div>
                <div>
                  <p className="text-gray-500">Collateral Locked</p>
                  <p>{loan.collateral} carbon credits</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Smart contract: Credits auto-release upon full repayment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Bank Integration Info */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="text-purple-900 mb-2">Bank API Integration</h4>
            <p className="text-sm text-purple-800 mb-3">
              Connected to 3 partner banks for instant loan approval and dynamic pricing based on your real-time ESG performance.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-white text-purple-900">DBS Bank</Badge>
              <Badge className="bg-white text-purple-900">OCBC</Badge>
              <Badge className="bg-white text-purple-900">UOB Green Finance</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
