
import React, { useState } from 'react';
import { Heart, DollarSign, ExternalLink, ShieldCheck, Star, Users, CreditCard, Smartphone, Copy, Check, Info, ChevronRight } from 'lucide-react';

const SupportCenter: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const amounts = [5, 10, 20, 50, 100, 500];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-32 space-y-8">
      {/* Header Panel */}
      <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] -mr-40 -mt-40"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex p-5 rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-2xl mb-8">
            <Heart className="w-12 h-12 text-white fill-current" />
          </div>
          <h1 className="text-5xl font-black mb-4 tracking-tighter">Support the Genius</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed mb-8">
            Your contributions directly fund the bandwidth and AI processing for the Vibe Global Cloud.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-500 rounded-2xl shadow-lg"><Smartphone className="w-6 h-6 text-white" /></div>
              <h4 className="font-bold text-xl">Mobile Money</h4>
            </div>
            <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 border border-white/5 mb-4">
              <span className="font-mono text-purple-400 font-black text-lg">+231889183557</span>
              <button onClick={() => copyToClipboard("+231889183557", "MoMo")} className="p-2 hover:bg-white/10 rounded-lg">
                {copied === "MoMo" ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
              </button>
            </div>
            <div className="space-y-2">
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                 <Info className="w-3 h-3" /> Step-by-Step Guide
               </p>
               <ol className="text-xs text-gray-400 space-y-1 pl-4 list-decimal">
                 <li>Dial <span className="text-white font-bold">*156#</span> on your phone</li>
                 <li>Select <span className="text-white font-bold">Transfer Money</span></li>
                 <li>Select <span className="text-white font-bold">MoMo User</span></li>
                 <li>Enter number: <span className="text-purple-400 font-bold">0889183557</span></li>
                 <li>Confirm name: <span className="text-white font-bold italic">Akin S. Sokpah</span></li>
                 <li>Enter amount & your PIN to finish</li>
               </ol>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-red-500/50 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-600 rounded-2xl shadow-lg"><CreditCard className="w-6 h-6 text-white" /></div>
              <h4 className="font-bold text-xl">UBA Bank</h4>
            </div>
            <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 border border-white/5 mb-4">
              <span className="font-mono text-red-400 font-black text-lg">53020710015394</span>
              <button onClick={() => copyToClipboard("53020710015394", "Bank")} className="p-2 hover:bg-white/10 rounded-lg">
                {copied === "Bank" ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
              </button>
            </div>
            <div className="space-y-2">
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                 <Info className="w-3 h-3" /> Transfer Guide
               </p>
               <ol className="text-xs text-gray-400 space-y-1 pl-4 list-decimal">
                 <li>Open your Mobile Banking App</li>
                 <li>Select <span className="text-white font-bold">Transfer / Send Money</span></li>
                 <li>Select <span className="text-white font-bold">Other Bank</span> or <span className="text-white font-bold">UBA to UBA</span></li>
                 <li>Account: <span className="text-red-400 font-bold">53020710015394</span></li>
                 <li>Name: <span className="text-white font-bold italic">Akin S. Sokpah</span></li>
                 <li>Complete transfer and send screenshot to @nexus_admin</li>
               </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-8 border border-white/5 text-center">
         <h4 className="text-xl font-black mb-6">Quick Recommendation Amounts</h4>
         <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {amounts.map(amt => (
              <button 
                key={amt}
                onClick={() => setSelectedAmount(amt)}
                className={`py-4 rounded-2xl font-black transition-all border ${selectedAmount === amt ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-500 border-white/5'}`}
              >
                ${amt}
              </button>
            ))}
         </div>
         <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-[1.01] transition-all">
           Confirm Selection ${selectedAmount || '...'}
         </button>
      </div>
    </div>
  );
};

export default SupportCenter;
