
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostCard from './components/PostCard';
import SupportCenter from './components/SupportCenter';
import FeatureHub from './components/FeatureHub';
import Auth from './components/Auth';
import AiLab from './components/AiLab';
import ToolVault from './components/ToolVault';
import CourseHub from './components/CourseHub';
import LiveStream from './components/LiveStream';
import AiDirectory from './components/AiDirectory';
import { Post, AppView, User } from './types';
import { authService } from './services/authService';
import { getLiveTechPulse } from './services/geminiService';
import { Search, Send, Image as ImageIcon, Video, Sparkles, Globe, Heart, X, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

const INITIAL_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    userName: 'Akin S. Sokpah',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Akin',
    content: 'AkinTech 4.0 is officially active. We have upgraded the Virtual Wallet to include a verified $100.00 test balance and integrated real-time tech pulses. This is engineering at its peak.\n\nContribute to the vision: +231889183557 (MoMo)',
    timestamp: 'Just now',
    likes: 84200,
    comments: 3100,
    shares: 4200,
    isGlobal: true,
    mediaUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  }
];

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<AppView>('feed');
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [postContent, setPostContent] = useState('');
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsPulse, setNewsPulse] = useState<string[]>([]);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) setCurrentUser(user);
    setIsLoaded(true);

    const loadPulse = async () => {
      const news = await getLiveTechPulse();
      setNewsPulse(news);
    };
    loadPulse();

    const reminder = setTimeout(() => {
      if (user) setShowSupportModal(true);
    }, 60000);
    return () => clearTimeout(reminder);
  }, []);

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setView('feed');
  };

  const handlePost = () => {
    if (!postContent.trim() || !currentUser) return;
    const newPost: Post = {
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content: postContent,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
      isGlobal: true
    };
    setPosts([newPost, ...posts]);
    setPostContent('');
  };

  if (!isLoaded) return null;
  if (!currentUser) return <Auth onAuthSuccess={handleAuthSuccess} />;

  const renderContent = () => {
    switch (view) {
      case 'feed':
        return (
          <div className="max-w-2xl mx-auto pt-4 pb-32">
            {/* Real-time News Pulse */}
            <div className="bg-[#0a0d14] border border-white/5 rounded-2xl p-4 mb-8 overflow-hidden relative shadow-xl">
               <div className="flex items-center gap-3 relative z-10 bg-[#0a0d14]">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mr-4">Live Pulse:</span>
               </div>
               <div className="absolute top-4 left-32 right-0 whitespace-nowrap animate-marquee">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex gap-20">
                     {newsPulse.map((n, i) => <span key={i}>• {n}</span>)}
                     {newsPulse.map((n, i) => <span key={i + 10}>• {n}</span>)}
                  </p>
               </div>
            </div>

            <div className="glass-panel rounded-[2.5rem] p-8 mb-10 border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
               <div className="flex gap-4 mb-6">
                  <img src={currentUser.avatar} className="w-16 h-16 rounded-2xl ring-2 ring-cyan-500/20 shadow-xl" alt="Avatar" />
                  <textarea 
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder={`Initialize broadcast, ${currentUser.name.split(' ')[0]}...`}
                    className="w-full bg-white/5 rounded-[1.5rem] p-6 text-white placeholder-gray-500 border border-white/5 focus:outline-none focus:border-cyan-500/50 resize-none h-32 transition-all font-medium text-lg"
                  />
               </div>
               <div className="flex justify-between items-center pt-6 border-t border-white/5">
                 <div className="flex gap-4">
                    <button onClick={() => setView('ai-lab')} className="p-4 bg-white/5 rounded-2xl hover:bg-cyan-500/20 text-gray-500 hover:text-cyan-400 transition-all"><Sparkles className="w-6 h-6" /></button>
                    <button onClick={() => setView('live')} className="p-4 bg-white/5 rounded-2xl hover:bg-rose-500/20 text-gray-500 hover:text-rose-400 transition-all"><Video className="w-6 h-6" /></button>
                    <button className="p-4 bg-white/5 rounded-2xl hover:bg-amber-500/20 text-gray-500 hover:text-amber-400 transition-all"><ImageIcon className="w-6 h-6" /></button>
                 </div>
                 <button 
                  onClick={handlePost}
                  disabled={!postContent.trim()}
                  className="bg-white text-black font-black px-12 py-4.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-30 flex items-center gap-3 uppercase tracking-[0.25em] text-xs"
                 >
                   Sync to Nexus <Send className="w-4 h-4" />
                 </button>
               </div>
            </div>

            <div className="space-y-10">
              {posts.map(post => <PostCard key={post.id} post={post} dataSavingMode={false} />)}
            </div>
          </div>
        );
      case 'vault': return <ToolVault />;
      case 'courses':
      case 'scholarships': return <CourseHub />;
      case 'live': return <LiveStream />;
      case 'ai-directory': return <AiDirectory />;
      case 'visa-gen': return <ToolVault />; 
      case 'ai-lab': return <AiLab />;
      case 'support': return <SupportCenter />;
      case 'profile':
        return (
          <div className="max-w-4xl mx-auto py-12 px-4">
             <div className="glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-950"></div>
                <div className="relative z-10 pt-20">
                   <img src={currentUser.avatar} className="w-44 h-44 rounded-[3rem] mx-auto border-8 border-[#010309] shadow-2xl mb-8 ring-1 ring-cyan-500/30" alt="Avatar" />
                   <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase text-white">{currentUser.name}</h2>
                   <p className="text-cyan-400 font-black mb-10 uppercase tracking-[0.4em] text-xs">{currentUser.handle}</p>
                   
                   <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                      <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 shadow-inner">
                        <p className="text-3xl font-black text-white">{currentUser.impactScore}</p>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2">Impact Score</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 shadow-inner">
                        <div className="flex items-center justify-center gap-2 mb-1">
                           <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                           <p className="text-3xl font-black text-cyan-400">Genius</p>
                        </div>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">Node Level</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 shadow-inner">
                        <p className="text-3xl font-black text-green-500">${currentUser.balance + 100}</p>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2">Total Funds</p>
                      </div>
                   </div>
                   
                   <div className="flex justify-center gap-6">
                      <button className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-[0.2em] shadow-2xl">Edit Profile</button>
                      <button onClick={() => authService.logout()} className="px-12 py-5 bg-rose-600/10 text-rose-500 font-black rounded-2xl border border-rose-600/20 hover:bg-rose-500 hover:text-white transition-all text-xs uppercase tracking-[0.2em]">Sign Out</button>
                   </div>
                </div>
             </div>
          </div>
        );
      default: return <div className="p-12 text-center text-gray-500 font-black tracking-widest animate-pulse uppercase">AkinTech Synchronizing...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#010309] text-gray-100 selection:bg-cyan-500/50">
      <Navigation currentView={view} setView={setView} />
      
      <header className="fixed top-0 left-0 w-full glass-panel border-b border-white/5 h-20 flex items-center justify-between px-8 z-40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 px-5 py-2.5 bg-cyan-600/10 border border-cyan-500/20 rounded-xl">
             <div className="relative">
                <Globe className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse border border-[#010309]"></div>
             </div>
             <span className="text-[10px] font-black text-white uppercase tracking-[0.25em] hidden sm:inline">AkinTech Global Engineering</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex bg-white/5 border border-white/5 rounded-2xl px-6 py-3 items-center gap-4 w-80 transition-all focus-within:w-96 focus-within:bg-white/10">
            <Search className="w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Search protocol..." className="bg-transparent border-none focus:outline-none text-xs w-full text-white" />
          </div>
          <div className="h-10 w-[1px] bg-white/10"></div>
          <button onClick={() => setView('profile')} className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/5 hover:ring-cyan-500 transition-all shadow-xl">
            <img src={currentUser.avatar} className="w-full h-full object-cover" alt="Profile" />
          </button>
        </div>
      </header>

      <main className="pt-24 md:pl-20 lg:pl-64 min-h-screen">
        <div className="container mx-auto max-w-6xl px-4">{renderContent()}</div>
      </main>

      {showSupportModal && (
        <div className="fixed bottom-8 right-8 z-[100] animate-in slide-in-from-right duration-700">
           <div className="glass-panel border-cyan-500/50 rounded-[2.5rem] p-10 shadow-[0_0_100px_rgba(8,145,178,0.2)] max-w-sm relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
             <button onClick={() => setShowSupportModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
             <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h4 className="text-3xl font-black mb-4 tracking-tighter">Verified Creator</h4>
             <p className="text-sm text-gray-400 mb-8 leading-relaxed font-medium italic">"Empowering the global South through real-time engineering and accessibility." — <span className="text-white font-bold">Akin S. Sokpah</span></p>
             <div className="space-y-4 mb-8">
               <div className="flex justify-between p-5 bg-black/40 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-xs text-gray-500 font-black tracking-widest uppercase">MoMo</span> 
                  <span className="text-sm font-black text-cyan-400">+231889183557</span>
               </div>
             </div>
             <button onClick={() => { setView('support'); setShowSupportModal(false); }} className="w-full bg-cyan-600 text-white font-black py-5 rounded-2xl text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-cyan-500 transition-all active:scale-95">Open Support Portal</button>
           </div>
        </div>
      )}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
