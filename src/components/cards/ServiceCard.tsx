import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from '../common/IconRenderer';
import { ServiceItem } from '../../data/servicesData';
import { cn } from '../../utils/cn';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <IconRenderer name={service.icon} className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-navy-950 group-hover:text-blue-600 transition-colors mb-3">
          <Link to={`/services/${service.slug}`} className="focus:outline-none focus:underline">
            {service.name}
          </Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs text-slate-400 font-medium">{service.category}</span>
      </div>
    </div>
  );
};
