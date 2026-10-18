import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Send, Info } from 'lucide-react';
import { Button } from '../common/Button';
import { servicesData } from '../../data/servicesData';

interface ProposalFormProps {
  initialService?: string;
  initialTargetCountry?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ProposalForm: React.FC<ProposalFormProps> = ({
  initialService = '',
  initialTargetCountry = '',
  title = "Request Your Free Growth Proposal & Strategy Audit",
  subtitle = "Tell us about your objectives. Our senior strategists will analyze your search footprint and deliver an actionable revenue roadmap within 48 hours.",
  className = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    targetCountry: initialTargetCountry,
    serviceRequired: initialService || 'seo-services',
    monthlyBudget: '$5,000 - $10,000 / month',
    mainGoal: 'Increase Qualified Organic Pipeline',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Configurable API endpoint (falls back to local demo mode if not configured)
  const API_ENDPOINT = (import.meta as any).env?.VITE_PROPOSAL_WEBHOOK_URL || '';

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company name is required.';
    }

    if (!formData.websiteUrl.trim()) {
      errs.websiteUrl = 'Website URL is required.';
    } else if (!/^https?:\/\//i.test(formData.websiteUrl) && !/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/i.test(formData.websiteUrl)) {
      errs.websiteUrl = 'Please provide a valid URL (e.g. yourcompany.com).';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to the privacy policy to request a proposal.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      if (API_ENDPOINT) {
        // Real webhook / CRM endpoint integration
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Server returned an error status.');
        }
      } else {
        // Working local demo simulation mode: simulate 1s network latency and store locally
        await new Promise(resolve => setTimeout(resolve, 800));
        // Save to browser session for demo auditability
        const submissions = JSON.parse(sessionStorage.getItem('apex_demo_leads') || '[]');
        submissions.push({ ...formData, timestamp: new Date().toISOString() });
        sessionStorage.setItem('apex_demo_leads', JSON.stringify(submissions));
      }

      setSubmittedData({ ...formData });
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 lg:p-10 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>

        {/* Local Demo Mode Notice */}
        {!API_ENDPOINT && (
          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Local Demo Mode Active:</span> Submissions in this preview are captured locally in session storage and validated in real time. (To route leads to live CRM or n8n webhook, configure <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">VITE_PROPOSAL_WEBHOOK_URL</code>).
            </div>
          </div>
        )}
      </div>

      {submissionStatus === 'success' && submittedData ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-navy-950">Proposal Request Received</h4>
          <p className="text-slate-700 text-sm max-w-lg mx-auto">
            Thank you, <strong className="text-navy-950">{submittedData.fullName}</strong>. We have logged your request for <strong className="text-navy-950">{submittedData.companyName}</strong>. A senior strategist will review <span className="font-mono text-xs">{submittedData.websiteUrl}</span> and reach out to <strong className="text-navy-950">{submittedData.workEmail}</strong> within 1 business day.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmissionStatus('idle');
                setFormData({
                  fullName: '',
                  workEmail: '',
                  phone: '',
                  companyName: '',
                  websiteUrl: '',
                  targetCountry: '',
                  serviceRequired: 'seo-services',
                  monthlyBudget: '$5,000 - $10,000 / month',
                  mainGoal: 'Increase Qualified Organic Pipeline',
                  message: '',
                  consent: false
                });
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submissionStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-sm text-red-800">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>We encountered an issue submitting your proposal request. Please verify your details or contact us directly at growth@apexgrowth.com.</span>
            </div>
          )}

          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Full Name <span className="text-blue-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="workEmail" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Work Email <span className="text-blue-600">*</span>
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="sarah@company.com"
                aria-invalid={!!errors.workEmail}
                aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.workEmail ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.workEmail && (
                <p id="workEmail-error" className="mt-1.5 text-xs text-red-600 font-medium">
                  {errors.workEmail}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone and Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Phone Number <span className="text-blue-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.phone ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Company Name <span className="text-blue-600">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enterprise Inc."
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? "companyName-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.companyName ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.companyName && (
                <p id="companyName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Website URL and Target Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="websiteUrl" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Website URL <span className="text-blue-600">*</span>
              </label>
              <input
                id="websiteUrl"
                name="websiteUrl"
                type="text"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://company.com"
                aria-invalid={!!errors.websiteUrl}
                aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.websiteUrl ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {errors.websiteUrl && (
                <p id="websiteUrl-error" className="mt-1.5 text-xs text-red-600 font-medium">
                  {errors.websiteUrl}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="targetCountry" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Target Country or Global Market <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="targetCountry"
                name="targetCountry"
                type="text"
                value={formData.targetCountry}
                onChange={handleChange}
                placeholder="e.g. United States, UK, DACH, Global"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
              />
            </div>
          </div>

          {/* Row 4: Service Required and Monthly Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Primary Service Required
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
              >
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="monthlyBudget" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                Monthly Marketing Budget
              </label>
              <select
                id="monthlyBudget"
                name="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
              >
                <option value="$3,500 - $5,000 / month">$3,500 - $5,000 / month</option>
                <option value="$5,000 - $10,000 / month">$5,000 - $10,000 / month</option>
                <option value="$10,000 - $25,000 / month">$10,000 - $25,000 / month</option>
                <option value="$25,000 - $50,000+ / month">$25,000 - $50,000+ / month (Enterprise)</option>
              </select>
            </div>
          </div>

          {/* Row 5: Main Business Goal */}
          <div>
            <label htmlFor="mainGoal" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
              Main Business Goal
            </label>
            <select
              id="mainGoal"
              name="mainGoal"
              value={formData.mainGoal}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
            >
              <option value="Increase Qualified Organic Pipeline">Increase Qualified Organic Pipeline</option>
              <option value="Expand Search Rankings Internationally">Expand Search Rankings Internationally</option>
              <option value="Lower Paid Acquisition CAC / Boost ROAS">Lower Paid Acquisition CAC / Boost ROAS</option>
              <option value="Re-engineer Website for Core Web Vitals & Conversion">Re-engineer Website for Core Web Vitals & Conversion</option>
              <option value="Prepare for AI Search & Generative Engine Optimization">Prepare for AI Search & Generative Engine Optimization</option>
              <option value="Comprehensive Technical SEO Audit">Comprehensive Technical SEO Audit</option>
            </select>
          </div>

          {/* Row 6: Additional Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
              Additional Details or Competitors <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about specific challenges, target milestones, or competitors you want to outperform..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-950 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to the{' '}
                <Link to="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
                  Privacy Policy
                </Link>{' '}
                and understand that ApexGrowth uses this information strictly to provide a customized growth proposal and strategy evaluation.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.consent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Get My Free Strategy Proposal
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
