
import React from 'react';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="relative bg-[#080808] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="orb w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-yellow-400/5 -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="orb w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-white/5 bottom-0 right-0 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-28 md:pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-12 items-center z-10">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/30 text-[8px] md:text-[10px] font-bold tracking-[0.3em] mb-6 md:mb-8 bg-white/5 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#FACC15]"></span>
              Core_Engineering_Foundation
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-6 md:mb-10 leading-[1] md:leading-[0.85] tracking-tighter font-heading">
              SYSTEMS<br />
              <span className="text-yellow-400 italic text-glow-yellow">REDEFINED</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white/30 max-w-xl mb-8 md:mb-12 font-light leading-relaxed">
              Accelerating the transition from academic theory to the high-stakes world of production architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => onNavigate('roadmaps')}
                className="group relative bg-yellow-400 text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-[10px] md:text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/10"
              >
                ACCESS_PATHWAYS
              </button>
              <button 
                onClick={() => onNavigate('opensource')}
                className="group px-8 md:px-12 py-4 md:py-5 rounded-full border border-white/10 text-white/50 font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black hover:border-white transition-all"
              >
                OPEN_SOURCE_LABS
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block perspective-2500">
            <div className="relative preserve-3d animate-float-hero">
              <div className="w-[450px] h-[450px] relative">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-8 border border-yellow-400/10 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 glass-pill flex flex-col items-center justify-center border-yellow-400/20">
                    <div className="text-[10px] font-black tracking-[0.5em] text-yellow-400/60 mb-4">FOUNDATION_IX</div>
                    <div className="text-6xl font-black font-heading text-white">IX.06</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white py-24 md:py-40 px-4 md:px-6 rounded-[30px] md:rounded-[60px] relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight tracking-tighter font-heading mb-6">
              THE <span className="text-yellow-500 italic">IGNITE</span> <br className="hidden md:block"/>TRINITY
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl">
              Engineered environments that automate the acquisition of professional seniority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { t: "AI STUDY", d: "Master low-level kernels completely offline. Zero latency engineering.", c: "OFFLINE_CORE", icon: "⚛️" },
              { t: "BOOSTER", d: "Intelligent recovery for missing knowledge blocks via AI synthesis.", c: "RECOVERY_NODE", icon: "⚡" },
              { t: "MASTERY", d: "Direct senior architect review loops for production-ready code.", c: "SENIOR_LAB", icon: "🛠️" }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-12 border border-slate-100 rounded-[24px] md:rounded-[40px] hover:border-yellow-400/30 transition-all group bg-white hover:shadow-2xl">
                <div className="w-12 h-12 bg-black rounded-xl md:rounded-2xl flex items-center justify-center text-yellow-400 mb-8 transition-transform group-hover:scale-110">
                   {item.icon}
                </div>
                <h3 className="text-[9px] font-bold text-slate-300 tracking-[0.3em] uppercase mb-3">// {item.c}</h3>
                <h4 className="text-2xl md:text-3xl font-black text-black mb-4 tracking-tight font-heading">{item.t}</h4>
                <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-40 bg-[#050505] px-4 md:px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-20">
            {[
              { l: "CONTRIBUTORS", v: "1.4K+" },
              { l: "COMMITS_2025", v: "148K" },
              { l: "PLACEMENT_RT", v: "92%" },
              { l: "ENGINE_V", v: "0.6.1" }
            ].map((stat, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-7xl font-black text-white mb-2 md:mb-4 tracking-tighter font-heading">{stat.v}</div>
                <div className="text-[8px] md:text-[9px] font-bold text-yellow-400 tracking-[0.4em] uppercase opacity-60">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
