# Atomic Design Model

10 Centavos uses Atomic Design as the composition model for the design system.

The model is adapted for a financial product: playful presentation is allowed, but financial meaning remains semantic, explicit, and accessible.

## Levels

- Foundations: design tokens, semantic tokens, generated CSS variables, Tailwind token mappings.
- Atoms: smallest reusable controls and display primitives, such as `Button`, `Badge`, `Input`, `Select`, `MoneyValue`, `Progress`, `Skeleton`, `Alert`, and `Card`.
- Molecules: small financial UI units composed from atoms, such as `TransactionItem`, `BudgetCategoryRow`, and `GoalCard`.
- Organisms: larger product regions composed from molecules and atoms, such as `ChartPanel` and dashboard sections.
- Templates: responsive screen structures that define layout and state placement without owning product data.
- Pages: concrete screens with real content, flow state, and product behavior.

## Rules

- New UI must identify its Atomic Design level before implementation.
- Use lower-level components before creating higher-level compositions.
- Do not introduce a new atom, molecule, organism, template, or page pattern without updating the component inventory or relevant contract.
- Components may feel vibrant and game-inspired only through semantic tokens and documented variants.
- Financial meaning must never rely on color alone.

## Current Mapping

- Atoms: `Alert`, `Badge`, `Button`, `Card`, `Input`, `MoneyValue`, `Progress`, `Select`, `Skeleton`.
- Molecules: `BudgetCategoryRow`, `GoalCard`, `TransactionItem`.
- Organisms: `ChartPanel`, composed dashboard panels in Storybook previews.
- Templates and pages: represented in `src/stories/` as examples for consuming applications.
