import React, { useState } from 'react';
import { apiService } from '../services/api';

const OnDemand: React.FC = () => {
  const [form, setForm] = useState({ 
    name: '', 
    topic: '', 
    field: '', 
    requestType: 'session' as 'session' | 'mentor'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const newReq = {
        id: `req-${Date.now()}`,
        topic: form.topic,
        field: form.field,
        initiator: form.name,
        type: 'ONLINE' as const
      };

      await apiService.createOnDemandRequest(newReq);
      setForm({ name: '', topic: '', field: '', requestType: 'session' });
      setSubmitSuccess(true);
      
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      console.error('Failed to submit request:', error);
      alert('Failed to submit request. Please ensure database is set up.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pastSessions = [
    { title: 'Hands-on Python Workshop', participants: 45, date: 'Nov 2024' },
    { title: 'RAG Systems Deep Dive', participants: 38, date: 'Dec 2024' },
    { title: 'LLM Fine-tuning Masterclass', participants: 52, date: 'Jan 2025' }
  ];

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-10 md:pt-0">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 reveal">
          <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Student_Driven_Learning</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6 font-heading">
            ENGINEERING <span className="italic text-yellow-400 text-glow-yellow">LABS</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Request hands-on sessions or connect with mentors. Built by students, for students. 
            Weekend workshops focused on real-world tech stacks and practical implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Request Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 rounded-3xl blur-xl"></div>
              
              <div className="relative p-8 md:p-10 backdrop-blur-sm bg-white/[0.01]">
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading">Request a Session or Mentor</h2>
                
                {submitSuccess && (
                  <div className="mb-8 p-5 animate-fade-in relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-400/5 rounded-2xl"></div>
                    <p className="text-yellow-400 text-sm font-bold text-center relative z-10">
                      ✅ Request submitted! We'll review and get back to you soon.
                    </p>
                  </div>
                )}

                {/* Request Type Selector */}
                <div className="mb-10">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-4">I'm looking for</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setForm({...form, requestType: 'session'})}
                      className={`p-6 transition-all duration-300 relative group ${
                        form.requestType === 'session'
                          ? 'text-white'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {form.requestType === 'session' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl"></div>
                      )}
                      <div className="relative">
                        <div className="text-3xl mb-3">📚</div>
                        <div className="font-bold text-base mb-1">Learning Session</div>
                        <div className="text-[10px] opacity-60">Workshop or hands-on class</div>
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${
                        form.requestType === 'session' ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({...form, requestType: 'mentor'})}
                      className={`p-6 transition-all duration-300 relative group ${
                        form.requestType === 'mentor'
                          ? 'text-white'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {form.requestType === 'mentor' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-2xl"></div>
                      )}
                      <div className="relative">
                        <div className="text-3xl mb-3">👨‍🏫</div>
                        <div className="font-bold text-base mb-1">Mentor Guidance</div>
                        <div className="text-[10px] opacity-60">1-on-1 or small group help</div>
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${
                        form.requestType === 'mentor' ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative group">
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Your Name</label>
                      <input 
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white text-lg outline-none focus:border-yellow-400 transition-all placeholder:text-white/20" 
                        placeholder="Enter your name"
                        required
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-focus-within:w-full transition-all duration-500"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-3">
                          {form.requestType === 'session' ? 'Topic/Technology' : 'Area of Help'}
                        </label>
                        <input 
                          value={form.topic}
                          onChange={e => setForm({...form, topic: e.target.value})}
                          type="text" 
                          className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white text-lg outline-none focus:border-yellow-400 transition-all placeholder:text-white/20" 
                          placeholder={form.requestType === 'session' ? 'e.g., Docker, React' : 'e.g., System Design'}
                          required
                        />
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                      <div className="relative group">
                        <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Domain</label>
                        <select
                          value={form.field}
                          onChange={e => setForm({...form, field: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white text-lg outline-none focus:border-yellow-400 transition-all appearance-none cursor-pointer"
                          required
                        >
                          <option value="" className="bg-[#080808]">Select domain</option>
                          <option value="Frontend" className="bg-[#080808]">Frontend</option>
                          <option value="Backend" className="bg-[#080808]">Backend</option>
                          <option value="Full-Stack" className="bg-[#080808]">Full-Stack</option>
                          <option value="AI/ML" className="bg-[#080808]">AI/ML</option>
                          <option value="DevOps" className="bg-[#080808]">DevOps</option>
                          <option value="Mobile" className="bg-[#080808]">Mobile</option>
                          <option value="System Design" className="bg-[#080808]">System Design</option>
                          <option value="Other" className="bg-[#080808]">Other</option>
                        </select>
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent w-0 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-5 font-bold text-sm tracking-wider hover:from-white hover:to-yellow-400 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Submitting...' : `Submit ${form.requestType === 'session' ? 'Session' : 'Mentor'} Request`}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    </button>
                  </div>

                  <p className="text-[10px] text-white/30 text-center leading-relaxed italic">
                    Requests are reviewed by our team. We'll reach out within 48 hours to schedule or connect you with a mentor.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Info & Stats */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* How It Works */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent"></div>
              <div className="pl-8">
                <h3 className="text-xl font-bold text-white mb-8 font-heading">How It Works</h3>
                <div className="space-y-8">
                  <div className="flex gap-5 group">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-400/30 transition-all"></div>
                        <span className="text-yellow-400 font-black text-lg relative z-10">1</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-white font-bold text-base mb-2">Submit Your Request</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Tell us what you want to learn or what help you need
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-400/30 transition-all"></div>
                        <span className="text-yellow-400 font-black text-lg relative z-10">2</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-white font-bold text-base mb-2">We Review & Match</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Our team finds the right mentor or organizes a session
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-400/30 transition-all"></div>
                        <span className="text-yellow-400 font-black text-lg relative z-10">3</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-white font-bold text-base mb-2">Learn & Build</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Attend weekend sessions or get 1-on-1 mentorship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Sessions */}
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 font-heading">Recent Sessions</h3>
              <div className="space-y-5">
                {pastSessions.map((session, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-5 pl-6 border-l-2 border-white/10 group-hover:border-yellow-400/50 transition-all">
                      <h4 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">{session.title}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/40">{session.date}</span>
                        <span className="text-yellow-400 font-bold">{session.participants} students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative py-8">
                  <div className="text-4xl font-black bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">135+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Students Helped</div>
                </div>
              </div>
              <div className="text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative py-8">
                  <div className="text-4xl font-black bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">24</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Sessions Held</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OnDemand;
