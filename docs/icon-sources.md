# Icon Sources For Gamified UI

This repository favors icon sets that can be consumed as packages and mapped through the design system.

## Recommended package sources

### Game Icons

- Package: `@iconify-json/game-icons`
- Source: Iconify Game Icons set
- Reference: https://icon-sets.iconify.design/game-icons/
- Use case: game-like, RPG-inspired, achievement, quest, and reward metaphors in a financial UI.

### Material Design Icons

- Package: `@iconify-json/mdi`
- Source: Iconify Material Design Icons set
- Reference: https://icon-sets.iconify.design/mdi/
- Use case: fallback for common UI actions and neutral controls when a game icon would be too literal.

## Selection rule

- Prefer Game Icons for quest, badge, victory, power-up, and progression metaphors.
- Prefer MDI for generic controls, actions, and utility icons.
- Keep icon usage token-driven and consistent with Atomic Design placement.
- Do not mix icon sets ad hoc inside a single component family without documenting the reason.
