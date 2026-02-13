import React from 'react';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="relative bg-[#080808] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="orb w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-yellow-400/5 -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="orb w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-white/5 bottom-0 right-0 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-28 md:pt-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/30 text-[8px] md:text-[10px] font-bold tracking-[0.3em] mb-6 md:mb-8 bg-white/5 uppercase reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#FACC15]"></span>
            Engineering_Ecosystem
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tighter font-heading reveal">
            ENGINEERING.<br />
            <span className="text-yellow-400 italic text-glow-yellow">CLARIFIED.</span><br />
            EXECUTED.
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/40 max-w-4xl mx-auto mb-8 md:mb-12 font-light leading-relaxed reveal">
            IgniteXT is an  engineering ecosystem helping students clear backlogs, 
            master core subjects, build real-world projects, and become industry-ready developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center reveal">
            <button 
              onClick={() => onNavigate('roadmaps')}
              className="group relative bg-yellow-400 text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-[10px] md:text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/10"
            >
              EXPLORE_ROADMAPS
            </button>
            <button 
              onClick={() => onNavigate('contribute')}
              className="group px-8 md:px-12 py-4 md:py-5 rounded-full border border-white/10 text-white/50 font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black hover:border-white transition-all"
            >
              JOIN_IGNITEXT
            </button>
          </div>
        </div>
      </section>

      {/* What IgniteXT Actually Does */}
      <section className="relative py-24 md:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center reveal">
            <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">System_Architecture</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter font-heading mb-6">
              WHAT IGNITEXT <span className="text-yellow-400 italic">ACTUALLY DOES</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Academic Recovery */}
            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.04] transition-all group reveal">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[9px] font-bold text-yellow-400/60 tracking-[0.3em] uppercase mb-3">// RECOVERY_SYSTEM</h3>
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight font-heading">Academic Recovery</h4>
              <ul className="space-y-2 text-sm text-white/40 font-light">
                <li>• Backlog clearance support</li>
                <li>• Concept simplification</li>
                <li>• Exam preparation</li>
                <li>• One-to-one doubt resolution</li>
              </ul>
            </div>

            {/* Skill Acceleration */}
            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.04] transition-all group reveal" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[9px] font-bold text-yellow-400/60 tracking-[0.3em] uppercase mb-3">// ACCELERATION_PROTOCOL</h3>
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight font-heading">Skill Acceleration</h4>
              <ul className="space-y-2 text-sm text-white/40 font-light">
                <li>• Role-based engineering roadmaps</li>
                <li>• Practical coding systems</li>
                <li>• Industry-aligned learning paths</li>
              </ul>
            </div>

            {/* Real Project Execution */}
            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.04] transition-all group reveal" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-[9px] font-bold text-yellow-400/60 tracking-[0.3em] uppercase mb-3">// BUILD_FRAMEWORK</h3>
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight font-heading">Real Project Execution</h4>
              <ul className="space-y-2 text-sm text-white/40 font-light">
                <li>• College-impact software systems</li>
                <li>• Open-source repositories</li>
                <li>• Structured contribution workflow</li>
              </ul>
            </div>

            {/* AI-Powered Learning Tools */}
            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.04] transition-all group reveal" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-[9px] font-bold text-yellow-400/60 tracking-[0.3em] uppercase mb-3">// AI_AUGMENTATION</h3>
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight font-heading">AI-Powered Learning</h4>
              <ul className="space-y-2 text-sm text-white/40 font-light">
                <li>• Personalized study plans</li>
                <li>• Code mentor system</li>
                <li>• Intelligent concept breakdown</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-24 md:py-40 bg-[#050505] px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-20">
            {[
              { l: "STUDENTS_SUPPORTED", v: "500+" },
              { l: "SESSIONS_CONDUCTED", v: "120+" },
              { l: "RECOVERY_RATE", v: "85%" },
              { l: "PROJECTS_BUILT", v: "300+" }
            ].map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-7xl font-black text-white mb-2 md:mb-4 tracking-tighter font-heading">{stat.v}</div>
                <div className="text-[8px] md:text-[9px] font-bold text-yellow-400 tracking-[0.4em] uppercase opacity-60">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Philosophy</span>
          <blockquote className="text-2xl md:text-4xl font-light text-white/60 leading-relaxed italic mb-4">
            "The distance between a student and a maintainer is determined by the systems they train within."
          </blockquote>
        </div>
      </section>

      {/* Explore IgniteXT Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center reveal">
            <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Navigation_Matrix</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter font-heading mb-6">
              EXPLORE <span className="text-yellow-400 italic">IGNITEXT</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Navigate through our structured ecosystem designed to transform students into industry-ready engineers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Roadmaps', 
                desc: 'Define your engineering path with structured learning tracks',
                icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
                page: 'roadmaps'
              },
              { 
                title: 'Engineering Labs', 
                desc: 'Build with structured execution and hands-on sessions',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                page: 'ondemand'
              },
              { 
                title: 'Projects', 
                desc: 'Contribute to real systems and build your portfolio',
                icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                page: 'opensource'
              },
              { 
                title: 'AI Tools', 
                desc: 'Learn smarter with AI-powered study assistance',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                page: 'aitools'
              },
              { 
                title: 'Community', 
                desc: 'Grow with serious builders and contributors',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                page: 'opensource'
              },
              { 
                title: 'Get in Touch', 
                desc: 'Connect for collaborations and inquiries',
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                page: 'contact'
              }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(item.page)}
                className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all text-left group reveal"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-heading group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight font-heading">
            This is where you become a <span className="text-yellow-400 italic">serious engineer.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 mb-10 leading-relaxed">
            Join a structured ecosystem designed for long-term engineering growth.
          </p>
          <button 
            onClick={() => onNavigate('contribute')}
            className="bg-yellow-400 text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-400/10"
          >
            JOIN_IGNITEXT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
