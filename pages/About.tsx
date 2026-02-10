
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080808] py-32 px-6">
      <div className="max-w-4xl mx-auto reveal">
        <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">The_Vision_01</span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter font-heading leading-none">THE_<span className="italic text-yellow-400">MANIFESTO</span></h1>
        
        <div className="space-y-24">
          <section className="relative">
            <h2 className="text-2xl font-bold mb-8 text-white font-heading tracking-tight border-l-2 border-yellow-400 pl-8">Why IgniteXT?</h2>
            <p className="text-white/40 leading-relaxed text-xl font-light italic">
              Engineering is not just about writing code; it's about making trade-offs, managing complexity, and ensuring long-term maintainability. Traditional college curricula often focus on the "what" but rarely the "how" of professional engineering. IgniteXT was founded to solve this gap.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-white font-heading tracking-tight border-l-2 border-yellow-400 pl-8">The Philosophy</h2>
            <div className="grid md:grid-cols-1 gap-12">
               {[
                 { t: "Open-Source First", d: "Every internal tool we build is public. Contribution isn't just encouraged; it's the primary way we learn." },
                 { t: "Merit-Based Progression", d: "Maintainer status is earned through consistent high-quality PRs and participation in technical RFCs." },
                 { t: "AI-Augmented Workflows", d: "We leverage LLMs not to replace thought, but to automate the mundane, allowing focus on architecture." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-10 group">
                    <span className="text-5xl font-black text-white/5 font-heading group-hover:text-yellow-400 transition-colors">0{i+1}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.t}</h3>
                      <p className="text-white/30 text-lg font-light leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          <section className="glass-pill p-12 md:p-16 border-none rounded-[40px] bg-white/5">
            <h2 className="text-3xl font-bold mb-6 text-white font-heading">The 5-Year Outlook</h2>
            <p className="text-white/40 leading-relaxed mb-8 text-lg font-light">
              We are building a decentralized engineering foundation. In five years, an IgniteXT certification should carry more weight than a traditional degree because it proves you have shipped production code in a high-stakes open-source environment.
            </p>
            <div className="h-[1px] w-24 bg-yellow-400"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
