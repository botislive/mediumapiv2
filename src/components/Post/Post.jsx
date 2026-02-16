import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { postid } = useParams();
  const decodedTitle = decodeURIComponent(postid);

  useEffect(() => {
    async function fetchPostData() {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tushardtar704"
      );
      const data = await response.json();
      const foundPost = data.items.find(item => item.guid === decodedTitle);
      setPost(foundPost);
    }
    fetchPostData();
  }, [decodedTitle]);

  if (!post) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent"></div>
          <span className="text-sm text-ink-muted">Loading article…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Link
        to="/"
        className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Stories
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.categories.slice(0, 3).map((cat, i) => (
                <span key={i} className="rounded-full bg-tag-bg px-3 py-1 text-xs font-semibold text-tag-text uppercase tracking-wider">
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-ink-muted border-b border-border pb-8">
            <span className="font-medium text-ink">{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint"></span>
            <time>{new Date(post.pubDate).toLocaleDateString(undefined, { dateStyle: 'long' })}</time>
          </div>
        </header>

        <div
          id="post-content"
          className="
            [&>p]:text-ink-light [&>p]:text-lg [&>p]:leading-[1.85] [&>p]:mb-6
            [&>h1]:font-serif [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-ink [&>h1]:mt-10 [&>h1]:mb-4
            [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-ink [&>h2]:mt-10 [&>h2]:mb-4
            [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-ink [&>h3]:mt-8 [&>h3]:mb-3
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-ink-light
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-ink-light
            [&>blockquote]:border-l-[3px] [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-ink-muted [&>blockquote]:my-8
            [&>pre]:bg-cream-dark [&>pre]:rounded-xl [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:text-sm [&>pre]:border [&>pre]:border-border [&>pre]:my-6
            [&>code]:text-accent [&>code]:text-sm [&>code]:bg-cream-dark [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded
            [&>img]:rounded-xl [&>img]:my-8 [&>img]:shadow-md [&>img]:border [&>img]:border-border
            [&>a]:text-accent [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:text-accent-hover
            [&>figure]:my-8
            [&_img]:rounded-xl [&_img]:shadow-md [&_img]:border [&_img]:border-border [&_img]:w-full
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
          "
          dangerouslySetInnerHTML={{ __html: post.content.replace(/<figure[^>]*>[\s\S]*?<\/figure>\s*$/i, '').replace(/<img[^>]*\/?>\s*$/i, '') }}
        />

        <footer className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            ← More Stories
          </Link>
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-2.5 text-sm font-semibold hover:bg-ink-light transition-colors"
          >
            Read on Medium
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </footer>
      </article>
    </div>
  );
};

export default Post;
