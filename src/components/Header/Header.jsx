import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-serif font-bold text-ink tracking-tight transition-colors group-hover:text-accent">
            &lt;3
          </span>
          <span className="hidden sm:inline-block h-5 w-px bg-border mx-1"></span>
          <span className="hidden sm:inline-block text-sm font-medium text-ink-muted tracking-wide uppercase">
            With Love
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <a
            href="https://medium.com/@tushardtar704"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            Medium
          </a>
          <a
            href="https://www.instagram.com/tushar_amlivin/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            Instagram
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
