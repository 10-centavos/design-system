# Agent Consumption Guide

Agents use this repository as a contract-driven design system.

## Required Order

1. Read `TODO.md`.
2. Read all files in `docs/contracts/` listed by `TODO.md`.
3. Read the relevant file in `agents/`.
4. Read `docs/component-inventory.md`, `docs/token-map.md`, `docs/financial-semantics.md`, and `docs/accessibility-checklist.md`.
5. Inspect `tokens/` and `src/components/` before creating or changing UI.

## Stop Conditions

Stop and report if:

- A token required by a component is missing.
- A component variant is not documented.
- A financial state has no semantic mapping.
- A contract contradicts another contract.
- A requested screen cannot be built from existing components.

## Frontend Specialist Output

Frontend output must include:

- Svelte components or screens.
- Token-based Tailwind classes only.
- Loading, disabled, error, empty, and success states where applicable.
- Accessibility behavior.
- Validation command results.

## UX/UI Specialist Approval

The UX/UI Specialist reviews:

- Financial clarity.
- Component usage.
- Interaction states.
- Accessibility assumptions.
- Whether any new pattern was introduced without contract coverage.

Approval is recorded in `docs/approvals/ux-ui-approval.md`.
