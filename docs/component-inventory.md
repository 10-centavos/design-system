# Component Inventory

All components live in `src/components/` and are exported from `src/components/index.ts`.

## Atomic Design Levels

- Foundations: `tokens/`, `src/styles/tokens.css`, `tailwind.config.cjs`.
- Atoms: `Alert`, `Badge`, `Button`, `Card`, `Input`, `MoneyValue`, `PixelCanvas`, `Progress`, `Select`, `Skeleton`.
- Molecules: `BudgetCategoryRow`, `GoalCard`, `TransactionItem`.
- Organisms: `ChartPanel` and composed dashboard regions in Storybook previews.
- Templates/pages: represented by `src/stories/LayoutPreview.svelte` and other Storybook previews.

## Button

Atomic level: atom.

- Variants: `primary`, `secondary`, `ghost`, `danger`
- States: default, hover, active through native button behavior, disabled, loading
- Accessibility: native button, `aria-busy` while loading, visible focus

## Input

Atomic level: atom.

- Variants: text, search, number through `type`
- States: default, focus, error, disabled
- Accessibility: label binding, `aria-invalid`, `aria-describedby`

## Select

Atomic level: atom.

- States: default, focus, error, disabled
- Accessibility: label binding, `aria-invalid`, `aria-describedby`

## Card

Atomic level: atom.

- Variants: section, article, div; optional interactive state
- States: default, hover/focus when interactive
- Accessibility: semantic wrapper selection

## Badge

Atomic level: atom.

- Tones: neutral, income, expense, savings, debt, info, warning, danger, success, victory
- Usage: pair with labels for financial state clarity

## Progress

Atomic level: atom.

- States: funded, partial, empty, overspent, complete, progress
- Accessibility: native `<progress>` with label

## Skeleton

Atomic level: atom.

- Variants: text, card, row
- Accessibility: `role="status"` and screen-reader label

## PixelCanvas

Atomic level: atom.

- Variants: wave, pulse, spark
- Usage: decorative pixel animations for hero bands, modal accents, and status surfaces
- Accessibility: decorative by default, respects reduced-motion, and should not be the only carrier of meaning

## Alert

Atomic level: atom.

- Tones: info, success, warning, danger
- Accessibility: danger uses `role="alert"`; others use `role="status"`

## TransactionItem

Atomic level: molecule.

- Variants: income, expense
- Includes: title, category badge, date, signed money value

## BudgetCategoryRow

Atomic level: molecule.

- States: funded, partial, empty, overspent
- Includes: name, allocated amount, spent amount, remaining amount, status badge, progress

## GoalCard

Atomic level: molecule.

- States: in progress, completed
- Includes: title, percent, progress, current amount, target amount

## Modal

Atomic level: organism.

- Variants: confirm, edit, agent
- States: open, closed, dismissible, fixed action footer
- Accessibility: `role="dialog"`, `aria-modal="true"`, labeled title and description, Escape to close when dismissible
- Usage: confirmations, edits, agent recommendations, and blocking flows

## ChartPanel

Atomic level: organism.

- Variants: line, bar, doughnut
- Tones: income, expense, savings, debt, warning, success, brand
- Usage: financial trends, budget split, income versus expense comparison
- Accessibility: chart has an explicit text summary, canvas `aria-label`, and does not rely on color alone
- Implementation: Chart.js rendered with semantic token colors read from generated CSS variables

## MoneyValue

Atomic level: atom.

- Tones: positive, negative, neutral, auto
- Uses: `formatMoney`, tabular numeric typography, signed display for positive/negative values
