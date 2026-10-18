import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ServiceCard } from '../cards/ServiceCard';
import { servicesData } from '../../data/servicesData';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Organic Search', 'Paid Media', 'Design & Optimization', 'Strategy & Auditing'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="FULL-SPECTRUM DIGITAL MARKETING"
          title="Digital Marketing Services Built Around Your Growth Goals"
          description="Connect the right strategy, channels and customer experiences to generate measurable business results."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:text-navy-950 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
            <span className="text-sm font-bold text-navy-950">
              Not sure which services match your growth stage?
            </span>
            <Button to="/contact" variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Get a Free Strategy Evaluation
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
