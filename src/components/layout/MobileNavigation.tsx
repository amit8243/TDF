import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import { servicesMegaMenuGroups, mainNavLinks } from '../../data/navigationData';
import { siteConfig } from '../../data/siteConfig';
import { IconRenderer } from '../common/IconRenderer';
import { Button } from '../common/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-hidden animate-in fade-in duration-200"
    >
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <Link to="/" onClick={onClose} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-navy-950 flex items-center justify-center">
            <span className="text-blue-500 font-extrabold text-lg">A</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-navy-950">
            Apex<span className="text-blue-600">Growth</span>
          </span>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-lg text-slate-500 hover:text-navy-950 hover:bg-slate-100 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Scrollable Links */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        <div className="space-y-1">
          {mainNavLinks.map((link) => {
            if (link.hasMegaMenu) {
              return (
                <div key={link.name} className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    aria-expanded={servicesExpanded}
                    className="w-full flex items-center justify-between py-3 text-base font-bold text-navy-950 hover:text-blue-600 text-left"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        servicesExpanded ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {servicesExpanded && (
                    <div className="pl-2 space-y-4 pt-2 pb-4">
                      {servicesMegaMenuGroups.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {group.category}
                          </p>
                          <div className="space-y-1.5">
                            {group.items.map((item) => (
                              <Link
                                key={item.slug}
                                to={item.path}
                                onClick={onClose}
                                className="flex items-center gap-2.5 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600"
                              >
                                <IconRenderer name={item.icon} className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={link.name} className="border-b border-slate-100">
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 text-base font-bold text-navy-950 hover:text-blue-600"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Contact & CTA */}
        <div className="pt-6 space-y-4">
          <Button to="/contact" onClick={onClose} variant="primary" size="lg" className="w-full">
            Get a Free Proposal
          </Button>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
