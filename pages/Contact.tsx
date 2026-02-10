import React, { useState } from 'react';
import { apiService } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiService.submitContact({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      alert('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto relative z-10 pt-10 md:pt-0">
        <div className="mb-16 md:mb-24 text-center reveal">
          <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 md:mb-6 block">
            Direct_Communication_Channel
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 md:mb-10 font-heading">
            GET_<span className="italic text-yellow-400 text-glow-yellow">IN_TOUCH</span>
          </h1>
          <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Have questions about our programs? Want to collaborate? Reach out to the IgniteXT core team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02] shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 font-heading tracking-tight uppercase">
                Connect_With_Us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-white font-medium">contact@ignitext.org</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-1">GitHub</div>
                    <div className="text-white font-medium">github.com/ignitext</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-white font-medium">Remote & On-Campus</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 border border-white/5 rounded-[30px] bg-white/[0.02]">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">Response Time</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                We typically respond within <span className="text-yellow-400 font-bold">24-48 hours</span>. 
                For urgent matters, please mark your subject line with [URGENT].
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12 border border-white/5 rounded-[30px] md:rounded-[40px] bg-white/[0.02] shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 font-heading tracking-tight uppercase">
              Send_Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-yellow-400 text-sm font-medium">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium resize-none"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black py-5 rounded-full font-black text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-yellow-400/5 active:scale-95 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE'}
              </button>

              <p className="text-[9px] text-white/20 text-center uppercase tracking-widest leading-loose italic">
                * All messages are encrypted and stored securely.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
