// import React, { useState, useEffect, useRef } from "react";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Zap,
//   Menu,
//   X,
//   Cpu,
//   Database,
//   Coins,
//   Activity,
//   Lock,
//   Globe,
//   TrendingUp,
//   Layers, 
//   Shield,
//   FileCheck
// } from "lucide-react";

// export function App() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // --- ORIGINAL NAVIGATION HANDLERS ---
//   const handleLogin = () => {
//     window.location.href = "/user-dashboard";
//   };

//   const handleGetStarted = () => {
//     window.location.href = "/trading-platform";
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-black">
      
//       {/* --- AMBIENT BACKGROUND GLOWS --- */}
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[128px] animate-pulse"></div>
//         <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[128px]"></div>
//       </div>

//       {/* --- NAVIGATION --- */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
//                  <a href="App.html">
//                      <Shield className="w-6 h-6 text-white" />
//                  </a>
//               </div>
              
//               <span className="font-bold text-2xl tracking-tight text-white cursor-pointer" onClick={() => window.location.href = "/"}>
//                 Verdi
//               </span>
//             </div>

//             {/* Desktop Links */}
//             <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
//               <a href="#solution" className="hover:text-emerald-400 transition-colors">Solution</a>
//               <a href="#poc" className="hover:text-emerald-400 transition-colors">How it Works</a>
//               <a href="#market" className="hover:text-emerald-400 transition-colors">Exchange</a>
//               <a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a>
//             </div>

//             {/* CTAs */}
//             <div className="hidden md:flex items-center gap-4">
//               <button onClick={handleLogin} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
//                 <a href="Profile.html" target="">
//                   Log in
//                 </a>
//               </button>
              
//               <button 
//                 onClick={handleGetStarted} 
//                 className="group relative px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]"
//               >
//                 <a href="App.html" target="">
//                   Start Trading
//                 </a>
//               </button>
//             </div>

//             {/* Mobile Toggle */}
//             <div className="md:hidden">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//                 {isMobileMenuOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-slate-900 border-t border-white/10 p-4 space-y-4">
//             <a href="#solution" className="block text-gray-300 font-medium">Solution</a>
//             <a href="#poc" className="block text-gray-300 font-medium">How it Works</a>
//             <a href="#market" className="block text-gray-300 font-medium">Exchange</a>
//             <button onClick={handleLogin} className="block w-full text-left text-gray-300 font-medium">Log in</button>
//             <button onClick={handleGetStarted} className="block w-full bg-emerald-500 text-slate-900 py-3 rounded-lg font-bold">
//               Start Trading
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
//           {/* Animated Badge */}
//           <FadeIn delay={0}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm mx-auto">
//               <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
//               Verdi V2.0: Now supporting Green Loan Collateral
//             </div>
//           </FadeIn>

//           <FadeIn delay={100}>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
//               Tokenise Carbon.<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white">
//                 Finance the Future.
//               </span>
//             </h1>
//           </FadeIn>

//           <FadeIn delay={200}>
//             <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 leading-relaxed">
//               The first blockchain exchange enabling SMEs and Financial Institutions to trade verified carbon credits, earn tokens via ESG mining, and access green liquidity.
//             </p>
//           </FadeIn>

//           <FadeIn delay={300}>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//               <button
//                 onClick={handleGetStarted}
//                 className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
//               >
//                 <a href="App.html" target="" className="flex items-center gap-2">
//                   Start Trading <ArrowRight className="w-5 h-5" />
//                 </a>
//               </button>
//             </div>
//           </FadeIn>

