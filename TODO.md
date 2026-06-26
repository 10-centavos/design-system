# TODO — 10 Centavos Design System

## Agent Entry Point

Agents MUST read this file first, then consult the contracts in the exact order below:

1. `docs/contracts/design-system.contract.md`
2. `docs/contracts/design-tokens.contract.md`
3. `docs/contracts/ui.contract.md`
4. `docs/contracts/implementation.contract.md`
5. `docs/contracts/code-guiding.contract.md`
6. `docs/contracts/frontend.agent.contract.md`

Specialized agents:

- UX/UI Specialist: also read `agents/ux-ui-specialist.agent.md`
- Frontend Specialist: also read `agents/frontend-specialist.agent.md`

If any referenced contract is missing, conflicting, or ambiguous, agents MUST stop and report the blocker before creating UI, tokens, or code.

## Project Evaluation

Current state:

- The repository defines strong contracts for a finance-focused design system.
- Agent roles already exist for UX/UI and frontend implementation.
- The system correctly prioritizes token-driven styling, financial semantics, accessibility, Svelte, and Tailwind.
- The repository does not yet contain concrete token files, component specifications, Tailwind configuration, Svelte components, examples, tests, or validation scripts.

Main risk:

- Agents can understand the intended rules, but they cannot yet reliably implement or audit the system because the executable source of truth is missing.

## Design System Compatibility Requirements

For agent consultation, the design system MUST provide:

- A single root entry point: `TODO.md`
- Contract files in `docs/`
- Agent profiles in `agents/`
- Machine-readable design tokens
- Component inventory with allowed variants and states
- Atomic Design mapping for foundations, atoms, molecules, organisms, templates, and pages
- Mapping between financial states and semantic tokens
- Implementation examples for Svelte + Tailwind
- Validation commands for token usage, accessibility, linting, and tests

## Priority 0 — Repository Foundations

- [ ] Add `README.md` with purpose, folder map, agent usage, and validation commands.
- [ ] Add `AGENTS.md` as a compact agent-facing instruction file if the execution environment expects it.
- [ ] Add a `CHANGELOG.md` for contract and token changes.
- [ ] Add version metadata for the design system.
- [ ] Decide package/runtime structure if this repository will ship code, for example Svelte package, docs-only package, or monorepo package.

## Priority 1 — Design Tokens

- [ ] Create `tokens/primitive.json`.
- [ ] Create `tokens/semantic.light.json`.
- [ ] Create `tokens/semantic.dark.json`.
- [ ] Create `tokens/component.json`.
- [ ] Define color primitives for brand, neutral, success, warning, danger, info, and financial states.
- [ ] Define semantic tokens for background, surface, text, border, focus, success, warning, danger, and info.
- [ ] Define financial semantic tokens for income, expense, savings, debt, funded, partial, empty, overspent, goal-complete, and goal-progress.
- [ ] Define spacing scale tokens.
- [ ] Define radius tokens.
- [ ] Define shadow tokens.
- [ ] Define typography tokens, including numeric/tabular values.
- [ ] Define breakpoint tokens.
- [ ] Define motion tokens for duration and easing.
- [ ] Add token validation to prevent circular references and direct primitive usage by components.

## Priority 2 — Tailwind + Svelte Integration

- [ ] Add Tailwind configuration mapped only to semantic and component tokens.
- [ ] Add CSS variable generation from token files.
- [ ] Add light and dark theme token output.
- [ ] Add a base stylesheet for token variables and reset only.
- [ ] Prohibit raw Tailwind palette classes such as `text-red-500`, `bg-blue-600`, and `border-gray-200`.
- [ ] Prohibit arbitrary Tailwind values unless explicitly documented as an exception.
- [ ] Add lint checks for inline styles and hardcoded visual values.

## Priority 3 — Component Inventory

Document and implement these components before product screens:

