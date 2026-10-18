import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyItem } from '../../data/caseStudiesData';
import { cn } from '../../utils/cn';

interface CaseStudyCardProps {
  caseStudy: CaseStudyItem;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, className }) => {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm">
            {caseStudy.category}
          </span>
          {caseStudy.isDemoSample && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-black/60 text-slate-300 backdrop-blur-sm border border-white/10">
              Demo Sample
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">
            {caseStudy.clientName} · {caseStudy.industry}
          </p>
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 group-hover:text-blue-200 transition-colors">
            {caseStudy.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-slate-600 text-sm leading-relaxed">
          {caseStudy.summary}
        </p>

        {/* Highlighted Results Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Organic Growth
            </span>
            <span className="text-sm font-bold text-navy-950">
              {caseStudy.metrics.trafficChange.split(' ')[0]}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100/60">
            <span className="block text-[11px] font-medium text-blue-700 uppercase tracking-wide">
              Impact
            </span>
            <span className="text-sm font-bold text-blue-900">
              {caseStudy.metrics.revenueChange.split(' ')[0]}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/case-studies/${caseStudy.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-xs text-slate-400 font-medium">
            {caseStudy.metrics.keyStat}
          </span>
        </div>
      </div>
    </div>
  );
};
