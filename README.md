# 10 Centavos Design System

Token-driven design system for the 10 Centavos financial product.

This repository is structured for both humans and agents. Start with `TODO.md`, then read the contracts in `docs/contracts/`.

## Stack

- Svelte components
- Tailwind CSS classes
- Lucide icons in Storybook examples
- Chart.js financial charts
- JSON design tokens
- Generated CSS variables
- Node validation scripts

## Folder Map

- `agents/`: role definitions for specialist agents.
- `docs/contracts/`: binding contracts for design, tokens, UI, implementation, code, and agents.
- `docs/`: agent guidance, component inventory, token map, financial semantics, accessibility checklist.
- `docs/approvals/`: delivery review records.
- `tokens/`: primitive, semantic, and component design tokens.
- `src/components/`: Svelte design system components.
- `src/stories/`: Storybook-only examples for foundations, icons, models, and composed layouts.
- `src/lib/`: shared utilities.
- `src/styles/`: generated token CSS.
- `scripts/`: build and validation scripts.

## Commands

```sh
npm run build:tokens
npm run validate
npm run storybook
npm run build:storybook
npm run build
```

`npm run storybook` starts the local component catalog.

`npm run build:storybook` generates the static Storybook site in `storybook-static/`.

`npm run build` generates token outputs, validates tokens, components, and documentation, then builds Storybook.

## GitHub Pages

The workflow in `.github/workflows/storybook-pages.yml` publishes `storybook-static/` to GitHub Pages on pushes to `main` and manual dispatches.

In the repository settings, set Pages to use GitHub Actions as the source.

## Agent Rule

Agents MUST NOT implement product UI directly from memory. They MUST read `TODO.md`, the contracts, and the relevant specialist profile first.
