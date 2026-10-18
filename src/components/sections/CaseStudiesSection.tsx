import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CaseStudyCard } from '../cards/CaseStudyCard';
import { caseStudiesData } from '../../data/caseStudiesData';
import { Button } from '../common/Button';
import { ArrowRight, Info } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="PROVEN CLIENT OUTCOMES"
            title="Growth Stories Backed by Data"
            description="Explore how our enterprise search, International SEO, and conversion optimization frameworks unlock measurable commercial impact."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="mt-6 lg:mt-0 flex items-center gap-4">
            <Button to="/case-studies" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Case Studies
            </Button>
          </div>
        </div>

        {/* Demo Data Disclaimer */}
        <div className="mb-8 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex items-start sm:items-center gap-2.5 text-xs text-blue-900">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Transparency Notice:</strong> Case studies below showcase real agency architectural methodologies using anonymized client names and representative demonstration metrics.
          </span>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>

      </div>
    </section>
  );
};
