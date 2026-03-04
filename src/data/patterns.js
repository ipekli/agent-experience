export const patterns = [
  // ── FOUNDATIONS ────────────────────────────────────────────────
  {
    id: "tool-use",
    title: "Tool Use & Function Calling",
    category: "Foundations",
    tagline: "The building block of every agent",
    icon: "⚙",
    description:
      "Function calling is what makes everything else on this page possible. Instead of just generating text, the model outputs structured JSON that triggers real actions like API calls, database queries, and file operations. MCP, computer use, and skills are all built on top of this one primitive.",
    whyItMatters:
      "Without tool use, a language model can only generate text. Tool use is what turns a model into an agent by connecting reasoning to action in the real world. If you only learn one concept here, make it this one.",
    keyIdeas: [
      "Structured output leads to deterministic action",
      "Schema definition and validation",
      "Parallel and sequential tool calls",
      "Error handling and retry logic",
    ],
    examples: [
      {
        name: "OpenAI Agents SDK",
        description:
          "Tool calling with automatic schema generation from Python functions, Pydantic validation, and built-in tools for web search, file search, and computer use.",
        url: "https://openai.github.io/openai-agents-python/",
      },
      {
        name: "Anthropic Tool Use API",
        description:
          "Claude supports tool use natively. You define tools as JSON schemas and the model returns structured tool_use blocks that your code executes.",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview",
      },
      {
        name: "Instructor",
        description:
          "The most popular library for getting structured data out of LLMs, with over 3 million monthly downloads. Supports 15+ providers with automatic validation and retries through Pydantic.",
        url: "https://python.useinstructor.com/",
      },
      {
        name: "Cloudflare Agents SDK",
        description:
          "A TypeScript SDK for building persistent, stateful AI agents backed by Durable Objects. Each agent gets its own SQL database, WebSocket connections, scheduling, and bidirectional MCP support.",
        url: "https://github.com/cloudflare/agents",
      },
    ],
    links: [
      {
        label: "Building Effective Agents (Anthropic)",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        type: "article",
      },
      {
        label: "OpenAI Agents SDK Docs",
        url: "https://openai.github.io/openai-agents-python/",
        type: "docs",
      },
    ],
    relatedIds: ["react-loop", "mcp", "structured-output"],
  },
  {
    id: "react-loop",
    title: "ReAct Pattern",
    category: "Foundations",
    tagline: "Think, act, observe, repeat",
    icon: "↻",
    description:
      "ReAct (Reasoning + Acting) is the loop that powers most agents. The model reasons about what to do, takes an action through a tool call, observes the result, then reasons again. It's a simple cycle, but it's how nearly every agentic system works under the hood.",
    whyItMatters:
      "ReAct is the core execution model that everything else builds on. Understanding this loop is the key to debugging agent behavior and designing better tool interfaces.",
    keyIdeas: [
      "Thought, Action, Observation loop",
      "Chain-of-thought meets tool use",
      "Knowing when to stop looping",
      "Distinguishing reasoning from hallucination",
    ],
    examples: [
      {
        name: "LangGraph",
        description:
          "Graph-based agent framework, now at v1.0 and the default runtime for LangChain agents. Supports explicit state machines, cyclic graphs, checkpointing, and error handling.",
        url: "https://langchain-ai.github.io/langgraph/",
      },
      {
        name: "Agno (formerly Phidata)",
        description:
          "Agent framework with a stateless, horizontally scalable runtime, durable memory, and multi-modal support. Built for production with database-backed workflows.",
        url: "https://www.agno.com/",
      },
      {
        name: "Gemini CLI",
        description:
          "Google's open-source terminal agent that runs a ReAct loop with built-in tools and MCP support. Free at 1,000 requests per day and Apache 2.0 licensed.",
        url: "https://github.com/google-gemini/gemini-cli",
      },
    ],
    links: [
      {
        label: "ReAct: Synergizing Reasoning and Acting (Original Paper)",
        url: "https://arxiv.org/abs/2210.03629",
        type: "paper",
      },
      {
        label: "Building Effective Agents (Anthropic)",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        type: "article",
      },
    ],
    relatedIds: ["tool-use", "planning", "reflection", "autonomous-loops"],
  },
  {
    id: "planning",
    title: "Planning & Decomposition",
    category: "Foundations",
    tagline: "Breaking big problems into small steps",
    icon: "◈",
    description:
      "Before acting, good agents plan. Planning patterns help models break complex goals into ordered subtasks, identify dependencies, and create execution strategies. Without planning, agents jump straight into action and usually fail on anything complex.",
    whyItMatters:
      "Planning is what makes production agents work on hard problems. It's also where the hardest UX questions live. How do you show a plan to users? Let them edit it? What happens when something breaks and the agent needs to replan?",
    keyIdeas: [
      "Task decomposition strategies",
      "Dependency graphs and ordering",
      "Dynamic replanning when things go wrong",
      "Tree-of-thought and graph-of-thought",
    ],
    examples: [
      {
        name: "CrewAI",
        description:
          "44k+ GitHub stars. Role-based agent teams with intuitive task and crew abstractions and dependency graphs. You define agents with roles, goals, and backstories, then let them plan and execute together.",
        url: "https://crewai.com",
      },
      {
        name: "Devin 2.0",
        description:
          "Cognition's AI software engineer creates explicit plans with step-by-step task breakdowns and shows its thinking process. Now $20/month and used by Goldman Sachs and Nubank.",
        url: "https://devin.ai",
      },
      {
        name: "OpenAI Agents SDK: Agent-as-Tool",
        description:
          "Enables hierarchical planning where a parent agent delegates subtasks to specialized child agents, each with their own tools and instructions.",
        url: "https://openai.github.io/openai-agents-python/",
      },
    ],
    links: [
      {
        label: "Tree of Thoughts: Deliberate Problem Solving with LLMs",
        url: "https://arxiv.org/abs/2305.10601",
        type: "paper",
      },
      {
        label: "CrewAI: Multi-Agent Framework",
        url: "https://crewai.com",
        type: "docs",
      },
    ],
    relatedIds: ["react-loop", "orchestration", "reflection"],
  },
  {
    id: "reflection",
    title: "Reflection & Self-Correction",
    category: "Foundations",
    tagline: "Agents that check their own work",
    icon: "◇",
    description:
      "Reflection is when an agent pauses to evaluate its own output before moving on. Did the code compile? Does the answer actually address the question? Self-correction loops improve reliability significantly, though they add latency and cost.",
    whyItMatters:
      "Reflection is what makes agents reliable enough for production. Without it, agents confidently produce wrong answers. With it, they catch their own mistakes before shipping them.",
    keyIdeas: [
      "Output validation loops",
      "Critic and verifier patterns",
      "When to reflect and when to ship",
      "Avoiding infinite self-correction spirals",
    ],
    examples: [
      {
        name: "LangGraph Reflection Agents",
        description:
          "First-class support for building reflection loops as graph cycles, with evaluator-optimizer patterns.",
        url: "https://blog.langchain.dev/reflection-agents/",
      },
      {
        name: "DSPy",
        description:
          "Stanford's framework for programming LLMs instead of prompting them. Automatically optimizes prompts based on evaluation metrics, acting as a meta-reflection layer. 23k+ stars.",
        url: "https://dspy.ai",
      },
      {
        name: "Reflexion",
        description:
          "Agents attempt a task, reflect on their own output, and retry with accumulated verbal reinforcement. This foundational work boosted GPT-4 HumanEval from 80% to 91%.",
        url: "https://arxiv.org/abs/2303.11366",
      },
    ],
    links: [
      {
        label: "Reflexion: Language Agents with Verbal Reinforcement Learning",
        url: "https://arxiv.org/abs/2303.11366",
        type: "paper",
      },
      {
        label: "DSPy: Programming, Not Prompting",
        url: "https://dspy.ai",
        type: "docs",
      },
    ],
    relatedIds: ["react-loop", "planning", "evals"],
  },

  // ── PATTERNS ──────────────────────────────────────────────────
  {
    id: "mcp",
    title: "Model Context Protocol",
    category: "Patterns",
    tagline: "A universal plug for AI tools",
    icon: "⊞",
    description:
      "MCP is an open standard, now under the Linux Foundation, that gives models a consistent way to connect to external tools and data sources. It has over 97 million monthly SDK downloads, 5,800+ servers, and 300+ clients, with backing from Anthropic, OpenAI, Google, and Microsoft. Think of it as USB-C for AI.",
    whyItMatters:
      "Before MCP, every AI app had to build its own tool integrations from scratch. With MCP, you build a tool server once and it works with Claude Code, Cursor, Copilot, Gemini CLI, Codex, and any other MCP-compatible client. It has become the standard.",
    keyIdeas: [
      "Server and client architecture",
      "Tool discovery and schema negotiation",
      "Resources, prompts, and tools",
      "Streamable HTTP transport and OAuth authorization",
    ],
    examples: [
      {
        name: "MCP Registry",
        description:
          "The official registry for discovering and publishing MCP servers. Launched preview in late 2025 and now has thousands of servers for databases, APIs, SaaS tools, and more.",
        url: "https://modelcontextprotocol.io",
      },
      {
        name: "Universal Client Support",
        description:
          "Supported by Claude Code, Cursor, VS Code/Copilot, Gemini CLI, Codex CLI, Windsurf, Zed, Cline, OpenCode, Goose, and Aider. Virtually every major coding agent speaks MCP.",
      },
      {
        name: "Awesome MCP Servers",
        description:
          "A community-curated list of MCP servers covering GitHub, Postgres, Slack, Figma, Notion, Linear, Sentry, Stripe, Puppeteer, and thousands more.",
        url: "https://github.com/punkpeye/awesome-mcp-servers",
      },
      {
        name: "Cloudflare Codemode",
        description:
          "Lets LLMs write and execute orchestrated code rather than making sequential tool calls, running in isolated Workers sandboxes with full MCP integration. Code generation is more natural for multi-step tool composition.",
        url: "https://developers.cloudflare.com/agents/api-reference/codemode/",
      },
    ],
    links: [
      {
        label: "Model Context Protocol (Official Site)",
        url: "https://modelcontextprotocol.io",
        type: "docs",
      },
      {
        label: "MCP Specification",
        url: "https://spec.modelcontextprotocol.io",
        type: "docs",
      },
    ],
    relatedIds: ["tool-use", "skills", "ide-embedded"],
  },
  {
    id: "cua",
    title: "Computer Use Agents",
    category: "Patterns",
    tagline: "AI that sees and clicks like a human",
    icon: "▢",
    description:
      "Computer use gives agents eyes and hands. Instead of calling APIs, the model looks at a screenshot, decides where to click or type, and interacts with software through its GUI. This is the most general-purpose agent pattern because if a human can use something, a CUA can too.",
    whyItMatters:
      "Most software doesn't have an API. Computer use lets agents interact with any application, any website, and any legacy system through the GUI. It works everywhere, which is what makes 'automate anything' a realistic goal.",
    keyIdeas: [
      "Screenshot to action loop",
      "Coordinate prediction and click targeting",
      "Handling latency and visual state changes",
      "Choosing between CUA and API-based approaches",
    ],
    examples: [
      {
        name: "Browser Use",
        description:
          "The breakout open-source framework for browser-based AI agents with 58k+ GitHub stars. Makes websites accessible for AI through natural language automation.",
        url: "https://github.com/browser-use/browser-use",
      },
      {
        name: "Anthropic Computer Use",
        description:
          "Claude can interact with full desktops including applications, terminals, and file systems. Claude Sonnet 4.6 hits 72.5% on OSWorld.",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use",
      },
      {
        name: "OpenClaw",
        description:
          "An open-source personal AI assistant that can see and control your computer, accessible via WhatsApp, Telegram, and Discord, with 50+ integrations and persistent memory that personalizes over time.",
        url: "https://openclaw.ai/",
      },
      {
        name: "Agent Browser",
        description:
          "Vercel Labs' headless browser automation CLI optimized for AI agents, featuring semantic element locators via accessibility trees and a dual Rust/Node.js architecture for fast, cross-platform browser control.",
        url: "https://github.com/vercel-labs/agent-browser",
      },
      {
        name: "Cloudflare Browser Rendering",
        description:
          "Headless browser instances running on Cloudflare's global network with a REST API for stateless tasks and Workers bindings for full Puppeteer, Playwright, and Stagehand automation. Scales to thousands of concurrent browsers.",
        url: "https://developers.cloudflare.com/browser-rendering/",
      },
    ],
    links: [
      {
        label: "Browser Use: Open-Source Browser Agent Framework",
        url: "https://github.com/browser-use/browser-use",
        type: "repo",
      },
      {
        label: "Computer Use (Anthropic Docs)",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use",
        type: "docs",
      },
    ],
    relatedIds: ["tool-use", "headless-ci", "generative-ui"],
  },
  {
    id: "skills",
    title: "Skills",
    category: "Patterns",
    tagline: "Plug-in expertise for agents",
    icon: "⬡",
    description:
      "Skills are reusable bundles of instructions, tools, and best practices that you inject into an agent's context at runtime. Instead of one monolithic system prompt, you compose capabilities on the fly. An open standard for agent skills has emerged, adopted by Anthropic, Microsoft, OpenAI, and others.",
    whyItMatters:
      "A single agent can't be an expert at everything. There isn't enough room in the context window, and too many tools degrade performance. Skills solve this by loading the right expertise at the right time, keeping your agent focused and effective for whatever task is at hand.",
    keyIdeas: [
      "Dynamic prompt composition",
      "Skill discovery and selection",
      "SKILL.md as a convention",
      "Progressive disclosure from discovery to execution",
    ],
    examples: [
      {
        name: "Agent Skills Standard",
        description:
          "An open standard for modular agent capabilities using Markdown files with YAML frontmatter. Adopted by Microsoft, OpenAI, Anthropic, Atlassian, Figma, Cursor, and GitHub.",
        url: "https://github.com/skillmatic-ai/awesome-agent-skills",
      },
      {
        name: "Claude Code Slash Commands",
        description:
          "Drop a markdown file in .claude/commands/ and it becomes a reusable skill. Skills can reference project files, define workflows, and compose complex operations.",
      },
      {
        name: "Copilot Extensions",
        description:
          "GitHub Copilot Extensions add domain-specific skills, where each extension provides new tools and context. Amplitude, AWS, Figma, Linear, and Stripe all ship extensions.",
        url: "https://github.com/features/copilot/extensions",
      },
      {
        name: "Skills.sh",
        description:
          "An open directory for reusable AI agent skills — installable bundles of procedural knowledge that work across 20+ agent platforms including Claude Code, Cursor, and GitHub Copilot.",
        url: "https://skills.sh/",
      },
    ],
    links: [
      {
        label: "Awesome Agent Skills: Community List",
        url: "https://github.com/skillmatic-ai/awesome-agent-skills",
        type: "repo",
      },
    ],
    relatedIds: ["mcp", "agents-md", "context"],
  },
  {
    id: "agents-md",
    title: "agents.md",
    category: "Patterns",
    tagline: "A spec file for your agent",
    icon: "▤",
    description:
      "AGENTS.md is a cross-tool standard maintained by the Linux Foundation, and over 60,000 repos now contain one. It describes what an agent can do, its constraints, and how your project works. Claude Code, Cursor, Copilot, Gemini CLI, Codex CLI, Windsurf, Aider, Zed, and more all support it.",
    whyItMatters:
      "If your agent's behavior is scattered across code, prompts, and config files, it's impossible to version, review, or share. A single declarative spec file makes agent behavior a first-class artifact you can put in git, review in PRs, and iterate on like any other code.",
    keyIdeas: [
      "Declarative and imperative agent definition",
      "Versioning agent behavior in git",
      "CLAUDE.md, AGENTS.md, and .cursor/rules conventions",
      "The robots.txt of the AI era",
    ],
    examples: [
      {
        name: "AGENTS.md Standard",
        description:
          "A cross-tool convention for agent instructions using standard Markdown with no special schema. Supported by virtually every major coding agent, with 60k+ repos and growing.",
        url: "https://agents.md",
      },
      {
        name: "CLAUDE.md",
        description:
          "Anthropic's convention for project-level Claude Code configuration with hierarchical scoping across repo root, subdirectories, and user-level overrides.",
      },
      {
        name: "Cursor Rules",
        description:
          "Cursor uses .cursor/rules/*.mdc files with YAML frontmatter and glob patterns for file-specific rules.",
      },
      {
        name: "Copilot Instructions",
        description:
          "GitHub supports .github/copilot-instructions.md for repo-level Copilot customization, telling the AI how your team works.",
        url: "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot",
      },
    ],
    links: [
      {
        label: "AGENTS.md: The Standard",
        url: "https://agents.md",
        type: "docs",
      },
    ],
    relatedIds: ["skills", "mcp", "human-in-loop"],
  },
  {
    id: "orchestration",
    title: "Multi-Agent Orchestration",
    category: "Patterns",
    tagline: "Agents managing agents",
    icon: "⊙",
    description:
      "Some problems are too big for one agent. Orchestration patterns let you split work across multiple specialized agents, like a planner, a researcher, a coder, and a reviewer, each with their own tools and instructions. The hard part is coordination, shared state, and knowing when to hand off.",
    whyItMatters:
      "Complex tasks often need more than one agent. Multiple agents let you parallelize work, use specialized models for different subtasks, and build systems that scale. But complexity also grows quickly, so getting the coordination right matters a lot.",
    keyIdeas: [
      "Supervisor and peer-to-peer topologies",
      "Handoff protocols and shared state",
      "Agent-as-tool for hierarchical decomposition",
      "When to use multiple agents and when one is enough",
    ],
    examples: [
      {
        name: "OpenAI Agents SDK",
        description:
          "The production successor to Swarm. Python-first with agent handoffs, guardrails running in parallel, Pydantic-validated tools, sessions, and human-in-the-loop support.",
        url: "https://openai.github.io/openai-agents-python/",
      },
      {
        name: "LangGraph",
        description:
          "Graph-based multi-agent orchestration with documented patterns for supervisor, hierarchical, and collaborative architectures. Flexible enough for custom workflows of any shape.",
        url: "https://langchain-ai.github.io/langgraph/",
      },
      {
        name: "CrewAI",
        description:
          "44k+ stars on GitHub. Role-based agent teams with intuitive abstractions, graph-based execution, and a managed cloud offering.",
        url: "https://crewai.com",
      },
      {
        name: "Gastown",
        description:
          "A multi-agent workspace manager by Steve Yegge that coordinates dozens of Claude Code agents working in parallel, using git-backed persistent state so agents can resume work across crashes and restarts without losing context.",
        url: "https://github.com/steveyegge/gastown",
      },
      {
        name: "Cloudflare Workflows",
        description:
          "Stateful, long-running multi-step executions on Cloudflare with automatic retries and multi-agent coordination. Agents can fan out work to sub-agents and converge results durably.",
        url: "https://developers.cloudflare.com/workflows/",
      },
    ],
    links: [
      {
        label: "Orchestrating Agents: Routines and Handoffs (OpenAI)",
        url: "https://cookbook.openai.com/examples/orchestrating_agents",
        type: "article",
      },
      {
        label: "Building Effective Agents (Anthropic)",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        type: "article",
      },
    ],
    relatedIds: [
      "routing",
      "autonomous-loops",
      "multi-agent-workspaces",
      "planning",
    ],
  },
  {
    id: "routing",
    title: "Routing & Intent Detection",
    category: "Patterns",
    tagline: "Sending tasks to the right agent",
    icon: "⋔",
    description:
      "Not every request needs the same agent or the same model. Routing patterns classify incoming requests and dispatch them to the right handler, whether that's a fast cheap model for simple queries, a powerful one for complex reasoning, or a specialized agent for domain tasks.",
    whyItMatters:
      "Routing is how you build agentic systems that are both powerful and cost-effective. It lets you match each request to the right model, so simple queries go to fast cheap models and complex reasoning goes to powerful ones.",
    keyIdeas: [
      "Classifier to specialist dispatch",
      "Model cascading from cheap to expensive",
      "LLM-based routing and rules-based routing",
      "Fallback chains and error routing",
    ],
    examples: [
      {
        name: "NVIDIA LLM Router",
        description:
          "Open-source blueprint for routing requests to the right model based on task characteristics. A production-tested approach to intelligent model selection.",
        url: "https://github.com/NVIDIA-AI-Blueprints/llm-router",
      },
      {
        name: "Hierarchical Agent Routing",
        description:
          "A high-level orchestrator agent analyzes queries and delegates to specialized workers. This is the dominant pattern in enterprise multi-agent systems.",
      },
      {
        name: "Vercel AI SDK Middleware",
        description:
          "The AI SDK supports middleware that can intercept requests and route them to different models or providers based on content, cost, or latency requirements.",
        url: "https://ai-sdk.dev",
      },
    ],
    links: [
      {
        label: "Building Effective Agents (Anthropic)",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        type: "article",
      },
      {
        label: "NVIDIA LLM Router Blueprint",
        url: "https://github.com/NVIDIA-AI-Blueprints/llm-router",
        type: "repo",
      },
    ],
    relatedIds: ["orchestration", "guardrails", "context"],
  },
  {
    id: "autonomous-loops",
    title: "Autonomous Loops",
    category: "Patterns",
    tagline: "Let it cook",
    icon: "∞",
    description:
      "Wrap your agent in a loop, give it a task list, and let it run until it's done. Autonomous loops enable continuous development cycles where agents iteratively improve a project. The real challenge is in exit detection, circuit breakers, rate limiting, and knowing when to stop.",
    whyItMatters:
      "Autonomous loops are where agents go from helpful assistant to autonomous worker. They can churn through tedious work overnight, process backlogs, and handle multi-hour tasks without human supervision. But they need careful guardrails, because an unchecked loop can burn through your API budget or make a mess of your codebase.",
    keyIdeas: [
      "While-loop agents with exit conditions",
      "Circuit breakers and rate limiting",
      "Session continuity across iterations",
      "Sandboxed environments for safe execution",
    ],
    examples: [
      {
        name: "Devin 2.0",
        description:
          "Cognition's autonomous software engineer runs extended loops of planning, coding, debugging, and deploying. Now $20/month and landing enterprise customers like Goldman Sachs.",
        url: "https://devin.ai",
      },
      {
        name: "Cursor Cloud Agents",
        description:
          "Cursor agents get their own sandboxed computers for autonomous coding, and 35% of Cursor's internal PRs are now agent-generated in fully autonomous loops.",
        url: "https://cursor.com",
      },
      {
        name: "OpenAI Codex",
        description:
          "Available as a cloud agent on github.com and VS Code, and as Codex CLI locally. Runs autonomously in a sandboxed environment with its own terminal.",
        url: "https://openai.com/codex/",
      },
      {
        name: "Ralph",
        description:
          "An autonomous coding technique that wraps Claude Code in an infinite Bash loop — each iteration generates code, validates against tests and type checks, and feeds failures back into the next cycle, creating a self-correcting development loop.",
        url: "https://ghuntley.com/ralph/",
      },
    ],
    links: [
      {
        label: "SWE-agent: Agent-Computer Interfaces",
        url: "https://arxiv.org/abs/2405.15793",
        type: "paper",
      },
    ],
    relatedIds: [
      "orchestration",
      "headless-ci",
      "human-in-loop",
      "reflection",
    ],
  },

  // ── INFRASTRUCTURE ────────────────────────────────────────────
  {
    id: "memory",
    title: "Memory Patterns",
    category: "Infrastructure",
    tagline: "Giving agents a past and a future",
    icon: "◉",
    description:
      "Agents without memory are goldfish. Memory patterns give agents the ability to recall past interactions, learn preferences, and build knowledge over time. The challenge is deciding what to remember, how to store it, and when to retrieve it.",
    whyItMatters:
      "Memory is what turns a stateless chatbot into a personalized assistant. It's also one of the hardest problems in agentic AI. Too much memory drowns the context window, and too little means the agent forgets your preferences every session.",
    keyIdeas: [
      "Short-term (context window) and long-term (external store)",
      "Episodic, semantic, and procedural memory",
      "Graph memory and temporal knowledge graphs",
      "RAG as a memory retrieval pattern",
    ],
    examples: [
      {
        name: "Mem0",
        description:
          "A dedicated memory layer that extracts, stores, and retrieves memories for personalization. 91% lower latency and 90%+ token savings compared to full-context approaches. Graph memory launched January 2026.",
        url: "https://mem0.ai",
      },
      {
        name: "Letta (formerly MemGPT)",
        description:
          "Memory as a first-class agent state component with editable memory blocks, a stateful runtime, and git-based versioning through Context Repositories. Strong Terminal-Bench results.",
        url: "https://letta.com",
      },
      {
        name: "Zep",
        description:
          "Episodic and temporal memory organized as a knowledge graph. Tracks how facts change over time and integrates structured business data with conversation history.",
        url: "https://www.getzep.com/",
      },
      {
        name: "Cloudflare Durable Objects",
        description:
          "Each agent runs on its own Durable Object — a stateful micro-server with a built-in SQL database and key-value storage. State persists across restarts, syncs to clients in real-time, and agents hibernate when idle.",
        url: "https://developers.cloudflare.com/durable-objects/",
      },
    ],
    links: [
      {
        label: "Mem0: Memory Layer for AI",
        url: "https://mem0.ai",
        type: "tool",
      },
      {
        label: "Letta: Stateful AI Agents",
        url: "https://letta.com",
        type: "tool",
      },
    ],
    relatedIds: ["context", "agents-md", "reflection"],
  },
  {
    id: "context",
    title: "Context Management",
    category: "Infrastructure",
    tagline: "Fitting the world into a window",
    icon: "▣",
    description:
      "Every model has a finite context window, and agentic tasks eat through tokens fast. Context management, increasingly called 'context engineering,' is about deciding what information the agent needs right now. The field is moving toward smarter compression, caching, and retrieval rather than just bigger windows.",
    whyItMatters:
      "Context is the most precious resource in an agentic system. Fill it with irrelevant information and the model loses focus. Leave out what it needs and it can't do its job. Great context management is invisible: the agent always seems to know exactly the right things.",
    keyIdeas: [
      "Sliding window, compaction, and summarization",
      "RAG for just-in-time context",
      "Token budgeting across agent steps",
      "Context engineering as an emerging discipline",
    ],
    examples: [
      {
        name: "Context Compaction",
        description:
          "Claude Code, Aider, and other CLI agents automatically summarize older context when the window fills, so the agent keeps working without losing track of the overall task.",
      },
      {
        name: "Prompt Caching",
        description:
          "Anthropic, OpenAI, and Google all offer prompt caching, which lets you reuse an unchanged context prefix across requests and cuts both latency and cost for agentic loops.",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
      },
      {
        name: "Hierarchical Memory Systems",
        description:
          "Multi-tier storage inspired by OS memory management, with working context, conversation history, and long-term knowledge at different levels and selective retrieval.",
      },
    ],
    links: [
      {
        label: "Prompt Caching (Anthropic Docs)",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
        type: "docs",
      },
    ],
    relatedIds: ["memory", "structured-output", "routing"],
  },
  {
    id: "structured-output",
    title: "Structured Output",
    category: "Infrastructure",
    tagline: "Getting reliable data out of language models",
    icon: "⟐",
    description:
      "Agents don't just talk, they produce data. Structured output patterns make sure the model returns valid JSON, fills schemas correctly, and produces machine-readable results that downstream systems can consume without complicated parsing.",
    whyItMatters:
      "Every tool call is structured output. Every time an agent returns data to your app, it needs to be parseable and valid. If your structured output is unreliable, your entire agent pipeline is unreliable. This is the unglamorous infrastructure that makes everything else work.",
    keyIdeas: [
      "JSON mode and schema enforcement",
      "Constrained decoding",
      "Retry with feedback for malformed output",
      "When to use structured output and when to use freeform",
    ],
    examples: [
      {
        name: "Instructor",
        description:
          "The most popular library for structured extraction, with 3 million+ monthly downloads and 11k+ stars. Schema-first with Pydantic, retries, streaming, and 15+ provider support.",
        url: "https://python.useinstructor.com/",
      },
      {
        name: "PydanticAI",
        description:
          "The official agent runtime from the Pydantic team with typed tools, replayable datasets, evals, and production dashboards. Uses Pydantic models natively for structured output.",
        url: "https://ai.pydantic.dev/",
      },
      {
        name: "Outlines",
        description:
          "A constrained generation library that ensures LLMs follow defined data shapes. Works well with local and open-source models where you control token generation directly.",
        url: "https://github.com/dottxt-ai/outlines",
      },
    ],
    links: [
      {
        label: "Instructor: Structured LLM Outputs",
        url: "https://python.useinstructor.com/",
        type: "docs",
      },
      {
        label: "PydanticAI: Agent Framework",
        url: "https://ai.pydantic.dev/",
        type: "docs",
      },
    ],
    relatedIds: ["tool-use", "guardrails", "context"],
  },
  {
    id: "guardrails",
    title: "Guardrails & Safety",
    category: "Infrastructure",
    tagline: "Keeping agents on the rails",
    icon: "⊘",
    description:
      "Autonomous agents need boundaries. Guardrails validate inputs and outputs, enforce budgets, prevent infinite loops, sandbox dangerous operations, and make sure the agent stays within its authorized scope. Ship fast, but don't let the agent delete your production database.",
    whyItMatters:
      "The more autonomy you give an agent, the more important guardrails become. Every production agentic system needs cost caps, permission scoping, and output validation. Guardrails aren't about limiting your agent. They're about making it safe enough to actually deploy.",
    keyIdeas: [
      "Input and output validation schemas",
      "Cost caps and recursion limits",
      "Sandboxing and permission scoping",
      "Prompt injection detection and content filtering",
    ],
    examples: [
      {
        name: "Guardrails AI",
        description:
          "Open-source framework for output validation with pre-built validators from Guardrails Hub, for Python and JavaScript. Flexible enough for custom validation logic of any kind.",
        url: "https://www.guardrailsai.com/",
      },
      {
        name: "Lakera Guard",
        description:
          "A drop-in proxy for prompt injection filtering that sits in front of your agent to block prompt injection and risky actions. Easy to adopt for security teams.",
        url: "https://www.lakera.ai/",
      },
      {
        name: "NVIDIA NeMo Guardrails",
        description:
          "Open-source toolkit for programmable guardrails including topic control, PII detection, RAG grounding, jailbreak prevention, and multilingual content safety.",
        url: "https://github.com/NVIDIA/NeMo-Guardrails",
      },
      {
        name: "OpenAI Agents SDK Guardrails",
        description:
          "Built-in input validation and safety checks that run in parallel with agent execution. Guardrails are a first-class primitive in the SDK.",
        url: "https://openai.github.io/openai-agents-python/",
      },
    ],
    links: [
      {
        label: "Guardrails AI: Open-Source Validation",
        url: "https://www.guardrailsai.com/",
        type: "tool",
      },
      {
        label: "Lakera Guard: Prompt Injection Protection",
        url: "https://www.lakera.ai/",
        type: "tool",
      },
    ],
    relatedIds: ["human-in-loop", "structured-output", "evals", "observability"],
  },
  {
    id: "sandboxes",
    title: "Sandboxes",
    category: "Infrastructure",
    tagline: "Letting agents act without breaking things",
    icon: "⬡",
    description:
      "Sandboxes give agents isolated environments to execute code, browse the web, or take actions without risk to production systems. The isolation technology ranges from Firecracker microVMs with a dedicated kernel per sandbox, to gVisor with user-space syscall interception, to OS-level process sandboxing. As agents gain more autonomy, sandboxing has become essential.",
    whyItMatters:
      "An agent that can write and run code is powerful. An agent that can write and run code on your production machine is terrifying. Sandboxes let you give the agent a full computer without giving it your computer. Every major AI coding tool now ships with built-in sandboxing.",
    keyIdeas: [
      "MicroVM isolation (Firecracker) and container isolation (Docker/gVisor)",
      "Code execution sandboxes and browser sandboxes",
      "Session lifecycle: snapshots, forks, and resume",
      "Platform-level sandboxing in coding agents",
    ],
    examples: [
      {
        name: "E2B",
        description:
          "Open-source cloud infrastructure that runs AI-generated code in Firecracker microVM sandboxes with 150ms startup time. Widely adopted as a code execution sandbox for agents.",
        url: "https://e2b.dev",
      },
      {
        name: "Daytona",
        description:
          "Secure sandboxed infrastructure with sub-90ms cold starts, state snapshots, and parallel branching. Docker-based isolation with OCI compatibility. Raised a $24M Series A in February 2026.",
        url: "https://www.daytona.io",
      },
      {
        name: "Browserbase",
        description:
          "Cloud-hosted headless browser sessions for web-browsing agents, each running in its own VM with session replay and DOM recording. Over 50 million sessions processed across 1,000+ customers.",
        url: "https://www.browserbase.com",
      },
      {
        name: "Claude Code Sandboxing",
        description:
          "OS-level sandboxing using Seatbelt on macOS and bubblewrap on Linux. Filesystem writes are restricted to the working directory and network access is filtered through an allowlist. The sandbox runtime is open-sourced as an npm package.",
        url: "https://www.anthropic.com/engineering/claude-code-sandboxing",
      },
      {
        name: "Cloudflare Workers Sandboxes",
        description:
          "LLM-generated code runs in isolated V8 isolates on Cloudflare's edge network with network isolation by default. External fetch and connect are blocked unless explicitly routed, and tool calls dispatch via Workers RPC rather than HTTP.",
        url: "https://developers.cloudflare.com/agents/",
      },
    ],
    links: [
      {
        label: "E2B: Code Execution for AI",
        url: "https://e2b.dev",
        type: "tool",
      },
      {
        label: "Claude Code Sandboxing (Anthropic Engineering)",
        url: "https://www.anthropic.com/engineering/claude-code-sandboxing",
        type: "blog",
      },
      {
        label: "Northflank: How to Sandbox AI Agents",
        url: "https://northflank.com/blog/how-to-sandbox-ai-agents",
        type: "blog",
      },
    ],
    relatedIds: ["guardrails", "autonomous-loops", "harnesses", "headless-ci"],
  },
  {
    id: "harnesses",
    title: "Agent Harnesses",
    category: "Infrastructure",
    tagline: "The outer loop that makes agents reliable",
    icon: "⊞",
    description:
      "A harness is the scaffolding that wraps a model call and turns it into a working agent. It handles the tool-call loop, retry logic, timeout handling, state checkpointing, and error recovery. This is what turns a demo into a production system, and the industry is converging on the idea that 2025 was about agents while 2026 is about harnesses.",
    whyItMatters:
      "A raw model call that sometimes fails is useless in production. A harness that retries with backoff, checkpoints progress, recovers from crashes, and knows when to hand off to a human is a system you can actually ship. Every reliable agent you've used has a well-designed harness underneath.",
    keyIdeas: [
      "The agentic loop: tool call, execute, feed results, repeat",
      "Checkpoint and resume for long-running tasks",
      "Retry with exponential backoff and jitter",
      "Durable execution for crash recovery",
    ],
    examples: [
      {
        name: "Anthropic's Long-Running Agent Harness",
        description:
          "A two-agent architecture where an initializer sets up the environment (git repo, progress file, feature list), then a coding agent makes incremental progress per session, reading claude-progress.txt to resume context.",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
      },
      {
        name: "OpenAI Agents SDK Runner",
        description:
          "The Runner class drives the agentic loop with three execution modes (async, sync, streamed), max_turns to prevent infinite loops, guardrail integration, and agent handoff support.",
        url: "https://openai.github.io/openai-agents-python/running_agents/",
      },
      {
        name: "LangGraph Checkpointer",
        description:
          "Graph-based agent runtime with durable state that saves a checkpoint at every super-step. If a node fails, the graph resumes from the last successful step without re-running completed work.",
        url: "https://docs.langchain.com/oss/python/langgraph/persistence",
      },
      {
        name: "Temporal for AI Agents",
        description:
          "Durable execution engine that wraps agent tool calls in workflows with automatic retry, checkpoint and resume on crash, and full event history replay. Integrates with OpenAI Agents SDK and PydanticAI.",
        url: "https://temporal.io/solutions/ai",
      },
      {
        name: "Pi",
        description:
          "A minimal, extensible terminal-based coding agent harness supporting 15+ AI providers with mid-session model switching. Its TypeScript extension framework lets developers build custom sub-agents, permission gates, and workflows.",
        url: "https://pi.dev/",
      },
      {
        name: "Cloudflare Agents SDK",
        description:
          "Persistent, stateful execution environments backed by Durable Objects. Each agent gets its own SQL database, hibernates when idle, and wakes on demand — a harness that survives restarts and scales to zero.",
        url: "https://github.com/cloudflare/agents",
      },
    ],
    links: [
      {
        label: "Effective Harnesses (Anthropic Engineering)",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
        type: "blog",
      },
      {
        label: "OpenAI Agents SDK: Running Agents",
        url: "https://openai.github.io/openai-agents-python/running_agents/",
        type: "docs",
      },
      {
        label: "Temporal: Durable Execution for AI",
        url: "https://temporal.io/solutions/ai",
        type: "tool",
      },
    ],
    relatedIds: ["autonomous-loops", "sandboxes", "guardrails", "observability"],
  },

  // ── SURFACES ──────────────────────────────────────────────────
  {
    id: "generative-ui",
    title: "Generative UI",
    category: "Surfaces",
    tagline: "Interfaces that write themselves",
    icon: "◐",
    description:
      "Instead of mapping every possible response to a pre-built component, generative UI lets the model create the interface on the fly. The AI decides not just what to say but how to show it, rendering charts, forms, cards, or interactive widgets in real time based on context.",
    whyItMatters:
      "Generative UI lets agents present information in whatever format fits the task: a table for data, a form for input, a chart for trends. This is what makes agents feel native to an application.",
    keyIdeas: [
      "Streaming component generation",
      "Server components and AI",
      "AG-UI Protocol for agent-to-UI communication",
      "Balancing flexibility with consistency",
    ],
    examples: [
      {
        name: "CopilotKit",
        description:
          "SDK for in-app AI copilots and generative UI. Created the AG-UI Protocol, now adopted by Google, LangChain, AWS, and Microsoft. Trusted by over 10% of Fortune 500 companies.",
        url: "https://www.copilotkit.ai/",
      },
      {
        name: "v0 by Vercel",
        description:
          "A generative UI tool from Vercel that creates React components from text or image prompts. Produces full, styled, interactive components you can copy into your project.",
        url: "https://v0.dev",
      },
      {
        name: "Vercel AI SDK",
        description:
          "Over 20 million monthly downloads. A unified API for text, structured objects, tool calls, and agent building with framework-agnostic hooks for chat and generative UI.",
        url: "https://ai-sdk.dev",
      },
      {
        name: "assistant-ui",
        description:
          "YC W25 backed with 50k+ monthly downloads. An open-source React chat UI library for AI with composable components for building agent interfaces.",
        url: "https://www.assistant-ui.com/",
      },
      {
        name: "JSON Render",
        description:
          "Vercel Labs framework where AI produces interfaces from natural language, constrained to a developer-defined component catalog with Zod schema validation. Ships with 36 pre-built shadcn/ui components and works cross-platform.",
        url: "https://github.com/vercel-labs/json-render",
      },
    ],
    links: [
      {
        label: "CopilotKit: In-App AI Copilots",
        url: "https://www.copilotkit.ai/",
        type: "docs",
      },
      {
        label: "Vercel AI SDK",
        url: "https://ai-sdk.dev",
        type: "docs",
      },
    ],
    relatedIds: ["chat-interfaces", "ide-embedded", "structured-output"],
  },
  {
    id: "ide-embedded",
    title: "IDE-Embedded Agents",
    category: "Surfaces",
    tagline: "The agent lives in your editor",
    icon: "⌨",
    description:
      "Cursor, Windsurf, Copilot, Cline, and Zed all have agents that live inside your code editor and understand your codebase as context. They autocomplete, refactor, generate tests, and answer questions about your code. The IDE becomes the agentic surface, with the file system as the tool layer.",
    whyItMatters:
      "Developers spend most of their time in an editor. IDE-embedded agents meet them there, with full access to project context including open files, language server data, git history, and terminal output. It's a natural surface for coding agents because all the context is already there.",
    keyIdeas: [
      "Codebase-aware context (open files, LSP, git)",
      "Inline completion, chat, and agent mode",
      "From tab-complete to full agent, a spectrum of autonomy",
      "Plugin ecosystems and MCP integration",
    ],
    examples: [
      {
        name: "Cursor",
        description:
          "AI-first code editor with tab completions, inline diffs, agent mode, Cloud Agents in sandboxed environments, and a plugin marketplace with Amplitude, AWS, Figma, Linear, and Stripe integrations.",
        url: "https://cursor.com",
      },
      {
        name: "GitHub Copilot",
        description:
          "Free tier with 50 premium requests. Now supports Claude and Codex as coding agents alongside its own models. Available in VS Code, github.com, GitHub Mobile, and Xcode.",
        url: "https://github.com/features/copilot",
      },
      {
        name: "Cline",
        description:
          "Free, open-source VS Code extension with native sub-agents and support for any model. You can split tasks across roles like planning and coding, and tune cost against quality.",
        url: "https://github.com/cline/cline",
      },
      {
        name: "Zed",
        description:
          "Built in Rust by the former Atom team and GPU-accelerated. Typing latency in milliseconds even in million-line repos. Open-source and hosts external AI agents.",
        url: "https://zed.dev",
      },
    ],
    links: [
      {
        label: "Cursor: The AI Code Editor",
        url: "https://cursor.com",
        type: "tool",
      },
      {
        label: "Zed: High-Performance Code Editor",
        url: "https://zed.dev",
        type: "tool",
      },
    ],
    relatedIds: ["tui-cli", "skills", "mcp", "agents-md"],
  },
  {
    id: "tui-cli",
    title: "TUI / CLI Agents",
    category: "Surfaces",
    tagline: "Agents in your terminal",
    icon: "▸",
    description:
      "Claude Code, Aider, OpenCode, Gemini CLI, Codex CLI, and Goose are terminal-native agents that work directly with your shell, file system, and dev tools. No GUI overhead, full scriptability, and they compose naturally with Unix pipes and automation.",
    whyItMatters:
      "CLI agents are the power user's interface. They're faster to invoke, easier to script, and they compose with existing toolchains. They're also the foundation for headless and CI use, because if your agent works in a terminal, it works in a pipeline.",
    keyIdeas: [
      "Shell-native tool execution",
      "Scriptable and composable with pipelines",
      "MCP integration across all major CLIs",
      "Headless operation for automation",
    ],
    examples: [
      {
        name: "Aider",
        description:
          "A terminal AI pair programmer with 39k+ stars, 4.1 million+ installs, and 15 billion tokens per week. Bulletproof git integration, 100+ language support, and automatic commits.",
        url: "https://aider.chat",
      },
      {
        name: "OpenCode",
        description:
          "Go-based TUI built with Bubble Tea, now maintained by Charm. 75+ LLM providers, mid-session model switching, MCP support, vim-like editor, LSP, and two built-in agents.",
        url: "https://opencode.ai",
      },
      {
        name: "Gemini CLI",
        description:
          "Google's open-source terminal agent, free at 60 requests per minute and 1,000 per day. Runs a ReAct loop with built-in tools and MCP support. Apache 2.0 licensed.",
        url: "https://github.com/google-gemini/gemini-cli",
      },
      {
        name: "Goose",
        description:
          "Block's open-source agent, contributed to the Linux Foundation. Supports 25+ LLM providers with both a desktop app and CLI. Used internally across Square, Cash App, and Afterpay.",
        url: "https://block.github.io/goose/",
      },
    ],
    links: [
      {
        label: "Aider: AI Pair Programming in the Terminal",
        url: "https://aider.chat",
        type: "tool",
      },
      {
        label: "OpenCode: Terminal-Native AI Coding",
        url: "https://opencode.ai",
        type: "tool",
      },
      {
        label: "Goose: Open-Source AI Agent by Block",
        url: "https://block.github.io/goose/",
        type: "tool",
      },
    ],
    relatedIds: ["ide-embedded", "headless-ci", "autonomous-loops"],
  },
  {
    id: "chat-interfaces",
    title: "Chat Interfaces",
    category: "Surfaces",
    tagline: "The conversation as the interface",
    icon: "◌",
    description:
      "ChatGPT, Claude.ai, Gemini, and DeepSeek are the conversational surface where most people first encounter agents. The format looks simple but the UX challenges run deep: how do you show progress, handle long-running tasks, present structured data, and manage multi-turn context in a chat bubble?",
    whyItMatters:
      "Chat is the most accessible agent interface because everyone understands a text conversation. But it's also limiting on its own. Good chat interfaces know when to break out of the chat format with artifacts, canvases, and rich components.",
    keyIdeas: [
      "Streaming responses and progressive rendering",
      "Artifacts, canvas, and rich output",
      "Multi-turn context management",
      "When chat is the wrong surface",
    ],
    examples: [
      {
        name: "ChatGPT",
        description:
          "Includes canvas for collaborative editing, Advanced Voice, code interpreter, and a deep plugin ecosystem. GPT-5 is the latest model.",
        url: "https://chatgpt.com",
      },
      {
        name: "Claude.ai",
        description:
          "200K token context, artifacts for interactive side-panel content, and Projects for organized workspaces. Handles long documents and nuanced reasoning well.",
        url: "https://claude.ai",
      },
      {
        name: "Gemini",
        description:
          "18% market share and growing. Over 1 million token context, deep Google Workspace integration, and strong image generation. A natural fit for users already in the Google ecosystem.",
        url: "https://gemini.google.com",
      },
      {
        name: "Perplexity",
        description:
          "Conversational search that combines chat with real-time web search, citations, and source-linked answers. Turned chat into a research interface.",
        url: "https://perplexity.ai",
      },
    ],
    links: [
      {
        label: "ChatGPT",
        url: "https://chatgpt.com",
        type: "tool",
      },
      {
        label: "Claude.ai",
        url: "https://claude.ai",
        type: "tool",
      },
    ],
    relatedIds: ["generative-ui", "human-in-loop", "memory"],
  },
  {
    id: "multi-agent-workspaces",
    title: "Multi-Agent Workspaces",
    category: "Surfaces",
    tagline: "A control room for your agents",
    icon: "⊞",
    description:
      "Workspaces where multiple agents coordinate on shared projects with persistent identity, shared state, and a visible interface for monitoring what's happening. IDEs are evolving into multi-agent platforms, and purpose-built tools are emerging for team-of-agents workflows.",
    whyItMatters:
      "Multi-agent orchestration is powerful but invisible by default. Workspaces make it tangible: you can see what each agent is doing, review their output, and step in when needed.",
    keyIdeas: [
      "Persistent agent identity across sessions",
      "Git-backed state and worktrees",
      "Agent-to-agent communication",
      "IDEs as multi-agent platforms",
    ],
    examples: [
      {
        name: "VS Code Multi-Agent Platform",
        description:
          "VS Code 1.109 officially positioned itself as a multi-agent development platform with first-class agent orchestration and multiple AI roles collaborating within the IDE.",
      },
      {
        name: "Claude Code Agent Teams",
        description:
          "A lead agent coordinates teammates working independently in their own context windows, with shared task lists, dependency tracking, and file-lock-based claiming.",
      },
      {
        name: "Dust",
        description:
          "Multi-agent systems connected to company data and tools in a shared workspace. Purpose-built for teams running multiple specialized agents on business workflows.",
        url: "https://dust.tt",
      },
      {
        name: "CrewAI Cloud",
        description:
          "Deploy and manage multi-agent crews in the cloud. Monitor agent interactions, review outputs, and scale teams up or down from a management dashboard.",
        url: "https://crewai.com",
      },
    ],
    links: [
      {
        label: "Dust: Multi-Agent Workspace",
        url: "https://dust.tt",
        type: "tool",
      },
      {
        label: "CrewAI Cloud",
        url: "https://crewai.com",
        type: "tool",
      },
    ],
    relatedIds: ["orchestration", "autonomous-loops", "tui-cli"],
  },
  {
    id: "headless-ci",
    title: "Headless / CI Agents",
    category: "Surfaces",
    tagline: "No human watching",
    icon: "▪",
    description:
      "Agents running in CI pipelines, cron jobs, or background processes with no human in the loop. Code review bots, automated refactoring, dependency updates, and test generation all fall into this category. The challenge shifts entirely to reliability, observability, and cost control.",
    whyItMatters:
      "Headless agents multiply your team's output because they work on every PR, every commit, around the clock. This is where agents become infrastructure.",
    keyIdeas: [
      "Agents in GitHub Actions and CI pipelines",
      "Automated code review and PR generation",
      "Cost control without human oversight",
      "When to escalate to a human",
    ],
    examples: [
      {
        name: "Claude Code Headless",
        description:
          "Run Claude Code with the -p flag for non-interactive CI use, with JSON, text, or streaming output. Used for automated test generation, lint fixing, and code review.",
      },
      {
        name: "Codex on GitHub",
        description:
          "Claude and Codex are available as coding agents directly on github.com, where they can create branches, write code, and open PRs autonomously.",
        url: "https://openai.com/codex/",
      },
      {
        name: "GitHub Copilot Autofix",
        description:
          "When CodeQL finds a security vulnerability, Copilot Autofix generates a fix and opens a PR without human intervention. Running in production at scale.",
      },
      {
        name: "GitLab Duo",
        description:
          "GitLab's native AI agent platform with Claude integration for development acceleration, built into the CI/CD pipeline as a first-class capability.",
      },
    ],
    links: [
      {
        label: "OpenAI Codex: Cloud Coding Agent",
        url: "https://openai.com/codex/",
        type: "tool",
      },
    ],
    relatedIds: ["autonomous-loops", "guardrails", "observability", "evals"],
  },

  // ── DESIGN ────────────────────────────────────────────────────
  {
    id: "human-in-loop",
    title: "Human-in-the-Loop",
    category: "Design",
    tagline: "Knowing when to ask for help",
    icon: "⟡",
    description:
      "The best agents know their limits. Human-in-the-loop patterns create checkpoints where the agent pauses for approval, clarification, or help. The field is moving toward 'human-on-the-loop,' where AI runs autonomously while humans monitor and step in on exceptions.",
    whyItMatters:
      "Full autonomy sounds great until an agent deletes your production branch. Human-in-the-loop is about building trust incrementally. Start with tight approval gates, widen them as you gain confidence, and always keep a kill switch.",
    keyIdeas: [
      "Approval gates and escalation triggers",
      "Confidence thresholds for autonomy",
      "Human-on-the-loop: monitor, don't micromanage",
      "Designing good interruption UX",
    ],
    examples: [
      {
        name: "LangGraph Interrupt",
        description:
          "The interrupt() function creates explicit checkpoints in agent workflows where execution pauses for human input. A mature framework-level human-in-the-loop implementation.",
        url: "https://langchain-ai.github.io/langgraph/",
      },
      {
        name: "HumanLayer",
        description:
          "Agents communicate with humans through Slack, email, or Discord using simple decorators like @require_approval for gates and human_as_tool for questions.",
        url: "https://www.humanlayer.dev/",
      },
      {
        name: "CopilotKit",
        description:
          "Human-in-the-loop for in-app copilots where agents pause execution to request user input, confirmation, or edits before continuing. Built into the SDK as a first-class pattern.",
        url: "https://www.copilotkit.ai/",
      },
      {
        name: "Rent a Human",
        description:
          "A marketplace where AI agents can autonomously search, book, and pay humans for physical-world tasks via MCP — bridging the gap between digital agent capabilities and meatspace requirements.",
        url: "https://rentahuman.ai/",
      },
    ],
    links: [
      {
        label: "HumanLayer: Human-Agent Communication",
        url: "https://www.humanlayer.dev/",
        type: "tool",
      },
      {
        label: "Building Effective Agents (Anthropic)",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        type: "article",
      },
    ],
    relatedIds: ["guardrails", "autonomous-loops", "observability"],
  },
  {
    id: "observability",
    title: "Observability & Tracing",
    category: "Design",
    tagline: "Debugging the black box",
    icon: "⏣",
    description:
      "When an agent takes 14 steps and gets the wrong answer, you need to understand why. Observability gives you traces, logs, and replays of every reasoning step, tool call, and decision point. Without it, agentic systems are untestable and impossible to debug.",
    whyItMatters:
      "Agentic systems are non-deterministic and multi-step. When something goes wrong, and it will, you need to trace the full execution path: what the agent thought, what tools it called, what results it got, and where things went off the rails. Observability is not optional.",
    keyIdeas: [
      "Trace visualization and step replay",
      "Token and cost attribution per step",
      "Logging decisions, not just outputs",
      "OpenTelemetry for LLM observability",
    ],
    examples: [
      {
        name: "Langfuse",
        description:
          "Open-source and self-hostable LLM observability with traces, analytics, prompt management, and evaluation in one platform. Strong community and widely adopted.",
        url: "https://langfuse.com",
      },
      {
        name: "Braintrust",
        description:
          "A managed platform with CI/CD integration that auto-blocks merges when quality degrades. Free tier includes 1 million trace spans per month.",
        url: "https://braintrust.dev",
      },
      {
        name: "Arize Phoenix",
        description:
          "Fully open-source with OpenTelemetry compatibility. Lets you visualize agent execution, inspect tool calls, and debug multi-step chains.",
        url: "https://github.com/Arize-ai/phoenix",
      },
      {
        name: "Cloudflare AI Gateway",
        description:
          "Sits in front of model API calls providing caching, rate limiting, cost tracking, and model fallbacks. One endpoint for observability across all your agent's LLM calls.",
        url: "https://developers.cloudflare.com/ai-gateway/",
      },
    ],
    links: [
      {
        label: "Langfuse: Open Source LLM Observability",
        url: "https://langfuse.com",
        type: "tool",
      },
      {
        label: "Braintrust: AI Evaluation",
        url: "https://braintrust.dev",
        type: "tool",
      },
    ],
    relatedIds: ["evals", "human-in-loop", "guardrails"],
  },
  {
    id: "evals",
    title: "Evaluation & Testing",
    category: "Design",
    tagline: "How do you know your agent is good?",
    icon: "⬢",
    description:
      "You can't improve what you can't measure. Agent evals go beyond simple accuracy because you need to test multi-step reasoning, tool selection, recovery from errors, and end-to-end task completion. Building good evals is arguably harder than building the agent itself.",
    whyItMatters:
      "Without evals, you're flying blind. Every prompt change, model upgrade, or tool addition could improve one thing and break three others. Evals are the safety net that lets you iterate with confidence, and the only way to know if your agent is actually getting better.",
    keyIdeas: [
      "Task-level and step-level evaluation",
      "Human eval and model-as-judge",
      "Regression testing for prompt changes",
      "Benchmarks: SWE-bench, Terminal-Bench, GAIA",
    ],
    examples: [
      {
        name: "SWE-bench Verified",
        description:
          "500 human-validated software engineering tasks from real GitHub issues. Scaffold v2.0 supports Claude Code and Codex. Variants include Multilingual, Multimodal, and SWE-bench Pro.",
        url: "https://github.com/princeton-nlp/SWE-bench",
      },
      {
        name: "LM Arena (LMSYS)",
        description:
          "Crowdsourced blind human evaluations where users compare model outputs head-to-head. Arena-Hard Auto achieves 89% agreement with humans.",
        url: "https://lmarena.ai",
      },
      {
        name: "Terminal-Bench",
        description:
          "A benchmark for terminal and CLI coding agents that tests real-world coding tasks in a terminal environment.",
        url: "https://www.terminalbench.com/",
      },
      {
        name: "Inspect AI",
        description:
          "An open-source evaluation framework from the UK AI Safety Institute. Define tasks, run evaluations, and compare models. Used in SWE-bench's evaluation infrastructure.",
        url: "https://github.com/UKGovernmentBEIS/inspect_ai",
      },
    ],
    links: [
      {
        label: "SWE-bench: Software Engineering Benchmark",
        url: "https://github.com/princeton-nlp/SWE-bench",
        type: "repo",
      },
      {
        label: "LM Arena: Human Preference Rankings",
        url: "https://lmarena.ai",
        type: "tool",
      },
      {
        label: "Terminal-Bench: CLI Agent Benchmark",
        url: "https://www.terminalbench.com/",
        type: "tool",
      },
    ],
    relatedIds: ["observability", "reflection", "guardrails"],
  },
];
