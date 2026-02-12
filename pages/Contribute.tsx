
import React, { useState } from 'react';
import { apiService } from '../services/api';

const Contribute: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    github: '',
    engineeringPath: 'Backend Engineering',
    motivation: '',
    wantToMentor: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formData.wantToMentor) {
        // Submit as mentor application
        await apiService.submitMentorApplication({
          name: formData.fullName,
          email: '', // We don't collect email in this form, but API expects it
          subject: `Mentor Application - ${formData.engineeringPath}`,
          message: `GitHub: ${formData.github}\nEngineering Path: ${formData.engineeringPath}\n\nMotivation:\n${formData.motivation}`
        });
      } else {
        // Submit as contributor application
        await apiService.submitContributorApplication({
          full_name: formData.fullName,
          github: formData.github,
          engineering_path: formData.engineeringPath,
          motivation: formData.motivation
        });
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        github: '',
        engineeringPath: 'Backend Engineering',
        motivation: '',
        wantToMentor: false
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to submit contributor application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative z-10 pt-10 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-heading tracking-tight">Join the Foundation</h1>
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            We are looking for builders, thinkers, and maintainers. Whether you are a student or a seasoned pro, IgniteXT is a place to push the boundaries of open software.
          </p>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Who should join?</h2>
              <ul className="space-y-3 text-white/60">
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">•</span>
                  <span>Students tired of "Hello World" tutorials.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">•</span>
                  <span>Engineers who want to contribute to meaningful infrastructure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">•</span>
                  <span>Designers interested in technical product UI/UX.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Entry-Level Tasks</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white">Documentation Scrub</span>
                      <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">Good First Issue</span>
                   </div>
                   <p className="text-xs text-white/40">Fixing typos, clarifying setup guides, and improving API docs.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white">Component Unit Testing</span>
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Intermediate</span>
                   </div>
                   <p className="text-xs text-white/40">Writing Vitest/Jest suites for core UI library components.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
           <h2 className="text-3xl font-bold mb-8 text-white">Apply as Contributor</h2>
           {submitSuccess && (
             <div className="mb-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-yellow-400 text-sm">
               ✅ Application submitted successfully!
             </div>
           )}
           <form className="space-y-6" onSubmit={handleSubmit}>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-bold text-white/60 mb-2">Full Name</label>
                 <input 
                   required
                   type="text" 
                   value={formData.fullName}
                   onChange={e => setFormData({...formData, fullName: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-400 transition-colors" 
                   placeholder="Linus Torvalds" 
                 />
               </div>
               <div>
                 <label className="block text-sm font-bold text-white/60 mb-2">GitHub Username</label>
                 <input 
                   required
                   type="text" 
                   value={formData.github}
                   onChange={e => setFormData({...formData, github: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-400 transition-colors" 
                   placeholder="linus" 
                 />
               </div>
             </div>
             <div>
               <label className="block text-sm font-bold text-white/60 mb-2">Primary Engineering Path</label>
               <select 
                 value={formData.engineeringPath}
                 onChange={e => setFormData({...formData, engineeringPath: e.target.value})}
                 className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-400 transition-colors"
               >
                 <option className="bg-[#080808]">Backend Engineering</option>
                 <option className="bg-[#080808]">Frontend Engineering</option>
                 <option className="bg-[#080808]">AI / ML Engineering</option>
                 <option className="bg-[#080808]">DevOps / Cloud</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-bold text-white/60 mb-2">
                 {formData.wantToMentor ? 'Why do you want to mentor at IgniteXT?' : 'Why do you want to join IgniteXT?'}
               </label>
               <textarea 
                 required
                 rows={4} 
                 value={formData.motivation}
                 onChange={e => setFormData({...formData, motivation: e.target.value})}
                 className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-yellow-400 transition-colors" 
                 placeholder={formData.wantToMentor ? "Tell us about your expertise and how you'd like to help students..." : "Tell us about your technical goals..."}
               ></textarea>
             </div>
             
             <div>
               <label className="flex items-center gap-3 cursor-pointer p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-all">
                 <input
                   type="checkbox"
                   checked={formData.wantToMentor}
                   onChange={e => setFormData({...formData, wantToMentor: e.target.checked})}
                   className="w-5 h-5 bg-black/40 border border-white/10 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                 />
                 <div>
                   <span className="text-sm text-white font-medium block">
                     I want to contribute as a mentor
                   </span>
                   <span className="text-xs text-white/40">
                     Help students learn and grow through mentorship
                   </span>
                 </div>
               </label>
             </div>
             
             <button 
               disabled={isSubmitting}
               className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {isSubmitting ? 'Submitting...' : formData.wantToMentor ? 'Submit Mentor Application' : 'Submit Application'}
             </button>
             <p className="text-xs text-center text-white/30 mt-4">By applying, you agree to our Code of Conduct and contributor license agreement (CLA).</p>
           </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contribute;
