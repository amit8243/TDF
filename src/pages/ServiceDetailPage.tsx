import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Wrench, Sparkles, AlertCircle 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ProposalForm } from '../components/forms/ProposalForm';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';
import { InternationalSeoPage } from './InternationalSeoPage';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // If slug is international-seo, render the dedicated deep page directly
  if (slug === 'international-seo') {
    return <InternationalSeoPage />;
  }

  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services
  const relatedServices = servicesData.filter(s => 
    service.relatedServiceSlugs.includes(s.slug)
  );

  // Relevant case study
  const relevantCaseStudy = caseStudiesData.find(cs => 
    cs.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]) ||
    service.category.toLowerCase().includes(cs.category.toLowerCase())
  ) || caseStudiesData[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.shortDescription,
    "provider": {
      "@type": "MarketingAgency",
      "name": "ApexGrowth",
      "url": "https://www.apexgrowth.com"
    },
    "serviceType": service.category,
    "areaServed": "Global"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: service.name }
            ]}
            className="text-slate-400 mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {service.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>{service.badge}</span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {service.heroHeading}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                {service.heroSubheading}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button to="#proposal-form" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Get a Free Proposal
                </Button>
                <Button to="/case-studies" variant="outline" size="lg" className="border-slate-700 text-white bg-transparent hover:bg-navy-800">
                  View Results
                </Button>
              </div>

              <div className="pt-6 border-t border-navy-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Custom Strategy Roadmap
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Closed-Loop Attribution
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Senior Strategist Led
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-navy-700 shadow-2xl bg-navy-900">
                <img
                  src={service.heroImage}
                  alt={`${service.name} execution and performance analytics`}
                  className="w-full h-80 sm:h-96 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {service.category}
                  </span>
                  <div className="text-xl font-bold mt-1">
                    {service.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges Addressed */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CHALLENGES SOLVED"
            title={`Commercial Roadblocks We Eliminate With ${service.name}`}
            description="We solve the root architectural and strategic issues that throttle growth and erode marketing ROI."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-3">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Overview & Scope Deliverables */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                CAPABILITY OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
                Strategic Depth Backed by Rigorous Execution
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {service.detailedOverview}
              </p>

              {/* Tools & Platforms */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <span>Enterprise Tools & Platforms Utilized</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scope Deliverables List */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
              <h3 className="text-xl font-bold text-navy-950 mb-6">
                Scope of Work & Deliverables
              </h3>
              <ul className="space-y-4">
                {service.scopeDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STRUCTURED TIMELINE"
            title={`Our Six-Stage ${service.name} Process`}
            description="How our multidisciplinary team drives predictable results from initial discovery through continuous compounding."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center font-mono">
                      0{step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phase {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Commercial Impact */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              MEASURABLE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-2">
              The Strategic Benefits of Partnering With ApexGrowth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-navy-950">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Case Study Callout */}
      {relevantCaseStudy && (
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                PROVEN RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                Featured Case Study Related to {service.name}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <CaseStudyCard caseStudy={relevantCaseStudy} />
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SERVICE CLARITY"
            title={`Frequently Asked Questions About ${service.name}`}
            description="Clear answers regarding turnaround times, attribution methodology, and requirements."
            align="center"
          />

          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related Services Internal Links */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-navy-950 mb-6 text-center">
              Interrelated Growth Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.slug}
                  to={`/services/${rs.slug}`}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-subtle transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-base font-bold text-navy-950 group-hover:text-blue-600 transition-colors">
                      {rs.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                      {rs.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Lead Gen Form */}
      <section id="proposal-form" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalForm
            initialService={service.slug}
            title={`Request Your Free ${service.name} Proposal`}
            subtitle={`Share your targets with our team. We'll analyze your current footprint and prepare a custom ${service.name} strategy within 48 hours.`}
          />
        </div>
      </section>
    </>
  );
};
