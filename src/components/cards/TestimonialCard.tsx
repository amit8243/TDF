import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TestimonialItem } from '../../data/testimonialsData';
import { cn } from '../../utils/cn';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className }) => {
  return (
    <div
      className={cn(
        "relative bg-white rounded-2xl p-7 md:p-8 border border-slate-200/90 shadow-subtle flex flex-col justify-between hover:shadow-card-hover transition-all duration-300",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {testimonial.isDemoSample && (
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                Sample Client
              </span>
            )}
            <Quote className="w-6 h-6 text-blue-200" />
          </div>
        </div>

        <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-8">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="pt-5 border-t border-slate-100 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 flex-shrink-0"
        />
        <div className="overflow-hidden">
          <h4 className="text-sm font-bold text-navy-950 truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role}, <span className="font-medium text-slate-700">{testimonial.company}</span>
          </p>
          <span className="inline-block mt-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            {testimonial.service}
          </span>
        </div>
      </div>
    </div>
  );
};
