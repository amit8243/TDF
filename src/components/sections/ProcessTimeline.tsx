import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Compass, SearchCheck, Map, Rocket, LineChart, RefreshCw } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Business & Audience Discovery",
      description: "We analyze your commercial goals, average deal size, target buyer personas, and customer lifetime value to establish meaningful growth benchmarks."
    },
    {
      step: "02",
      icon: SearchCheck,
      title: "Website & Competitor Audit",
      description: "Our engineers inspect server logs, indexation, Core Web Vitals, and competitor ranking gaps to identify hidden roadblocks."
    },
    {
      step: "03",
      icon: Map,
      title: "Strategy & Opportunity Mapping",
      description: "We prioritize bottom-of-funnel keyword intent, ad spend allocation, and technical sprint tickets into an actionable execution roadmap."
    },
    {
      step: "04",
      icon: Rocket,
      title: "Campaign Implementation",
      description: "Deploying technical fixes, publishing authoritative content, launching optimized PPC ad groups, and building high-trust digital PR."
    },
    {
      step: "05",
      icon: LineChart,
      title: "Measurement & Reporting",
      description: "Real-time transparent dashboards connect organic and paid search touchpoints directly to closed pipeline, SQLs, and revenue."
    },
    {
      step: "06",
      icon: RefreshCw,
      title: "Continuous Optimization",
      description: "Regular A/B testing, algorithm adaptation, and iterative bid refinements ensure compounding marketing ROI month after month."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="METHODOLOGY & EXECUTION"
          title="A Clear Strategy. Consistent Execution. Measurable Progress."
          description="We replace guesswork with a disciplined, data-backed six-stage growth framework that turns search traffic into reliable enterprise revenue."
          align="center"
        />

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Phase {item.step} of 06</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
