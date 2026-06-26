# Token Map

## Layers

- Primitive: `tokens/primitive.json`
- Semantic light: `tokens/semantic.light.json`
- Semantic dark overrides: `tokens/semantic.dark.json`
- Component: `tokens/component.json`

## Generated Outputs

- `src/styles/tokens.css`
- `tailwind.config.cjs`

Run:

```sh
npm run build:tokens
```

## Tailwind Naming

Token paths become hyphenated class keys:

- `color.brand.default` -> `bg-brand-default`, `text-brand-default`, `border-brand-default`
- `color.background.surface` -> `bg-background-surface`
- `color.text.default` -> `text-text-default`
- `spacing.component.md` -> `p-component-md`, `gap-component-md`
- `radius.component.md` -> `rounded-component-md`
- `shadow.surface` -> `shadow-surface`
- `motion.duration.normal` -> `duration-normal`
- `motion.easing.standard` -> `ease-standard`

## Usage Rules

- Components may use semantic and component-facing token classes.
- Components must not reference primitive tokens directly.
- Dark mode changes semantic token values through `[data-theme="dark"]`.
- Component tokens document defaults and map back to semantic tokens.
