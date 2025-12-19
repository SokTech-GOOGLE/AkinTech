
import React, { useState } from 'react';
import { Sparkles, Mail, Lock, User as UserIcon, ArrowRight, Github } from 'lucide-react';
import { authService } from '../services/authService';
import { User } from '../types';

interface AuthProps {
  onAuthSuccess: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', handle: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const user = authService.signin(formData.email);
      if (user) onAuthSuccess(user);
      else alert('User not found. Please sign up!');
    } else {
      const user = authService.signup(formData.name, formData.email, formData.handle);
      onAuthSuccess(user);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#010309]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="glass-panel w-full max-w-md rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl border-white/10 animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/20">
            <Sparkles className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter mb-2">
            {isLogin ? 'Welcome Back' : 'Join the Nexus'}
          </h2>
          <p className="text-gray-500 text-sm font-medium">The future of social connection starts here.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-purple-500">@</span>
                <input 
                  type="text" 
                  placeholder="Handle" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, handle: e.target.value})}
                />
              </div>
            </>
          )}
          
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 active:scale-95 transition-all shadow-xl">
            {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-purple-400 font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
          <div className="flex gap-4">
             <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5">
                <Github className="w-5 h-5" />
             </button>
             <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5">
                <Github className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
