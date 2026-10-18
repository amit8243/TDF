import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, TrendingUp, AlertTriangle, Lightbulb, 
  Target, ArrowLeft 
} from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProposalForm } from '../components/forms/ProposalForm';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudiesData.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <>
      <SEOHead
        title={caseStudy.metaTitle}
        description={caseStudy.metaDescription}
        canonicalPath={`/case-studies/${caseStudy.slug}`}
        ogImage={caseStudy.image}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Case Studies", path: "/case-studies" },
              { label: caseStudy.clientName }
            ]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white">
                {caseStudy.category}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-navy-800 text-slate-300 border border-navy-700">
                {caseStudy.industry}
              </span>
              {caseStudy.isDemoSample && (
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-black/60 text-slate-300 border border-white/10">
                  Demo Case Study
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>
          </div>

          {/* Metric Highlights Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-navy-800">
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Search Traffic</div>
              <div className="text-xl sm:text-2xl font-extrabold text-blue-400">{caseStudy.metrics.trafficChange}</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Lead Volume</div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">{caseStudy.metrics.leadChange}</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Commercial Impact</div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">{caseStudy.metrics.revenueChange}</div>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Key Operational Stat</div>
              <div className="text-sm sm:text-base font-bold text-blue-300">{caseStudy.metrics.keyStat}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: Client Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              <span>Client Overview</span>
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {caseStudy.clientOverview}
            </p>
          </div>

          {/* Section 2: Initial Challenges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Initial Challenges</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {caseStudy.initialChallenges.map((challenge, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <p className="text-slate-700 text-sm leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Strategic Objectives */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span>Project Objectives</span>
            </h2>
            <ul className="space-y-3">
              {caseStudy.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-base">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Strategy */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950">
              The Strategic Approach
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {caseStudy.strategy}
            </p>
          </div>

          {/* Section 5: Execution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950">
              Execution Roadmap
            </h2>
            <div className="space-y-3">
              {caseStudy.execution.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center flex-shrink-0 font-mono">
                    0{idx + 1}
                  </span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Results */}
          <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200 space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span>Verified Results & Commercial Impact</span>
            </h2>
            <ul className="space-y-3">
              {caseStudy.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium text-sm sm:text-base">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7: Lessons Learned */}
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200 space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-blue-600" />
              <span>Key Lessons Learned</span>
            </h2>
            <ul className="space-y-2.5">
              {caseStudy.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed list-disc list-inside">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          {/* Back link */}
          <div className="pt-6">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Proposal Form */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalForm
            title="Achieve Comparable Growth for Your Brand"
            subtitle="Let's analyze your current market positioning and map the highest-leverage search and conversion opportunities for your business."
          />
        </div>
      </section>
    </>
  );
};
