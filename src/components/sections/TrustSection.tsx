import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const verifiedPartners = [
    { name: "Google Premier Partner", badge: "Search & Shopping Partner" },
    { name: "Meta Business Partner", badge: "Certified Media Agency" },
    { name: "HubSpot Certified Partner", badge: "Inbound & CRM Gold" },
    { name: "Semrush Certified Agency", badge: "Enterprise SEO Partner" },
    { name: "Microsoft Advertising", badge: "Select Agency Tier" }
  ];

  const clientLogos = [
    { name: "Global Enterprise Corp", industry: "SaaS & Cloud" },
    { name: "Aegis Healthcare", industry: "Medical Care" },
    { name: "Novapay International", industry: "Fintech Systems" },
    { name: "Lumina Commerce", industry: "D2C Retail" },
    { name: "Precision Manufacturing", industry: "Industrial B2B" }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Verified Platform Accreditations */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Accredited Agency Partners & Certified Platforms
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {verifiedPartners.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all flex flex-col items-center justify-center text-center shadow-subtle group"
              >
                <ShieldCheck className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-navy-950">{p.name}</span>
                <span className="text-[11px] text-slate-500 font-medium mt-0.5">{p.badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Client Industry Placeholders */}
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 flex-shrink-0">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Trusted Across Leading B2B & D2C Brands</span>
              <span className="text-[10px] lowercase text-slate-400 font-normal">(Sample portfolio)</span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 opacity-75">
              {clientLogos.map((client, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-sm font-extrabold tracking-tight text-slate-700 hover:text-navy-950 transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-400">{client.industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
