# Agent Instructions

Read order:

1. `TODO.md`
2. `docs/contracts/design-system.contract.md`
3. `docs/contracts/design-tokens.contract.md`
4. `docs/contracts/ui.contract.md`
5. `docs/contracts/implementation.contract.md`
6. `docs/contracts/code-guiding.contract.md`
7. `docs/contracts/frontend.agent.contract.md`

Specialist profiles:

- UX/UI work: `agents/ux-ui-specialist.agent.md`
- Frontend work: `agents/frontend-specialist.agent.md`

Rules:

- Use semantic tokens only in UI.
- Use existing components before proposing new components.
- Stop on missing tokens, conflicting contracts, or ambiguous UI requirements.
- Never hardcode colors, spacing, typography, radii, shadows, or motion.
- Never rely on color alone for financial meaning.
- Frontend delivery requires UX/UI Specialist approval in `docs/approvals/ux-ui-approval.md`.
