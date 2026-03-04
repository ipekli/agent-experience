import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { patterns } from "../data/patterns.js";
import { categories } from "../data/categories.js";
import { patternColors } from "../data/colors.js";
import PatternIcon from "./PatternIcon.jsx";

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [2, -2]), {
    stiffness: 200,
    damping: 40,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-2, 2]), {
    stiffness: 200,
    damping: 40,
  });
  const scale = useSpring(1, { stiffness: 200, damping: 40 });

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    scale.set(1.01);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      className="card"
      initial="idle"
      whileHover="hover"
      animate="idle"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 800,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function IndexPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? patterns
      : patterns.filter((p) => p.category === activeCategory);

  return (
    <div className="page-wrapper">
      <div className="hero">
        <div className="hero-label">Updated March 2026</div>
        <h1 className="hero-title">
          Agent <span className="hero-title-mono">Experience</span>
        </h1>
        <p className="hero-sub">
          A practical reference to the patterns, surfaces, and design
          principles behind AI agents, from primitives to production.
        </p>
      </div>

      <div className="filters">
        {["All", ...categories.map((c) => c.name)].map((name) => (
          <button
            key={name}
            className={`filter-pill ${activeCategory === name ? "active" : ""}`}
            onClick={() => setActiveCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {(activeCategory === "All"
        ? categories
        : categories.filter((c) => c.name === activeCategory)
      ).map((cat) => {
        const items = filtered.filter((p) => p.category === cat.name);
        if (items.length === 0) return null;
        return (
          <div key={cat.name} className="category-block">
            <div className="category-header">
              <span className="category-name" style={{ color: cat.color }}>
                {cat.name}
              </span>
              <div className="category-line" />
            </div>
            <div className="category-sub">{cat.subtitle}</div>
            <div className="card-grid">
              {items.map((p) => {
                const bg = patternColors[p.id] || "#333";
                return (
                  <a
                    key={p.id}
                    href={`/${p.id}`}
                    className="card-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${p.id}`);
                    }}
                  >
                    <TiltCard>
                      <div
                        className="card-hero"
                        style={{ backgroundColor: bg }}
                      >
                        <div className="card-icon">
                          <PatternIcon id={p.id} size={100} />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="card-title">{p.title}</div>
                        <div className="card-tagline">{p.tagline}</div>
                      </div>
                    </TiltCard>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="footer">
        <p className="footer-text">
          Built by{" "}
          <a
            href="https://x.com/burcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            @burcs
          </a>
        </p>
      </div>
    </div>
  );
}
