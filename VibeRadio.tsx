
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Disc } from 'lucide-react';

const VibeRadio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] -ml-48 -mb-48 animate-pulse"></div>

        <div className="relative z-10">
          <div className={`w-64 h-64 mx-auto mb-12 relative ${isPlaying ? 'animate-spin-slow' : ''}`}>
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20 blur-2xl"></div>
             <div className="w-full h-full bg-[#0d1117] rounded-full border-8 border-white/5 flex items-center justify-center relative shadow-2xl">
                <Disc className={`w-32 h-32 text-indigo-500 opacity-40 ${isPlaying ? 'animate-pulse' : ''}`} />
                <div className="absolute w-16 h-16 bg-[#010309] rounded-full border-4 border-white/10"></div>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Akin" className="absolute w-24 h-24 rounded-full opacity-80" />
             </div>
          </div>

          <h2 className="text-4xl font-black mb-2 tracking-tighter">VIBE RADIO</h2>
          <p className="text-purple-400 font-bold uppercase tracking-[0.3em] text-sm mb-8">AI STATION: DEEP SYNTHWAVE</p>

          <div className="flex items-center justify-center gap-4 mb-12 h-16">
             {Array.from({ length: 24 }).map((_, i) => (
               <div 
                 key={i} 
                 className={`w-1.5 bg-indigo-500 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-2 opacity-20'}`} 
                 style={{ height: isPlaying ? `${Math.random() * 100}%` : '8px', animationDelay: `${i * 0.1}s` }}
               />
             ))}
          </div>

          <div className="flex items-center justify-center gap-8 mb-12">
             <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"><SkipBack className="w-8 h-8 text-gray-400" /></button>
             <button 
               onClick={() => setIsPlaying(!isPlaying)}
               className="p-8 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all"
             >
               {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
             </button>
             <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"><SkipForward className="w-8 h-8 text-gray-400" /></button>
          </div>

          <div className="flex items-center justify-between max-w-sm mx-auto bg-white/5 p-4 rounded-2xl border border-white/5">
             <Music className="w-5 h-5 text-gray-500" />
             <div className="flex-1 px-4 text-left overflow-hidden">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Now Playing</p>
                <p className="text-sm font-black text-white whitespace-nowrap overflow-hidden">Quantum Vibe - Akin S. Sokpah (Remix)</p>
             </div>
             <Volume2 className="w-5 h-5 text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeRadio;
