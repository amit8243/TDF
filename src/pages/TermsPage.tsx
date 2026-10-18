import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description="Review ApexGrowth's Website Terms and Conditions of Use."
        canonicalPath="/terms-and-conditions"
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms & Conditions" }]}
            className="mb-8"
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
            Terms and Conditions of Use
          </h1>
          <p className="text-xs text-slate-400 mb-8">
            Last Updated: October 17, 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm sm:text-base space-y-6 text-slate-700 leading-relaxed">
            <p>
              Welcome to the website of {siteConfig.legalName} ("{siteConfig.name}"). By accessing or using our website, you agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">1. Informational & Proposal Materials</h2>
            <p>
              The content, strategic frameworks, blog insights, and case studies published on this website are provided for general informational and marketing evaluation purposes. They do not constitute formal legal, financial, or guaranteed contractual advice.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">2. Intellectual Property Rights</h2>
            <p>
              All trademarks, original logos, texts, graphic layouts, and software code on this website are the intellectual property of {siteConfig.legalName} and protected under applicable copyright laws.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">3. Client Services Agreements</h2>
            <p>
              Any formal engagement for SEO, International SEO, PPC, web development, or CRO is governed by a separate, mutually executed Master Services Agreement (MSA) and Statement of Work (SOW).
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">4. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
