import { patterns } from "../data/patterns.js";

export default function PatternNav({ currentIndex, navigate }) {
  const prev = currentIndex > 0 ? patterns[currentIndex - 1] : null;
  const next =
    currentIndex < patterns.length - 1 ? patterns[currentIndex + 1] : null;

  return (
    <nav className="pattern-nav">
      <div className="pattern-nav-inner">
        {prev ? (
          <a
            href={`/${prev.id}`}
            className="pattern-nav-link prev"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${prev.id}`);
            }}
          >
            <span className="pattern-nav-dir">← Previous</span>
            <span className="pattern-nav-title">{prev.title}</span>
          </a>
        ) : (
          <div />
        )}
        <span className="pattern-nav-counter">
          {currentIndex + 1} / {patterns.length}
        </span>
        {next ? (
          <a
            href={`/${next.id}`}
            className="pattern-nav-link next"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${next.id}`);
            }}
          >
            <span className="pattern-nav-dir">Next →</span>
            <span className="pattern-nav-title">{next.title}</span>
          </a>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
