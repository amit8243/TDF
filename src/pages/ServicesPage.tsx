import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/cards/ServiceCard';
import { servicesData } from '../data/servicesData';
import { servicesMegaMenuGroups } from '../data/navigationData';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/sections/CTASection';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Digital Marketing & Enterprise SEO Services"
        description="Explore our full spectrum of enterprise digital marketing services: SEO, International SEO, PPC management, web development, conversion rate optimization, and AI search visibility."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Services" }]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>MEASURABLE BUSINESS GROWTH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Enterprise Digital Marketing Services Engineered for Revenue
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              We connect organic search, cross-border International SEO, paid acquisition, and conversion engineering into a unified commercial growth engine.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Request a Custom Proposal
              </Button>
              <Button to="/case-studies" variant="outline" size="lg" className="border-slate-700 text-white bg-transparent hover:bg-navy-800">
                Explore Client Outcomes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Sections */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesMegaMenuGroups.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Capability Category {idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                    {group.category}
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {group.items.length} Specialized Offerings
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => {
                  const service = servicesData.find(s => s.slug === item.slug);
                  if (!service) return null;
                  return <ServiceCard key={service.slug} service={service} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Multidisciplinary Model Works */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CROSS-CHANNEL SYNERGY"
            title="Why Integrated Search & Conversion Outperforms Siloed Tactics"
            description="When organic search, paid advertising, and technical CRO work from a single unified data model, customer acquisition costs drop while conversion rates compound."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">
                Keyword Cross-Pollination
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                PPC search term queries identify high-converting buyer intent keywords within days, which immediately feed our long-term organic content and digital PR roadmaps.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">
                Full-Funnel Conversion Lift
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                CRO improvements on organic landing pages directly enhance Quality Scores in Google Ads, reducing paid CPCs while multiplying conversions from both channels.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">
                Generative AI Future-Proofing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our GEO strategies reinforce your entity signals and factual content density, ensuring your brand stays recommended whether users search Google or prompt ChatGPT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};
