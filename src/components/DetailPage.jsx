import { useEffect } from "react";
import { patterns } from "../data/patterns.js";
import { categories, linkTypeLabels } from "../data/categories.js";
import { patternColors } from "../data/colors.js";
import PatternIcon from "./PatternIcon.jsx";
import PatternNav from "./PatternNav.jsx";

export default function DetailPage({ patternId, navigate }) {
  const pattern = patterns.find((p) => p.id === patternId);
  const currentIndex = patterns.findIndex((p) => p.id === patternId);
  const bg = patternColors[patternId] || "#333";

  const getCategoryColor = (name) =>
    categories.find((c) => c.name === name)?.color || "#666";

  // Set document title and meta description
  useEffect(() => {
    if (pattern) {
      document.title = `${pattern.title} · Agent Experience`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `${pattern.tagline} — ${pattern.description}`);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", `${pattern.title} · Agent Experience`);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", pattern.description);
    }
    return () => {
      document.title = "Agent Experience — Patterns, Surfaces & Design Principles for AI Agents";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", "A practical reference to the patterns, surfaces, and design principles behind AI agents, from primitives to production. 26 patterns across foundations, infrastructure, surfaces, and design.");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", "Agent Experience");
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", "A practical reference to the patterns, surfaces, and design principles behind AI agents, from primitives to production.");
    };
  }, [pattern]);

  if (!pattern) {
    navigate("/");
    return null;
  }

  return (
    <div className="detail-page">
      <div className="detail-hero" style={{ backgroundColor: bg }}>
        <div className="detail-hero-inner">
          <a
            href="/"
            className="detail-back"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            ← Back to all patterns
          </a>
          <div className="detail-hero-category">{pattern.category}</div>
          <div className="detail-hero-icon">
            <PatternIcon id={pattern.id} size={120} />
          </div>
          <h1 className="detail-hero-title">{pattern.title}</h1>
          <div className="detail-hero-tagline">{pattern.tagline}</div>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-desc">{pattern.description}</div>

        {pattern.whyItMatters && (
          <div className="detail-why">{pattern.whyItMatters}</div>
        )}

        {/* Key Ideas */}
        <div className="detail-section-label">Key Ideas</div>
        <div style={{ marginBottom: 0 }}>
          {pattern.keyIdeas.map((idea, i) => (
            <div key={i} className="key-idea">
              <span
                className="key-idea-arrow"
                style={{ color: getCategoryColor(pattern.category) }}
              >
                →
              </span>
              {idea}
            </div>
          ))}
        </div>

        {/* In the Wild */}
        {pattern.examples && pattern.examples.length > 0 && (
          <>
            <div className="detail-divider" />
            <div className="detail-section-label">In the Wild</div>
            <div>
              {pattern.examples.map((ex, i) => (
                <div key={i} className="example-card">
                  <div>
                    <span className="example-name">
                      {ex.url ? (
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ex.name}
                        </a>
                      ) : (
                        ex.name
                      )}
                    </span>
                    {ex.url && <span className="example-arrow">↗</span>}
                  </div>
                  <div className="example-desc">{ex.description}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Go Deeper */}
        {pattern.links && pattern.links.length > 0 && (
          <>
            <div className="detail-divider" />
            <div className="detail-section-label">Go Deeper</div>
            <div>
              {pattern.links.map((link, i) => (
                <a
                  key={i}
                  className="link-item"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-type">
                    {linkTypeLabels[link.type] || link.type}
                  </span>
                  <span className="link-label">{link.label}</span>
                  <span className="link-ext">↗</span>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Related Patterns */}
        {pattern.relatedIds && pattern.relatedIds.length > 0 && (
          <>
            <div className="detail-divider" />
            <div className="detail-section-label">Related Patterns</div>
            <div className="related-grid">
              {pattern.relatedIds
                .map((rid) => patterns.find((p) => p.id === rid))
                .filter(Boolean)
                .map((rp) => (
                  <a
                    key={rp.id}
                    href={`/${rp.id}`}
                    className="related-chip"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${rp.id}`);
                    }}
                  >
                    <PatternIcon id={rp.id} size={16} /> {rp.title}
                  </a>
                ))}
            </div>
          </>
        )}
      </div>

      <PatternNav currentIndex={currentIndex} navigate={navigate} />
    </div>
  );
}
