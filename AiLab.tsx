
import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Download, Share2, Wand2, Loader2, X } from 'lucide-react';
import { generatePostImage } from '../services/geminiService';

const AiLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    const result = await generatePostImage(prompt);
    setGeneratedImage(result);
    setIsGenerating(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
         <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
            <Sparkles className="text-white w-10 h-10" />
         </div>
         <h2 className="text-5xl font-black mb-4 tracking-tighter">Genius AI Lab</h2>
         <p className="text-gray-400 font-medium text-lg">Powered by Gemini 2.5 Flash • Create without limits.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="glass-panel p-8 rounded-[2.5rem] border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
             <Wand2 className="w-5 h-5 text-purple-400" />
             Dream Forge
          </h3>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic cyberpunk city at sunset with purple neon lights..."
            className="w-full bg-black/40 border border-white/5 rounded-2xl p-6 text-white h-48 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none transition-all mb-6"
          />
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 disabled:opacity-30 disabled:grayscale transition-all shadow-xl active:scale-95"
          >
            {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : <ImageIcon className="w-6 h-6" />}
            {isGenerating ? 'Dreaming...' : 'Forge Image'}
          </button>
        </div>

        <div className="glass-panel p-4 rounded-[2.5rem] border-white/10 shadow-2xl aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
          {generatedImage ? (
            <>
              <img src={generatedImage} className="w-full h-full object-cover rounded-[2rem]" alt="Generated" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 <button className="p-4 bg-white text-black rounded-2xl hover:scale-110 transition-all font-black flex items-center gap-2">
                    <Download className="w-5 h-5" /> Save
                 </button>
                 <button className="p-4 bg-purple-600 text-white rounded-2xl hover:scale-110 transition-all font-black flex items-center gap-2">
                    <Share2 className="w-5 h-5" /> Post
                 </button>
                 <button onClick={() => setGeneratedImage(null)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-xl text-white hover:bg-rose-500">
                    <X className="w-5 h-5" />
                 </button>
              </div>
            </>
          ) : (
            <div className="text-center p-8 opacity-20">
               <ImageIcon className="w-20 h-20 mx-auto mb-4" />
               <p className="font-bold">Your creation will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiLab;