//           {/* Hero Visual / Stats */}
//           <div className="mt-24 relative max-w-5xl mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl -z-10"></div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                <FadeIn delay={400}><StatCard label="Total Value Locked" value="$14.2M" sub="+12% this week" /></FadeIn>
//                <FadeIn delay={500}><StatCard label="Carbon Credits Tokenized" value="1,240 tCO2e" sub="Verified by Verra" /></FadeIn>
//                <FadeIn delay={600}><StatCard label="Green Loans Issued" value="$4.8M" sub="Avg APR 3.2%" /></FadeIn>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURES / SOLUTION --- */}
//       <section id="solution" className="py-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn>
//             <div className="mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Fintech Solutions for the Green Transition</h2>
//               <p className="text-gray-400">Overcoming high upfront costs and illiquidity with blockchain-based asset management.</p>
//             </div>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Feature 1 */}
//             <div className="col-span-1 lg:col-span-2">
//               <FadeIn delay={0}>
//                 <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
//                   <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                     <Coins className="w-6 h-6 text-emerald-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">Tokenized Carbon Credits</h3>
//                   <p className="text-gray-400 leading-relaxed max-w-lg">
//                     Convert verified credits into liquid, on-chain digital tokens. Trade them instantly or retire them for ESG compliance.
//                     Smart contracts prevent double spending and double counting.
//                   </p>
//                 </div>
//               </FadeIn>
//             </div>

//             {/* Feature 2 */}
//             <FadeIn delay={100}>
//               <div id="mining" className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
//                 <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   <Database className="w-6 h-6 text-blue-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">ESG Mining</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   Turn sustainability into revenue. Companies 'mine' tokens by achieving verified ESG improvements reported via IoT.
//                 </p>
//               </div>
//             </FadeIn>

//             {/* Feature 3 */}
//             <FadeIn delay={200}>
//               <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
//                 <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   <Lock className="w-6 h-6 text-purple-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">Green Loan Collateral</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   Unlock cheaper financing. Pledge your tokenized carbon credits as collateral for sustainability-linked loans.
//                 </p>
//               </div>
//             </FadeIn>

//             {/* Feature 4 */}
//             <div className="col-span-1 lg:col-span-2">
//               <FadeIn delay={300}>
//                 <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
//                   <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
//                   <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                     <Cpu className="w-6 h-6 text-orange-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">AI & IoT Verification</h3>
//                   <p className="text-gray-400 leading-relaxed max-w-lg">
//                     Trust but verify. Machine learning models analyze real-time energy usage to prevent greenwashing. 
//                     Immutable ledgers satisfy strict regulatory requirements.
//                   </p>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROOF OF CONCEPT (New Section) --- */}
//       <section id="poc" className="py-24 bg-slate-900/30 border-t border-white/5 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//            <FadeIn>
//              <div className="mb-12 text-center">
//                <h2 className="text-3xl md:text-4xl font-bold mb-4">Proof of Concept Architecture</h2>
//                <p className="text-gray-400">End-to-end transparency from IoT detection to trade execution.</p>
//              </div>
//            </FadeIn>

//            <FadeIn delay={200}>
//              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20 bg-white/5 p-4 md:p-8">
//                {/* Image Container - Assumes image is in public folder */}
//                <div className="bg-white rounded-lg p-2">
//                  <img 
//                    src="/architecture.png" 
//                    alt="Verdi Proof of Concept Architecture" 
//                    className="w-full h-auto rounded object-contain"
//                  />
//                </div>
               
//                {/* Architecture Breakdown */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
//                     <div className="text-center">
//                         <div className="flex justify-center mb-4">
//                             <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
//                                 <Zap className="w-5 h-5" />
//                             </div>
//                         </div>
//                         <div className="text-white font-bold mb-2">1. IoT Detection</div>
//                         <p className="text-sm text-gray-400">Sensors detect real-time energy usage. AI models verify the data before scoring.</p>
//                     </div>
//                     <div className="text-center">
//                          <div className="flex justify-center mb-4">
//                             <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
//                                 <FileCheck className="w-5 h-5" />
//                             </div>
//                         </div>
//                         <div className="text-white font-bold mb-2">2. Smart Contracts</div>
//                         <p className="text-sm text-gray-400">Smart contracts automatically mint ERC-1155 tokens once ESG milestones are met.</p>
//                     </div>
//                     <div className="text-center">
//                          <div className="flex justify-center mb-4">
//                             <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
//                                 <Activity className="w-5 h-5" />
//                             </div>
//                         </div>
//                         <div className="text-white font-bold mb-2">3. Exchange & Retirement</div>
//                         <p className="text-sm text-gray-400">Tokens are traded on the DEX, pledged as loan collateral, or retired by banks.</p>
//                     </div>
//                 </div>
//              </div>
//            </FadeIn>
//         </div>
//       </section>

