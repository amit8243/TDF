import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Read ApexGrowth's Privacy Policy regarding client data protection, cookie usage, analytics measurement, and confidentiality."
        canonicalPath="/privacy-policy"
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy" }]}
            className="mb-8"
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mb-8">
            Last Updated: October 17, 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm sm:text-base space-y-6 text-slate-700 leading-relaxed">
            <p>
              At {siteConfig.legalName} ("{siteConfig.name}", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal and proprietary information you share with us through our website ({siteConfig.url}) and client onboarding workflows.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">1. Information We Collect</h2>
            <p>
              When you submit an inquiry, proposal request, or subscribe to our research insights, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and contact details (work email address, phone number).</li>
              <li>Company name, corporate website URL, and target market territories.</li>
              <li>Monthly marketing budget ranges and stated business objectives.</li>
              <li>Technical site logs or search engine access granted under mutual agreement.</li>
            </ul>

            <h2 className="text-xl font-bold text-navy-950 pt-4">2. How We Use Your Information</h2>
            <p>
              Information gathered is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analyze your current search footprint and formulate customized strategic proposals.</li>
              <li>Communicate directly regarding your inquiry or scheduled discovery consultation.</li>
              <li>Comply with regulatory obligations and enforce our contractual terms.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your contact information to third-party data brokers or marketing lists under any circumstances.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">3. Data Retention and Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect all submitted data against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-xl font-bold text-navy-950 pt-4">4. Contact Us</h2>
            <p>
              If you have any questions or privacy inquiries, contact us at: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 underline">{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
