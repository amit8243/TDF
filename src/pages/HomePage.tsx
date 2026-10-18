import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/sections/Hero';
import { TrustSection } from '../components/sections/TrustSection';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { ChallengesSection } from '../components/sections/ChallengesSection';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { IndustriesGrid } from '../components/sections/IndustriesGrid';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { LatestInsights } from '../components/sections/LatestInsights';
import { CTASection } from '../components/sections/CTASection';
import { siteConfig } from '../data/siteConfig';

export const HomePage: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/favicon.svg`,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": "US"
    },
    "sameAs": [
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.facebook
    ],
    "priceRange": "$$$$"
  };

  return (
    <>
      <SEOHead
        title="Enterprise Digital Marketing & International SEO Agency"
        description="We combine search visibility, paid media, conversion strategy, and data-driven insights to help ambitious businesses generate sustainable growth."
        canonicalPath="/"
        jsonLd={homeSchema}
      />

      {/* Section A: Hero */}
      <Hero />

      {/* Section B: Trust and Credibility */}
      <TrustSection />

      {/* Section C: Services Overview */}
      <ServicesGrid />

      {/* Section D: Business Challenges */}
      <ChallengesSection />

      {/* Section E: Our Growth Process */}
      <ProcessTimeline />

      {/* Section F: Why Choose Us */}
      <WhyChooseUs />

      {/* Section G: Case Studies and Results */}
      <CaseStudiesSection />

      {/* Section H: Industries We Serve */}
      <IndustriesGrid />

      {/* Section I: Client Testimonials */}
      <TestimonialsSection />

      {/* Section J: Latest Insights */}
      <LatestInsights />

      {/* Section K: Lead Generation CTA */}
      <CTASection />
    </>
  );
};
