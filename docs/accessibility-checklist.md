# Accessibility Checklist

## Component Baseline

- [x] Components expose visible `focus-visible` styles where interactive or focusable.
- [x] Form fields connect labels and errors through accessible attributes.
- [x] Alerts use `status` or `alert` roles.
- [x] Progress uses native `<progress>` semantics.
- [x] Money values use text, signs, and badges; color is not the only signal.

## Product Flow Requirements

- [ ] Dashboard loading state uses skeletons with status labels.
- [ ] Dashboard error state includes retry action.
- [ ] Budget rows expose name, values, progress, and status.
- [ ] Transactions expose title, category, date, and signed amount.
- [ ] Add transaction prevents invalid submission and shows inline errors.
- [ ] Goals expose target, current value, percent, and state.

## Validation

Run:

```sh
npm run validate
```

Manual review is still required for keyboard order, screen reader phrasing, and viewport behavior in consuming apps.
