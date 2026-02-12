
import React, { useState } from 'react';
import { apiService } from '../services/api';

const Community: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    github: '',
    branch: '',
    year: '1st Year',
    roomNumber: '',
    experienceYears: 0,
    teachingCount: 0,
    projectUrl: '',
    motivation: ''
  });

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await apiService.submitMentorApplication({
        role,
        full_name: formData.fullName,
        github: formData.github,
        branch: role === 'student' ? formData.branch : undefined,
        year: role === 'student' ? formData.year : undefined,
        room_number: role === 'teacher' ? formData.roomNumber : undefined,
        experience_years: formData.experienceYears,
        teaching_count: formData.teachingCount,
        project_url: formData.projectUrl,
        motivation: formData.motivation
      });

      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
        setFormData({
          fullName: '',
          github: '',
          branch: '',
          year: '1st Year',
          roomNumber: '',
          experienceYears: 0,
          teachingCount: 0,
          projectUrl: '',
          motivation: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Failed to submit mentor application:', error);
      alert('Failed to submit application. Please try again.');
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 reveal">
          <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Global_Neural_Network</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter font-heading leading-none">BUILT_BY_<span className="italic text-yellow-400">ARCHITECTS</span></h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
            The IgniteXT ecosystem is powered by an elite network of high-performance engineers and visionaries.
          </p>
        </div>

        <section className="mb-40 reveal" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-16 text-center underline decoration-yellow-400 underline-offset-8">Core Maintainers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-white/5 rounded-full mb-6 border border-white/10 group-hover:border-yellow-400 transition-all overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg className="w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="font-bold text-white mb-1 tracking-tight text-sm md:text-base">MEMBER_{i}</div>
                <div className="text-[9px] text-yellow-400/50 uppercase font-black tracking-widest">Maintainer</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto">
          <div className="glass-pill p-10 md:p-16 border-none rounded-[40px] bg-white/[0.03] border border-white/5 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading tracking-tight leading-none">High-Trust <br/>Mentorship.</h2>
                <p className="text-white/40 leading-relaxed text-lg font-light italic">
                  Our mentors are industry veterans from high-performance engineering environments. We provide architectural critique, not just answers.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                 <div className="p-6 md:p-8 border border-white/5 rounded-3xl bg-white/5 text-center">
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">50+</div>
                    <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Active_Mentors</div>
                 </div>
                 <div className="p-6 md:p-8 border border-white/5 rounded-3xl bg-white/5 text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-2">800+</div>
                    <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Sessions_Held</div>
                 </div>
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-yellow-400 flex items-center justify-center text-[10px] font-black text-black">+</div>
               </div>
               <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-yellow-400 transition-all active:scale-95 whitespace-nowrap"
               >
                 APPLY_AS_MENTOR
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mentor Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
          <div className="w-full max-w-2xl glass-pill p-8 md:p-12 border-none rounded-[30px] md:rounded-[40px] bg-[#0c0c0c] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto no-scrollbar">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {formStatus === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(250,204,21,0.3)]">
                  <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Application_Sent</h3>
                <p className="text-white/40 italic">We are synchronizing your profile with our mentor database.</p>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Mentor_Onboarding_v1.0</span>
                  <h3 className="text-3xl font-black text-white tracking-tighter font-heading uppercase leading-none">
                    Become_An_<span className="italic text-yellow-400">Architect</span>
                  </h3>
                </div>

                <form onSubmit={handleApply} className="space-y-6">
                  {/* Role Selector */}
                  <div className="flex p-1 bg-white/5 rounded-xl mb-8">
                    <button
                      type="button"
                      onClick={() => setRole('student')}
                      className={`flex-1 py-3 rounded-lg text-[10px] font-black tracking-widest transition-all ${role === 'student' ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}
                    >
                      STUDENT_MENTOR
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('teacher')}
                      className={`flex-1 py-3 rounded-lg text-[10px] font-black tracking-widest transition-all ${role === 'teacher' ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}
                    >
                      FACULTY_ARCHITECT
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                        placeholder="Enter Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">GitHub Username</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.github}
                        onChange={e => setFormData({...formData, github: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                        placeholder="@handle" 
                      />
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  {role === 'teacher' ? (
                    <div>
                      <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Room Number / Office Location</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.roomNumber}
                        onChange={e => setFormData({...formData, roomNumber: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                        placeholder="e.g., Block A - 402" 
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Branch / Major</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.branch}
                          onChange={e => setFormData({...formData, branch: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                          placeholder="e.g., CSE" 
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Academic Year</label>
                        <select 
                          value={formData.year}
                          onChange={e => setFormData({...formData, year: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all"
                        >
                          <option className="bg-black">1st Year</option>
                          <option className="bg-black">2nd Year</option>
                          <option className="bg-black">3rd Year</option>
                          <option className="bg-black">4th Year</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Exp. on Tech Stack (Years)</label>
                      <input 
                        required 
                        type="number" 
                        value={formData.experienceYears}
                        onChange={e => setFormData({...formData, experienceYears: parseInt(e.target.value)})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                        placeholder="0" 
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Teaching History (Times)</label>
                      <input 
                        required 
                        type="number" 
                        value={formData.teachingCount}
                        onChange={e => setFormData({...formData, teachingCount: parseInt(e.target.value)})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                        placeholder="0" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Project Repository (URL)</label>
                    <input 
                      required 
                      type="url" 
                      value={formData.projectUrl}
                      onChange={e => setFormData({...formData, projectUrl: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                      placeholder="https://github.com/..." 
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Motivation / Philosophy</label>
                    <textarea 
                      required 
                      rows={3} 
                      value={formData.motivation}
                      onChange={e => setFormData({...formData, motivation: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all resize-none" 
                      placeholder="Why are you interested in mentoring at IgniteXT?"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-yellow-400 text-black py-5 rounded-full font-black text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-2xl active:scale-95 uppercase disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'SYNCHRONIZING...' : 'SUBMIT_ARCHITECT_APPLICATION'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
