
import React from 'react';
import { WORKSHOPS } from '../data';

const Workshops: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Hands-on Bootcamps</h1>
        <p className="text-slate-500 text-lg">Intensive technical sessions focused on building, not just listening.</p>
      </div>

      <div className="space-y-6">
        {WORKSHOPS.map((w) => (
          <div key={w.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-slate-400 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">{w.title}</h2>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">{w.duration}</span>
              </div>
              <p className="text-slate-600 mb-6 font-medium">Outcome: {w.outcome}</p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Prerequisites</h3>
                   <ul className="space-y-1">
                     {w.prerequisites.map(p => (
                       <li key={p} className="text-sm text-slate-500 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> {p}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
            
            <div className="flex md:flex-col gap-3 w-full md:w-auto">
              <button className="flex-1 md:w-48 bg-slate-900 text-white py-3 rounded-lg font-bold text-sm">Register Interest</button>
              <a 
                href={w.github} 
                className="flex-1 md:w-48 bg-white border border-slate-200 text-slate-900 py-3 rounded-lg font-bold text-sm text-center"
              >
                Curriculum Repo
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center p-12 bg-slate-900 text-white rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Want to mentor a workshop?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">We are always looking for senior engineers to share knowledge on specialized topics. Mentors receive full platform support and infrastructure resources.</p>
        <button className="bg-white text-slate-900 px-10 py-3 rounded-full font-bold">Apply as Mentor</button>
      </div>
    </div>
  );
};

export default Workshops;
