# Code Guiding Contract — 10 Centavos

## 1. Purpose

Define coding standards, architectural boundaries, and enforcement rules to ensure that all frontend implementation adheres strictly to the Design System and Design Tokens.

This contract prevents inconsistencies, technical debt, and design drift.

---

## 2. Scope

This contract governs:

* Frontend code structure
* Component architecture
* Styling rules
* Token usage enforcement
* Naming conventions
* Testing requirements
* Code quality standards

---

## 3. Out of Scope

This contract does NOT govern:

* Business logic rules (covered in Implementation Contract)
* Backend code standards
* Infrastructure and deployment

---

## 4. Requirements

### Project Structure

* The codebase MUST follow a modular structure:

```
/src
  /components
    /atoms
    /molecules
    /organisms
  /features
  /pages
  /layouts
  /hooks
  /lib
  /styles (tokens only)
```

* The system MUST separate:

  * UI components
  * business logic
  * data access

---

### Component Architecture

* Components MUST be:

  * small
  * reusable
  * composable

* Components SHOULD be organized or documented by Atomic Design level: atoms, molecules, organisms, templates, and pages.

* Components MUST NOT:

  * contain business logic
  * access APIs directly
  * contain hardcoded styling

* Complex components MUST be split into:

  * container (logic)
  * presentational (UI)

* Higher-level UI MUST compose lower-level Atomic Design components before adding new abstractions.

---

### Styling Rules (CRITICAL)

* The system MUST use design tokens for ALL styling.

* The system MUST NOT allow:

  * hardcoded colors
  * hardcoded spacing
  * inline styles (except dynamic edge cases)

* Styling MUST be implemented using:

  * token-based system (CSS variables, Tailwind config, or equivalent)

---

### Token Enforcement

* Components MUST use:

  * semantic tokens only

* The system MUST NOT:

  * reference primitive tokens in components
  * define new tokens locally

* Token access MUST be centralized.

---

### Naming Conventions

* Components: `PascalCase`
* Hooks: `useSomething`
* Files: `kebab-case` or `PascalCase` (consistent)
* Tokens: `category.group.variant`

Examples:

* `ButtonPrimary.tsx`
* `useBudgetSummary.ts`
* `color.success.default`

---

### State Handling

* UI states MUST be explicit:

  * loading
  * error
  * empty
  * success

* The system MUST NOT hide error states.

---

### Financial Data Handling

* Monetary values MUST:

  * use numeric typography
  * be formatted consistently

* The system MUST NOT:

  * display raw numbers without formatting
  * mix currency formats

---

### Accessibility

* Components MUST include:

  * ARIA attributes when needed
  * keyboard support
  * focus states

---

### Testing

* The system MUST include:

  * unit tests for components
  * interaction tests for critical flows

* Critical UI MUST have:

  * acceptance tests

---

### Logging & Errors

* UI errors MUST be:

  * visible to user (when relevant)
  * logged for debugging

---

## 5. Constraints

* No inline CSS for layout or color (except justified cases)
* No duplication of components
* No direct DOM manipulation (unless necessary)
* No global styles outside token system

---

## 6. Decisions

### Decision: Token-Driven Styling Only

* Rationale: Eliminates inconsistency and enables scaling.

### Decision: Strict Separation of Concerns

* Rationale: Improves maintainability and testability.

### Decision: Component Reusability First

* Rationale: Reduces duplication and speeds up development.

### Decision: Atomic Design Taxonomy

* Rationale: Clear component levels reduce ambiguity for agents and keep product screens composed from stable primitives.

---

## 7. Validation

* [ ] No hardcoded styles found
* [ ] Components follow structure rules
* [ ] Tokens used correctly
* [ ] Naming conventions respected
* [ ] Tests exist for critical components
* [ ] No business logic inside UI components
* [ ] Accessibility baseline implemented

---

## 8. Completion Criteria

This contract is satisfied when:

* Code passes lint and formatting
* No violations of design system rules
* Tests pass
* UI behaves consistently across screens
* Components are reusable and maintainable

---

## 9. Change Control

* Changes MUST be reviewed by frontend and architecture.
* New patterns MUST be documented before usage.
* Exceptions MUST be explicitly justified.
