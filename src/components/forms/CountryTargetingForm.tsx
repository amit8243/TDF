import React, { useState } from 'react';
import { Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const CountryTargetingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    originCountry: 'United States',
    targetRegions: ['United Kingdom', 'Germany'],
    websiteUrl: '',
    workEmail: '',
    currentStructure: 'Undecided / Evaluating'
  });

  const [submitted, setSubmitted] = useState(false);

  const regionOptions = [
    'United Kingdom (en-gb)',
    'Germany (de-de)',
    'France (fr-fr)',
    'Spain & LATAM (es)',
    'Japan (ja-jp)',
    'Australia (en-au)',
    'Canada (en-ca / fr-ca)',
    'Nordics (en / local)'
  ];

  const toggleRegion = (region: string) => {
    setFormData(prev => {
      const exists = prev.targetRegions.includes(region);
      return {
        ...prev,
        targetRegions: exists 
          ? prev.targetRegions.filter(r => r !== region)
          : [...prev.targetRegions, region]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl || !formData.workEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-navy-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Interactive Global Planner</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Configure Your International Market Expansion
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
          Select your target international territories to receive a preliminary URL structure analysis (ccTLD vs Subdirectory) and hreflang scoping review.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-blue-900/30 border border-blue-500/40 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Global Scoping Plan Initiated</h4>
            <p className="text-slate-300 text-xs max-w-md mx-auto">
              Our International SEO engineering team will analyze <span className="font-mono text-blue-300">{formData.websiteUrl}</span> for target markets: {formData.targetRegions.join(', ')} and email the blueprint to <span className="font-bold text-white">{formData.workEmail}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Target Expansion Markets
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {regionOptions.map((region) => {
                  const selected = formData.targetRegions.includes(region);
                  return (
                    <button
                      key={region}
                      type="button"
                      onClick={() => toggleRegion(region)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all ${
                        selected
                          ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                          : 'bg-navy-900/80 border-navy-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  2. Current Website URL
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourcompany.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  3. Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="marketing@yourcompany.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Generate International SEO Scoping Blueprint
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
