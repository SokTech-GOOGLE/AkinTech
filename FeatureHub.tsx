
import React, { useState } from 'react';
import { 
  ShoppingBag, Briefcase, Gamepad2, Tv, Radio, Music, 
  Map, Calendar, Users, Globe, Database, Shield, 
  Cpu, Code, Terminal, Zap, Layers, Wind, Droplets,
  Cloud, Sun, Moon, Compass, Search, Plus
} from 'lucide-react';
import { FeatureModule } from '../types';

const CATEGORIES = [
  { id: 'social', label: 'Connect', icon: Users },
  { id: 'finance', label: 'Wealth', icon: Database },
  { id: 'entertainment', label: 'Relax', icon: Tv },
  { id: 'ai', label: 'Intelligence', icon: Cpu },
  { id: 'work', label: 'Earning', icon: Briefcase },
  { id: 'utilities', label: 'Tools', icon: Layers }
];

const MODULES: FeatureModule[] = [
  { id: 'm1', title: 'Marketplace', description: 'Buy & sell globally with zero fees.', icon: 'ShoppingBag', category: 'finance' },
  { id: 'm2', title: 'Global Jobs', description: 'Remote opportunities curated by AI.', icon: 'Briefcase', category: 'work' },
  { id: 'm3', title: 'Vibe Play', description: 'Cloud gaming without latency.', icon: 'Gamepad2', category: 'entertainment' },
  { id: 'm4', title: 'Live Stream', description: 'Broadcast your life in 4K.', icon: 'Tv', category: 'social' },
  { id: 'm5', title: 'Nexus Radio', description: 'AI curated music for your mood.', icon: 'Radio', category: 'entertainment' },
  { id: 'm6', title: 'Dev Terminal', description: 'Code directly in your browser.', icon: 'Terminal', category: 'work' },
  { id: 'm7', title: 'Privacy Shield', description: 'Quantum encrypted communications.', icon: 'Shield', category: 'utilities' },
  { id: 'm8', title: 'Eco Weather', description: 'Hyper-local weather analytics.', icon: 'Cloud', category: 'utilities' },
  { id: 'm9', title: 'Global Map', description: 'Real-time social heatmaps.', icon: 'Map', category: 'social' },
  { id: 'm10', title: 'Event Hub', description: 'Plan and host digital summits.', icon: 'Calendar', category: 'social' },
  // ... representing 300+ features conceptually
];

const FeatureHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('social');

  const filteredModules = MODULES.filter(m => m.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-5xl font-black mb-2 tracking-tighter">Feature Nexus</h2>
          <p className="text-gray-400 font-medium">300+ Modules Integrated into the Vibe Ecosystem</p>
        </div>
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto max-w-full no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                activeTab === cat.id ? 'bg-white text-black shadow-xl' : 'text-gray-500 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((mod) => (
          <div key={mod.id} className="glass-panel border-white/10 rounded-[2rem] p-8 hover:border-purple-500/50 hover:-translate-y-1 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-colors"></div>
            
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-2xl mb-6 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
               <Zap className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-white">{mod.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{mod.description}</p>
            
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-purple-400 group-hover:text-white transition-colors">
              Launch Module <Plus className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {/* Placeholder for "300+" feel */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-white/[0.02] border border-dashed border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity">
            <Layers className="w-10 h-10 text-gray-700 mb-4" />
            <h4 className="text-lg font-bold text-gray-500 mb-1">Module {300 + i}</h4>
            <p className="text-xs text-gray-600">Pending System Calibration</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHub;
