
import React, { useState, useEffect } from 'react';
import { AI_TOOLS } from '../data';
import { GoogleGenAI } from "@google/genai";

const AISynth: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [orbRotation, setOrbRotation] = useState(0);
  // Added state for Gemini AI interaction
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisOutput, setSynthesisOutput] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbRotation(prev => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const activeTool = AI_TOOLS[activeIndex];

  // Added handler for AI synthesis using Google Gemini API
  const handleSynthesize = async () => {
    setIsSynthesizing(true);
    setSynthesisOutput(null);
    try {
      // Create a new instance right before use to ensure latest configuration
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior engineering architect. Synthesize a deep-dive technical summary for the IgniteXT module: "${activeTool.title}". 
        The focus is: ${activeTool.capability}. 
        Provide a concise, high-level architecture overview and one critical engineering trade-off for this system.`,
      });
      
      // Correctly access the .text property from GenerateContentResponse
      setSynthesisOutput(response.text || "Synthesis engine returned empty response.");
    } catch (error) {
      console.error("AI Synthesis Error:", error);
      setSynthesisOutput("Neural synchronization failed. Please check the network connectivity or API configuration.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-32 px-10">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="orb w-[1000px] h-[1000px] bg-yellow-400/5 -top-1/2 left-0 animate-pulse"></div>
        <div className="orb w-[1000px] h-[1000px] bg-white/5 -bottom-1/2 right-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 flex flex-col lg:flex-row justify-between items-end gap-12 reveal">
          <div className="max-w-3xl">
            <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Synthetic_Environment_v3.2</span>
            <h1 className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-10 font-heading">
              AI_<span className="italic text-yellow-400 text-glow-yellow">SYNTH</span>
            </h1>
            <p className="text-white/40 text-2xl font-light leading-relaxed max-w-2xl italic">
              "We don't use AI to replace thoughts; we use it to synthesize engineering reality."
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-[9px] font-bold text-white/30 tracking-[0.4em] uppercase mb-2">Neural_Status</div>
             <div className="text-xl font-bold text-yellow-400 tracking-widest font-heading">SYNCHRONIZED</div>
          </div>
        </div>

        {/* Immersive 3D Lab View */}
        <div className="grid lg:grid-cols-2 gap-32 items-center min-h-[600px]">
          
          {/* Abstract Designer Visualizer */}
          <div className="relative aspect-square flex items-center justify-center perspective-2500 reveal" style={{ animationDelay: '0.2s' }}>
            <div 
              className="relative w-full h-full preserve-3d" 
              style={{ transform: `rotateY(${orbRotation}deg) rotateX(15deg)` }}
            >
              {/* Central Neural Pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border-[0.5px] border-yellow-400/30 rounded-full shadow-[0_0_100px_rgba(250,204,21,0.1)]"></div>
                <div className="absolute w-64 h-64 border-[0.5px] border-white/10 rounded-full transform rotateX(75deg)"></div>
                <div className="absolute w-64 h-64 border-[0.5px] border-white/10 rounded-full transform rotateY(75deg)"></div>
              </div>

              {/* Orbiting App Nodes */}
              {AI_TOOLS.map((tool, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={tool.id}
                    className={`absolute left-1/2 top-1/2 w-6 h-6 transition-all duration-700 cursor-pointer ${
                      isActive ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      transform: `rotateY(${idx * 120}deg) translateZ(300px)`,
                    }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-500 ${
                      isActive ? 'bg-yellow-400 scale-150 shadow-[0_0_30px_#FACC15]' : 'bg-white/30 hover:bg-white/60'
                    }`}></div>
                    <div className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-500 ${
                      isActive ? 'text-yellow-400 opacity-100 scale-110' : 'text-white/20 opacity-0'
                    }`}>
                      {tool.id.replace(/-/g, '_')}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Technical Detail Overlays */}
            <div className="absolute bottom-0 right-0 p-10 glass-pill border-none rounded-[40px] translate-x-10 translate-y-10 animate-float-hero shadow-2xl min-w-[300px]">
               {isSynthesizing ? (
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-[10px] font-black tracking-widest text-white uppercase animate-pulse">SYNTHESIZING_NODE...</span>
                 </div>
               ) : synthesisOutput ? (
                 <div className="max-h-[300px] overflow-y-auto no-scrollbar">
                   <div className="flex gap-4 items-center mb-4">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                     <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">SYNTH_RESULT_V3.01</span>
                   </div>
                   <p className="text-white/70 text-xs leading-relaxed font-mono">
                     {synthesisOutput}
                   </p>
                   <button 
                     onClick={() => setSynthesisOutput(null)}
                     className="mt-6 text-[9px] font-bold text-yellow-400 hover:text-white transition-colors tracking-widest uppercase"
                   >
                     [ CLOSE_NODE ]
                   </button>
                 </div>
               ) : (
                 <>
                   <div className="flex gap-4 items-center mb-6">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full pulse-ring"></div>
                     <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Process_Validation</span>
                   </div>
                   <div className="space-y-4">
                     <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 w-4/5"></div>
                     </div>
                     <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/40 w-2/3"></div>
                     </div>
                   </div>
                 </>
               )}
            </div>
          </div>

          {/* Designer Information Panel */}
          <div className="flex flex-col justify-center space-y-16 reveal" style={{ animationDelay: '0.4s' }}>
            {AI_TOOLS.map((tool, idx) => (
              <div 
                key={tool.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group cursor-pointer transition-all duration-700 relative pl-12 border-l-2 ${
                  activeIndex === idx ? 'border-yellow-400' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-6 mb-4">
                   <span className={`text-[11px] font-black tracking-[0.3em] transition-colors ${
                     activeIndex === idx ? 'text-yellow-400' : 'text-white/20'
                   }`}>0{idx + 1} // MODULE</span>
                </div>
                <h2 className={`text-4xl font-bold tracking-tighter mb-6 font-heading transition-colors ${
                  activeIndex === idx ? 'text-white' : 'text-white/20'
                }`}>
                  {tool.title}
                </h2>
                <div className={`transition-all duration-700 overflow-hidden ${
                  activeIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-white/40 text-xl font-light leading-relaxed mb-8 pr-12">
                    {tool.capability}
                  </p>
                  <div className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                     <span className="text-[10px] font-bold text-yellow-400 tracking-[0.3em] uppercase">{tool.outcome}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-12">
               <button 
                 onClick={handleSynthesize}
                 disabled={isSynthesizing}
                 className="bg-white text-black px-16 py-5 rounded-full font-bold text-[11px] tracking-[0.4em] hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isSynthesizing ? 'INITIALIZING_SYNTHESIS...' : 'ACCESS_BETA_V3'}
               </button>
            </div>
          </div>
        </div>

        {/* Aesthetic Lab Footer */}
        <div className="mt-48 border-t border-white/5 pt-20 flex flex-wrap justify-between items-center gap-12 opacity-40">
           {[
             { label: "NEURAL_NODES", value: "0x12F.A9" },
             { label: "CORE_EFFICIENCY", value: "98.92%" },
             { label: "DATA_PARITY", value: "SYNCHED" },
             { label: "KERNEL_LOAD", value: "NOMINAL" }
           ].map((item, i) => (
             <div key={i} className="flex flex-col">
                <span className="text-[9px] font-bold tracking-[0.4em] mb-2">{item.label}</span>
                <span className="text-xl font-bold font-heading text-white">{item.value}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AISynth;
