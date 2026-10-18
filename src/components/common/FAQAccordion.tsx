import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first for discovery

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4 max-w-4xl mx-auto", className)}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const headerId = `faq-header-${index}`;

        return (
          <div
            key={index}
            className={cn(
              "border rounded-2xl transition-all duration-200 overflow-hidden",
              isOpen 
                ? "bg-white border-blue-200 shadow-sm ring-1 ring-blue-50" 
                : "bg-white border-slate-200 hover:border-slate-300"
            )}
          >
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="text-base md:text-lg font-bold text-navy-950 pr-4">
                {faq.question}
              </span>
              <span className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200",
                isOpen ? "bg-blue-50 text-blue-600 rotate-180" : "bg-slate-100 text-slate-500"
              )}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