//       {/* --- LIVE MARKET --- */}
//       <section id="market" className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn>
//             <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
//               <div>
//                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
//                   <Activity className="text-emerald-500" /> The Carbon Exchange
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-1">Live pricing for industry-specific ESG assets.</p>
//               </div>
//               <button onClick={handleGetStarted} className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1 text-sm">
//                 View All Assets <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </FadeIn>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//              <FadeIn delay={0}><MarketTicker symbol="SLR-DEV" name="Solar Developer" price="22.40" change="+4.2%" category="Renewable" /></FadeIn>
//              <FadeIn delay={100}><MarketTicker symbol="MFG-ESG" name="SME Mfg Transition" price="18.15" change="+1.8%" category="Industry" /></FadeIn>
//              <FadeIn delay={200}><MarketTicker symbol="LOG-CO2" name="Logistics Efficiency" price="35.00" change="-0.5%" category="Transport" /></FadeIn>
//              <FadeIn delay={300}><MarketTicker symbol="BLU-CRB" name="Blue Carbon Res" price="145.00" change="+8.5%" category="Nature" /></FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* --- IMPACT / INDUSTRIES --- */}
//       <section id="impact" className="py-24 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
//             {/* Left Content */}
//             <div>
//               <FadeIn>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
//                   Solving the Carbon <br />
//                   <span className="text-emerald-400">Liquidity Crisis</span>
//                 </h2>
//               </FadeIn>
//               <div className="space-y-8">
//                 <FadeIn delay={200}>
//                   <PainPoint 
//                     title="The Pain Point" 
//                     desc="Carbon credits are illiquid and hard for SMEs to access. Smaller companies are excluded from major registries, and ESG performance doesn't translate to better financing."
//                   />
//                 </FadeIn>
//                 <FadeIn delay={400}>
//                   <PainPoint 
//                     title="The Verdi Solution" 
//                     desc="A blockchain-based exchange where tokens are traded for liquidity, held as assets, or used as collateral. Smart contracts prevent double-counting and fraud."
//                   />
//                 </FadeIn>
//               </div>
//             </div>

//             {/* Right List (Target Industries) */}
//             <FadeIn delay={300}>
//               <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10">
//                 <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Target Industries</h3>
//                 <ul className="space-y-4">
//                   <IndustryItem icon={TrendingUp} text="Financial Services" sub="Banks, Green Loan Providers, Exchanges" />
//                   <IndustryItem icon={Globe} text="Carbon Markets" sub="Project Developers, Brokers, Registries" />
//                   <IndustryItem icon={Layers} text="Transitioning SMEs" sub="Manufacturing, Logistics, Construction" />
//                   <IndustryItem icon={Zap} text="Renewable Energy" sub="Solar, Retrofitting, Infrastructure" />
//                 </ul>
//               </div>
//             </FadeIn>

//           </div>
//         </div>
//       </section>

//       {/* --- CTA / FOOTER --- */}
//       <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
//         {/* Glow */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-emerald-900/20 blur-[100px] pointer-events-none"></div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
//           <FadeIn>
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               Transform ESG from a Cost to an Asset
//             </h2>
//             <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
//               Join the ecosystem connecting Carbon Project Developers, SMEs, and Banks in a transparent, liquid market.
//             </p>
//           </FadeIn>
          
//           <FadeIn delay={200}>
//             <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
//                <button
//                 onClick={handleGetStarted}
//                 className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
//               >
//                 <a href="App.html" target="">
//                   Start Trading Now
//                 </a>
                
