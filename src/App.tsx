/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BarChart3, 
  Database, 
  FileCode2, 
  Github, 
  Globe, 
  LayoutDashboard, 
  RefreshCw, 
  TrendingDown, 
  TrendingUp,
  ChevronRight,
  BookOpen,
  Settings,
  Smartphone,
  Users,
  Building2,
  CreditCard,
  MessageSquare,
  Zap,
  ShieldCheck,
  ArrowRightLeft
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans selection:bg-[#FF0000] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF0000] flex items-center justify-center rounded-sm">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight uppercase">German Fintech Audit</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#market" className="hover:text-[#FF0000] transition-colors">Market Audit</a>
              <a href="#bmc" className="hover:text-[#FF0000] transition-colors">BMC Mapping</a>
              <a href="#redesign" className="hover:text-[#FF0000] transition-colors">Redesign</a>
              <a href="#kpis" className="hover:text-[#FF0000] transition-colors underline underline-offset-4 decoration-[#FF0000]">KPI Projections</a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF0000]/5 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0000]/10 text-[#FF0000] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Digital Business Model Audit & Redesign
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#000000] leading-[0.9] mb-8 uppercase italic">
              German Fintech <br />
              <span className="text-[#FF0000]">Market Audit</span> <br />
              & Digitalization
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              A comprehensive market audit of the German fintech landscape vs. traditional banking. 
              Integrating live data from the Deutsche Bundesbank and ECB to model the "Burning Platform" 
              for German retail banks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#000000] text-white font-bold uppercase tracking-widest hover:bg-[#FF0000] transition-all transform hover:-translate-y-1 active:translate-y-0">
                Explore Market Data
              </button>
              <button className="px-8 py-4 border-2 border-[#000000] text-[#000000] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
                Download Audit Report
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Market Audit Section */}
      <section id="market" className="py-24 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic mb-4">The Market Audit: 3 Digital Pain Points</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Identifying the friction in the German banking model</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Branch Density Overload", 
                desc: "Germany has one of the highest branch-per-capita ratios in the EU, leading to massive operational overhead.", 
                icon: Building2 
              },
              { 
                title: "Legacy Infrastructure", 
                desc: "Traditional banks struggle with core banking systems that are 30+ years old, hindering rapid digital innovation.", 
                icon: Database 
              },
              { 
                title: "Neo-bank Disruption", 
                desc: "Digital-native banks are capturing the 'Next-Gen' demographic (18-35) with superior UX and lower fees.", 
                icon: Smartphone 
              },
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 bg-white/5 hover:border-[#FF0000] transition-all group"
              >
                <point.icon className="w-10 h-10 text-[#FF0000] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 uppercase">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BMC Section */}
      <section id="bmc" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase italic border-l-4 border-[#FF0000] pl-6">
                Business Model Canvas (BMC)
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We mapped the "As-Is" state of a traditional German Sparkasse and the "To-Be" digital model of a Neo-bank. 
                  The redesign focuses on branch rationalization and mobile-first customer acquisition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 bg-gray-50 border-l-2 border-gray-300">
                    <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Traditional Sparkasse</span>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• Branch-heavy network</li>
                      <li>• Manual lending processes</li>
                      <li>• High operational overhead</li>
                      <li>• Local/Regional focus</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-[#FF0000]/5 border-l-2 border-[#FF0000]">
                    <span className="text-xs font-bold uppercase text-[#FF0000] block mb-2">Digital Neo-bank</span>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• Mobile-first UX</li>
                      <li>• Automated KYC/AML</li>
                      <li>• Low overhead (Cloud)</li>
                      <li>• Borderless operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 flex items-center justify-center p-8 border border-gray-200 shadow-2xl">
                <LayoutDashboard className="w-24 h-24 text-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest border border-gray-200 shadow-sm">
                    Power BI Market Audit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesign Strategy */}
      <section id="redesign" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic mb-4">The Redesign Strategy</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Implementing the Digital Solution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-gray-200 group hover:border-[#FF0000] transition-all">
              <ArrowRightLeft className="w-12 h-12 text-[#FF0000] mb-6" />
              <h3 className="text-2xl font-bold mb-4 uppercase">Branch Rationalization</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Reducing physical footprint by 40% and reinvesting in digital channels. 
                This allows traditional banks to own the customer relationship and increase margins by 30%.
              </p>
              <div className="flex items-center gap-2 text-[#FF0000] text-xs font-bold uppercase tracking-widest">
                <span>Projected Margin Increase: +30%</span>
              </div>
            </div>
            <div className="bg-[#000000] p-10 text-white group hover:bg-[#FF0000] transition-all duration-500">
              <ShieldCheck className="w-12 h-12 text-[#FF0000] group-hover:text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4 uppercase">BaaS Integration</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed mb-6">
                Partnering with Fintechs (e.g., Solaris) to offer modern financial products. 
                Creating a stable, recurring revenue stream that reduces reliance on seasonal fluctuations.
              </p>
              <div className="flex items-center gap-2 text-[#FF0000] group-hover:text-white text-xs font-bold uppercase tracking-widest">
                <span>Projected Recurring Revenue: 15% of Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Projections */}
      <section id="kpis" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase italic mb-12">Projected Market Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Revenue Growth", value: "+45%", icon: TrendingUp },
              { label: "Digital Reach", value: "3x", icon: Users },
              { label: "Operational Cost", value: "-12%", icon: TrendingDown },
            ].map((kpi, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <kpi.icon className="w-8 h-8 text-[#FF0000]" />
                </div>
                <span className="text-5xl font-black text-[#000000] mb-2">{kpi.value}</span>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-500">{kpi.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-20 p-8 bg-gray-50 border border-gray-200 inline-block">
            <p className="text-sm text-gray-600 font-medium italic">
              "Visualized in Power BI using real data from the Deutsche Bundesbank and ECB (2024-2025)."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF0000] flex items-center justify-center rounded-sm">
              <Building2 className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase">German Fintech Audit</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-[#FF0000]">Market Audit</a>
            <a href="#" className="hover:text-[#FF0000]">Methodology</a>
            <a href="#" className="hover:text-[#FF0000]">GitHub</a>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            &copy; 2026 German Fintech Market Audit & Digitalization. Built for DigiBIM.
          </p>
        </div>
      </footer>
    </div>
  );
}
