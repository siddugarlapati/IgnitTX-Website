import React, { useState } from 'react';
import { ROADMAPS } from '../data';

const Roadmaps: React.FC = () => {
  const [activeId, setActiveId] = useState(ROADMAPS[0].id);
  const [showResources, setShowResources] = useState(false);
  const selected = ROADMAPS.find(r => r.id === activeId) || ROADMAPS[0];

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      {/* Background Decor */}
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

        {/* Path Selector with Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-20">
          <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 reveal no-scrollbar mask-fade-right scroll-smooth w-full md:w-auto">
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

          {/* Toggle Button */}
          <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setShowResources(false)}
              className={`px-6 py-2 rounded-full font-bold text-[9px] tracking-widest transition-all ${
                !showResources 
                  ? 'bg-yellow-400 text-black' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              ROADMAP
            </button>
            <button
              onClick={() => setShowResources(true)}
              className={`px-6 py-2 rounded-full font-bold text-[9px] tracking-widest transition-all ${
                showResources 
                  ? 'bg-yellow-400 text-black' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              RESOURCES
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 lg:gap-20 items-start">
          
          {/* Conditional Content - Roadmap or Resources */}
          <div className="lg:col-span-8">
            {!showResources ? (
              // Roadmap View
              <div className="space-y-10 md:space-y-20 relative">
                <div className="absolute left-[23px] sm:left-[39px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-yellow-400/30 via-white/5 to-transparent hidden sm:block"></div>

                {selected.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-0 sm:pl-16 md:pl-24 reveal group" style={{ animationDelay: `${idx * 0.1}s` }}>
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
            ) : (
              // Resources View
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 font-heading tracking-tight">
                  Learning <span className="text-yellow-400">Resources</span>
                </h2>
                
                {selected.resources && selected.resources.length > 0 ? (
                  <div className="grid gap-6">
                    {selected.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-yellow-400/30 transition-all group"
                      >
                        <div className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-tight group-hover:text-yellow-400 transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-3">
                              {resource.description}
                            </p>
                            <div className="flex items-center gap-2 text-yellow-400/60 text-xs font-mono">
                              <span>{resource.url}</span>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-16 border border-white/10 rounded-3xl bg-white/[0.02] text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white/40 mb-3">Resources Coming Soon</h3>
                    <p className="text-white/20 text-sm">
                      We're curating the best learning resources for this roadmap.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Fixed/Sticky Resources Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6 md:space-y-8">
            
            {/* GitHub Resources - Main Box */}
            <div className="p-8 md:p-10 border border-white/5 rounded-[20px] md:rounded-[40px] bg-white/[0.01]">
              <h4 className="text-lg md:text-2xl font-black mb-6 tracking-tight font-heading text-white">GitHub Resources</h4>
              {selected.resources && selected.resources.length > 0 ? (
                <div className="space-y-4">
                  {selected.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-yellow-400/30 rounded-xl transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="text-sm font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                            {resource.title}
                          </h6>
                          <p className="text-[10px] text-white/40 leading-relaxed line-clamp-2">
                            {resource.description}
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-white/20 group-hover:text-yellow-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-white/20 text-xs italic">Resources coming soon...</p>
              )}
            </div>

            {/* Duration Info - Compact */}
            <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-white/30 uppercase tracking-wider mb-1">Duration</div>
                  <div className="text-lg font-bold text-yellow-400">{selected.duration || '12-18 months'}</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider mb-1">Demand</div>
                  <div className="text-lg font-bold text-yellow-400">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
