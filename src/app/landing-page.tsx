import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  BarChart3,
  ShieldCheck,
  Shield, // Imported Shield icon
  Zap,
  Menu,
  X,
  Leaf,
  ArrowUpRight
} from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Handler
  const handleLogin = () => {
    window.location.href = "/user-dashboard";
  };

  const handleGetStarted = () => {
    window.location.href = "/trading-platform";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Shield Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <a href="index.html">
                    <Shield className="w-6 h-6 text-white" />
                </a>
              </div>
                
              <span className="font-bold text-2xl tracking-tight text-gray-900 cursor-pointer" onClick={() => window.location.href = "/"}>Verdi</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-blue-600 transition-colors">Platform</a>
              <a href="#market" className="hover:text-blue-600 transition-colors">Marketplace</a>
              <a href="App.html" className="hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#company" className="hover:text-blue-600 transition-colors">Company</a>
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button onClick={handleLogin} className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                <a href="Profile.html" target="">Log in</a>
              </button>
              <button onClick={handleGetStarted} className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg" >
                <a href="App.html" target="">
                Start Trading</a>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
            <a href="#features" className="block text-gray-600 font-medium">Platform</a>
            <a href="#market" className="block text-gray-600 font-medium">Marketplace</a>
            <button onClick={handleLogin} className="block w-full text-left text-gray-600 font-medium">Log in</button>
            {/* Changed bg-green-600 to bg-blue-600 */}
            <button onClick={handleGetStarted} className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
              <a href="App.html" target="">Start Trading</a>
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs - changed green to blue */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge - changed green theme to blue theme */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
            Verdi V2.0 is now live with real-time settlement
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            The Transparent Path to <br />
            {/* Headline gradient - changed to blue */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Net Zero</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
            Buy, sell, and retire tokenized carbon credits with institutional-grade compliance.
            Powered by blockchain for 100% auditability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Main CTA - changed green to blue */}
            <button
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2"
            ><a href="App.html" target="">
              Start Trading </a><ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
              View Ecosystem
            </button>
          </div>

          {/* Hero Dashboard Preview (Visual) */}
          <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="bg-gray-900 rounded-xl p-2 shadow-2xl">
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                {/* Abstract representation of the dashboard */}
                <div className="grid grid-cols-12 gap-4 p-4 opacity-100">
                  <div className="col-span-12 lg:col-span-8 bg-white h-64 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden">
                    {/* Simulated Chart Line - text-blue-50 */}
                    <svg className="w-full h-full text-blue-50 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L0 50 L20 60 L40 40 L60 55 L80 30 L100 20 L100 100 Z" fill="currentColor" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* text-blue-600 */}
                      <span className="text-blue-600 font-bold text-2xl tracking-widest">LIVE TRADING VIEW</span>
                      <span className="text-gray-400 text-sm mt-2">Connecting to Carbon Ledger...</span>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:col-span-4 space-y-4">
                    <div className="bg-white h-20 rounded-lg border border-gray-200 shadow-sm p-4">
                      <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
                      {/* bg-blue-200 (was green-100) */}
                      <div className="h-6 w-32 bg-blue-200 rounded"></div>
                    </div>
                    <div className="bg-white h-20 rounded-lg border border-gray-200 shadow-sm p-4">
                      <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
                      {/* bg-blue-100 */}
                      <div className="h-6 w-32 bg-blue-100 rounded"></div>
                    </div>
                    <div className="bg-white h-16 rounded-lg border border-gray-200 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Element - changed green theme to blue theme */}
            <div className="absolute -right-4 -bottom-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Just Retired</p>
                  <p className="font-bold text-gray-900">450 Tonnes CO2e</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted by industry leaders and registries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos (Placeholders text for code) */}
            <span className="text-xl font-bold text-gray-800">Verra</span>
            <span className="text-xl font-bold text-gray-800">Gold Standard</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-1"><span className="text-blue-600">DBS</span> Bank</span>
            <span className="text-xl font-bold text-gray-800">SolarTech</span>
            <span className="text-xl font-bold text-gray-800">EcoStart</span>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Operating System for Carbon Markets</h2>
            <p className="text-lg text-gray-500">Verdi connects project developers, registries, and corporate buyers in a unified, transparent ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Globe}
              title="Global Access"
              desc="Access high-quality credits from verified projects worldwide, from Amazonian forestry to Direct Air Capture."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Smart Verification"
              desc="Automated validation against major registries ensures every credit you buy is real, unspent, and unique."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Settlement"
              desc="Say goodbye to T+2. Blockchain technology allows for near-instant trading and retirement of assets."
            />
            <FeatureCard
              icon={BarChart3}
              title="ESG Impact Scoring"
              desc="Go beyond carbon. Our proprietary AI scores projects on biodiversity, community impact, and permanence."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Proof of Retirement"
              desc="Generate immutable certificates immediately upon retirement for your sustainability reporting."
            />
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Ready to scale?</h3>
              <p className="text-gray-300 mb-6">Get API access for enterprise integration.</p>
              {/* hover:text-blue-400 */}
              <button className="text-white underline hover:text-blue-400 font-medium text-left">Contact Sales &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVE MARKET PREVIEW --- */}
      <section id="market" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Live Market Data</h2>
              <p className="text-gray-500">Real-time pricing for top carbon assets.</p>
            </div>
            {/* text-blue-600 hover:text-blue-700 */}
            <button onClick={handleGetStarted} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
              View All Assets <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Switched colors to blue variations */}
            <MarketCard
              symbol="VCT"
              name="Verra Carbon Token"
              price="$12.50"
              change="+2.4%"
              color="blue"
            />
            <MarketCard
              symbol="GSS"
              name="Gold Standard Solar"
              price="$18.20"
              change="-1.1%"
              color="cyan"
            />
            <MarketCard
              symbol="BCR"
              name="Blue Carbon Rsv"
              price="$32.00"
              change="+5.6%"
              color="indigo"
            />
            <MarketCard
              symbol="BIO"
              name="Biochar Removal"
              price="$145.00"
              change="+0.5%"
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* bg-blue-500 blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Accelerate your journey to Net Zero</h2>
          <p className="text-xl text-gray-400 mb-10">Join over 800+ enterprises and SMEs using Verdi to manage their carbon portfolio transparently.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* bg-blue-500 hover:bg-blue-400 shadow-blue-900/20 */}
            <button
              onClick={handleGetStarted}
              className="bg-blue-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all shadow-lg shadow-blue-900/20"
            ><a href="App.html" target="">
              Start Trading Now </a>
            </button>
            <button className="bg-transparent border border-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                {/* bg-blue-600 */}
                <div className="bg-blue-600 rounded-lg p-1">
                  <div className="text-white font-bold text-md px-1">V</div>
                </div>
                <span className="font-bold text-xl text-gray-900">Verdi</span>
              </div>
              <p className="text-sm text-gray-500">Blockchain-powered carbon credit ecosystem for the modern world.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
              {/* hover:text-blue-600 */}
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Trading</a></li>
                <li><a href="#" className="hover:text-blue-600">Tokenization</a></li>
                <li><a href="#" className="hover:text-blue-600">Retirement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Verdi Ecosystem. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {/* text-blue-600 */}
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

function MarketCard({ symbol, name, price, change, color }: { symbol: string, name: string, price: string, change: string, color: string }) {
  const isPositive = change.includes("+");
  // Added indigo and cyan, removed reliance on green default
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
    cyan: "bg-cyan-100 text-cyan-700",
    purple: "bg-purple-100 text-purple-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700", // Kept for fallback
  }[color] || "bg-blue-100 text-blue-700"; // Default to blue

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${colorClasses}`}>
          {symbol.substring(0, 1)}
        </div>
        {/* Changed positive color to blue-50/blue-700 */}
        <div className={`px-2 py-1 rounded-md text-xs font-bold ${isPositive ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
          {change}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-gray-900 text-lg">{price}</h4>
        <p className="text-sm font-medium text-gray-700 truncate">{name}</p>
        <p className="text-xs text-gray-400">{symbol}</p>
      </div>
    </div>
  )
}