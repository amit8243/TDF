import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { IndustryCard } from '../cards/IndustryCard';
import { industriesData } from '../../data/industriesData';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const IndustriesGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="SPECIALIZED VERTICAL EXPERTISE"
          title="Tailored Growth Strategies for Distinct Industries"
          description="Every sector faces distinct commercial dynamics, search intents, and regulatory landscapes. We deploy specialized playbooks tailored to your industry."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/industries" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore All Industry Capabilities
          </Button>
        </div>

      </div>
    </section>
  );
};
