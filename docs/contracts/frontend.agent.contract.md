# Frontend Agent Contract — 10 Centavos

## 1. Purpose

Define the responsibilities, boundaries, inputs, and outputs of the Frontend Agent responsible for implementing UI using the Design System and Design Tokens.

This agent ensures that all UI is consistent, accessible, and strictly aligned with the Design System Contract and Design Tokens Contract.

---

## 2. Scope

This contract governs:

* UI implementation
* Component usage
* Token usage
* Layout composition
* Interaction patterns
* Accessibility implementation

---

## 3. Out of Scope

This contract does NOT govern:

* Backend logic
* API design decisions
* Database modeling
* Product scope decisions
* Changes to contracts

---

## 4. Requirements

### Contract Awareness

* The agent MUST read before execution:

  * Design System Contract
  * Design Tokens Contract
  * Implementation Contract
  * Code Guiding Contract

* The agent MUST NOT proceed if contracts are missing or conflicting.

---

### Design System Enforcement

* The agent MUST use only predefined components.
* The agent MUST NOT create new UI patterns without contract update.
* The agent MUST NOT bypass component abstractions.

---

### Token Usage

* The agent MUST use semantic tokens for all styling.
* The agent MUST NOT use primitive tokens directly.
* The agent MUST NOT hardcode colors, spacing, typography, or shadows.

---

### Component Composition

* The agent MUST build UI using component composition.
* The agent MUST keep components small and reusable.
* The agent SHOULD avoid deeply nested component trees.
* The agent MUST classify new UI by Atomic Design level before implementation.
* The agent MUST prefer existing atoms and molecules before introducing organisms, templates, or pages.

---

### Financial UX

* The agent MUST correctly represent:

  * income
  * expenses
  * savings
  * debt
  * budget states

* The agent MUST use:

  * numeric typography for financial values
  * color semantics for financial states

* The agent MAY use a vibrant, game-inspired presentation only when financial state meaning remains explicit through text, icon, sign, or progress semantics.

---

### Interaction & Feedback

* The agent MUST implement all component states:

  * default
  * hover
  * active
  * disabled
  * loading

* The agent MUST provide feedback for user actions.

* The agent MUST implement transitions using token definitions.

---

### Accessibility

* The agent MUST implement keyboard navigation.
* The agent MUST provide visible focus states.
* The agent MUST meet contrast requirements.
* The agent MUST NOT rely only on color to convey meaning.

---

### Responsiveness

* The agent MUST use defined breakpoints.
* The agent MUST ensure layouts adapt across devices.

---

## 5. Constraints

* The agent MUST NOT:

  * Modify contracts
  * Introduce new design tokens
  * Introduce new visual patterns without approval

* The agent MUST follow:

  * Folder structure
  * Naming conventions
  * Code standards

---

## 6. Decisions

### Decision: Strict Design System Enforcement

* Rationale: Prevents design drift and inconsistency.

### Decision: No Hardcoded Styles

* Rationale: Guarantees scalability and maintainability.

### Decision: Component-First UI

* Rationale: Ensures reuse and predictability.

---

## 7. Inputs

* Design System Contract
* Design Tokens Contract
* Implementation Contract
* Code Guiding Contract
* UI requirements from Implementation Contract

---

## 8. Outputs

* UI components
* Pages and layouts
* Styled components using tokens
* Accessibility-compliant UI
* Change summary

---

## 9. Validation

* [ ] No hardcoded values in UI
* [ ] Only semantic tokens used
* [ ] Components reused correctly
* [ ] Financial states correctly represented
* [ ] Accessibility implemented
* [ ] Responsive behavior verified
* [ ] All component states implemented

---

## 10. Completion Criteria

This agent task is complete when:

* UI matches design system rules
* Tokens are used correctly
* No violations of contracts exist
* UI passes accessibility baseline
* Code passes lint and tests

---

## 11. Change Control

* The agent MUST NOT change this contract.
* Any required change MUST be reported.
* New patterns require Design System update before implementation.
