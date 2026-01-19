import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Coins, CheckCircle2, Clock, Shield, FileText, TrendingUp } from "lucide-react";
import { toast } from "sonner";

// Registry pricing based on current market rates
const registryPricing: Record<string, number> = {
  verra: 14.5,
  gold: 18.2,
  national: 16.0,
  acr: 15.8,
};

const mockCredits = [
  {
    id: "CC-2026-001",
    project: "Solar Farm Expansion",
    registry: "Verra",
    amount: 500,
    vintage: "2025",
    status: "active",
    blockchain: "0x7f3a...8c21",
  },
  {
    id: "CC-2026-002",
    project: "Wind Energy Project",
    registry: "Gold Standard",
    amount: 750,
    vintage: "2025",
    status: "pledged",
    blockchain: "0x9b2c...4d56",
  },
  {
    id: "CC-2026-003",
    project: "Reforestation Initiative",
    registry: "Verra",
    amount: 1000,
    vintage: "2024",
    status: "active",
    blockchain: "0x3e8f...7a92",
  },
];

export function TokenizationInterface() {
  const [formData, setFormData] = useState({
    projectName: "",
    registry: "",
    amount: "",
    vintage: "",
    verificationDoc: "",
  });

  const handleMint = () => {
    if (!formData.projectName || !formData.registry || !formData.amount) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Tokenization request submitted", {
      description: "Your carbon credits are being verified and will be minted shortly",
    });
    
    setFormData({
      projectName: "",
      registry: "",
      amount: "",
      vintage: "",
      verificationDoc: "",
    });
  };

  const handleRetire = (creditId: string) => {
    toast.success(`Credit ${creditId} retired`, {
      description: "This credit has been permanently burned and removed from circulation",
    });
  };

  // Calculate estimated value based on amount and registry
  const calculateEstimatedValue = () => {
    const amount = parseFloat(formData.amount);
    if (!amount || !formData.registry || isNaN(amount)) return null;
    
    const pricePerTonne = registryPricing[formData.registry];
    const totalValue = amount * pricePerTonne;
    
    return {
      pricePerTonne,
      totalValue,
      amount,
    };
  };

  const estimatedValue = calculateEstimatedValue();

  return (
    <div className="space-y-6">
      <div>
        <h2>Carbon Credit Tokenization</h2>
        <p className="text-gray-600">Mint and manage blockchain-backed carbon credits</p>
      </div>

      {/* Minting Form */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Coins className="w-5 h-5 text-green-600" />
          <h3>Create New Token</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="project">Project Name</Label>
            <Input
              id="project"
              placeholder="e.g., Solar Farm Expansion Phase 2"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="registry">Carbon Registry</Label>
              <Select value={formData.registry} onValueChange={(value) => setFormData({ ...formData, registry: value })}>
                <SelectTrigger id="registry">
                  <SelectValue placeholder="Select registry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verra">Verra (VCS)</SelectItem>
                  <SelectItem value="gold">Gold Standard</SelectItem>
                  <SelectItem value="national">National Registry (SG)</SelectItem>
                  <SelectItem value="acr">American Carbon Registry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="vintage">Vintage Year</Label>
              <Select value={formData.vintage} onValueChange={(value) => setFormData({ ...formData, vintage: value })}>
                <SelectTrigger id="vintage">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="amount">Number of Credits (tonnes CO₂e)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="e.g., 1000"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="verification">Verification Document</Label>
            <Input id="verification" type="file" />
            <p className="text-xs text-gray-500 mt-1">Upload auditor certification or registry confirmation</p>
          </div>

          {/* Estimated Value Calculator */}
          {estimatedValue && (
            <Card className="p-4 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h4 className="text-green-900">Estimated Token Value</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Market Price</p>
                  <p className="text-xl text-green-600">${estimatedValue.pricePerTonne.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">per tonne CO₂e</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total Value</p>
                  <p className="text-xl text-green-600">${estimatedValue.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className="text-xs text-gray-500">{estimatedValue.amount.toLocaleString()} tonnes</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-green-200">
                <p className="text-xs text-green-700">
                  💡 Based on current trading volume data. Complete tokenization to unlock this value!
                </p>
              </div>
            </Card>
          )}

          <div className="flex gap-3 pt-4">
            <Button onClick={handleMint} className="flex-1">
              <Coins className="w-4 h-4 mr-2" />
              Submit for Tokenization
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </Card>

      {/* Existing Tokens */}
      <Card className="p-6">
        <h3 className="mb-4">Your Tokenized Credits</h3>
        <div className="space-y-4">
          {mockCredits.map((credit) => (
            <div key={credit.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span>{credit.id}</span>
                    <Badge
                      className={
                        credit.status === "active"
                          ? "bg-green-100 text-green-800"
                          : credit.status === "pledged"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {credit.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{credit.project}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">{credit.amount}</p>
                  <p className="text-xs text-gray-500">tonnes CO₂e</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="text-gray-500">Registry</p>
                  <p>{credit.registry}</p>
                </div>
                <div>
                  <p className="text-gray-500">Vintage</p>
                  <p>{credit.vintage}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Blockchain Address</p>
                  <p className="font-mono text-xs">{credit.blockchain}</p>
                </div>
              </div>

              <div className="flex gap-2">
                {credit.status === "active" && (
                  <>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Shield className="w-3 h-3 mr-1" />
                      Pledge as Collateral
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleRetire(credit.id)}
                    >
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Retire
                    </Button>
                  </>
                )}
                {credit.status === "pledged" && (
                  <Button size="sm" variant="outline" className="w-full" disabled>
                    <Clock className="w-3 h-3 mr-1" />
                    Locked as Collateral
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Smart Contract Info */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="text-blue-900 mb-1">Anti-Double Counting Protection</h4>
            <p className="text-sm text-blue-800">
              All tokenized credits are tracked on-chain with immutable status. Once retired or used as an offset, credits
              are permanently burned to prevent greenwashing.
            </p>
            <p className="text-xs text-blue-700 mt-2 font-mono">
              Contract: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}