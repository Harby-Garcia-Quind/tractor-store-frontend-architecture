# AGENTS.md - Tractor Store Frontend Architecture

This repository implements The Tractor Store as a frontend micro-frontend architecture.

## Stack

- Nx monorepo
- pnpm workspaces
- Angular standalone apps
- Design Tokens
- TailwindCSS
- Angular design system
- Shared contracts
- Future Module Federation
- Future Storybook, Jest, MSW and Playwright

## Projects

apps/shell

packages/mfe-explore
packages/mfe-decide
packages/mfe-checkout
packages/shared-catalog
packages/design-tokens
packages/ts-design-system

## Domain Ownership

Shell composes the system.

Explore owns:
- home
- categories
- product listings
- stores
- recommendations
- header
- footer

Decide owns:
- product detail
- variant selector
- add-to-cart intent

Checkout owns:
- cart
- minicart
- checkout form
- confirmation page

## Shared Libraries

shared-catalog:
- owns shared contracts
- owns models
- owns typed events
- must not import Angular
- must not import MFEs

design-tokens:
- owns CSS Custom Properties
- owns primitive, semantic and component tokens
- owns Tailwind preset
- must not depend on Angular or MFEs

ts-design-system:
- owns reusable Angular UI components
- components use prefix ts-
- components must use design tokens
- components must be Storybook-ready
- components must be testable

## Dependency Rules

MFEs must not import each other.

Forbidden:
- mfe-explore imports mfe-decide
- mfe-explore imports mfe-checkout
- mfe-decide imports mfe-explore
- mfe-decide imports mfe-checkout
- mfe-checkout imports mfe-explore
- mfe-checkout imports mfe-decide

Allowed:
- MFEs may import shared-catalog
- MFEs may import ts-design-system
- MFEs may use design-tokens
- Shell may compose all domains

## Angular Rules

Use:
- standalone components
- lazy routes
- inject()
- input() and output() where appropriate
- Signals for current UI state
- RxJS for async streams
- InjectionToken for API URLs/config
- interceptors for HTTP cross-cutting concerns

Avoid:
- NgModules unless explicitly needed
- cross-MFE imports
- business logic inside reusable UI components
- hardcoded design values

## Design Rules

Use design tokens for visual values.

Good:
background: var(--button-bg);

Bad:
background: green;

Use Tailwind for layout and simple composition.
Use SCSS/BEM for complex component internals.

## Testing and Storybook Readiness

Even if Storybook and full testing are not implemented yet, code must be designed for them.

Components should have:
- clear inputs
- clear outputs
- predictable DOM
- variants
- mockable data
- no dependency on a specific MFE runtime

## Done Criteria

A task is done only when:
- ownership is correct
- boundaries are respected
- shared contracts are in shared-catalog
- reusable UI is in ts-design-system
- styles use design tokens
- lint passes
- build passes
