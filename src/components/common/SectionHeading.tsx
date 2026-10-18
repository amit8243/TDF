import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className={cn(
          "inline-block text-xs md:text-sm font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full",
          light 
            ? "bg-blue-500/10 text-blue-300 border border-blue-400/20" 
            : "bg-blue-50 text-blue-700 border border-blue-100"
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight",
        light ? "text-white" : "text-navy-950"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-base sm:text-lg leading-relaxed",
          light ? "text-slate-300" : "text-slate-600"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
