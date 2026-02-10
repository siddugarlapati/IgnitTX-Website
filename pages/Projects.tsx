
import React from 'react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="mb-20 flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black text-white mb-6 tracking-tighter">INFRASTRUCTURE</h1>
          <p className="text-yellow-400 font-black tracking-[0.2em] uppercase text-xs">// ACTIVE_DEPLOYS</p>
        </div>
        <div className="hidden lg:block text-right">
          <div className="text-4xl font-black text-white/10 tracking-tighter">002_ACTIVE</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 perspective-1000">
        {PROJECTS.map((p) => (
          <div key={p.id} className="group relative preserve-3d hover:scale-105 transition-all duration-500">
            {/* 3D Background Layer */}
            <div className="absolute inset-0 bg-yellow-400 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
            
            <div className="bg-black border-2 border-white p-10 h-full">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <div className="inline-block px-3 py-1 bg-white text-black text-[10px] font-black mb-4 uppercase tracking-widest">
                    {p.category}
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tighter leading-none">{p.title}</h2>
                </div>
                <div className="w-12 h-12 border-2 border-yellow-400 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-[10px] font-black text-yellow-400 mb-4 tracking-[0.2em] uppercase">Architecture_Problem</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{p.problem}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-[10px] font-black text-yellow-400 mb-4 tracking-[0.2em] uppercase">Stack_Standard</h3>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/20 text-white text-[10px] font-black uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {p.maintainers.map((m, i) => (
                    <div key={m} className="w-8 h-8 rounded-none bg-yellow-400 border border-black flex items-center justify-center text-[8px] font-black text-black">
                      {m.substring(1, 3).toUpperCase()}
                    </div>
                  ))}
                </div>
                <button className="text-xs font-black text-white hover:text-yellow-400 transition-colors uppercase tracking-widest underline decoration-yellow-400 underline-offset-8">
                  ACCESS_CODEBASE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
