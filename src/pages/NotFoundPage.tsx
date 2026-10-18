import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileQuestion } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for cannot be found. Explore our services or return to the ApexGrowth homepage."
        canonicalPath="/404"
      />

      <section className="py-24 lg:py-36 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            ERROR 404
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-950 mt-2 mb-4 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            The page you requested may have moved, been reorganized, or is temporarily unavailable. Use the links below to navigate our services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return Home
            </Button>
            <Button to="/services" variant="outline" size="md">
              View All Services
            </Button>
            <Button to="/contact" variant="ghost" size="md">
              Contact Support
            </Button>
          </div>

          {/* Quick links */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-600">
            <Link to="/services/seo-services" className="hover:text-blue-600">Enterprise SEO</Link>
            <Link to="/services/international-seo" className="hover:text-blue-600">International SEO</Link>
            <Link to="/case-studies" className="hover:text-blue-600">Case Studies</Link>
            <Link to="/blog" className="hover:text-blue-600">Research & Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
};
