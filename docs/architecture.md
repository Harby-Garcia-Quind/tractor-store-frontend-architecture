# Architecture Notes

## Current Phase

Fase 1 — Fundamentos del lenguaje y runtime.

## Architectural Principle

The Tractor Store will be implemented as a frontend micro-frontend architecture.

The system will be divided by business domains, not only by screens.

## Domains

### Explore

Owns product discovery.

### Decide

Owns product decision.

### Checkout

Owns cart and purchase flow.

## Future Architecture Direction

Later phases will introduce:
- Nx monorepo
- Angular 19
- Module Federation
- Shell application
- Domain MFEs
- Shared contracts
- Design system
- MSW
- Jest
- Playwright

## Backend Consideration

The backend is out of scope for now, but future phases should consider API contracts, authentication, authorization and security boundaries.