- [ ] `Button`: primary, secondary, ghost, danger; default, hover, active, disabled, loading.
- [ ] `Input`: text, money, search; default, focus, error, disabled.
- [ ] `Select`: default, focus, error, disabled.
- [ ] `Card`: default, interactive, status.
- [ ] `Badge`: neutral, income, expense, savings, debt, warning, danger, success.
- [ ] `Progress`: budget, goal; funded, partial, empty, overspent, complete.
- [ ] `Skeleton`: card, list row, text.
- [ ] `Alert`: info, success, warning, danger.
- [ ] `TransactionItem`: income and expense variants.
- [ ] `BudgetCategoryRow`: funded, partial, empty, overspent.
- [ ] `GoalCard`: in-progress and completed.
- [ ] `MoneyValue`: positive, negative, neutral, hidden/private.

Each component MUST include:

- Purpose
- Props/API
- Allowed variants
- Required states
- Token usage
- Accessibility requirements
- Svelte implementation
- Example usage
- Tests

## Priority 4 — Financial UX Rules

- [ ] Define one canonical currency formatting utility.
- [ ] Define locale behavior and default currency.
- [ ] Ensure all monetary values use tabular numeric typography.
- [ ] Align monetary values consistently for scanning.
- [ ] Never rely on color alone for income, expense, overspent, or completed states.
- [ ] Pair financial color semantics with sign, label, icon, or status text.
- [ ] Define empty, loading, error, and success copy for every financial flow.

## Priority 5 — Product Flows

Implement flows from `docs/implementation.contract.md` after tokens and base components exist:

- [ ] Dashboard Overview
- [ ] Budget Management
- [ ] Transaction List
- [ ] Add Transaction
- [ ] Financial Goals

Each flow MUST include:

- Loading state
- Empty state
- Error state
- Success/confirmed state when applicable
- Responsive layout behavior
- Keyboard interaction path
- Accessibility acceptance criteria

## Priority 6 — Accessibility And Quality Gates

- [ ] Add contrast validation for all semantic token pairs.
- [ ] Add keyboard navigation tests for interactive components.
- [ ] Add visible focus-state checks.
- [ ] Add component unit tests.
- [ ] Add interaction tests for critical flows.
- [ ] Add visual regression tests once components are stable.
- [ ] Add CI command that runs lint, tests, token validation, and accessibility checks.

## Priority 7 — Documentation For Agents

- [ ] Add `docs/agent-consumption.md` explaining how agents should read and apply this system.
- [ ] Add `docs/component-inventory.md`.
- [ ] Add `docs/token-map.md`.
- [ ] Add `docs/financial-semantics.md`.
- [ ] Add `docs/accessibility-checklist.md`.
- [ ] Add implementation examples that agents can copy without improvising.
- [ ] Add a decision log for approved changes to tokens, components, and variants.
- [x] Add `docs/atomic-design.md` to define Atomic Design levels for agent consumption.

## Agent Operating Rules

Agents MUST:

- Use contracts as the authority.
- Use Atomic Design levels when classifying new UI.
- Use semantic tokens only in UI.
- Stop on missing tokens, missing component definitions, or contract conflicts.
- Prefer existing components before proposing new ones.
- Document any required new token, component, variant, or state before implementation.
- Validate accessibility, responsive behavior, and financial semantics before completion.

Agents MUST NOT:

- Hardcode colors, spacing, typography, radii, shadows, or motion.
- Use primitive tokens directly in components.
- Create new visual patterns without updating contracts.
- Change contracts silently.
- Display raw monetary numbers without formatting.
- Depend on color alone to communicate financial meaning.

## Definition Of Done

The design system is agent-compatible when:

- Agents can start from `TODO.md` and find every required source of truth.
- Tokens exist in machine-readable files.
- Tailwind consumes generated token variables.
- Core Svelte components are implemented and documented.
- Financial semantics are explicit and testable.
- Accessibility requirements are validated.
- Product flows can be implemented without agent improvisation.
- Validation commands are documented and passing.
