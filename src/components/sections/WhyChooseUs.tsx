import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Briefcase, Eye, Code2, LineChart, Target, Repeat } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Business-Focused Strategies",
      description: "We don't optimize for vanity impressions or arbitrary keyword counts. Every initiative is aligned with customer acquisition cost (CAC), pipeline volume, and company EBITDA goals."
    },
    {
      icon: Eye,
      title: "Transparent Communication",
      description: "Direct access to senior strategists, live Looker Studio reporting dashboards, and honest weekly updates. No smoke, mirrors, or hidden markups on media spend."
    },
    {
      icon: Code2,
      title: "Technical & Content Mastery",
      description: "Our in-house team includes seasoned technical architects, frontend engineers, and native subject matter editors who understand complex web frameworks."
    },
    {
      icon: LineChart,
      title: "Data-Driven Decision Making",
      description: "Every tactical recommendation is backed by historical search logs, statistical significance testing, competitor reverse-engineering, and empirical performance metrics."
    },
    {
      icon: Target,
      title: "Conversion-Focused Execution",
      description: "Search traffic is only half the journey. We optimize post-click user experiences, landing page speed, and form architectures to maximize the value of every visitor."
    },
    {
      icon: Repeat,
      title: "Continuous Optimization",
      description: "Digital markets and search algorithms are constantly evolving. We continuously monitor SERP shifts, conduct iterative A/B tests, and adapt tactics in real time."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="WHY ENTERPRISES PARTNER WITH US"
          title="Built for Accountability, Technical Rigor, and Growth"
          description="We reject generic agency playbooks in favor of transparent, revenue-focused execution built on sound engineering and commercial alignment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
