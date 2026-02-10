
import React, { useState } from 'react';
import { apiService } from '../services/api';

const Contribute: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    github: '',
    engineeringPath: 'Backend Engineering',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiService.submitContributorApplication({
        full_name: formData.fullName,
        github: formData.github,
        engineering_path: formData.engineeringPath,
        motivation: formData.motivation
      });

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        github: '',
        engineeringPath: 'Backend Engineering',
        motivation: ''
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
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Join the Foundation</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We are looking for builders, thinkers, and maintainers. Whether you are a student or a seasoned pro, IgniteXT is a place to push the boundaries of open software.
          </p>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Who should join?</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span>Students tired of "Hello World" tutorials.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span>Engineers who want to contribute to meaningful infrastructure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-bold">•</span>
                  <span>Designers interested in technical product UI/UX.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Entry-Level Tasks</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800">Documentation Scrub</span>
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Good First Issue</span>
                   </div>
                   <p className="text-xs text-slate-500">Fixing typos, clarifying setup guides, and improving API docs.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800">Component Unit Testing</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Intermediate</span>
                   </div>
                   <p className="text-xs text-slate-500">Writing Vitest/Jest suites for core UI library components.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-10 md:p-12 border border-slate-200 shadow-xl">
           <h2 className="text-3xl font-bold mb-8">Apply as Contributor</h2>
           {submitSuccess && (
             <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
               ✅ Application submitted successfully!
             </div>
           )}
           <form className="space-y-6" onSubmit={handleSubmit}>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                 <input 
                   required
                   type="text" 
                   value={formData.fullName}
                   onChange={e => setFormData({...formData, fullName: e.target.value})}
                   className="w-full bg-white border border-slate-200 rounded-lg p-3 outline-none focus:border-slate-900 transition-colors" 
                   placeholder="Linus Torvalds" 
                 />
               </div>
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">GitHub Username</label>
                 <input 
                   required
                   type="text" 
                   value={formData.github}
                   onChange={e => setFormData({...formData, github: e.target.value})}
                   className="w-full bg-white border border-slate-200 rounded-lg p-3 outline-none focus:border-slate-900 transition-colors" 
                   placeholder="linus" 
                 />
               </div>
             </div>
             <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Primary Engineering Path</label>
               <select 
                 value={formData.engineeringPath}
                 onChange={e => setFormData({...formData, engineeringPath: e.target.value})}
                 className="w-full bg-white border border-slate-200 rounded-lg p-3 outline-none focus:border-slate-900 transition-colors"
               >
                 <option>Backend Engineering</option>
                 <option>Frontend Engineering</option>
                 <option>AI / ML Engineering</option>
                 <option>DevOps / Cloud</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Why do you want to join IgniteXT?</label>
               <textarea 
                 required
                 rows={4} 
                 value={formData.motivation}
                 onChange={e => setFormData({...formData, motivation: e.target.value})}
                 className="w-full bg-white border border-slate-200 rounded-lg p-3 outline-none focus:border-slate-900 transition-colors" 
                 placeholder="Tell us about your technical goals..."
               ></textarea>
             </div>
             <button 
               disabled={isSubmitting}
               className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {isSubmitting ? 'Submitting...' : 'Submit Application'}
             </button>
             <p className="text-xs text-center text-slate-400 mt-4">By applying, you agree to our Code of Conduct and contributor license agreement (CLA).</p>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
