# Tractor Store Frontend Architecture

Implementación guiada de **The Tractor Store**, el “TodoMVC de los micro-frontends”, usando Angular, Nx, pnpm workspaces, arquitectura por dominios, Design Tokens, Design System y preparación para Module Federation.

## Referencia oficial

https://micro-frontends.org/tractor-store/

## Objetivo

Construir una arquitectura frontend basada en micro-frontends para un e-commerce de tractores, respetando los límites de equipo definidos por el reto oficial.

El propósito principal del proyecto no es solo construir pantallas, sino aprender y aplicar una arquitectura frontend real con:

- Nx monorepo
- pnpm workspaces
- Angular standalone apps
- Micro-frontends por dominio
- Shell application
- Shared contracts
- Design Tokens
- Design System
- Storybook-ready components
- Testable architecture
- Preparación para Module Federation
- Preparación para MSW y Playwright

---

## Equipos del Tractor Store

### Team Explore

Responsable de la experiencia de descubrimiento:

- Home
- Product lists
- Categories
- Stores
- Recommendations
- Header
- Footer

Proyecto:

```txt
packages/mfe-explore
packages/mfe-decide
packages/mfe-checkout


Monorepo Nx funcionando.
Tres MFEs aislados funcionando.
Shell funcionando.
Design Tokens funcionando.
Design System funcionando.
Storybook configurado.
Tests base funcionando.
Arquitectura preparada para Module Federation.
