import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { AdminDashboard } from "./components/admin-dashboard";
import { TokenizationInterface } from "./components/tokenization-interface";
import { TradingPlatform } from "./components/trading-platform";
import { ESGScoring } from "./components/esg-scoring";
import { LoanCollateral } from "./components/loan-collateral";
import { VerificationLayer } from "./components/verification-layer";
import { AboutUs } from "./components/about-us";
import { LayoutDashboard, Coins, TrendingUp, Award, DollarSign, Shield, Menu, X, Info, Bell, Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Input } from "./components/ui/input";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/*Logo and Name*/}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl">Verdi</h1>
                <p className="text-xs text-gray-500">Blockchain-Powered Carbon Credit Ecosystem</p>
              </div>
            </div>

            {/*Search Bar*/}
            <div className="hidden md:block flex-1 max-w-md mx-8"> 
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                <Input 
                  placeholder="Search..." 
                  className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500"
                />
              </div>
            </div>

            {/*Profile information*/}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end mr-2">
                <span className="text-xs text-slate-500 font-medium">Portfolio Balance</span>
                <span className="text-sm font-bold font-mono text-emerald-600">$-------</span>
              </div>

              <div className="relative">
                <Button variant="ghost" size="icon" className="relative" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                  <Bell className="h-5 w-5 text-slate-500" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
                {/* The Popup Window */}
                  {isNotificationOpen && (
                    <div className="absolute top-10 right-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex flex-col items-center justify-center py-4 text-center">
                        <Bell className="h-8 w-8 text-slate-300 mb-2" />
                        <p className="text-sm font-medium text-slate-900">No new notifications</p>
                        <p className="text-xs text-slate-500">We'll let you know when something arrives.</p>
                      </div>
                    </div>
                  )}
              </div>

              <a href="profile.html" target="_blank">
                <Avatar className="h-8 w-8 border border-slate-200">
                    <AvatarImage src="https://github.com/shadc.png" />
                </Avatar>
              </a>
            </div>       

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

         
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          {/* Desktop Navigation */}
          <TabsList className="hidden md:grid w-full grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="tokenization" className="flex items-center gap-2">
              <Coins className="w-4 h-4" />
              <span>Tokenization</span>
            </TabsTrigger>
            <TabsTrigger value="trading" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Trading</span>
            </TabsTrigger>
            <TabsTrigger value="esg" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>ESG Scoring</span>
            </TabsTrigger>
            <TabsTrigger value="loans" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Financing</span>
            </TabsTrigger>
            <TabsTrigger value="verification" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Verification</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>About Us</span>
            </TabsTrigger>
          </TabsList>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border rounded-lg p-2">
              <TabsList className="grid grid-cols-2 gap-2 h-auto">
                <TabsTrigger value="dashboard" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger value="tokenization" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Coins className="w-4 h-4" />
                  <span>Tokenization</span>
                </TabsTrigger>
                <TabsTrigger value="trading" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <TrendingUp className="w-4 h-4" />
                  <span>Trading</span>
                </TabsTrigger>
                <TabsTrigger value="esg" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Award className="w-4 h-4" />
                  <span>ESG Scoring</span>
                </TabsTrigger>
                <TabsTrigger value="loans" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <DollarSign className="w-4 h-4" />
                  <span>Financing</span>
                </TabsTrigger>
                <TabsTrigger value="verification" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Shield className="w-4 h-4" />
                  <span>Verification</span>
                </TabsTrigger>
                <TabsTrigger value="about" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Info className="w-4 h-4" />
                  <span>About Us</span>
                </TabsTrigger>
              </TabsList>
            </div>
          )}

          {/* Tab Content */}
          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="tokenization">
            <TokenizationInterface />
          </TabsContent>

          <TabsContent value="trading">
            <TradingPlatform />
          </TabsContent>

          <TabsContent value="esg">
            <ESGScoring />
          </TabsContent>

          <TabsContent value="loans">
            <LoanCollateral />
          </TabsContent>

          <TabsContent value="verification">
            <VerificationLayer />
          </TabsContent>

          <TabsContent value="about">
            <AboutUs />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm mb-2">Technology Stack</h3>
              <p className="text-xs text-gray-600">
                Ethereum Layer 2 • Hyperledger Besu • Chainlink Oracles • IoT Integration
              </p>
            </div>
            <div>
              <h3 className="text-sm mb-2">Compliance</h3>
              <p className="text-xs text-gray-600">
                MAS Regulated • GRI Standards • TCFD • ISSB • PDPA Compliant
              </p>
            </div>
            <div>
              <h3 className="text-sm mb-2">Registry Partners</h3>
              <p className="text-xs text-gray-600">
                Verra • Gold Standard • National Registry (SG) • American Carbon Registry
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t text-center text-xs text-gray-500">
            <p>Verdi © 2026 • Blockchain-Powered ESG Ecosystem</p>
          </div>
        </div>
      </footer>
    </div>
  );
}