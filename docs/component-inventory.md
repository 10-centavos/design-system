# Component Inventory

All components live in `src/components/` and are exported from `src/components/index.ts`.

## Button

- Variants: `primary`, `secondary`, `ghost`, `danger`
- States: default, hover, active through native button behavior, disabled, loading
- Accessibility: native button, `aria-busy` while loading, visible focus

## Input

- Variants: text, search, number through `type`
- States: default, focus, error, disabled
- Accessibility: label binding, `aria-invalid`, `aria-describedby`

## Select

- States: default, focus, error, disabled
- Accessibility: label binding, `aria-invalid`, `aria-describedby`

## Card

- Variants: section, article, div; optional interactive state
- States: default, hover/focus when interactive
- Accessibility: semantic wrapper selection

## Badge

- Tones: neutral, income, expense, savings, debt, warning, danger, success
- Usage: pair with labels for financial state clarity

## Progress

- States: funded, partial, empty, overspent, complete, progress
- Accessibility: native `<progress>` with label

## Skeleton

- Variants: text, card, row
- Accessibility: `role="status"` and screen-reader label

## Alert

- Tones: info, success, warning, danger
- Accessibility: danger uses `role="alert"`; others use `role="status"`

## TransactionItem

- Variants: income, expense
- Includes: title, category badge, date, signed money value

## BudgetCategoryRow

- States: funded, partial, empty, overspent
- Includes: name, allocated amount, spent amount, remaining amount, status badge, progress

## GoalCard

- States: in progress, completed
- Includes: title, percent, progress, current amount, target amount

## Modal

- Variants: confirm, edit, agent
- States: open, closed, dismissible, fixed action footer
- Accessibility: `role="dialog"`, `aria-modal="true"`, labeled title and description, Escape to close when dismissible
- Usage: confirmations, edits, agent recommendations, and blocking flows

## ChartPanel

- Variants: line, bar, doughnut
- Tones: income, expense, savings, debt, warning, success, brand
- Usage: financial trends, budget split, income versus expense comparison
- Accessibility: chart has an explicit text summary, canvas `aria-label`, and does not rely on color alone
- Implementation: Chart.js rendered with semantic token colors read from generated CSS variables

## MoneyValue

- Tones: positive, negative, neutral, auto
- Uses: `formatMoney`, tabular numeric typography, signed display for positive/negative values
