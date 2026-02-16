import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const Home = () => {
  const [postdata, setPostData] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tushardtar704');
      const data = await response.json();
      setPostData(data.items);
      setImage(data.feed.image);
    }
    fetchData();
  }, []);

  return (
    <>
     
      <section className="relative overflow-hidden bg-cream-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 40L40 0\' stroke=\'%231A1A1A\' stroke-width=\'.5\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />

        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28 text-center">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Engineer · Writer · Builder
            </p>
          </div>

          <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-7xl font-bold text-ink leading-[1.1] tracking-tight">
            Hey, I'm <span className="italic text-accent">Tushar</span>
            <span className="inline-block ml-2 not-italic">👋</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-8 mx-auto max-w-xl text-lg text-ink-muted leading-relaxed">
            I share thoughtful stories about engineering, design, and building things
            that matter. Welcome to my corner of the internet.
          </p>

          
          <div className="animate-fade-up delay-300 mt-14 inline-flex flex-col sm:flex-row items-center gap-6 bg-card rounded-2xl border border-border p-6 shadow-sm">
            <img
              src={image}
              alt="profile"
              className="h-20 w-20 rounded-full object-cover ring-2 ring-border-light"
            />
            <div className="text-left">
              <p className="font-semibold text-ink text-lg">Tushar Dtar704</p>
              <p className="text-sm text-ink-muted mt-1">Writing on Medium & building in public</p>
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://medium.com/@tushardtar704"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  Follow on Medium
                </a>
                <span className="h-3 w-px bg-border"></span>
                <a
                  href="https://www.instagram.com/tushar_amlivin/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm0 1.8A4 4 0 003.8 7.8v8.4a4 4 0 004 4h8.4a4 4 0 004-4V7.8a4 4 0 00-4-4H7.8zm8.8 1.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4ZM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink whitespace-nowrap">
            Latest Stories
          </h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {postdata.map((post, i) => (
            <PostCard key={post.guid || post.link || post.title} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
