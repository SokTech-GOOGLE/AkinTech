
import React, { useState } from 'react';
import { Video, Mic, Share2, MessageCircle, Heart, Users, X, Maximize } from 'lucide-react';

const LiveStream: React.FC = () => {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 h-[calc(100vh-120px)] flex gap-6">
      <div className="flex-1 bg-black rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/10 group">
         {!isLive ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-cyan-900/40 to-black">
               <div className="w-24 h-24 bg-cyan-600/20 rounded-full flex items-center justify-center mb-8 border border-cyan-500/30">
                  <Video className="w-10 h-10 text-cyan-400 animate-pulse" />
               </div>
               <h2 className="text-4xl font-black mb-4 tracking-tighter">Ready to Broadcast?</h2>
               <p className="text-gray-400 mb-10 max-w-sm text-center">Go live to the entire AkinTech Global Nexus instantly.</p>
               <button 
                onClick={() => setIsLive(true)}
                className="bg-cyan-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(8,145,178,0.4)]"
               >
                 Go Live Now
               </button>
            </div>
         ) : (
           <div className="h-full relative">
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-young-man-with-neon-lighting-on-his-face-34539-large.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
              />
              <div className="absolute top-8 left-8 flex gap-4">
                 <div className="bg-rose-600 text-white px-4 py-1 rounded-lg text-xs font-black tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> LIVE
                 </div>
                 <div className="bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-lg text-xs font-black flex items-center gap-2">
                    <Users className="w-3 h-3" /> 4.2k
                 </div>
              </div>
              <button 
                onClick={() => setIsLive(false)}
                className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-rose-500/80 rounded-2xl text-white transition-all backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500 border-2 border-white overflow-hidden">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Akin" alt="Akin" />
                    </div>
                    <div>
                       <h4 className="font-black text-lg">AkinTech Official</h4>
                       <p className="text-xs text-white/60 font-medium">Bypassing the Status Quo</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-cyan-500 transition-all"><Mic className="w-6 h-6" /></button>
                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-cyan-500 transition-all"><Maximize className="w-6 h-6" /></button>
                 </div>
              </div>
           </div>
         )}
      </div>

      <div className="hidden lg:flex w-96 flex-col glass-panel rounded-[3rem] border-white/10 overflow-hidden">
         <div className="p-8 border-b border-white/5">
            <h3 className="font-black text-xl flex items-center gap-2"><MessageCircle className="w-5 h-5 text-cyan-400" /> Nexus Chat</h3>
         </div>
         <div className="flex-1 p-6 space-y-6 overflow-y-auto no-scrollbar">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gray-800 shrink-0"></div>
                <div>
                   <p className="text-xs font-black text-cyan-400 mb-1">Genius_User_{i}</p>
                   <p className="text-sm text-gray-300 leading-snug">This tech is insane! Akin is really upgrading the game.</p>
                </div>
              </div>
            ))}
         </div>
         <div className="p-6 bg-white/5">
            <div className="relative">
               <input 
                type="text" 
                placeholder="Send a global vibe..." 
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-cyan-500 transition-all"
               />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 font-black"><Heart className="w-5 h-5" /></button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LiveStream;
