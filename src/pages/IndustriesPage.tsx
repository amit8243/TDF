import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { IndustryCard } from '../components/cards/IndustryCard';
import { industriesData } from '../data/industriesData';
import { CTASection } from '../components/sections/CTASection';

export const IndustriesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Industries & Specialized Verticals We Serve"
        description="Tailored digital marketing and search visibility solutions designed for B2B SaaS, Ecommerce, Healthcare, Fintech, Education, Real Estate, and Industrial Manufacturing."
        canonicalPath="/industries"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Industries" }]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
              SPECIALIZED VERTICAL STRATEGY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Tailored Digital Growth Playbooks for High-Stakes Industries
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Generic marketing playbooks fail in regulated, complex, or high-ACV markets. We engineer bespoke search, paid media, and conversion solutions around your industry's specific commercial dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SELECT YOUR SECTOR"
            title="Sectors Where We Deliver Outsized Results"
            description="Explore our vertical-specific capabilities, compliance safeguards, and proven conversion frameworks."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
