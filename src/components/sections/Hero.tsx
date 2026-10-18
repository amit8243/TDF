import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-slate-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>DIGITAL GROWTH STRATEGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight leading-[1.12]">
              Turn Your Digital Presence Into{' '}
              <span className="text-gradient">Measurable Business Growth</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              We combine search visibility, paid media, conversion strategy and data-driven insights to help ambitious businesses attract the right customers and generate sustainable growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get a Free Strategy
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Three Concise Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Strategies tailored to your business</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Transparent performance reporting</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Focus on leads, sales and revenue</span>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Composition with Real High Quality Analytics & Team Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-navy-950">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                  alt="ApexGrowth senior digital marketing strategists analyzing search analytics and growth models"
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-300 mb-1">
                    <span>ORGANIC PIPELINE VELOCITY</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" /> +284% YoY
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Data-driven organic search & full-funnel media architecture
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Right) */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-card border border-slate-100 hidden sm:flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Attributed Pipeline</div>
                  <div className="text-base font-extrabold text-navy-950">$48.2M+</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-card border border-slate-100 hidden sm:flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Target ROAS Standard</div>
                  <div className="text-base font-extrabold text-navy-950">4.2x Average</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
