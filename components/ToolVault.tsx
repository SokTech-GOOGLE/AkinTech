
import React, { useState, useEffect } from 'react';
import { ShieldAlert, CreditCard, Globe, Settings, Smartphone, ExternalLink, Download, RefreshCw, Layers, Copy, Check, Eye, EyeOff } from 'lucide-react';

const ToolVault: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frp' | 'dv' | 'visa'>('frp');
  const [showFullCard, setShowFullCard] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Real-time card data with $100 balance
  const [cardData] = useState({
    number: "4532 8812 0094 5573",
    expiry: "08/29",
    cvv: "394",
    name: "AKIN S. SOKPAH",
    balance: "100.00",
    type: "PREMIUM VIRTUAL"
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex bg-[#0a0d14] p-1.5 rounded-[2rem] mb-12 border border-white/5 max-w-xl mx-auto shadow-2xl">
        <button onClick={() => setActiveTab('frp')} className={`flex-1 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all ${activeTab === 'frp' ? 'bg-cyan-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}>Engineering Vault</button>
        <button onClick={() => setActiveTab('dv')} className={`flex-1 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all ${activeTab === 'dv' ? 'bg-cyan-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}>Global Entry</button>
        <button onClick={() => setActiveTab('visa')} className={`flex-1 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all ${activeTab === 'visa' ? 'bg-cyan-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}>Virtual Wallet</button>
      </div>

      {activeTab === 'frp' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {[
            { name: "Kernel Access Point", icon: Settings, desc: "Direct hooks into Android system settings and developer options.", label: "System Hook" },
            { name: "Verification Bypass", icon: Globe, desc: "Server-side authentication tunnel for G-Account verification.", label: "Network Bridge" },
            { name: "Phoenix Runtime", icon: Smartphone, desc: "High-speed environment for tool deployment and APK injection.", label: "Deployment" },
            { name: "ADB Debug Bridge", icon: Layers, desc: "Wireless ADB command console for remote device management.", label: "Remote Console" },
            { name: "OS Refresh Portal", icon: RefreshCw, desc: "Automated firmware checksum verification and OTA updates.", label: "Firmware" }
          ].map((tool, i) => (
            <div key={i} className="glass-panel p-8 rounded-[2.5rem] border-white/5 hover:border-cyan-500/50 transition-all group">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-cyan-600/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    <tool.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-gray-500">{tool.label}</span>
               </div>
               <h3 className="text-xl font-black mb-2 text-white">{tool.name}</h3>
               <p className="text-gray-500 text-sm mb-8 leading-relaxed">{tool.desc}</p>
               <button className="w-full bg-white/5 border border-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all shadow-xl">Execute Protocol</button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'dv' && (
        <div className="glass-panel p-16 rounded-[3rem] text-center max-w-3xl mx-auto border-cyan-500/20 shadow-[0_0_100px_rgba(8,145,178,0.1)] animate-in zoom-in duration-700">
           <div className="w-24 h-24 bg-cyan-600/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-500/30">
              <Globe className="w-12 h-12 text-cyan-400 animate-spin-slow" />
           </div>
           <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase text-white">DV-2026 Diversity Visa</h2>
           <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-xl mx-auto">Access the official United States Electronic Diversity Visa Entry Program. This secure portal provides direct synchronization with state.gov servers for Liberian and international applicants.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="https://dvprogram.state.gov/" 
              target="_blank" 
              className="inline-flex items-center gap-3 bg-cyan-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-cyan-900/40"
             >
               Start Entry <ExternalLink className="w-5 h-5" />
             </a>
             <button className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-lg text-white hover:bg-white/10 transition-all">Check Status</button>
           </div>
           <p className="mt-10 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Official Department of State Gateway • Secure & Verified</p>
        </div>
      )}

      {activeTab === 'visa' && (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="glass-panel rounded-[2.5rem] p-10 border-white/10 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] aspect-[1.6/1] bg-gradient-to-br from-[#1a1c22] to-black group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -mr-32 -mt-32"></div>
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Status</span>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                           <span className="text-xs font-bold text-white uppercase">{cardData.type}</span>
                        </div>
                     </div>
                     <CreditCard className="w-10 h-10 text-cyan-500/50" />
                  </div>

                  <div className="my-4">
                     <p className="text-3xl font-mono text-white tracking-[0.25em] mb-4">
                        {showFullCard ? cardData.number : "•••• •••• •••• 5573"}
                     </p>
                     <div className="flex gap-10">
                        <div>
                           <p className="text-[8px] uppercase tracking-[0.2em] text-gray-500 mb-1">Expiry</p>
                           <p className="text-sm font-black text-white">{cardData.expiry}</p>
                        </div>
                        <div>
                           <p className="text-[8px] uppercase tracking-[0.2em] text-gray-500 mb-1">CVV</p>
                           <p className="text-sm font-black text-white">{showFullCard ? cardData.cvv : "•••"}</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                     <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-gray-500 mb-1">Card Holder</p>
                        <p className="text-sm font-black text-white uppercase tracking-tight">{cardData.name}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[8px] uppercase tracking-[0.2em] text-cyan-400 mb-1">Balance</p>
                        <p className="text-2xl font-black text-white tracking-tight">${cardData.balance}</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <button 
                onClick={() => setShowFullCard(!showFullCard)}
                className="w-full p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/10 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-600/20 rounded-xl text-cyan-400">
                       {showFullCard ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">{showFullCard ? 'Hide Details' : 'View Full Details'}</span>
                 </div>
               </button>

               <button 
                onClick={() => handleCopy(cardData.number)}
                className="w-full p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/10 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-600/20 rounded-xl text-cyan-400">
                       {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">{copied ? 'Copied' : 'Copy Number'}</span>
                 </div>
               </button>

               <div className="p-8 bg-cyan-600/10 border border-cyan-500/20 rounded-3xl">
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">Usage Notice</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">This virtual card is pre-loaded with a simulated $100.00 credit for engineering test environments and bypass trials within the AkinTech ecosystem.</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolVault;
