# UI Contract — 10 Centavos (Svelte + Tailwind)

## 1. Purpose

Define how the Design System must be implemented using Svelte and Tailwind CSS, ensuring consistency, performance, and strict adherence to design tokens.

This contract enforces the UI technology stack and implementation patterns.

---

## 2. Scope

This contract governs:

* UI framework (Svelte)
* Styling system (Tailwind CSS)
* Component structure
* Token integration into Tailwind
* UI composition patterns
* State handling in UI

---

## 3. Out of Scope

This contract does NOT govern:

* Backend logic
* API contracts
* Database structure
* Business rules outside UI behavior

---

## 4. Terms and Definitions

* Svelte Component: UI unit written in `.svelte`
* Tailwind Utility: Class-based styling system
* Token Mapping: Mapping design tokens into Tailwind config
* Variant: Tailwind state (hover, focus, etc.)
* UI State: loading, error, empty, success

---

## 5. Requirements

---

### Stack Enforcement

* The system MUST use:

  * Svelte (component framework)
  * Tailwind CSS (styling system)

* The system MUST NOT use:

  * inline CSS for styling
  * external CSS frameworks
  * CSS-in-JS libraries

---

### Component Architecture (Svelte)

* Components MUST be written as `.svelte` files

* Components MUST be:

  * small
  * reusable
  * composable

* Components MUST declare or document their Atomic Design level as atom, molecule, organism, template, or page.

* Components MUST separate:

  * logic (script)
  * structure (markup)
  * styling (Tailwind classes)

---

### Tailwind Usage

* All styling MUST be implemented using Tailwind classes

* Tailwind MUST be configured using Design Tokens

* The system MUST NOT:

  * use raw Tailwind values (e.g., `text-red-500`)
  * use arbitrary values (e.g., `px-[13px]`) without token mapping

---

### Token Integration

* Design Tokens MUST be mapped into Tailwind config:

  * colors
  * spacing
  * typography
  * radius
  * shadows

* Example:

```js
theme: {
  extend: {
    colors: {
      brand: "var(--color-brand-default)",
      success: "var(--color-success-default)"
    }
  }
}
```

* Components MUST use token-based classes only:

  * `bg-brand`
  * `text-success`
  * `border-default`

---

### Styling Rules

* The system MUST NOT hardcode:

  * colors
  * spacing
  * font sizes
  * shadows

* The system MUST use:

  * Tailwind + tokens exclusively

---

### Component Variants

* Variants MUST be implemented using:

  * Tailwind states (`hover:`, `focus:`)
  * conditional class application

* Example:

```svelte
<button class="bg-brand hover:bg-brand-hover">
```

### Atomic Design Composition

* Atoms MUST remain presentation-focused and reusable.
* Molecules MUST compose atoms without owning page-level business logic.
* Organisms MUST compose molecules into meaningful financial regions such as dashboard summaries, budget sections, transaction panels, or goal panels.
* Templates MUST define responsive layout structure and state placement.
* Pages MUST provide concrete content and flow state.
* Storybook examples MAY demonstrate templates and pages, but product applications remain responsible for real data integration.

---

### UI States

* Components MUST support:

  * loading
  * disabled
  * error
  * success

* UI states MUST be visually distinct using tokens

---

### Financial UI Rules

* Monetary values MUST:

  * use monospace / numeric typography
  * align to the right

* Financial states MUST use:

  * success → income
  * danger → expense / overspent
  * warning → partial

* Game-inspired UI MAY use vibrant brand and info treatment for engagement, but financial states MUST keep the semantic mappings above.

---

### Layout System

* Layout MUST use:

  * Tailwind spacing scale (mapped to tokens)
  * flex / grid utilities

* The system MUST NOT:

  * use custom layout CSS outside Tailwind

---

### Responsiveness

* The system MUST use Tailwind breakpoints
* Breakpoints MUST match token definitions

---

### Accessibility

* Components MUST:

  * support keyboard navigation
  * include focus styles (`focus:ring-*`)
  * meet contrast requirements

---

## 6. Constraints

* Tailwind config MUST be token-driven
* No raw Tailwind palette usage allowed
* No CSS files for styling (except base reset)
* Svelte components MUST remain framework-pure

---

## 7. Decisions

### Decision: Svelte as UI Framework

* Rationale: Simplicity, performance, and low runtime overhead.

### Decision: Tailwind as Styling Layer

* Rationale: Enforces consistency and reduces custom CSS.

### Decision: Token-Driven Tailwind Config

* Rationale: Guarantees alignment between design and code.

### Decision: No Raw Tailwind Colors

* Rationale: Prevents design drift.

---

## 8. Validation

* [ ] All components use Svelte
* [ ] All styling uses Tailwind
* [ ] Tailwind config maps tokens
* [ ] No hardcoded values found
* [ ] No raw Tailwind colors used
* [ ] Components support required states
* [ ] Financial UI rules respected

---

## 9. Completion Criteria

This contract is satisfied when:

* UI is fully implemented in Svelte
* Tailwind is fully token-driven
* No design system violations exist
* Components are reusable and consistent
* UI passes validation checklist

---

## 10. Change Control

* Stack changes REQUIRE architecture approval
* Tailwind config changes MUST reflect tokens
* New patterns MUST be documented before use
* Violations MUST be corrected before merge
