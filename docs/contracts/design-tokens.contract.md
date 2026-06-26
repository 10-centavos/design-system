# Design Tokens Contract — 10 Centavos

## 1. Purpose

Define the structure, rules, governance, and usage of design tokens as the single source of truth for all visual styling in the system.

This contract ensures consistency, scalability, theming capability, and strict separation between design decisions and implementation.

---

## 2. Scope

This contract governs:

* Primitive tokens (raw values)
* Semantic tokens (meaning-based mappings)
* Component tokens (UI-specific usage)
* Token naming conventions
* Token usage rules in code
* Token versioning and change management

---

## 3. Out of Scope

This contract does NOT govern:

* Component behavior logic
* Business rules
* Layout decisions not based on tokens
* External design tools configuration (Figma specifics)

---

## 4. Terms and Definitions

* Primitive Tokens: Raw values (colors, spacing, typography)
* Semantic Tokens: Tokens mapped to meaning (e.g., success, danger)
* Component Tokens: Tokens mapped to specific UI components
* Alias: Token referencing another token
* Hardcoded Value: Any value not derived from tokens (forbidden)
* Theme: A variation of semantic tokens (e.g., dark mode)

---

## 5. Requirements

### Token Hierarchy

* The system MUST define tokens in three layers:

  * Primitives
  * Semantic
  * Component

* The system MUST NOT allow components to use primitive tokens directly.

* The system MUST use semantic tokens as the default interface for UI.

---

### Token Usage

* The system MUST NOT use hardcoded values in UI implementation.
* All colors MUST come from semantic tokens.
* All spacing MUST come from spacing tokens.
* All typography MUST use typography tokens.
* All shadows, borders, and radii MUST use token definitions.

---

### Token Structure

* Tokens MUST follow a hierarchical naming structure:

  * `category.group.variant.state`

Examples:

* `color.brand.default`
* `color.success.hover`
* `spacing.component.padding_md`
* `typography.heading.h1`

---

### Alias Rules

* Semantic tokens MUST reference primitive tokens.
* Component tokens MUST reference semantic tokens.
* Tokens MUST NOT create circular references.
* Tokens SHOULD minimize deep nesting beyond 3 levels.

---

### Theming

* The system MUST support theming via semantic tokens.
* Dark mode MUST override semantic tokens only.
* Primitive tokens MUST remain unchanged across themes.

---

### Financial Semantics

* The system MUST define financial-specific tokens:

  * income
  * expense
  * savings
  * debt
  * budget states
  * goal states

* Financial tokens MUST map to semantic colors.

---

### Typography

* Numeric values MUST use numeric typography tokens.
* Financial values MUST use tabular numbers.
* Typography MUST ensure readability and hierarchy.

---

### Responsiveness

* Breakpoints MUST be defined as tokens.
* Layout spacing MUST adapt using token scales.

---

## 6. Constraints

* Tokens MUST be serializable (JSON, YAML or similar).
* Tokens MUST be framework-agnostic.
* Tokens MUST be compatible with frontend frameworks (React, etc.).
* Tokens MUST be version-controlled.
* Token updates MUST NOT break existing components without migration.

---

## 7. Decisions

### Decision: Three-Layer Token Architecture

* Rationale: Separates raw values from meaning and usage, enabling flexibility.

### Decision: Semantic-First Consumption

* Rationale: Prevents visual inconsistency and design drift.

### Decision: Finance-Specific Token Layer

* Rationale: Financial clarity is a core product requirement.

### Decision: Token-Driven Theming

* Rationale: Enables dark mode and future brand customization.

---

## 8. Validation

* [ ] No hardcoded values in UI code
* [ ] No direct usage of primitive tokens in components
* [ ] Semantic tokens correctly map to primitives
* [ ] Component tokens correctly map to semantic tokens
* [ ] Token naming follows convention
* [ ] No circular dependencies between tokens
* [ ] Dark mode overrides only semantic tokens
* [ ] Financial tokens are implemented and used

---

## 9. Completion Criteria

This contract is satisfied when:

* All UI styling is token-driven
* Token hierarchy is enforced
* The design token file is fully implemented
* Theming (light/dark) is functional
* Financial semantics are visually consistent
* Token validation checklist passes

---

## 10. Change Control

* Token changes MUST be versioned.
* Breaking changes MUST include migration documentation.
* New tokens MUST follow naming conventions.
* Deprecated tokens MUST be marked and not removed immediately.
* Changes REQUIRE approval from Design + Frontend.