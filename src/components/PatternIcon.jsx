import { motion } from "motion/react";

export default function PatternIcon({ id, size = 36 }) {
  const base = {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  // d = dark backdrop, c = cream foreground
  const d = "rgba(0,0,0,0.12)";
  const c = "currentColor";
  const sw = { stroke: c, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };

  const icons = {
    "tool-use": (
      <svg {...base}>
        <circle cx="60" cy="60" r="36" fill={d} />
        <circle cx="60" cy="60" r="16" {...sw} />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const rad = (a * Math.PI) / 180;
          return <line key={a} x1={60 + Math.cos(rad) * 22} y1={60 + Math.sin(rad) * 22} x2={60 + Math.cos(rad) * 32} y2={60 + Math.sin(rad) * 32} {...sw} />;
        })}
        <motion.circle cx="60" cy="60" r="6" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.25 }} />
      </svg>
    ),

    "react-loop": (
      <svg {...base}>
        <polygon points="60,20 95,75 25,75" fill={d} />
        <polygon points="60,28 88,70 32,70" {...sw} fill="none" />
        <circle cx="60" cy="28" r="7" {...sw} fill={c} />
        <circle cx="88" cy="70" r="7" {...sw} fill={c} />
        <circle cx="32" cy="70" r="7" {...sw} fill={c} />
        <motion.circle r="4" fill={c} stroke="none" variants={{ idle: { cx: 60, cy: 28 }, hover: { cx: [60, 88, 32, 60], cy: [28, 70, 70, 28] } }} transition={{ duration: 1.4, ease: "linear", repeat: Infinity }} />
      </svg>
    ),

    planning: (
      <svg {...base}>
        <line x1="60" y1="90" x2="60" y2="52" {...sw} />
        <line x1="60" y1="52" x2="32" y2="28" {...sw} />
        <line x1="60" y1="52" x2="88" y2="28" {...sw} />
        <circle cx="32" cy="28" r="14" fill={d} />
        <circle cx="88" cy="28" r="14" fill={d} />
        <circle cx="60" cy="90" r="6" fill={c} stroke="none" />
        <circle cx="60" cy="52" r="6" fill={c} stroke="none" />
        <motion.circle cx="32" cy="28" r="8" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.2, delay: 0 }} />
        <motion.circle cx="88" cy="28" r="8" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.2, delay: 0.15 }} />
      </svg>
    ),

    reflection: (
      <svg {...base}>
        <rect x="56" y="15" width="8" height="90" rx="4" fill={d} />
        <polyline points="44,38 26,60 44,82" {...sw} />
        <polyline points="76,38 94,60 76,82" {...sw} />
        <motion.path d="M26 60 L50 60" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} />
        <motion.path d="M94 60 L70 60" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }} />
      </svg>
    ),

    mcp: (
      <svg {...base}>
        <rect x="10" y="32" width="34" height="56" rx="4" fill={d} />
        <rect x="76" y="32" width="34" height="56" rx="4" fill={d} />
        <rect x="14" y="36" width="26" height="48" rx="2" {...sw} />
        <rect x="80" y="36" width="26" height="48" rx="2" {...sw} />
        <motion.line x1="40" y1="50" x2="80" y2="50" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} />
        <motion.line x1="40" y1="66" x2="80" y2="66" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }} />
        <circle cx="32" cy="50" r="3" fill={c} stroke="none" />
        <circle cx="32" cy="66" r="3" fill={c} stroke="none" />
        <motion.circle cx="88" cy="50" r="3" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.15, delay: 0.3 }} />
        <motion.circle cx="88" cy="66" r="3" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.15, delay: 0.4 }} />
      </svg>
    ),

    cua: (
      <svg {...base}>
        <rect x="14" y="22" width="92" height="68" rx="4" fill={d} />
        <rect x="18" y="26" width="84" height="60" rx="2" {...sw} />
        <line x1="18" y1="38" x2="102" y2="38" {...sw} />
        <motion.path d="M52 56 L44 74 L58 68 Z" fill={c} stroke="none" variants={{ idle: { opacity: 0.6 }, hover: { opacity: 1 } }} transition={{ duration: 0.2 }} />
        <motion.circle cx="44" cy="74" r="0" fill="none" stroke={c} strokeWidth="2" variants={{ idle: { r: 0, opacity: 0 }, hover: { r: [0, 18], opacity: [0.5, 0] } }} transition={{ duration: 0.7, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }} />
      </svg>
    ),

    skills: (
      <svg {...base}>
        <path d="M60 14 L100 37 L100 83 L60 106 L20 83 L20 37 Z" fill={d} />
        <path d="M60 22 L94 42 L94 78 L60 98 L26 78 L26 42 Z" {...sw} />
        <line x1="60" y1="44" x2="60" y2="76" {...sw} />
        <line x1="44" y1="60" x2="76" y2="60" {...sw} />
      </svg>
    ),

    "agents-md": (
      <svg {...base}>
        <rect x="24" y="12" width="72" height="96" rx="4" fill={d} />
        <rect x="28" y="16" width="64" height="88" rx="2" {...sw} />
        <line x1="28" y1="34" x2="92" y2="34" {...sw} />
        <motion.line x1="38" y1="50" x2="82" y2="50" {...sw} variants={{ idle: { pathLength: 0.5 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, delay: 0 }} />
        <motion.line x1="38" y1="66" x2="72" y2="66" {...sw} variants={{ idle: { pathLength: 0.4 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, delay: 0.08 }} />
        <motion.line x1="38" y1="82" x2="82" y2="82" {...sw} variants={{ idle: { pathLength: 0.3 }, hover: { pathLength: 1 } }} transition={{ duration: 0.3, delay: 0.16 }} />
      </svg>
    ),

    orchestration: (
      <svg {...base}>
        <circle cx="60" cy="60" r="32" fill={d} />
        <circle cx="60" cy="60" r="10" fill={c} stroke="none" />
        <circle cx="60" cy="18" r="8" {...sw} />
        <circle cx="102" cy="60" r="8" {...sw} />
        <circle cx="60" cy="102" r="8" {...sw} />
        <circle cx="18" cy="60" r="8" {...sw} />
        <motion.path d="M60 50 L60 26" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0 }} />
        <motion.path d="M70 60 L94 60" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0.08 }} />
        <motion.path d="M60 70 L60 94" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0.16 }} />
        <motion.path d="M50 60 L26 60" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0.24 }} />
      </svg>
    ),

    routing: (
      <svg {...base}>
        <circle cx="28" cy="60" r="18" fill={d} />
        <circle cx="28" cy="60" r="8" fill={c} stroke="none" />
        <line x1="36" y1="60" x2="58" y2="60" {...sw} />
        <line x1="58" y1="60" x2="82" y2="36" {...sw} />
        <line x1="58" y1="60" x2="82" y2="84" {...sw} />
        <circle cx="90" cy="32" r="8" {...sw} />
        <circle cx="90" cy="88" r="8" {...sw} />
        <motion.circle cx="90" cy="32" r="8" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.2, delay: 0.1 }} />
        <motion.circle cx="90" cy="88" r="8" stroke="none" variants={{ idle: { opacity: 1 }, hover: { opacity: 0.2 } }} transition={{ duration: 0.2, delay: 0.1 }} />
      </svg>
    ),

    "autonomous-loops": (
      <svg {...base}>
        <ellipse cx="38" cy="60" rx="24" ry="28" fill={d} />
        <ellipse cx="82" cy="60" rx="24" ry="28" fill={d} />
        <path d="M20 60 C20 36 40 36 60 60 C80 84 100 84 100 60 C100 36 80 36 60 60 C40 84 20 84 20 60 Z" {...sw} />
        <motion.circle r="5" fill={c} stroke="none" variants={{ idle: { offsetDistance: "0%", opacity: 0 }, hover: { offsetDistance: ["0%", "100%"], opacity: 1 } }} transition={{ duration: 1.8, ease: "linear", repeat: Infinity }} style={{ offsetPath: "path('M20 60 C20 36 40 36 60 60 C80 84 100 84 100 60 C100 36 80 36 60 60 C40 84 20 84 20 60 Z')" }} />
      </svg>
    ),

    memory: (
      <svg {...base}>
        <ellipse cx="60" cy="32" rx="38" ry="16" fill={d} />
        <ellipse cx="60" cy="88" rx="38" ry="16" fill={d} />
        <ellipse cx="60" cy="32" rx="34" ry="14" {...sw} />
        <line x1="26" y1="32" x2="26" y2="88" {...sw} />
        <line x1="94" y1="32" x2="94" y2="88" {...sw} />
        <ellipse cx="60" cy="88" rx="34" ry="14" {...sw} />
        <ellipse cx="60" cy="60" rx="34" ry="12" {...sw} strokeDasharray="6 4" />
        <motion.ellipse cx="60" cy="60" rx="34" ry="12" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 0.2, 0] } }} transition={{ duration: 1.2, repeat: Infinity }} />
      </svg>
    ),

    context: (
      <svg {...base}>
        <rect x="12" y="20" width="96" height="80" rx="4" fill={d} />
        <rect x="16" y="24" width="88" height="72" rx="2" {...sw} />
        <line x1="16" y1="42" x2="104" y2="42" {...sw} />
        <circle cx="28" cy="33" r="4" fill={c} stroke="none" />
        <circle cx="40" cy="33" r="4" fill={c} stroke="none" />
        <circle cx="52" cy="33" r="4" fill={c} stroke="none" />
        <motion.rect x="28" y="52" width="64" height="6" rx="2" fill={c} stroke="none" variants={{ idle: { width: 0, opacity: 0 }, hover: { width: 64, opacity: 0.6 } }} transition={{ duration: 0.3, delay: 0 }} />
        <motion.rect x="28" y="68" width="40" height="6" rx="2" fill={c} stroke="none" variants={{ idle: { width: 0, opacity: 0 }, hover: { width: 40, opacity: 0.4 } }} transition={{ duration: 0.3, delay: 0.1 }} />
        <motion.rect x="28" y="82" width="52" height="6" rx="2" fill={c} stroke="none" variants={{ idle: { width: 0, opacity: 0 }, hover: { width: 52, opacity: 0.3 } }} transition={{ duration: 0.3, delay: 0.2 }} />
      </svg>
    ),

    "structured-output": (
      <svg {...base}>
        <rect x="30" y="18" width="60" height="84" rx="4" fill={d} />
        <text x="18" y="82" fontSize="72" fontFamily="'Departure Mono', monospace" fill="none" stroke={c} strokeWidth="2.5">{"{"}</text>
        <text x="72" y="82" fontSize="72" fontFamily="'Departure Mono', monospace" fill="none" stroke={c} strokeWidth="2.5">{"}"}</text>
        <motion.line x1="48" y1="42" x2="72" y2="42" stroke={c} strokeWidth="3" variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.2, delay: 0 }} />
        <motion.line x1="44" y1="58" x2="76" y2="58" stroke={c} strokeWidth="3" variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.2, delay: 0.08 }} />
        <motion.line x1="48" y1="74" x2="72" y2="74" stroke={c} strokeWidth="3" variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.2, delay: 0.16 }} />
      </svg>
    ),

    guardrails: (
      <svg {...base}>
        <path d="M60 10 L108 34 L108 78 L60 110 L12 78 L12 34 Z" fill={d} />
        <path d="M60 18 L102 38 L102 74 L60 102 L18 74 L18 38 Z" {...sw} />
        <motion.path
          d="M40 60 L54 76 L80 44"
          fill="none"
          stroke={c}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </svg>
    ),

    "generative-ui": (
      <svg {...base}>
        <rect x="16" y="28" width="88" height="72" rx="4" fill={d} />
        <rect x="20" y="32" width="80" height="64" rx="2" {...sw} />
        <line x1="20" y1="48" x2="100" y2="48" {...sw} />
        <motion.rect x="32" y="58" width="56" height="28" rx="2" fill={c} stroke="none" variants={{ idle: { opacity: 0, scaleY: 0 }, hover: { opacity: 0.2, scaleY: 1 } }} transition={{ duration: 0.3 }} style={{ originY: "96px" }} />
        <motion.g variants={{ idle: { opacity: 0, scale: 0 }, hover: { opacity: 1, scale: 1 } }} transition={{ duration: 0.3, delay: 0.15 }} style={{ originX: "86px", originY: "28px" }}>
          <line x1="86" y1="14" x2="86" y2="38" {...sw} />
          <line x1="74" y1="26" x2="98" y2="26" {...sw} />
          <line x1="78" y1="18" x2="94" y2="34" {...sw} strokeWidth="2" />
          <line x1="94" y1="18" x2="78" y2="34" {...sw} strokeWidth="2" />
        </motion.g>
      </svg>
    ),

    "ide-embedded": (
      <svg {...base}>
        <rect x="12" y="20" width="96" height="80" rx="4" fill={d} />
        <rect x="16" y="24" width="88" height="72" rx="2" {...sw} />
        <line x1="16" y1="40" x2="104" y2="40" {...sw} />
        <polyline points="40,56 26,70 40,84" {...sw} />
        <polyline points="80,56 94,70 80,84" {...sw} />
        <line x1="54" y1="52" x2="66" y2="88" {...sw} />
        <motion.rect x="16" y="40" width="88" height="56" rx="0" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.05 } }} transition={{ duration: 0.3 }} />
        <motion.line x1="60" y1="48" x2="60" y2="88" stroke={c} strokeWidth="1.5" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 0.5, 0] } }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />
      </svg>
    ),

    "tui-cli": (
      <svg {...base}>
        <rect x="12" y="20" width="96" height="80" rx="4" fill={d} />
        <rect x="16" y="24" width="88" height="72" rx="2" {...sw} />
        <polyline points="30,52 40,64 30,76" {...sw} />
        <motion.line x1="50" y1="74" x2="86" y2="74" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.4, ease: "easeOut" }} />
        <motion.rect x="86" y="70" width="4" height="10" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 1, 0] } }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
      </svg>
    ),

    "chat-interfaces": (
      <svg {...base}>
        <path d="M18 18 L102 18 L102 78 L68 78 L48 100 L48 78 L18 78 Z" fill={d} />
        <path d="M22 22 L98 22 L98 74 L66 74 L50 94 L50 74 L22 74 Z" {...sw} />
        <motion.line x1="36" y1="40" x2="84" y2="40" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0 }} />
        <motion.line x1="36" y1="56" x2="68" y2="56" {...sw} variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }} transition={{ duration: 0.25, delay: 0.15 }} />
      </svg>
    ),

    "multi-agent-workspaces": (
      <svg {...base}>
        <rect x="10" y="10" width="44" height="44" rx="4" fill={d} />
        <rect x="66" y="10" width="44" height="44" rx="4" fill={d} />
        <rect x="10" y="66" width="44" height="44" rx="4" fill={d} />
        <rect x="66" y="66" width="44" height="44" rx="4" fill={d} />
        <rect x="14" y="14" width="36" height="36" rx="2" {...sw} />
        <rect x="70" y="14" width="36" height="36" rx="2" {...sw} />
        <rect x="14" y="70" width="36" height="36" rx="2" {...sw} />
        <rect x="70" y="70" width="36" height="36" rx="2" {...sw} />
        <motion.rect x="14" y="14" width="36" height="36" rx="2" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.2 } }} transition={{ duration: 0.15, delay: 0 }} />
        <motion.rect x="70" y="14" width="36" height="36" rx="2" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.2 } }} transition={{ duration: 0.15, delay: 0.06 }} />
        <motion.rect x="14" y="70" width="36" height="36" rx="2" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.2 } }} transition={{ duration: 0.15, delay: 0.12 }} />
        <motion.rect x="70" y="70" width="36" height="36" rx="2" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.2 } }} transition={{ duration: 0.15, delay: 0.18 }} />
      </svg>
    ),

    "headless-ci": (
      <svg {...base}>
        <circle cx="24" cy="60" r="18" fill={d} />
        <circle cx="60" cy="60" r="18" fill={d} />
        <circle cx="96" cy="60" r="18" fill={d} />
        <circle cx="24" cy="60" r="12" {...sw} />
        <line x1="36" y1="60" x2="48" y2="60" {...sw} />
        <circle cx="60" cy="60" r="12" {...sw} />
        <line x1="72" y1="60" x2="84" y2="60" {...sw} />
        <circle cx="96" cy="60" r="12" {...sw} />
        <motion.circle cx="24" cy="60" r="12" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 1, 1, 0] } }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.45] }} />
        <motion.circle cx="60" cy="60" r="12" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 1, 1, 0] } }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.45], delay: 0.3 }} />
        <motion.circle cx="96" cy="60" r="12" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: [0, 1, 1, 0] } }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.45], delay: 0.6 }} />
      </svg>
    ),

    "human-in-loop": (
      <svg {...base}>
        <circle cx="46" cy="34" r="22" fill={d} />
        <path d="M16 100 C16 74 30 62 46 62 C62 62 76 74 76 100" fill={d} />
        <circle cx="46" cy="34" r="14" {...sw} />
        <path d="M22 100 C22 78 34 66 46 66 C58 66 70 78 70 100" {...sw} />
        <motion.path
          d="M76 62 L88 74 L106 48"
          fill="none"
          stroke={c}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{ idle: { pathLength: 0 }, hover: { pathLength: 1 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </svg>
    ),

    observability: (
      <svg {...base}>
        <circle cx="60" cy="60" r="38" fill={d} />
        <path d="M10 60 C10 30 32 14 60 14 C88 14 110 30 110 60" {...sw} />
        <path d="M10 60 C10 90 32 106 60 106 C88 106 110 90 110 60" {...sw} />
        <circle cx="60" cy="60" r="18" {...sw} />
        <motion.circle cx="60" cy="60" r="7" stroke="none" variants={{ idle: { fill: "none" }, hover: { fill: c } }} transition={{ duration: 0.2 }} />
        <motion.circle cx="60" cy="60" r="18" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.12 } }} transition={{ duration: 0.3, delay: 0.1 }} />
      </svg>
    ),

    evals: (
      <svg {...base}>
        <line x1="18" y1="100" x2="102" y2="100" {...sw} />
        <rect x="24" y="68" width="16" height="32" rx="2" fill={d} />
        <rect x="52" y="48" width="16" height="52" rx="2" fill={d} />
        <rect x="80" y="30" width="16" height="70" rx="2" fill={d} />
        <rect x="26" y="70" width="12" height="28" rx="1" {...sw} />
        <rect x="54" y="50" width="12" height="48" rx="1" {...sw} />
        <rect x="82" y="32" width="12" height="66" rx="1" {...sw} />
        <motion.rect x="26" y="70" width="12" height="28" rx="1" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.2, delay: 0 }} />
        <motion.rect x="54" y="50" width="12" height="48" rx="1" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.2, delay: 0.08 }} />
        <motion.rect x="82" y="32" width="12" height="66" rx="1" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.2, delay: 0.16 }} />
      </svg>
    ),

    sandboxes: (
      <svg {...base}>
        {/* Box backdrop */}
        <rect x="24" y="34" width="72" height="62" rx="4" fill={d} />
        {/* Box */}
        <rect x="28" y="38" width="64" height="54" rx="3" {...sw} />
        {/* Lock body */}
        <rect x="48" y="58" width="24" height="18" rx="3" {...sw} />
        {/* Lock shackle */}
        <path d="M52 58 V50 A8 8 0 0 1 68 50 V58" {...sw} fill="none" />
        {/* Keyhole */}
        <circle cx="60" cy="66" r="2.5" fill={c} stroke="none" />
        <line x1="60" y1="68" x2="60" y2="72" stroke={c} strokeWidth={2} strokeLinecap="round" />
        {/* Hover: box fills */}
        <motion.rect x="28" y="38" width="64" height="54" rx="3" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.12 } }} transition={{ duration: 0.3 }} />
        {/* Hover: lock body fills */}
        <motion.rect x="48" y="58" width="24" height="18" rx="3" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.35 } }} transition={{ duration: 0.25, delay: 0.1 }} />
      </svg>
    ),

    harnesses: (
      <svg {...base}>
        {/* Rounded-rect backdrop matching the strap shape */}
        <rect x="18" y="18" width="84" height="84" rx="14" fill={d} />
        {/* Central element — the thing being harnessed */}
        <circle cx="60" cy="60" r="12" {...sw} />
        {/* Horizontal strap */}
        <line x1="20" y1="60" x2="48" y2="60" {...sw} />
        <line x1="72" y1="60" x2="100" y2="60" {...sw} />
        {/* Vertical strap */}
        <line x1="60" y1="20" x2="60" y2="48" {...sw} />
        <line x1="60" y1="72" x2="60" y2="100" {...sw} />
        {/* Diagonal straps — X cross */}
        <line x1="28" y1="28" x2="51" y2="51" {...sw} />
        <line x1="69" y1="69" x2="92" y2="92" {...sw} />
        <line x1="92" y1="28" x2="69" y2="51" {...sw} />
        <line x1="51" y1="69" x2="28" y2="92" {...sw} />
        {/* Buckle/anchor points at strap ends */}
        <rect x="16" y="56" width="8" height="8" rx="1.5" {...sw} />
        <rect x="96" y="56" width="8" height="8" rx="1.5" {...sw} />
        <rect x="56" y="16" width="8" height="8" rx="1.5" {...sw} />
        <rect x="56" y="96" width="8" height="8" rx="1.5" {...sw} />
        {/* Hover: core fills */}
        <motion.circle cx="60" cy="60" r="12" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.3 } }} transition={{ duration: 0.25 }} />
        {/* Hover: straps tighten — buckles pulse inward */}
        <motion.rect x="16" y="56" width="8" height="8" rx="1.5" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.15, delay: 0 }} />
        <motion.rect x="96" y="56" width="8" height="8" rx="1.5" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.15, delay: 0.06 }} />
        <motion.rect x="56" y="16" width="8" height="8" rx="1.5" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.15, delay: 0.12 }} />
        <motion.rect x="56" y="96" width="8" height="8" rx="1.5" fill={c} stroke="none" variants={{ idle: { opacity: 0 }, hover: { opacity: 0.4 } }} transition={{ duration: 0.15, delay: 0.18 }} />
      </svg>
    ),
  };

  return icons[id] || null;
}
