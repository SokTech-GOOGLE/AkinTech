
import React from 'react';
import { 
  Home, Play, Radio, Gamepad2, Sparkles, Heart, User, 
  LayoutGrid, GraduationCap, Briefcase, ShieldAlert, 
  Globe, Video, CreditCard, Cpu, BookOpen 
} from 'lucide-react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'feed', icon: Home, label: 'Feed' },
    { id: 'live', icon: Video, label: 'Live Stream' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'scholarships', icon: GraduationCap, label: 'Scholarships' },
    { id: 'vault', icon: ShieldAlert, label: 'FRP Vault' },
    { id: 'ai-directory', icon: Cpu, label: 'AI Directory' },
    { id: 'visa-gen', icon: CreditCard, label: 'Visa Gen' },
    { id: 'ai-lab', icon: Sparkles, label: 'AI Lab' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-20 lg:w-64 glass-panel border-r border-white/5 p-4 z-50 shadow-2xl">
        <div className="flex items-center gap-3 px-4 mb-8 mt-2 cursor-pointer" onClick={() => setView('feed')}>
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="hidden lg:block font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            AKINTECH
          </span>
        </div>

        <div className="space-y-1 overflow-y-auto no-scrollbar pb-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id as AppView)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                currentView === item.id 
                  ? 'bg-white text-black shadow-2xl scale-[1.02]' 
                  : 'text-gray-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-cyan-600' : 'group-hover:scale-110 transition-transform'}`} />
              <span className={`hidden lg:block text-xs font-bold tracking-tight uppercase ${currentView === item.id ? 'text-black' : 'text-gray-400 group-hover:text-white'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-white/5">
          <button 
            onClick={() => setView('support')}
            className="w-full flex items-center gap-4 px-4 py-3 bg-cyan-600/10 border border-cyan-500/20 rounded-2xl text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all group"
          >
             <Heart className="w-5 h-5" />
             <span className="hidden lg:block text-[10px] font-black uppercase tracking-widest">Support Tech</span>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass-panel border-t border-white/5 flex justify-around items-center h-20 px-2 z-50 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        {[navItems[0], navItems[1], navItems[2], navItems[4], navItems[8]].map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id as AppView)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all flex-1 ${
              currentView === item.id ? 'text-white' : 'text-gray-500'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-cyan-400' : ''}`} />
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
