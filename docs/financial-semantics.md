# Financial Semantics

Financial meaning must be explicit through color, label, sign, or status text.

The palette may be vibrant, neon, and game-inspired, but financial meaning remains conventional and semantic.

## Money Types

- Income: `color.financial.income`, positive sign, income badge.
- Expense: `color.financial.expense`, negative sign, expense badge.
- Savings: `color.financial.savings`, savings badge.
- Debt: `color.financial.debt`, debt badge.

## Budget States

- Funded: success semantic, `funded` status badge, progress indicator.
- Partial: warning semantic, `partial` status badge, progress indicator.
- Empty: muted semantic, `empty` status badge, progress indicator.
- Overspent: danger semantic, `overspent` status badge, negative remaining value.

## Goal States

- In progress: brand semantic progress.
- Complete: success semantic progress and completed badge.

## Charts

- Chart colors must come from semantic token CSS variables.
- Income, expense, savings, debt, warning, and success chart series must include a visible label.
- Trend and distribution charts must include a text summary so the financial meaning is not communicated by color alone.
- Monetary values referenced near charts must use `MoneyValue` or `formatMoney`.

## Vibrant UI Guardrails

- Brand and info colors can carry game-like energy, neon accents, agent states, quests, and navigation emphasis.
- Success remains the semantic family for income, funded, and completed states.
- Danger remains the semantic family for expense, overspent, and destructive states.
- Warning remains the semantic family for partial, pending, and attention states.
- Decorative intensity must not change financial meaning.

## Formatting

Use `formatMoney` from `src/lib/money.ts`.

Defaults:

- Locale: `pt-BR`
- Currency: `BRL`
- Numeric display: tabular numbers through `MoneyValue`

Raw numbers must not be displayed as monetary values.
