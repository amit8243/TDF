import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProposalForm } from '../components/forms/ProposalForm';
import { siteConfig } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Us & Request a Free Growth Proposal"
        description="Connect with ApexGrowth's senior digital marketing strategists. Request a custom SEO, International SEO, PPC, or CRO evaluation within 48 hours."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact Us & Proposal" }]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
              CONNECT WITH OUR SENIOR STRATEGISTS
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Let's Discuss Your Growth Objectives
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Whether you are evaluating enterprise SEO, planning an international expansion, or looking to lower customer acquisition costs, our team is ready to analyze your opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Cols: Proposal Form */}
            <div className="lg:col-span-7">
              <ProposalForm />
            </div>

            {/* Right 5 Cols: Contact Details & Assurances */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Office Information */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-card space-y-6">
                <h3 className="text-xl font-bold text-navy-950 border-b border-slate-100 pb-4">
                  Agency Headquarters & Inquiries
                </h3>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950">Direct Phone</div>
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-600 hover:underline">
                        {siteConfig.phone}
                      </a>
                      <div className="text-xs text-slate-400 mt-0.5">Mon - Fri, 8:00 AM - 6:00 PM CST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950">Growth & New Client Inquiries</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">
                        {siteConfig.email}
                      </a>
                      <div className="text-xs text-slate-400 mt-0.5">Guaranteed 24-hour response</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950">Office Address</div>
                      <address className="not-italic text-slate-600 leading-relaxed text-xs">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                        {siteConfig.address.country}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Box */}
              <div className="bg-navy-950 text-white p-8 rounded-3xl border border-navy-800 shadow-card space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>What Happens After You Submit?</span>
                </h4>
                <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">1</span>
                    <span><strong>Initial Discovery Review:</strong> Our senior strategists review your domain footprint, competitor overlap, and technical setup.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">2</span>
                    <span><strong>Strategy Blueprint:</strong> We prepare a customized proposal highlighting the exact keywords, budget allocations, and technical priorities for your goals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">3</span>
                    <span><strong>Direct Discussion:</strong> We walk your leadership through findings and answer all questions with zero high-pressure sales tactics.</span>
                  </li>
                </ul>
              </div>

              {/* Security & Confidentiality */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>100% Confidential:</strong> We sign mutual NDAs upon request before reviewing proprietary analytics or financial parameters.
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
