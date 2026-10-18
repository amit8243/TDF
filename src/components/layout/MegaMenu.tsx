import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesMegaMenuGroups } from '../../data/navigationData';
import { IconRenderer } from '../common/IconRenderer';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Services Mega Menu"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200/90 shadow-dropdown z-50 animate-in fade-in slide-in-from-top-1 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesMegaMenuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                {group.category}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="group flex items-start gap-3 p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconRenderer name={item.icon} className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-navy-950 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 flex-shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {item.shortDesc}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mega Menu Footer Callout */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/70 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-sm text-slate-700">
              Expanding globally? Explore our dedicated <strong className="text-navy-950">International SEO</strong> framework.
            </span>
          </div>
          <Link
            to="/services/international-seo"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            <span>Learn About International SEO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
