# Agent Experience

A practical reference to the patterns, surfaces, and design principles behind AI agents — from primitives to production.

**https://agent-experience.dev**

## What is this?

Agent Experience is an open-source reference site covering 26 patterns across five categories:

- **Foundations** — Mental models like tool use, ReAct, planning, and reflection
- **Patterns** — Concrete architectures like MCP, computer use, multi-agent orchestration, and skills
- **Infrastructure** — The plumbing: memory, context management, sandboxes, guardrails, and harnesses
- **Surfaces** — Where agents meet humans: generative UI, IDE agents, CLI agents, and chat interfaces
- **Design** — Making agents usable: human-in-the-loop, observability, and evaluation

Each pattern includes a description, key ideas, real-world examples, and links to go deeper.

## Running locally

```bash
bun install
bun dev
```

## Building

```bash
bun run build
```

## Deploying

The site deploys to Cloudflare Workers with static assets:

```bash
bun run build
wrangler deploy
```

## Tech stack

- React 19 + Vite
- Motion (Framer Motion) for animations
- Plain CSS
- Cloudflare Workers (static assets) for hosting

## Contributing

Contributions are welcome! A few ground rules:

- **This is not an advertising platform.** PRs that exist primarily to promote a company or product will not be merged. We want to showcase the best, most useful examples — not the ones with the biggest marketing budget.
- **PRs are not guaranteed to be merged.** We review everything and prioritize quality and relevance. Don't take it personally if we pass.
- **Focus on what's genuinely best-in-class.** If you're adding an example, it should be something practitioners actually use and recommend. Include a URL and a concise, honest description.
- **Keep descriptions factual.** No superlatives, no marketing copy. Say what it does, not how great it is.

### Good PR examples

- Adding a new example that's widely adopted and genuinely useful
- Fixing outdated information (dead links, incorrect descriptions)
- Adding a missing pattern that belongs in the reference
- Improving the site's accessibility or performance

### PRs we'll close

- Adding your company's product as an example when it's not widely known or adopted
- Marketing-style descriptions ("the world's leading...", "the most powerful...")
- Removing competitors' examples to make room for yours

## License

MIT
