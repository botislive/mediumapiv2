import React from 'react';
import { Link } from 'react-router-dom';

const getSummary = (htmlContent, limit = 24) => {
  if (!htmlContent) return '';
  const plainText = htmlContent.replace(/<[^>]+>/g, '').trim();
  const words = plainText.split(/\s+/);
  if (words.length <= limit) return plainText;
  return `${words.slice(0, limit).join(' ')}…`;
};

const formatDate = (value) => {
  if (!value) return 'Recently';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

const PostCard = ({ post, index = 0 }) => {
  return (
    <article
      className="animate-fade-up group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {post?.thumbnail ? (
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.thumbnail}
            alt={post?.title || 'post thumbnail'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : null}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          {post?.categories?.[0] && (
            <span className="rounded-full bg-tag-bg px-3 py-1 text-xs font-semibold text-tag-text uppercase tracking-wider">
              {post.categories[0]}
            </span>
          )}
          <span className="text-xs text-ink-faint">{formatDate(post?.pubDate)}</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
          {post?.title}
        </h3>

        <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-5">
          {getSummary(post?.content)}
        </p>

        <Link
          to={`/post/${encodeURIComponent(post.guid)}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
        >
          Continue Reading
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
