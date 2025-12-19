
import React from 'react';
// Added missing Globe and Video imports
import { Cpu, Zap, ExternalLink, Sparkles, MessageSquare, Image, Code, Globe, Video } from 'lucide-react';

const AI_SITES = [
  { name: "ChatGPT", category: "LLM", desc: "OpenAI's legendary chat interface.", url: "https://chatgpt.com", icon: MessageSquare },
  { name: "Claude", category: "Reasoning", desc: "Anthropic's safety-first genius AI.", url: "https://claude.ai", icon: Zap },
  { name: "Midjourney", category: "Art", desc: "The gold standard for AI art.", url: "https://midjourney.com", icon: Image },
  { name: "Cursor", category: "Coding", desc: "The future of AI-assisted dev.", url: "https://cursor.com", icon: Code },
  { name: "Perplexity", category: "Search", desc: "Conversational answer engine.", url: "https://perplexity.ai", icon: Globe },
  { name: "Sora", category: "Video", desc: "Realistic text-to-video magic.", url: "https://openai.com/sora", icon: Video }
];

const AiDirectory: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
         <div className="w-20 h-20 bg-cyan-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-2xl">
            <Sparkles className="w-10 h-10" />
         </div>
         <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">AI Nexus Directory</h2>
         <p className="text-gray-400 text-lg">Every leading AI platform, accessible from one hub.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_SITES.map((site, i) => (
          <a 
            key={i} 
            href={site.url} 
            target="_blank" 
            className="glass-panel p-8 rounded-[2.5rem] border-white/5 hover:border-cyan-500/50 hover:-translate-y-1 transition-all group block"
          >
             <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                   <site.icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-full text-gray-400">{site.category}</span>
             </div>
             <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                {site.name} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </h3>
             <p className="text-gray-500 text-sm leading-relaxed mb-6">{site.desc}</p>
             <div className="pt-4 border-t border-white/5 text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                Connect to Protocol
             </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AiDirectory;
