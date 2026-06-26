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
- `docs/atomic-design.md`: Atomic Design taxonomy for foundations, atoms, molecules, organisms, templates, and pages.
- `docs/approvals/`: delivery review records.
- `tokens/`: primitive, semantic, and component design tokens.
- `src/components/`: Svelte design system components.
- `src/stories/`: Storybook-only examples for foundations, icons, modals, and composed layouts.
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

## Release Pipeline

- `/.github/workflows/release.yml` uses `release-please` to create versioned releases from commits on `main`.
- `.github/release-please-config.json` defines the Node release strategy.
- `.github/.release-please-manifest.json` stores the current automated version.
- `/.github/workflows/storybook-pages.yml` publishes the static site to GitHub Pages on `main`.

## GitHub Pages

The workflow in `.github/workflows/storybook-pages.yml` publishes `storybook-static/` to GitHub Pages on pushes to `main` and manual dispatches.

In the repository settings, set Pages to use GitHub Actions as the source.

## Agent Rule

Agents MUST NOT implement product UI directly from memory. They MUST read `TODO.md`, the contracts, and the relevant specialist profile first.

Components follow an Atomic Design-inspired model. New UI should be classified as an atom, molecule, organism, template, or page before implementation.
