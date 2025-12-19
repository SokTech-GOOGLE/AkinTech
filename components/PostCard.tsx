
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import { Post } from '../types';
import { summarizePost } from '../services/geminiService';

interface PostCardProps {
  post: Post;
  dataSavingMode: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, dataSavingMode }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleSummarize = async () => {
    if (summary) {
      setSummary(null);
      return;
    }
    setIsSummarizing(true);
    const result = await summarizePost(post.content);
    setSummary(result);
    setIsSummarizing(false);
  };

  return (
    <div className="glass-panel rounded-[2.5rem] p-8 mb-6 border border-white/10 shadow-2xl transition-all hover:border-cyan-500/30 group">
      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-4">
          <div className="relative">
            <img 
              src={post.userAvatar} 
              alt={post.userName} 
              className="w-16 h-16 rounded-[1.25rem] object-cover ring-2 ring-cyan-500/20 group-hover:ring-cyan-500 transition-all shadow-xl"
            />
            {post.isGlobal && (
              <div className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-lg p-1 shadow-lg ring-2 ring-[#010309]">
                <Cpu className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-black text-gray-100 flex items-center gap-2 text-xl tracking-tight">
              {post.userName}
              <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </h3>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{post.timestamp} • Global Nexus Sync</p>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-white/5 p-3 rounded-xl transition-all">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      <div className="mb-8">
        {summary ? (
          <div className="bg-cyan-900/20 border border-cyan-500/30 p-8 rounded-[2rem] flex gap-5 animate-in fade-in zoom-in duration-500 shadow-inner">
            <Zap className="w-7 h-7 text-cyan-400 shrink-0" />
            <p className="text-gray-100 font-bold italic text-lg leading-relaxed">"{summary}"</p>
          </div>
        ) : (
          <p className="text-gray-100 leading-relaxed text-xl whitespace-pre-wrap font-medium">{post.content}</p>
        )}
      </div>

      {post.mediaUrl && !dataSavingMode && (
        <div className="mb-8 rounded-[2.5rem] overflow-hidden ring-1 ring-white/10 shadow-2xl relative">
          <img src={post.mediaUrl} alt="Tech Post" className="w-full h-auto object-cover max-h-[600px] group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      )}

      <div className="flex justify-between items-center pt-6 border-t border-white/5">
        <div className="flex gap-4">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-3 py-4 px-6 rounded-2xl transition-all font-black text-sm ${
              liked ? 'text-rose-500 bg-rose-500/10 shadow-lg shadow-rose-500/10' : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
            <span>{likeCount.toLocaleString()}</span>
          </button>
          
          <button className="flex items-center gap-3 text-gray-500 hover:bg-white/5 hover:text-white py-4 px-6 rounded-2xl transition-all font-black text-sm">
            <MessageCircle className="w-6 h-6" />
            <span>{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-3 text-gray-500 hover:bg-white/5 hover:text-white py-4 px-6 rounded-2xl transition-all font-black text-sm">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        <button 
          onClick={handleSummarize}
          disabled={isSummarizing}
          className={`flex items-center gap-3 py-4 px-8 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all border shadow-lg ${
            summary 
            ? 'bg-cyan-600 text-white border-cyan-500' 
            : 'bg-white/5 text-gray-500 border-white/5 hover:border-cyan-500/50 hover:text-cyan-400'
          }`}
        >
          {isSummarizing ? <Zap className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {isSummarizing ? 'Syncing...' : summary ? 'Full Text' : 'Genius AI'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
