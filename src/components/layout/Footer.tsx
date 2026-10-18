import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Col 1: Brand Info & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18L10 6L14 14L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="4" r="2" fill="#93C5FD"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Apex<span className="text-blue-500">Growth</span>
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Enterprise Marketing Agency
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer scalable organic search, International SEO, paid acquisition, and conversion strategies for enterprise brands focused on measurable revenue growth.
            </p>

            {/* Editable Contact Info Placeholders */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Column 1 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Column 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Specialized Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>View All 13 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries & Company */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Industries
              </h4>
              <ul className="space-y-2 text-xs">
                {industriesData.slice(0, 5).map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {ind.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/industries" className="text-blue-400 hover:text-blue-300 font-semibold">
                    All Industries →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Company & Resources
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies & Results</Link></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Latest Insights & Blog</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Get a Free Proposal</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="py-6 border-b border-navy-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Verified Platform Accreditations:</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {siteConfig.certifications.map((cert, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 text-slate-300 border border-navy-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms and Conditions
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
