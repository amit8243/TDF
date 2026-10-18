import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPostItem } from '../../data/blogData';
import { cn } from '../../utils/cn';

interface BlogCardProps {
  post: BlogPostItem;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className }) => {
  return (
    <article
      className={cn(
        "group relative bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-navy-950 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-slate-700">{post.author.name}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
