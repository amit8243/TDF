import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { ProposalForm } from '../components/forms/ProposalForm';
import { CaseStudyCard } from '../components/cards/CaseStudyCard';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find(ind => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Find relevant case study
  const relevantCaseStudy = caseStudiesData.find(cs => 
    cs.industry.toLowerCase().includes(industry.name.toLowerCase().split(' ')[0]) ||
    industry.name.toLowerCase().includes(cs.industry.toLowerCase())
  ) || caseStudiesData[0];

  return (
    <>
      <SEOHead
        title={industry.metaTitle}
        description={industry.metaDescription}
        canonicalPath={`/industries/${industry.slug}`}
        ogImage={industry.heroImage}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Industries", path: "/industries" },
              { label: industry.name }
            ]}
            className="text-slate-400 mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
                INDUSTRY PRACTICE · {industry.name.toUpperCase()}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {industry.heroHeading}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                {industry.heroSubheading}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button to="#proposal-form" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Discuss Your Sector Strategy
                </Button>
                <Button to="/case-studies" variant="outline" size="lg" className="border-slate-700 text-white bg-transparent hover:bg-navy-800">
                  View Sector Outcomes
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-navy-700 shadow-2xl bg-navy-900">
                <img
                  src={industry.heroImage}
                  alt={`${industry.name} digital marketing strategy`}
                  className="w-full h-80 sm:h-96 object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Metrics Bar */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-navy-800">
            {industry.metrics.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">{m.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges & Tailored Solutions */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Challenges */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                INDUSTRY SPECIFIC FRICTION
              </span>
              <h2 className="text-3xl font-extrabold text-navy-950">
                Key Market Bottlenecks in {industry.name}
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((c, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-navy-950 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Specialized Solutions */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                OUR PROPRIETARY PLAYBOOK
              </span>
              <h2 className="text-3xl font-extrabold text-navy-950">
                Targeted Interventions We Deploy
              </h2>
              <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200 space-y-4">
                {industry.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-navy-950 font-medium">
                      {sol}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Relevant Case Study Callout */}
      {relevantCaseStudy && (
        <section className="py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                SECTOR RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                Featured Case Study for {industry.name}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <CaseStudyCard caseStudy={relevantCaseStudy} />
            </div>
          </div>
        </section>
      )}

      {/* Back to Industries Link */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Industries</span>
          </Link>
        </div>
      </section>

      {/* Proposal Form Section */}
      <section id="proposal-form" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalForm
            title={`Get a Customized Strategy for ${industry.name}`}
            subtitle="Connect with our industry practice leads to review competitor benchmarks and tailored revenue roadmaps."
          />
        </div>
      </section>
    </>
  );
};
