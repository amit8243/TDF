import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { blogData } from '../data/blogData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BlogCard } from '../components/cards/BlogCard';
import { siteConfig } from '../data/siteConfig';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts
  const relatedPosts = blogData.filter(p => 
    post.relatedSlugs.includes(p.slug) || (p.slug !== post.slug && p.category === post.category)
  ).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": "2026-10-12T08:00:00+00:00",
    "dateModified": "2026-10-15T09:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/favicon.svg`
      }
    },
    "description": post.excerpt
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        jsonLd={articleSchema}
      />

      {/* Article Header */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", path: "/blog" },
              { label: post.title }
            ]}
            className="mb-6"
          />

          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author and Metadata Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <div className="text-sm font-bold text-navy-950">{post.author.name}</div>
                  <div className="text-xs text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Published {post.publishedDate}</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 h-72 sm:h-96 bg-slate-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content Layout */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of Contents Sticky (or inline) */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="lg:col-span-12 mb-8">
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <div className="flex items-center gap-2 text-sm font-bold text-navy-950 uppercase tracking-wider mb-3">
                    <Bookmark className="w-4 h-4 text-blue-600" />
                    <span>Table of Contents</span>
                  </div>
                  <ul className="space-y-2">
                    {post.tableOfContents.map((toc) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          className="text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>{toc.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Main Article Body */}
            <div className="lg:col-span-12 prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
              <div className="space-y-6 text-base sm:text-lg">
                {post.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    const headingText = paragraph.replace('## ', '');
                    return (
                      <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-navy-950 pt-6 pb-2 border-b border-slate-100">
                        {headingText}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    const subText = paragraph.replace('### ', '');
                    return (
                      <h3 key={idx} className="text-xl font-bold text-navy-950 pt-4">
                        {subText}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed text-slate-700">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Author Bio Box */}
              <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-sm flex-shrink-0"
                />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Written by
                  </span>
                  <h4 className="text-lg font-bold text-navy-950 mt-1">
                    {post.author.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {post.author.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Senior practice director at ApexGrowth specializing in enterprise search architecture, high-intent audience mapping, and algorithmic measurement.
                  </p>
                </div>
              </div>

              {/* Navigation Back */}
              <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Articles</span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Share2 className="w-4 h-4" />
                  <span>Share this framework with your team</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-navy-950 mb-8 text-center">
              Related Strategic Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map(rp => (
                <BlogCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
