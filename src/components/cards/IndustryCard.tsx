import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from '../common/IconRenderer';
import { IndustryItem } from '../../data/industriesData';
import { cn } from '../../utils/cn';

interface IndustryCardProps {
  industry: IndustryItem;
  className?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry, className }) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={industry.heroImage}
          alt={industry.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm text-navy-900 flex items-center justify-center shadow-sm">
            <IconRenderer name={industry.icon} className="w-5 h-5 text-blue-600" />
          </div>
          {industry.metrics[0] && (
            <span className="text-xs font-bold text-white bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {industry.metrics[0].value} {industry.metrics[0].label}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy-950 group-hover:text-blue-600 transition-colors mb-2">
            <Link to={`/industries/${industry.slug}`}>
              {industry.name}
            </Link>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {industry.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700"
          >
            <span>Explore Industry</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
