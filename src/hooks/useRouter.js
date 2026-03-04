import { useState, useEffect, useCallback } from "react";
import { patterns } from "../data/patterns.js";

function getRouteFromPath() {
  const path = window.location.pathname;
  if (path === "/" || path === "") {
    return { view: "index", patternId: null };
  }
  const id = path.slice(1);
  if (patterns.find((p) => p.id === id)) {
    return { view: "detail", patternId: id };
  }
  return { view: "index", patternId: null };
}

export function useRouter() {
  const [route, setRoute] = useState(getRouteFromPath);

  // One-time hash-to-path migration
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && patterns.find((p) => p.id === hash)) {
      window.history.replaceState(null, "", `/${hash}`);
      setRoute({ view: "detail", patternId: hash });
    }
  }, []);

  // Listen for popstate (back/forward)
  useEffect(() => {
    const onPopState = () => {
      setRoute(getRouteFromPath());
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((path) => {
    window.history.pushState(null, "", path);
    setRoute(getRouteFromPath());
  }, []);

  return { ...route, navigate };
}
