import React from 'react';

const OpenSource: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-32 px-6">
      {/* Add top padding to prevent navbar overlap */}
      <div className="max-w-6xl mx-auto pt-16">
        
        {/* Hero Section */}
        <div className="mb-24 reveal">
          <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            Learn_Build_Earn
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-10 font-heading">
            IGNITE<span className="italic text-yellow-400 text-glow-yellow">XT</span><br/>
            COMMUNITY
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
            We don't just teach technology — we prepare you for the real world. Build production-ready applications, 
            work on live projects, and get paid while you learn.
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="group">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 font-heading tracking-tight">
              Real-World Learning
            </h3>
            <p className="text-white/40 leading-relaxed">
              Learn by building actual production applications. No more toy projects — work on real systems that solve real problems.
            </p>
          </div>

          <div className="group">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 font-heading tracking-tight">
              Paid Projects
            </h3>
            <p className="text-white/40 leading-relaxed">
              Get opportunities to work on paid client projects. Earn while you learn and build your professional portfolio.
            </p>
          </div>

          <div className="group">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 font-heading tracking-tight">
              Expert Mentorship
            </h3>
            <p className="text-white/40 leading-relaxed">
              Learn from industry professionals who have built and scaled real products. Get personalized guidance and code reviews.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 font-heading tracking-tight">
            How It <span className="text-yellow-400">Works</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Join the Community',
                description: 'Sign up and choose your learning path. Whether you\'re into frontend, backend, AI, or full-stack — we have a track for you.'
              },
              {
                step: '02',
                title: 'Learn by Building',
                description: 'Follow structured roadmaps with hands-on projects. Build real applications that you can showcase in your portfolio.'
              },
              {
                step: '03',
                title: 'Get Mentored',
                description: 'Work with experienced developers who review your code, guide your learning, and help you overcome challenges.'
              },
              {
                step: '04',
                title: 'Work on Paid Projects',
                description: 'Once you\'re ready, get matched with paid client projects. Earn money while gaining professional experience.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-6xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors font-heading">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          {[
            { label: 'Active Students', value: '500+' },
            { label: 'Projects Completed', value: '300+' },
            { label: 'Paid Opportunities', value: '50+' },
            { label: 'Success Rate', value: '85%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-heading tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Join IgniteXT Community today and transform from a student to a professional developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.hash = 'ondemand'}
              className="bg-yellow-400 text-black px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
            >
              EXPLORE_CLASSES
            </button>
            <button 
              onClick={() => window.location.hash = 'contact'}
              className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white/20 transition-all active:scale-95"
            >
              GET_IN_TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
