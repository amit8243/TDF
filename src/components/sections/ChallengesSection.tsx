import React from 'react';
import { Link } from 'react-router-dom';
import { UserX, HelpCircle, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: UserX,
      problemNumber: "01",
      title: "Attracting Traffic That Does Not Convert",
      problemText: "You are generating thousands of site visits and impressions every month, but form submissions and sales pipeline remain stagnant. You are paying to acquire visitors who leave within seconds without taking meaningful action.",
      solutionTitle: "How We Fix It:",
      solutionText: "We map search queries to high-intent buyer stages, eliminate page friction through Conversion Rate Optimization (CRO), and deploy dedicated high-converting landing pages that guide visitors into qualified opportunities.",
      linkText: "Explore Conversion Rate Optimization",
      linkTo: "/services/conversion-rate-optimization"
    },
    {
      icon: HelpCircle,
      problemNumber: "02",
      title: "Spending Budget Without Clear Attribution",
      problemText: "Your marketing dollars are dispersed across Google Ads, Meta, and multiple channels, but leadership cannot determine which campaigns actually generate signed contracts, closed deals, or profitable lifetime value.",
      solutionTitle: "How We Fix It:",
      solutionText: "We engineer closed-loop revenue attribution and server-side tracking (Conversions API and Google Enhanced Conversions) that connects digital touchpoints directly to your CRM, ensuring every dollar is accountable.",
      linkText: "Explore PPC & Paid Media Management",
      linkTo: "/services/ppc-management"
    },
    {
      icon: Bot,
      problemNumber: "03",
      title: "Struggling to Compete in Organic and AI Search",
      problemText: "Legacy competitors dominate high-value head terms, Google AI Overviews are pushing organic links down the page, and prospective buyers are asking ChatGPT and Perplexity for recommendations without ever finding your brand.",
      solutionTitle: "How We Fix It:",
      solutionText: "We deploy advanced technical SEO, authoritative digital PR, and Generative Engine Optimization (GEO) to ensure your brand is prominently positioned both in traditional search and inside conversational AI answer engines.",
      linkText: "Explore Generative Engine Optimization",
      linkTo: "/services/geo-ai-seo"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="OVERCOMING DIGITAL BOTTLENECKS"
          title="Marketing Should Deliver More Than Clicks"
          description="Traffic and impressions mean nothing if they do not translate into qualified sales conversations and measurable revenue."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                      {item.problemNumber}
                    </span>
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Problem Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.problemText}
                  </p>

                  {/* Solution Box */}
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.solutionTitle}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.solutionText}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={item.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
