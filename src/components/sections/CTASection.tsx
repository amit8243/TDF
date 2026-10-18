import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>START YOUR REVENUE TRANSFORMATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Ready to Build a More Effective Growth Strategy?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us about your goals. Let's identify the opportunities that can move your business forward with a custom search and media blueprint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto text-base"
          >
            Get Your Free Strategy
          </Button>
          <Button
            to="/case-studies"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base border-slate-700 text-white bg-transparent hover:bg-navy-900 hover:border-slate-500"
          >
            Explore Verified Results
          </Button>
        </div>

        {/* 3 Quick Assurance Points */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 pt-6 border-t border-navy-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Comprehensive 48-Hour Audit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>100% Confidential & No Obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Reviewed by Senior Strategists</span>
          </div>
        </div>
      </div>
    </section>
  );
};
