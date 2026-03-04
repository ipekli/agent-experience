import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { patterns } from "./data/patterns.js";
import { useRouter } from "./hooks/useRouter.js";
import IndexPage from "./components/IndexPage.jsx";
import DetailPage from "./components/DetailPage.jsx";
import "./styles.css";

export default function AgenticPatterns() {
  const { view, patternId, navigate } = useRouter();

  const currentIndex = patternId
    ? patterns.findIndex((p) => p.id === patternId)
    : -1;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [patternId, view]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (view !== "detail" || currentIndex === -1) return;
      if (e.key === "Escape") {
        navigate("/");
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = currentIndex + 1;
        if (next < patterns.length) navigate(`/${patterns[next].id}`);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = currentIndex - 1;
        if (prev >= 0) navigate(`/${patterns[prev].id}`);
      }
    },
    [view, currentIndex, navigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#EDEEE8",
        color: "#111",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <AnimatePresence mode="wait">
        {view === "index" ? (
          <motion.div
            key="index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IndexPage navigate={navigate} />
          </motion.div>
        ) : (
          <motion.div
            key={patternId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DetailPage patternId={patternId} navigate={navigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
