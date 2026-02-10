
import React from 'react';

const OpenSource: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Open Source at IgniteXT</h1>
      <p className="text-xl text-slate-500 mb-16 leading-relaxed">
        Open source is not a side project; it is the core operating system of this organization. We believe in radical transparency and collaborative ownership.
      </p>

      <div className="space-y-20">
        <section>
          <h2 className="text-2xl font-bold mb-8">The Workflow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
               <div className="font-bold text-slate-900 mb-2">1. RFC (Request for Comments)</div>
               <p className="text-sm text-slate-500">Major changes start with a technical proposal. We debate the architecture before a single line of code is written.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
               <div className="font-bold text-slate-900 mb-2">2. Implementation</div>
               <p className="text-sm text-slate-500">Developers push to feature branches. All code must have unit tests and follow the IgniteXT style guide.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
               <div className="font-bold text-slate-900 mb-2">3. Peer Review</div>
               <p className="text-sm text-slate-500">At least two maintainers must approve a PR. We prioritize feedback on design patterns over syntax.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold mb-8 text-charcoal">Standards & Discipline</h2>
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Code of Conduct</h3>
              <p className="text-slate-600">Our community is built on mutual respect and professional rigor. We welcome all skill levels, but we do not compromise on technical integrity or the dignity of our members.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Review Standards</h3>
              <p className="text-slate-600">Reviewers are expected to be thorough. If you're reviewing a PR, you are partially responsible for that code in production. "LGTM" without analysis is discouraged.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
           <h2 className="text-xl font-bold mb-4">Ready to start?</h2>
           <p className="text-slate-600 mb-6">Read our complete contribution guidelines on the main organization repository.</p>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold">Read Docs on GitHub</button>
        </section>
      </div>
    </div>
  );
};

export default OpenSource;