//               </button>
//               <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
//                 Schedule Institutional Demo
//               </button>
//             </div>
//           </FadeIn>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-left">
//              <div className="col-span-2 md:col-span-1">
//                 <div className="flex items-center gap-2 mb-4">
//                     <ShieldCheck className="w-5 h-5 text-emerald-500" />
//                     <span className="font-bold text-xl text-white">Verdi</span>
//                 </div>
//                 <p className="text-sm text-gray-500">The operating system for the post-carbon economy.</p>
//              </div>
             
//              <div>
//                  <h4 className="font-bold text-white mb-4">Ecosystem</h4>
//                  <ul className="space-y-2 text-sm text-gray-500">
//                      <li><a href="#" className="hover:text-emerald-400">For SMEs</a></li>
//                      <li><a href="#" className="hover:text-emerald-400">For Banks</a></li>
//                  </ul>
//              </div>
//              <div>
//                  <h4 className="font-bold text-white mb-4">Technology</h4>
//                  <ul className="space-y-2 text-sm text-gray-500">
//                      <li><a href="#" className="hover:text-emerald-400">Tokenization</a></li>
//                      <li><a href="#" className="hover:text-emerald-400">Smart Contracts</a></li>
//                  </ul>
//              </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
//              <p>&copy; 2026 Verdi Ecosystem. Built for the Green Future.</p>
//              <div className="flex gap-6">
//                <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
//                <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
//                <a href="#" className="hover:text-emerald-400 transition-colors">Discord</a>
//              </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // --- FADE IN COMPONENT ---
// // This handles the "In View" animation logic
// function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the element is visible
//         rootMargin: "0px"
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-1000 ease-out transform ${
//         isVisible 
//           ? "opacity-100 translate-y-0" 
//           : "opacity-0 translate-y-12"
//       }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// // --- SUBCOMPONENTS ---

// function StatCard({ label, value, sub }: { label: string, value: string, sub: string }) {
//   return (
//     <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-left hover:border-emerald-500/30 transition-colors">
//       <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{label}</div>
//       <div className="text-3xl font-bold text-white mb-1">{value}</div>
//       <div className="text-emerald-400 text-sm font-mono">{sub}</div>
//     </div>
//   )
// }

// function MarketTicker({ symbol, name, price, change, category }: { symbol: string, name: string, price: string, change: string, category: string }) {
//   const isPositive = change.includes("+");
  
//   const categoryColors = {
//       "Renewable": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
//       "Industry": "bg-blue-500/10 text-blue-400 border-blue-500/20",
//       "Transport": "bg-purple-500/10 text-purple-400 border-purple-500/20",
//       "Nature": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
//   }[category] || "bg-gray-500/10 text-gray-400";

//   return (
//     <div className="bg-slate-900 p-4 rounded-lg border border-white/5 group hover:bg-slate-800 transition-colors cursor-pointer hover:border-emerald-500/30">
//       <div className="flex items-center justify-between mb-3">
//         <div className={`px-2 py-1 rounded-md text-[10px] font-bold border ${categoryColors}`}>
//             {category}
//         </div>
//         <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
//           {change}
//         </div>
//       </div>
//       <div>
//         <div className="text-xl font-bold text-white mb-1">{price}</div>
//         <div className="text-sm font-medium text-gray-300 truncate">{name}</div>
//         <div className="text-xs text-gray-500 font-mono mt-1">{symbol}</div>
//       </div>
//     </div>
//   )
// }

// function PainPoint({ title, desc }: { title: string, desc: string }) {
//   return (
//     <div className="pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors">
//       <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
//       <p className="text-gray-400 leading-relaxed">{desc}</p>
//     </div>
//   )
// }

// function IndustryItem({ icon: Icon, text, sub }: { icon: any, text: string, sub: string }) {
//   return (
//     <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
//       <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
//         <Icon className="w-5 h-5" />
//       </div>
//       <div>
//         <div className="text-white font-bold text-sm">{text}</div>
//         <div className="text-gray-500 text-xs mt-1">{sub}</div>
//       </div>
//     </li>
//   )
// }

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Cpu,
  Database,
  Coins,
  Activity,
  Lock,
  Globe,
  TrendingUp,
  Layers, 
  Shield,
  FileCheck,
  // New imports for About Section
  Building2,
  Users,
  Target,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

// --- DATA FOR ABOUT SECTION (Content Preserved) ---
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

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- ORIGINAL NAVIGATION HANDLERS ---
  const handleLogin = () => {
    window.location.href = "/user-dashboard";
  };

  const handleGetStarted = () => {
    window.location.href = "/trading-platform";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[128px]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                 <a href="App.html">
                     <Shield className="w-6 h-6 text-white" />
                 </a>
              </div>
              
              <span className="font-bold text-2xl tracking-tight text-white cursor-pointer" onClick={() => window.location.href = "/"}>
                Verdi
              </span>
            </div>

            {/* Desktop Links - Now with 5 Items including About */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              
              <a href="#solution" className="hover:text-emerald-400 transition-colors">Solution</a>
              <a href="#poc" className="hover:text-emerald-400 transition-colors">How it Works</a>
              <a href="#market" className="hover:text-emerald-400 transition-colors">Exchange</a>
              <a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button onClick={handleLogin} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                <a href="Profile.html" target="">
                  Log in
                </a>
              </button>
              
              <button 
                onClick={handleGetStarted} 
                className="group relative px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]"
              >
                <a href="App.html" target="">
                  Start Trading
                </a>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Updated with About */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10 p-4 space-y-4">
            <a href="#solution" className="block text-gray-300 font-medium">Solution</a>
            <a href="#poc" className="block text-gray-300 font-medium">How it Works</a>
            <a href="#market" className="block text-gray-300 font-medium">Exchange</a>
            <a href="#impact" className="block text-gray-300 font-medium">Impact</a>
            <a href="#about" className="block text-gray-300 font-medium">About</a>
            <button onClick={handleLogin} className="block w-full text-left text-gray-300 font-medium">Log in</button>
            <button onClick={handleGetStarted} className="block w-full bg-emerald-500 text-slate-900 py-3 rounded-lg font-bold">
              Start Trading
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Animated Badge */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Verdi V2.0: Now supporting Green Loan Collateral
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Tokenise Carbon.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white">
                Finance the Future.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 leading-relaxed">
              The first blockchain exchange enabling SMEs and Financial Institutions to trade verified carbon credits, earn tokens via ESG mining, and access green liquidity.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleGetStarted}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
              >
                <a href="App.html" target="" className="flex items-center gap-2">
                  Start Trading <ArrowRight className="w-5 h-5" />
                </a>
              </button>
            </div>
          </FadeIn>

          {/* Hero Visual / Stats */}
          <div className="mt-24 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <FadeIn delay={400}><StatCard label="Total Value Locked" value="$14.2M" sub="+12% this week" /></FadeIn>
               <FadeIn delay={500}><StatCard label="Carbon Credits Tokenized" value="1,240 tCO2e" sub="Verified by Verra" /></FadeIn>
               <FadeIn delay={600}><StatCard label="Green Loans Issued" value="$4.8M" sub="Avg APR 3.2%" /></FadeIn>
            </div>
          </div>
        </div>
      </section>

      

      {/* --- FEATURES / SOLUTION (EXISTING) --- */}
      <section id="solution" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Platform Features</h2>
              <p className="text-gray-400">Overcoming high upfront costs and illiquidity with blockchain-based asset management.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="col-span-1 lg:col-span-2">
              <FadeIn delay={0}>
                <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Coins className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tokenized Carbon Credits</h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    Convert verified credits into liquid, on-chain digital tokens. Trade them instantly or retire them for ESG compliance.
                    Smart contracts prevent double spending and double counting.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Feature 2 */}
            <FadeIn delay={100}>
              <div id="mining" className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ESG Mining</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Turn sustainability into revenue. Companies 'mine' tokens by achieving verified ESG improvements reported via IoT.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={200}>
              <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Green Loan Collateral</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unlock cheaper financing. Pledge your tokenized carbon credits as collateral for sustainability-linked loans.
                </p>
              </div>
            </FadeIn>

            {/* Feature 4 */}
            <div className="col-span-1 lg:col-span-2">
              <FadeIn delay={300}>
                <div className="h-full p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI & IoT Verification</h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    Trust but verify. Machine learning models analyze real-time energy usage to prevent greenwashing. 
                    Immutable ledgers satisfy strict regulatory requirements.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROOF OF CONCEPT (New Section) --- */}
      <section id="poc" className="py-24 bg-slate-900/30 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Proof of Concept Architecture</h2>
                <p className="text-gray-400">End-to-end transparency from IoT detection to trade execution.</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20 bg-white/5 p-4 md:p-8">
                {/* Image Container - Assumes image is in public folder */}
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src="/architecture.png" 
                    alt="Verdi Proof of Concept Architecture" 
                    className="w-full h-auto rounded object-contain"
                  />
                </div>
                
                {/* Architecture Breakdown */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                                <Zap className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-white font-bold mb-2">1. IoT Detection</div>
                        <p className="text-sm text-gray-400">Sensors detect real-time energy usage. AI models verify the data before scoring.</p>
                    </div>
                    <div className="text-center">
                          <div className="flex justify-center mb-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                                <FileCheck className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-white font-bold mb-2">2. Smart Contracts</div>
                        <p className="text-sm text-gray-400">Smart contracts automatically mint ERC-1155 tokens once ESG milestones are met.</p>
                    </div>
                    <div className="text-center">
                          <div className="flex justify-center mb-4">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                                <Activity className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-white font-bold mb-2">3. Exchange & Retirement</div>
                        <p className="text-sm text-gray-400">Tokens are traded on the DEX, pledged as loan collateral, or retired by banks.</p>
                    </div>
                </div>
             </div>
            </FadeIn>
        </div>
      </section>

      {/* --- LIVE MARKET --- */}
      <section id="market" className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Activity className="text-emerald-500" /> The Carbon Exchange
                </h3>
                <p className="text-sm text-gray-500 mt-1">Live pricing for industry-specific ESG assets.</p>
              </div>
              <button onClick={handleGetStarted} className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1 text-sm">
                View All Assets <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FadeIn delay={0}><MarketTicker symbol="SLR-DEV" name="Solar Developer" price="22.40" change="+4.2%" category="Renewable" /></FadeIn>
              <FadeIn delay={100}><MarketTicker symbol="MFG-ESG" name="SME Mfg Transition" price="18.15" change="+1.8%" category="Industry" /></FadeIn>
              <FadeIn delay={200}><MarketTicker symbol="LOG-CO2" name="Logistics Efficiency" price="35.00" change="-0.5%" category="Transport" /></FadeIn>
              <FadeIn delay={300}><MarketTicker symbol="BLU-CRB" name="Blue Carbon Res" price="145.00" change="+8.5%" category="Nature" /></FadeIn>
          </div>
        </div>
      </section>

      {/* --- IMPACT / INDUSTRIES --- */}
      <section id="impact" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Solving the Carbon <br />
                  <span className="text-emerald-400">Liquidity Crisis</span>
                </h2>
              </FadeIn>
              <div className="space-y-8">
                <FadeIn delay={200}>
                  <PainPoint 
                    title="The Pain Point" 
                    desc="Carbon credits are illiquid and hard for SMEs to access. Smaller companies are excluded from major registries, and ESG performance doesn't translate to better financing."
                  />
                </FadeIn>
                <FadeIn delay={400}>
                  <PainPoint 
                    title="The Verdi Solution" 
                    desc="A blockchain-based exchange where tokens are traded for liquidity, held as assets, or used as collateral. Smart contracts prevent double-counting and fraud."
                  />
                </FadeIn>
              </div>
            </div>

            {/* Right List (Target Industries) */}
            <FadeIn delay={300}>
              <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Target Industries</h3>
                <ul className="space-y-4">
                  <IndustryItem icon={TrendingUp} text="Financial Services" sub="Banks, Green Loan Providers, Exchanges" />
                  <IndustryItem icon={Globe} text="Carbon Markets" sub="Project Developers, Brokers, Registries" />
                  <IndustryItem icon={Layers} text="Transitioning SMEs" sub="Manufacturing, Logistics, Construction" />
                  <IndustryItem icon={Zap} text="Renewable Energy" sub="Solar, Retrofitting, Infrastructure" />
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- NEW ABOUT US SECTION (INTEGRATED) --- */}
      <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero / Intro */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Verdi</h2>
              <p className="text-lg text-gray-300 mb-4">
                Verdi is a blockchain-based carbon credit tokenisation exchange that bridges the gap between environmental
                impact and financial value.
              </p>
              <p className="text-gray-400">
                We empower SMEs and financial institutions to participate in carbon markets with transparency, liquidity, and
                trust—leveraging blockchain technology to solve critical industry pain points.
              </p>
            </div>
          </FadeIn>

          {/* Mission Statement */}
          <FadeIn delay={200}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-emerald-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="mb-3 text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-lg text-gray-300">
                  To democratize access to carbon markets and enable ESG performance to translate directly into financial
                  benefits, creating a sustainable future where every tonne of CO₂ reduction has verifiable value.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Target Industries */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-white">Who We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetIndustries.map((industry, idx) => (
                <FadeIn delay={idx * 100} key={idx}>
                  <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          industry.color === "blue"
                            ? "bg-blue-500/10"
                            : industry.color === "green"
                            ? "bg-green-500/10"
                            : industry.color === "orange"
                            ? "bg-orange-500/10"
                            : "bg-purple-500/10"
                        }`}
                      >
                        <industry.icon
                          className={`w-6 h-6 ${
                            industry.color === "blue"
                              ? "text-blue-400"
                              : industry.color === "green"
                              ? "text-emerald-400"
                              : industry.color === "orange"
                              ? "text-orange-400"
                              : "text-purple-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 font-bold text-white">{industry.category}</h4>
                        <ul className="space-y-2">
                          {industry.entities.map((entity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{entity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-white">Key Industry Pain Points We Address</h3>
              </div>
              <div className="space-y-4">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-orange-500/5 border-l-4 border-orange-500 rounded-r-lg">
                    <span className="text-2xl text-orange-500 font-bold leading-none mt-1">{idx + 1}</span>
                    <p className="text-gray-300 flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Solution */}
          <div>
            <div className="text-center mb-6">
              <h3 className="mb-2 text-2xl font-bold text-white">Our Fintech Solution</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive blockchain-based platform that tokenizes carbon credits and integrates them into the
                financial ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionFeatures.map((feature, idx) => (
                <FadeIn delay={idx * 100} key={idx}>
                  <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:shadow-lg hover:shadow-emerald-900/10 transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h4 className="font-bold text-white">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400 ml-11">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <FadeIn>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-emerald-900 border border-white/10 text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="mb-8 text-white text-center text-2xl font-bold">Why Choose Verdi?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-white font-bold mb-2">Trust & Transparency</h4>
                    <p className="text-emerald-100/80 text-sm">
                      Blockchain ensures immutable records and prevents double-counting
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-white font-bold mb-2">Liquidity & Access</h4>
                    <p className="text-emerald-100/80 text-sm">
                      SMEs can trade fractional credits and access markets previously closed to them
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <h4 className="text-white font-bold mb-2">Financial Integration</h4>
                    <p className="text-emerald-100/80 text-sm">
                      ESG performance translates into better loan terms and lower interest rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Technology Stack */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10">
              <h3 className="mb-8 text-center text-2xl font-bold text-white">Our Technology Foundation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Kaia Blockchain / Ethereum Layer 2", desc: "Scalable blockchain" },
                  { name: "Hyperledger Besu", desc: "Permissioned network" },
                  { name: "Chainlink Oracles", desc: "Real-world data" },
                  { name: "IoT Integration", desc: "Automated verification" },
                  { name: "AI Scoring", desc: "ESG credibility" },
                  { name: "Smart Contracts", desc: "Automated execution" },
                  { name: "MAS Compliant", desc: "Regulatory ready" },
                  { name: "Bank APIs", desc: "Seamless integration" },
                ].map((tech, idx) => (
                  <div key={idx} className="p-4 border border-white/10 rounded-lg text-center bg-white/5 hover:bg-white/10 transition-colors">
                    <p className="font-medium mb-1 text-emerald-400">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn>
            <div className="p-8 text-center rounded-2xl bg-white/5 border border-white/10">
              <h3 className="mb-3 text-2xl font-bold text-white">Ready to Join the Carbon Revolution?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                Whether you're an SME looking to monetize your carbon reduction efforts, or a financial institution seeking
                verified ESG investment opportunities, Verdi provides the infrastructure you need.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/20">For SMEs</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20">For Banks</span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-900/20">For Developers</span>
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-900/20">For Auditors</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-emerald-900/20 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform ESG from a Cost to an Asset
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the ecosystem connecting Carbon Project Developers, SMEs, and Banks in a transparent, liquid market.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
               <button
                onClick={handleGetStarted}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
              >
                <a href="App.html" target="">
                  Start Trading Now
                </a>
                
              </button>
              <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Schedule Institutional Demo
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-left">
             <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-xl text-white">Verdi</span>
                </div>
                <p className="text-sm text-gray-500">The operating system for the post-carbon economy.</p>
             </div>
             
             <div>
                 <h4 className="font-bold text-white mb-4">Ecosystem</h4>
                 <ul className="space-y-2 text-sm text-gray-500">
                     <li><a href="#" className="hover:text-emerald-400">For SMEs</a></li>
                     <li><a href="#" className="hover:text-emerald-400">For Banks</a></li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-white mb-4">Technology</h4>
                 <ul className="space-y-2 text-sm text-gray-500">
                     <li><a href="#" className="hover:text-emerald-400">Tokenization</a></li>
                     <li><a href="#" className="hover:text-emerald-400">Smart Contracts</a></li>
                 </ul>
             </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
             <p>&copy; 2026 Verdi Ecosystem. Built for the Green Future.</p>
             <div className="flex gap-6">
               <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">Discord</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- FADE IN COMPONENT ---
// This handles the "In View" animation logic
function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- SUBCOMPONENTS ---

function StatCard({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-left hover:border-emerald-500/30 transition-colors">
      <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{label}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-emerald-400 text-sm font-mono">{sub}</div>
    </div>
  )
}

function MarketTicker({ symbol, name, price, change, category }: { symbol: string, name: string, price: string, change: string, category: string }) {
  const isPositive = change.includes("+");
  
  const categoryColors = {
      "Renewable": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      "Industry": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Transport": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "Nature": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }[category] || "bg-gray-500/10 text-gray-400";

  return (
    <div className="bg-slate-900 p-4 rounded-lg border border-white/5 group hover:bg-slate-800 transition-colors cursor-pointer hover:border-emerald-500/30">
      <div className="flex items-center justify-between mb-3">
        <div className={`px-2 py-1 rounded-md text-[10px] font-bold border ${categoryColors}`}>
            {category}
        </div>
        <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {change}
        </div>
      </div>
      <div>
        <div className="text-xl font-bold text-white mb-1">{price}</div>
        <div className="text-sm font-medium text-gray-300 truncate">{name}</div>
        <div className="text-xs text-gray-500 font-mono mt-1">{symbol}</div>
      </div>
    </div>
  )
}

function PainPoint({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors">
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  )
}

function IndustryItem({ icon: Icon, text, sub }: { icon: any, text: string, sub: string }) {
  return (
    <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-white font-bold text-sm">{text}</div>
        <div className="text-gray-500 text-xs mt-1">{sub}</div>
      </div>
    </li>
  )
}