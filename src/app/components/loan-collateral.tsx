import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { 
  DollarSign, 
  Shield, 
  TrendingDown, 
  CheckCircle2, 
  Calculator,
  AlertTriangle 
} from "lucide-react";
import { toast } from "sonner";

// 1. Define the shape of a Credit object
type Credit = {
  id: string;
  project: string;
  amount: number;
  value: number;
};

const availableCredits: Credit[] = [
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
  
  // 2. Update useState to allow Credit objects OR null
  const [selectedCredit, setSelectedCredit] = useState<Credit | null>(null);

  const baseRate = 5.5;
  const esgDiscount = ((esgScore - 50) / 100) * 2; 
  const collateralDiscount = pledgedCredits > 0 ? 0.5 : 0;
  const finalRate = Math.max(baseRate - esgDiscount - collateralDiscount, 2.5);

  const handleApplyLoan = () => {
    toast.success("Loan application submitted", {
      description: `Your application for $${parseInt(loanAmount).toLocaleString()} at ${finalRate.toFixed(2)}% has been sent to partner banks`,
    });
  };

  const handleConfirmRetire = () => {
    // 3. Optional Chaining helps here, but we check for null first
    if (!selectedCredit) return;

    toast.success("Credits Retired Successfully", {
      description: `${selectedCredit.amount} tonnes from ${selectedCredit.project} have been permanently retired. Loan rate adjusted.`,
    });
    
    setSelectedCredit(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="dark:text-white">ESG Collateral & Green Financing</h2>
        <p className="text-gray-600 dark:text-slate-400">Leverage carbon credits to access better loan terms</p>
      </div>

      {/* Loan Calculator */}
      <Card className="p-6 dark:bg-slate-900 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-blue-600" />
          <h3 className="dark:text-white">AI-Powered Loan Pricing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 dark:text-slate-400 mb-2 block">Loan Amount (SGD)</label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="50000"
                className="dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-slate-400">Your ESG Score</label>
                <span className="text-sm font-medium dark:text-white">{esgScore}/100</span>
              </div>
              <Slider
                value={[esgScore]}
                onValueChange={(v) => setEsgScore(v[0])}
                min={50}
                max={100}
                step={1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500 dark:text-slate-500">
                Higher ESG scores qualify for lower interest rates
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-slate-400">Carbon Credits to Retire</label>
                <span className="text-sm font-medium dark:text-white">{pledgedCredits} tonnes</span>
              </div>
              <Slider
                value={[pledgedCredits]}
                onValueChange={(v) => setPledgedCredits(v[0])}
                min={0}
                max={1000}
                step={50}
                className="mb-2"
              />
              <p className="text-xs text-gray-500 dark:text-slate-500">
                Offset value: ${(pledgedCredits * 15.48).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg p-6">
            <h4 className="mb-4 dark:text-white">Your Personalized Rate</h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b dark:border-slate-700">
                <span className="text-sm text-gray-600 dark:text-slate-300">Base Rate</span>
                <span className="dark:text-white">{baseRate.toFixed(2)}%</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b dark:border-slate-700">
                <span className="text-sm text-gray-600 dark:text-slate-300">ESG Discount</span>
                <span className="text-green-600 dark:text-green-400">-{esgDiscount.toFixed(2)}%</span>
              </div>

              {pledgedCredits > 0 && (
                <div className="flex justify-between items-center pb-3 border-b dark:border-slate-700">
                  <span className="text-sm text-gray-600 dark:text-slate-300">Green Offset Discount</span>
                  <span className="text-green-600 dark:text-green-400">-{collateralDiscount.toFixed(2)}%</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <span className="font-medium dark:text-white">Final Interest Rate</span>
                <span className="text-2xl text-green-600 dark:text-green-400">{finalRate.toFixed(2)}%</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/40 rounded p-3">
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

      {/* Available Credits */}
      <Card className="p-6 dark:bg-slate-900 dark:border-slate-800">
        <h3 className="mb-4 dark:text-white">Available Carbon Credits</h3>
        
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-md p-3 mb-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
          <p className="text-sm text-amber-800 dark:text-amber-400">
            <strong>Note:</strong> Credits used for financing are permanently retired to offset the loan's carbon footprint and cannot be traded or returned.
          </p>
        </div>

        <div className="space-y-3">
          {availableCredits.map((credit) => (
            <div key={credit.id} className="flex items-center justify-between p-4 border dark:border-slate-700 rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium dark:text-white">{credit.id}</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">Available</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-400">{credit.project}</p>
              </div>
              <div className="text-right">
                <p className="text-lg dark:text-white">{credit.amount} tonnes</p>
                <p className="text-sm text-gray-600 dark:text-slate-400">${credit.value.toLocaleString()} value</p>
              </div>
              
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setSelectedCredit(credit)}
                className="dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:bg-slate-700"
              >
                <Shield className="w-3 h-3 mr-1" />
                Retire & Apply
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Active Loans */}
      <Card className="p-6 dark:bg-slate-900 dark:border-slate-800">
        <h3 className="mb-4 dark:text-white">Your Active Loans</h3>
        <div className="space-y-4">
          {activeLoans.map((loan) => (
            <div key={loan.id} className="border dark:border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium dark:text-white">{loan.id}</span>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">{loan.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">{loan.bank}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg dark:text-white">${loan.principal.toLocaleString()}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{loan.rate}% APR</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-slate-500">Maturity Date</p>
                  <p className="dark:text-slate-300">{loan.maturity}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-slate-500">Credits Retired</p>
                  <p className="dark:text-slate-300">{loan.collateral} carbon credits</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>Smart contract: Credits permanently retired to secure green rate.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Bank Integration Info */}
      <Card className="p-6 bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-900">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
          <div>
            <h4 className="text-purple-900 dark:text-purple-300 mb-2">Bank API Integration</h4>
            <p className="text-sm text-purple-800 dark:text-purple-400 mb-3">
              Connected to 3 partner banks for instant loan approval and dynamic pricing based on your real-time ESG performance.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-white text-purple-900 dark:bg-purple-900 dark:text-purple-100">DBS Bank</Badge>
              <Badge className="bg-white text-purple-900 dark:bg-purple-900 dark:text-purple-100">OCBC</Badge>
              <Badge className="bg-white text-purple-900 dark:bg-purple-900 dark:text-purple-100">UOB Green Finance</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* CONFIRMATION POPUP DIALOG */}
      <AlertDialog open={!!selectedCredit} onOpenChange={() => setSelectedCredit(null)}>
        <AlertDialogContent className="dark:bg-slate-900 dark:border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="dark:text-white">Retire Credits Permanently?</AlertDialogTitle>
            <AlertDialogDescription className="dark:text-slate-400">
              You are about to retire <strong>{selectedCredit?.amount} tonnes</strong> from the 
              project <strong>{selectedCredit?.project}</strong>. 
              <br /><br />
              This action <strong>cannot be undone</strong>. The credits will be permanently removed 
              from your balance to offset your loan's carbon footprint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">Cancel</AlertDialogCancel>
            <AlertDialogAction 
                onClick={handleConfirmRetire}
                className="bg-red-600 hover:bg-red-700 focus:ring-red-600 dark:text-white"
            >
              Confirm & Retire
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}