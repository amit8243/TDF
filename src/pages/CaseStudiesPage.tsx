import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';
import { caseStudiesData } from '../data/caseStudiesData';
import { CTASection } from '../components/sections/CTASection';
import { Info } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = [
    'All',
    'SEO',
    'International SEO',
    'Ecommerce',
    'PPC',
    'Website Design',
    'Lead Generation'
  ];

  const filteredCaseStudies = selectedFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.category === selectedFilter);

  return (
    <>
      <SEOHead
        title="Case Studies & Client Growth Results"
        description="Explore data-backed client growth case studies across enterprise SEO, International SEO, ecommerce scaling, paid media, and conversion rate optimization."
        canonicalPath="/case-studies"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Case Studies" }]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
              GROWTH STORIES BACKED BY DATA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Measurable Revenue Growth Across Diverse Industries
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              We focus on qualified pipeline, lower acquisition costs, and verified commercial returns. Explore our detailed methodology and client outcomes below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency Disclaimer Notice */}
          <div className="mb-10 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3 text-xs sm:text-sm text-blue-900 max-w-4xl mx-auto">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Transparent Demonstration Portfolio:</strong> In accordance with client NDAs and ethical agency standards, case studies below reflect authentic engineering methodologies and representative performance data labeled as demonstration models.
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:text-navy-950 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-base">No case studies found matching this filter.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
