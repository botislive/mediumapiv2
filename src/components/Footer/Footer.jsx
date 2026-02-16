const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 px-6 py-3 text-sm text-ink-muted">
        <span>Built with care by</span>
        <a
          href="https://github.com/botislive"
          target="_blank"
          rel="noreferrer"
          aria-label="botislive GitHub profile"
          className="group inline-flex items-center gap-2 font-medium text-ink hover:text-accent transition-colors"
        >
          <img
            src="https://avatars.githubusercontent.com/u/205576067?v=4"
            alt="botislive avatar"
            className="h-6 w-6 rounded-full object-cover ring-1 ring-border opacity-90 group-hover:opacity-100 transition-opacity"
          />
          botislive
        </a>
      </div>
    </footer>
  );
};

export default Footer;
