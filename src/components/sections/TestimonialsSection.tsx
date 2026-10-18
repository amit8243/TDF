import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';
import { Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="CLIENT VOICES & FEEDBACK"
          title="What Growth Leaders Say About Partnering With Us"
          description="Read direct perspectives from marketing executives and founders who trust our search and paid media engineering."
          align="center"
        />

        {/* Demo Disclaimer */}
        <div className="mb-10 max-w-xl mx-auto p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span>Representative demo testimonials illustrating client role and feedback formats.</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
