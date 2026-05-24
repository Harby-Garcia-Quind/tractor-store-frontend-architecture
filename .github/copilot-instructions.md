# Copilot Instructions - Tractor Store Frontend Architecture

Before modifying code, follow AGENTS.md.

This is an Nx monorepo for The Tractor Store.

Main rules:

- Do not import one MFE into another MFE.
- Put shared contracts in packages/shared-catalog.
- Put reusable UI components in packages/ts-design-system.
- Put CSS variables and Tailwind preset in packages/design-tokens.
- Keep shared-catalog framework-agnostic.
- Use Angular standalone components.
- Use Signals for current state.
- Use RxJS for async streams.
- Use design tokens instead of hardcoded colors.
- Components must be Storybook-ready.
- Components and stores must be testable.
- Respect Nx boundaries.

When implementing a feature:

1. Identify the owning domain.
2. Decide if a contract belongs in shared-catalog.
3. Decide if reusable UI belongs in ts-design-system.
4. Use design-tokens for styles.
5. Keep MFEs isolated.
6. Run lint and build.

Common commands:

pnpm nx lint <project>
pnpm nx build <project>
pnpm nx test <project>
pnpm nx run-many -t lint test build --all
pnpm nx graph
