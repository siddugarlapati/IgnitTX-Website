
import React, { useState } from 'react';
import { ROADMAPS } from '../data';

const Roadmaps: React.FC = () => {
  const [activeId, setActiveId] = useState(ROADMAPS[0].id);
  const selected = ROADMAPS.find(r => r.id === activeId) || ROADMAPS[0];

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      {/* Background Decor - Only on larger screens */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <div className="text-[20rem] font-black text-white leading-none tracking-tighter uppercase">PATH</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-8 lg:pt-0">
        <div className="mb-12 md:mb-20 reveal">
          <span className="text-yellow-400 text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4 block">Industry_Mapping_v6.0</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight md:leading-none tracking-tighter mb-6 md:mb-8 font-heading">
            THE_<span className="italic text-yellow-400 text-glow-yellow">ROADMAPS</span>
          </h1>
          <p className="text-white/40 text-base md:text-2xl font-light leading-relaxed max-w-2xl">
            Select your discipline. We define the trajectory. No fluff, just the engineering standards required by the top 1% of the industry.
          </p>
        </div>

        {/* Path Selector - Horizontal Scroll for Mobile Consistency */}
        <div className="flex overflow-x-auto gap-3 md:gap-4 mb-12 md:mb-20 pb-4 reveal no-scrollbar mask-fade-right scroll-smooth">
          {ROADMAPS.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveId(r.id)}
              className={`px-6 md:px-8 py-3 rounded-full font-bold text-[9px] md:text-[10px] tracking-widest transition-all border whitespace-nowrap shrink-0 ${
                activeId === r.id 
                  ? 'bg-yellow-400 text-black border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)]' 
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30'
              }`}
            >
              {r.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 lg:gap-20 items-start">
          
          {/* Vertical Path Display */}
          <div className="lg:col-span-8 space-y-10 md:space-y-20 relative">
            {/* Connector Line - Hidden on very small screens to save space */}
            <div className="absolute left-[23px] sm:left-[39px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-yellow-400/30 via-white/5 to-transparent hidden sm:block"></div>

            {selected.steps.map((step, idx) => (
              <div key={idx} className="relative pl-0 sm:pl-16 md:pl-24 reveal group" style={{ animationDelay: `${idx * 0.1}s` }}>
                
                {/* Node Dot */}
                <div className="absolute left-[12px] md:left-[20px] top-2 hidden sm:flex items-center justify-center w-10 h-10 bg-black border-2 border-yellow-400/50 rounded-full z-10 group-hover:scale-110 transition-transform duration-500">
                  <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-yellow-400 shadow-[0_0_10px_#FACC15]' : 'bg-white/10'}`}></div>
                </div>

                <div className="glass-pill border-none p-6 md:p-12 rounded-[20px] md:rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all overflow-hidden relative">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
                    <div>
                      <span className="text-[9px] md:text-[10px] font-bold text-yellow-400 tracking-[0.3em] uppercase mb-1 md:mb-2 block opacity-60">Phase_0{idx + 1}</span>
                      <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight font-heading">{step.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {step.tools.map(tool => (
                        <span key={tool} className="px-2 py-1 bg-black/40 border border-white/10 rounded-md text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-tighter">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/30 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-10 max-w-xl">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-3 text-yellow-400/40">
                    <div className="w-1.5 h-1.5 bg-yellow-400/40 rounded-full"></div>
                    <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase">Architecture_Locked</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed/Sticky Insights Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6 md:space-y-8">
            <div className="glass-pill p-8 md:p-10 border-none rounded-[20px] md:rounded-[40px] bg-yellow-400 text-black">
              <h4 className="text-lg md:text-2xl font-black mb-6 tracking-tighter font-heading uppercase">Module_Analytics</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-1 opacity-50">Mastery_Horizon</div>
                  <div className="text-2xl md:text-3xl font-black">12-18 MONTHS</div>
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-1 opacity-50">Role_Urgency</div>
                  <div className="text-2xl md:text-3xl font-black uppercase">CRITICAL_TIER_1</div>
                </div>
                <div className="pt-6 border-t border-black/10">
                  <p className="text-xs md:text-sm font-medium leading-relaxed italic opacity-80">
                    "This curriculum is synchronized with current architectural requirements at top-tier engineering organizations."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 border border-white/5 rounded-[20px] md:rounded-[40px] bg-white/[0.01]">
              <h5 className="text-[9px] md:text-[10px] font-bold text-white/20 tracking-[0.4em] uppercase mb-4">Foundation_Thesis</h5>
              <p className="text-white/30 text-xs md:text-sm font-light leading-relaxed">
                {selected.relevance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
