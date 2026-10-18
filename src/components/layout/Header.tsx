import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileNavigation } from './MobileNavigation';
import { mainNavLinks } from '../../data/navigationData';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 border-b border-navy-900 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting New Enterprise Strategy Accounts
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Verified ROI-Focused Digital Marketing
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              to="/contact"
              className="hover:text-white transition-colors font-medium text-blue-400"
            >
              Client Portal & Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center shadow-subtle group">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L10 6L14 14L20 4" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="4" r="2" fill="#60A5FA"/>
              </svg>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-navy-950">
                Apex<span className="text-blue-600">Growth</span>
              </span>
              <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-400 -mt-1">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Navigation on Right (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavLinks.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                  >
                    <button
                      type="button"
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      aria-expanded={megaMenuOpen}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        megaMenuOpen || location.pathname.startsWith('/services')
                          ? 'text-blue-600 bg-blue-50/60'
                          : 'text-slate-700 hover:text-navy-950 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          megaMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              const isActive = location.pathname === link.path || 
                (link.path !== '/' && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => setMegaMenuOpen(false)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/60'
                      : 'text-slate-700 hover:text-navy-950 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Primary CTA Button */}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Button to="/contact" variant="primary" size="md">
                Get a Free Proposal
              </Button>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button to="/contact" variant="primary" size="sm" className="hidden sm:inline-flex">
              Free Proposal
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-navy-950 hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
