
import React, { useState, useEffect } from 'react';
import { ON_DEMAND_REQUESTS } from '../data';
import { TechRequest } from '../types';
import { apiService } from '../services/api';

const OnDemand: React.FC = () => {
  const [requests, setRequests] = useState<TechRequest[]>(ON_DEMAND_REQUESTS);
  const [form, setForm] = useState({ topic: '', field: '', initiator: '' });
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [syncForm, setSyncForm] = useState({ name: '', roll: '', github: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load requests and setup real-time updates
  useEffect(() => {
    // Initialize socket connection
    apiService.initSocket();

    // Load existing requests
    apiService.getOnDemandRequests()
      .then(data => setRequests(data))
      .catch(err => console.error('Failed to load requests:', err));

    // Listen for new requests
    apiService.onNewRequest((newRequest) => {
      setRequests(prev => [newRequest, ...prev]);
    });

    // Listen for request updates
    apiService.onRequestUpdated((updatedRequest) => {
      setRequests(prev => prev.map(req => 
        req.id === updatedRequest.id ? updatedRequest : req
      ));
    });

    return () => {
      apiService.disconnect();
    };
  }, []);

  const handleSubmitProtocol = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newReq = {
        id: `req-${Date.now()}`,
        topic: form.topic,
        field: form.field,
        initiator: form.initiator,
        type: 'ONLINE' as const
      };

      await apiService.createOnDemandRequest(newReq);
      setForm({ topic: '', field: '', initiator: '' });
    } catch (error) {
      console.error('Failed to submit request:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSyncSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syncingId) return;
    
    setIsSubmitting(true);

    try {
      await apiService.submitClassApplication({
        request_id: syncingId,
        name: syncForm.name,
        roll: syncForm.roll,
        github: syncForm.github,
        message: syncForm.message
      });

      setSyncingId(null);
      setSyncForm({ name: '', roll: '', github: '', message: '' });
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative z-10 pt-10 md:pt-0">
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row justify-between items-end gap-10 reveal">
          <div className="max-w-3xl">
            <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 md:mb-6 block">Peer_Learning_Nodes</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 md:mb-10 font-heading">
              ON_<span className="italic text-yellow-400 text-glow-yellow">DEMAND</span>
            </h1>
            <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
              Initiate hands-on exposure sessions. These are <span className="text-white font-bold">Weekends Only</span> and strictly focus on <span className="text-yellow-400 font-bold">Real-World Tech Stacks</span>.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
          {/* Initiation Protocol Form */}
          <div className="lg:col-span-5">
            <div className="p-8 md:p-12 border border-white/5 rounded-[30px] md:rounded-[40px] bg-white/[0.02] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black text-white mb-10 font-heading tracking-tight uppercase">Initiate_Protocol</h2>
              
              <form onSubmit={handleSubmitProtocol} className="space-y-6 md:space-y-8">
                <div>
                  <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">Your Name</label>
                  <input 
                    value={form.initiator}
                    onChange={e => setForm({...form, initiator: e.target.value})}
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium" 
                    placeholder="e.g., Alex Rivera"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">Target Tech Stack</label>
                    <input 
                      value={form.topic}
                      onChange={e => setForm({...form, topic: e.target.value})}
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium" 
                      placeholder="e.g., Rust/WASM"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-yellow-400 uppercase tracking-widest mb-3 opacity-60">Field/Domain</label>
                    <input 
                      value={form.field}
                      onChange={e => setForm({...form, field: e.target.value})}
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all font-medium" 
                      placeholder="e.g., Systems"
                      required
                    />
                  </div>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black py-5 rounded-full font-black text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-yellow-400/5 active:scale-95 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'RAISE_SYNC_REQUEST'}
                </button>
                <p className="text-[9px] text-white/20 text-center uppercase tracking-widest leading-loose italic">
                  * All requests are audited for professional relevance. <br/>Only industry-grade tools allowed.
                </p>
              </form>
            </div>
          </div>

          {/* Active Transmission Feed */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[10px] font-bold text-white/20 tracking-[0.5em] uppercase">Live_Transmission_Feed</h3>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                <span className="text-[8px] font-bold text-yellow-400 tracking-widest uppercase">Nodes_Active</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {requests.map((req) => (
                <div key={req.id} className="relative group p-8 border border-white/5 rounded-[24px] md:rounded-[32px] bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] font-black text-yellow-400 tracking-widest uppercase bg-yellow-400/10 px-2 py-0.5 rounded">
                          {req.field}
                        </span>
                        <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase">ID: {req.id.slice(-6)}</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading tracking-tight">{req.topic}</h4>
                      <p className="text-white/40 text-[10px] font-medium tracking-widest uppercase">
                        Initiator: <span className="text-white/60">{req.initiator || 'CORE_IX_MEMBER'}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                      <div className="text-center">
                        <div className="text-3xl font-black text-white leading-none">{req.count}</div>
                        <div className="text-[8px] font-bold text-white/20 tracking-widest mt-1">PEERS</div>
                      </div>
                      <button 
                        onClick={() => setSyncingId(req.id)}
                        className="flex-grow md:flex-none bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-[10px] font-black tracking-widest hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all active:scale-95"
                      >
                        SYNC_NODE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sync / Join Modal Overlay */}
      {syncingId && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="w-full max-w-xl glass-pill p-8 md:p-12 border-none rounded-[30px] md:rounded-[40px] bg-[#0c0c0c] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative">
            <button 
              onClick={() => setSyncingId(null)}
              className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-10">
              <span className="text-yellow-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Peer_Verification</span>
              <h3 className="text-3xl font-black text-white tracking-tighter font-heading uppercase leading-none">
                Join_Transmission
              </h3>
              <p className="text-white/30 text-sm mt-4 font-light italic">
                Provide academic credentials to synchronize with this engineering track.
              </p>
            </div>

            <form onSubmit={handleSyncSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    required
                    value={syncForm.name}
                    onChange={e => setSyncForm({...syncForm, name: e.target.value})}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Roll Number</label>
                  <input 
                    required
                    value={syncForm.roll}
                    onChange={e => setSyncForm({...syncForm, roll: e.target.value})}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all" 
                    placeholder="College ID"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">GitHub Username</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 font-bold">@</span>
                  <input 
                    required
                    value={syncForm.github}
                    onChange={e => setSyncForm({...syncForm, github: e.target.value})}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-10 text-white outline-none focus:border-yellow-400 transition-all" 
                    placeholder="username"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Message/Motivation</label>
                <textarea 
                  required
                  value={syncForm.message}
                  onChange={e => setSyncForm({...syncForm, message: e.target.value})}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-400 transition-all resize-none" 
                  placeholder="Why do you want this session?"
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black py-5 rounded-full font-black text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-2xl active:scale-95 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SYNCHRONIZING...' : 'CONFIRM_SYNCHRONIZATION'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnDemand;
