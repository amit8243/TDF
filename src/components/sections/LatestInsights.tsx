import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { BlogCard } from '../cards/BlogCard';
import { blogData } from '../../data/blogData';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const LatestInsights: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="STRATEGY, AI & SEARCH RESEARCH"
            title="Insights to Help Your Business Grow"
            description="In-depth analysis, technical teardowns, and actionable frameworks from our senior search strategists."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="mt-6 lg:mt-0">
            <Button to="/blog" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore All Articles
            </Button>
          </div>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};
