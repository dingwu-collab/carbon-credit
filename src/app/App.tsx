import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { UserDashboard } from "./components/user-dashboard";
import { AdminDashboard } from "./components/admin-dashboard";
import { TradingPlatform } from "./components/trading-platform";
import { ESGScoring } from "./components/esg-scoring";
import { LoanCollateral } from "./components/loan-collateral";
import { TokenShowcase } from "./components/TokenShowcase";
import { AboutUs } from "./components/about-us";
import { LayoutDashboard, TrendingUp, Award, DollarSign, Shield, Menu, X, Info, Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Input } from "./components/ui/input";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  // 1. Add state to control the active tab
  const [activeTab, setActiveTab] = useState("UserDashboard");

  // 2. Add state for Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Wrap entire app in a div that conditionally applies the 'dark' class
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <Toaster />
        
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <a href="https://carbon-credit-six.vercel.app/">
                      <Shield className="w-6 h-6 text-white" />
                  </a>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Verdi</h1>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Blockchain-Powered Carbon Credit Ecosystem</p>
                </div>
              </div>

              <div className="hidden md:block flex-1 max-w-md mx-8"> 
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-9 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 dark:text-slate-100 dark:placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Portfolio Balance</span>
                  <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">$42,950.00</span>
                </div>

                {/* Dark Mode Toggle Button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleTheme}
                  className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <div className="relative">
                  <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                    <Bell className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
                  </Button>
                    {isNotificationOpen && (
                      <div className="absolute top-10 right-0 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex flex-col items-center justify-center py-4 text-center">
                          <Bell className="h-8 w-8 text-slate-300 dark:text-slate-600 mb-2" />
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-200">No new notifications</p>
                        </div>
                      </div>
                    )}
                </div>
                <a href="Profile.html" target="">
                  <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-700">
                      <AvatarImage src="https://github.com/shadc.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </a>
              </div>       

              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5 dark:text-slate-200" /> : <Menu className="w-5 h-5 dark:text-slate-200" />}
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 2. Bind the state to the Tabs component */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            
            <TabsList className="hidden md:grid w-full grid-cols-6 dark:bg-slate-900 dark:text-slate-400">
              <TabsTrigger value="UserDashboard" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <LayoutDashboard className="w-4 h-4" /> <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <LayoutDashboard className="w-4 h-4" /> <span>System</span>
              </TabsTrigger>
              <TabsTrigger value="trading" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <TrendingUp className="w-4 h-4" /> <span>Trading</span>
              </TabsTrigger>
              <TabsTrigger value="esg" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <Award className="w-4 h-4" /> <span>ESG Scoring</span>
              </TabsTrigger>
              <TabsTrigger value="loans" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <DollarSign className="w-4 h-4" /> <span>Financing</span>
              </TabsTrigger>
              <TabsTrigger value="TokenShowcase" className="flex items-center gap-2 data-[state=active]:dark:bg-slate-800 data-[state=active]:dark:text-white">
                <Info className="w-4 h-4" /> <span>Smart Contract</span>
              </TabsTrigger>
            </TabsList>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-lg p-2">
                 {/* Mobile menu items... */}
              </div>
            )}

            {/* Tab Content */}
            <TabsContent value="UserDashboard">
              <UserDashboard  onNavigate={setActiveTab} />
            </TabsContent>

            <TabsContent value="dashboard"> <AdminDashboard /> </TabsContent>
            <TabsContent value="trading"> <TradingPlatform /> </TabsContent>
            <TabsContent value="esg"> <ESGScoring /> </TabsContent>
            <TabsContent value="loans"> <LoanCollateral /> </TabsContent>
            <TabsContent value="TokenShowcase"> <TokenShowcase /></TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
         <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-12 transition-colors duration-300">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                 <h3 className="text-sm mb-2 text-slate-900 dark:text-slate-100">Technology Stack</h3>
                 <p className="text-xs text-gray-600 dark:text-slate-400">
                   KAIA Blockchain • Hyperledger Besu • Chainlink Oracles • IoT Integration
                 </p>
               </div>
               <div>
                 <h3 className="text-sm mb-2 text-slate-900 dark:text-slate-100">Compliance</h3>
                 <p className="text-xs text-gray-600 dark:text-slate-400">
                   MAS Regulated • GRI Standards • TCFD • ISSB • PDPA Compliant
                 </p>
               </div>
               <div>
                 <h3 className="text-sm mb-2 text-slate-900 dark:text-slate-100">Registry Partners</h3>
                 <p className="text-xs text-gray-600 dark:text-slate-400">
                   Verra • Gold Standard • National Registry (SG) • American Carbon Registry
                 </p>
               </div>
             </div>
             <div className="mt-6 pt-6 border-t dark:border-slate-800 text-center text-xs text-gray-500 dark:text-slate-500">
               <p>Verdi © 2026 • Blockchain-Powered ESG Ecosystem</p>
             </div>
           </div>
         </footer>
      </div>
    </div>
  );
}
