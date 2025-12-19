
import React from 'react';
import { Heart, MessageCircle, Share2, Music, UserPlus } from 'lucide-react';

const CLIPS = [
  { id: 1, user: 'Akin S.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Akin', likes: '245k', music: 'Vibe Original Audio', video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-lighting-sitting-in-a-cyberpunk-room-34538-large.mp4' },
  { id: 2, user: 'CyberP', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cyber', likes: '102k', music: 'Synthwave Dreams', video: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-with-neon-lighting-on-his-face-34539-large.mp4' },
  { id: 3, user: 'Nova_01', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nova', likes: '89k', music: 'Midnight Sky', video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-neon-laser-lights-background-34524-large.mp4' }
];

const VibeClips: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] overflow-y-scroll snap-y snap-mandatory no-scrollbar w-full max-w-md mx-auto rounded-[2rem] bg-black border border-white/5 relative shadow-2xl">
      {CLIPS.map((clip) => (
        <div key={clip.id} className="h-full w-full snap-start relative group">
          <video 
            src={clip.video} 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>

          {/* Sidebar Actions */}
          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
             <div className="relative mb-4">
                <img src={clip.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-xl" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-rose-500 rounded-full p-0.5">
                   <UserPlus className="w-3 h-3 text-white" />
                </div>
             </div>
             <button className="flex flex-col items-center gap-1">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-rose-500 transition-all">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-white shadow-sm">{clip.likes}</span>
             </button>
             <button className="flex flex-col items-center gap-1">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-white shadow-sm">1.2k</span>
             </button>
             <button className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                <Share2 className="w-6 h-6 text-white" />
             </button>
             <div className="w-12 h-12 bg-gray-800 rounded-full border-4 border-white/20 animate-spin-slow overflow-hidden">
                <img src={clip.avatar} className="w-full h-full object-cover opacity-50" />
             </div>
          </div>

          {/* Info Area */}
          <div className="absolute left-4 bottom-8 right-16 z-10">
             <h4 className="font-black text-xl text-white mb-2">@{clip.user}</h4>
             <p className="text-sm text-gray-200 mb-4 line-clamp-2">Exploring the Vibe Nexus. This is the future of entertainment! #Vibe #NextGen #GeniusApp</p>
             <div className="flex items-center gap-2 overflow-hidden bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                <Music className="w-4 h-4 text-white shrink-0 animate-pulse" />
                <p className="text-xs text-white font-bold whitespace-nowrap animate-marquee">{clip.music}</p>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VibeClips;
