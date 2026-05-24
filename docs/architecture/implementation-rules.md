# Implementation Rules

## 1. Start With Ownership

Before implementing anything, identify ownership:

- Shell
- Explore
- Decide
- Checkout
- Shared Catalog
- Design Tokens
- Design System

Do not place code based on convenience. Place code based on ownership.

## 2. Contracts Go In shared-catalog

If more than one domain needs the same data shape, define it in:

packages/shared-catalog

Examples:
- Product
- ProductSummary
- Variant
- Store
- Cart
- LineItem
- AddToCartCommand
- Typed events
- Result
- DomainError

shared-catalog must not import Angular or MFEs.

## 3. Reusable UI Goes In ts-design-system

If a component is reusable and domain-agnostic, place it in:

packages/ts-design-system

Examples:
- ts-button
- ts-product-card
- ts-variant-option
- ts-mini-cart
- ts-cart-counter

## 4. Visual Values Go In design-tokens

Do not hardcode design values in reusable components.

Use CSS Custom Properties.

Good:
background: var(--button-bg);

Bad:
background: green;

## 5. Tailwind vs BEM

Use Tailwind for:
- layout
- spacing
- simple composition
- page skeletons

Use SCSS/BEM for:
- component internals
- complex states
- complex variants

## 6. Components Must Be Storybook-Ready

Every design-system component should have:
- clear inputs
- clear outputs
- variants
- empty/loading/error states when applicable
- mockable data
- no dependency on a MFE runtime

## 7. Code Must Be Testable

Components:
- inputs should affect DOM predictably
- outputs should be observable
- avoid hidden side effects

Stores:
- actions should be callable
- selectors should be deterministic
- HTTP should be mockable

## 8. MFEs Work Isolated First

Before Module Federation:
- mfe-explore runs alone
- mfe-decide runs alone
- mfe-checkout runs alone

Shell composition comes later.

## 9. No Cross-MFE Imports

Forbidden:
- mfe-explore -> mfe-decide
- mfe-explore -> mfe-checkout
- mfe-decide -> mfe-explore
- mfe-decide -> mfe-checkout
- mfe-checkout -> mfe-explore
- mfe-checkout -> mfe-decide

Use:
- shared-catalog
- typed events
- routes
- future Module Federation

## 10. Validate

After meaningful changes run:

pnpm nx lint <project>
pnpm nx build <project>

When touching shared packages run:

pnpm nx affected -t lint test build --base=HEAD
