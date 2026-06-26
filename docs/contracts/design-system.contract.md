# Design System Contract — 10 Centavos

## 1. Purpose

Define the visual language, interaction patterns, and UI consistency rules for the 10 Centavos product.

This contract ensures that all interfaces are predictable, scalable, accessible, and aligned with financial clarity principles.

---

## 2. Scope

This contract governs:

* UI components (buttons, inputs, cards, etc.)
* Visual language (colors, typography, spacing)
* Interaction patterns
* Feedback states (success, error, loading)
* Financial visualization semantics
* Accessibility and usability standards

---

## 3. Out of Scope

This contract does NOT govern:

* Backend logic
* API design
* Database structure
* Business rules not expressed in UI
* Marketing website (unless explicitly reused)

---

## 4. Terms and Definitions

* Design Tokens: Atomic visual values (colors, spacing, typography)
* Semantic Tokens: Tokens mapped to meaning (e.g., success, danger)
* Component: Reusable UI building block
* Variant: Visual or behavioral variation of a component
* State: UI condition (hover, active, disabled, loading)
* Financial State: UI state representing money condition (funded, overspent, etc.)

---

## 5. Requirements

### Core Principles

* The system MUST use design tokens as the single source of truth for UI styling.
* The system MUST NOT use hardcoded colors, spacing, or typography in components.
* The system MUST maintain visual consistency across all screens.
* The system MUST represent financial states visually and clearly.
* The system MUST prioritize readability of numeric values.

---

### Financial UX

* The system MUST differentiate income, expense, savings, and debt visually.
* The system MUST highlight overspending using danger semantics.
* The system MUST represent progress (budget, goals) using progress indicators.
* The system MUST use numeric typography for financial values.
* The system MUST ensure monetary values are scannable and aligned.

---

### Components

* The system MUST use predefined component tokens.
* The system MUST NOT create new component variants without updating this contract.
* Components MUST support defined states: default, hover, active, disabled, loading.
* Components SHOULD support accessibility attributes (ARIA, focus states).

---

### Interaction

* The system MUST provide visual feedback for all user actions.
* The system MUST use motion tokens for transitions.
* The system MUST NOT use abrupt UI changes without feedback.
* The system SHOULD use subtle animations for clarity (not decoration).

---

### Accessibility

* The system MUST meet WCAG AA contrast standards.
* The system MUST support keyboard navigation.
* The system MUST provide visible focus states.
* The system MUST NOT rely on color alone to convey meaning.

---

## 6. Constraints

* All UI MUST be token-driven (Design Tokens Contract).
* UI MUST be responsive across defined breakpoints.
* Performance MUST NOT be degraded by excessive animation.
* Dark mode MUST be supported via semantic tokens.
* Numeric data MUST use tabular alignment.

---

## 7. Decisions

### Decision: Token-Driven Design

* Rationale: Enables scalability, theming, and consistency across agents and teams.

### Decision: Financial Semantics in Color System

* Rationale: Users must instantly understand financial status without reading.

### Decision: Strong Typography Hierarchy

* Rationale: Financial apps depend on clarity and scanning speed.

### Decision: Component-Based Architecture

* Rationale: Reduces duplication and enforces consistency.

---

## 8. Validation

* [ ] No hardcoded styles in components
* [ ] Components use semantic tokens only
* [ ] Financial states correctly mapped (income, expense, etc.)
* [ ] Accessibility checks pass (contrast, navigation)
* [ ] UI is consistent across screens
* [ ] Design tokens match Design Tokens Contract
* [ ] Components support required states

---

## 9. Completion Criteria

This contract is satisfied when:

* All UI components are implemented using tokens
* Design tokens are fully integrated
* Financial states are visually represented
* Accessibility baseline is met
* UI passes design review and consistency audit

---

## 10. Change Control

* Changes MUST be approved by Design + Frontend + Product.
* New components or variants MUST be documented here.
* Token changes MUST be reflected in Design Tokens Contract.
* Breaking visual changes MUST include migration guidance.