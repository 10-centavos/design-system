# Financial Semantics

Financial meaning must be explicit through color, label, sign, or status text.

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

## Formatting

Use `formatMoney` from `src/lib/money.ts`.

Defaults:

- Locale: `pt-BR`
- Currency: `BRL`
- Numeric display: tabular numbers through `MoneyValue`

Raw numbers must not be displayed as monetary values.
