# Tractor Store Frontend Architecture — Comandos comunes

Este archivo resume los comandos más útiles del proyecto hasta el cierre de la Fase 3.

## Contexto actual del proyecto

Arquitectura montada hasta ahora:

```txt
tractor-store-frontend-architecture/
├── apps/
│   └── shell/
├── packages/
│   ├── mfe-explore/
│   ├── mfe-decide/
│   ├── mfe-checkout/
│   ├── shared-catalog/
│   └── ts-design-system/
├── docs/
├── playground/
├── nx.json
├── pnpm-workspace.yaml
├── package.json
└── eslint.config.mjs
```

Responsabilidades actuales:

```txt
shell
→ aplicación host / futura capa de integración

mfe-explore
→ home, categorías, tiendas, recomendaciones, header y footer

mfe-decide
→ detalle de producto y selección de variantes

mfe-checkout
→ carrito, minicart, checkout y confirmación

shared-catalog
→ modelos, contratos, eventos y tipos compartidos

ts-design-system
→ componentes visuales compartidos
```

---

## 1. Comandos pnpm básicos

### Instalar dependencias

```bash
pnpm install
```

Instala todas las dependencias del monorepo usando `pnpm-lock.yaml`.

### Agregar dependencia de desarrollo

```bash
pnpm add -D <package>
```

Ejemplo:

```bash
pnpm add -D @nx/angular
```

Instala una dependencia solo para desarrollo.

### Agregar dependencia runtime

```bash
pnpm add <package>
```

Instala una dependencia usada por la aplicación en ejecución.

---

## 2. Scripts definidos en package.json

### Levantar shell

```bash
pnpm shell
```

Ejecuta:

```bash
nx serve shell
```

Levanta la shell en el puerto configurado, actualmente `4200`.

### Levantar Explore

```bash
pnpm mfe-explore
```

Ejecuta:

```bash
nx serve mfe-explore
```

Levanta `mfe-explore`, actualmente en el puerto `4201`.

### Levantar Decide

```bash
pnpm mfe-decide
```

Ejecuta:

```bash
nx serve mfe-decide
```

Levanta `mfe-decide`, actualmente en el puerto `4202`.

### Levantar Checkout

```bash
pnpm mfe-checkout
```

Ejecuta:

```bash
nx serve mfe-checkout
```

Levanta `mfe-checkout`, actualmente en el puerto `4203`.

### Levantar las cuatro apps

```bash
pnpm start-all
```

Ejecuta:

```bash
nx run-many --target=serve --projects=shell,mfe-explore,mfe-decide,mfe-checkout --parallel=4
```

Levanta simultáneamente:

```txt
http://localhost:4200 → shell
http://localhost:4201 → mfe-explore
http://localhost:4202 → mfe-decide
http://localhost:4203 → mfe-checkout
```

### Ejecutar lint en todo el monorepo

```bash
pnpm lint:all
```

Ejecuta lint para todos los proyectos.

### Ejecutar tests en todo el monorepo

```bash
pnpm test:all
```

Ejecuta los tests de todos los proyectos.

### Ejecutar build en todo el monorepo

```bash
pnpm build:all
```

Compila todos los proyectos que tengan target `build`.

### Abrir Nx Graph

```bash
pnpm graph
```

Abre el grafo visual de dependencias de Nx.

---

## 3. Comandos Nx de inspección

### Ver versión local de Nx

```bash
pnpm nx --version
```

Sirve para confirmar que el workspace usa la versión local de Nx.

### Listar proyectos detectados

```bash
pnpm nx show projects
```

Muestra los proyectos registrados por Nx.

Salida esperada aproximada:

```txt
shell
mfe-explore
mfe-decide
mfe-checkout
shared-catalog
ts-design-system
tractor-store-frontend-architecture
```

### Ver configuración completa de un proyecto

```bash
pnpm nx show project <project-name> --json
```

Ejemplo:

```bash
pnpm nx show project shell --json
```

Muestra la configuración completa del proyecto, incluyendo targets inferidos por plugins.

### Abrir grafo de dependencias

```bash
pnpm nx graph
```

Muestra visualmente qué proyecto depende de cuál.

---

## 4. Comandos para servir apps

### Servir shell

```bash
pnpm nx serve shell
```

### Servir Explore

```bash
pnpm nx serve mfe-explore
```

### Servir Decide

```bash
pnpm nx serve mfe-decide
```

### Servir Checkout

```bash
pnpm nx serve mfe-checkout
```

### Servir varias apps en paralelo

```bash
pnpm nx run-many --target=serve --projects=shell,mfe-explore,mfe-decide,mfe-checkout --parallel=4
```

Útil para validar que las cuatro apps puedan correr simultáneamente.

---

## 5. Comandos de validación

### Lint de un proyecto

```bash
pnpm nx lint <project-name>
```

Ejemplo:

```bash
pnpm nx lint mfe-explore
```

Valida reglas de ESLint, incluyendo boundaries de Nx.

### Test de un proyecto

```bash
pnpm nx test <project-name>
```

Ejemplo:

```bash
pnpm nx test shared-catalog
```

Ejecuta tests unitarios del proyecto indicado.

### Build de un proyecto

```bash
pnpm nx build <project-name>
```

Ejemplo:

```bash
pnpm nx build shell
```

Compila el proyecto indicado.

### Lint de todos los proyectos

```bash
pnpm nx run-many -t lint --all
```

### Test de todos los proyectos

```bash
pnpm nx run-many -t test --all
```

### Build de todos los proyectos

```bash
pnpm nx run-many -t build --all
```

### Lint, test y build en todos los proyectos

```bash
pnpm nx run-many -t lint test build --all
```

---

## 6. Comandos affected

### Ver proyectos afectados entre dos commits

```bash
pnpm nx show projects --affected --base=HEAD~1 --head=HEAD
```

Compara el commit anterior con el actual y muestra los proyectos afectados.

### Ejecutar lint/test/build solo sobre proyectos afectados

```bash
pnpm nx affected -t lint test build --base=HEAD~1 --head=HEAD
```

Ejecuta tareas solo sobre los proyectos afectados.

### Ver afectados desde el último commit hasta cambios locales

```bash
pnpm nx show projects --affected --base=HEAD
```

Útil cuando tienes cambios sin commit y quieres ver qué impactan.

### Ejecutar tareas affected contra cambios locales

```bash
pnpm nx affected -t lint test build --base=HEAD
```

Útil antes de hacer commit.

---

## 7. Comandos de generación usados

### Inicializar Nx en el repo actual

```bash
pnpm dlx nx@21 init
```

Convierte un repo existente en workspace Nx.

### Agregar soporte Angular a Nx

```bash
pnpm nx add @nx/angular
```

Instala y configura el plugin Angular de Nx.

### Crear la shell

```bash
pnpm nx g @nx/angular:application apps/shell \
  --name=shell \
  --standalone=true \
  --routing=true \
  --style=scss \
  --unitTestRunner=jest \
  --e2eTestRunner=none
```

Crea la app host principal.

### Crear MFE Explore

```bash
pnpm nx g @nx/angular:application packages/mfe-explore \
  --name=mfe-explore \
  --standalone=true \
  --routing=true \
  --style=scss \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --bundler=rspack \
  --ssr=false
```

### Crear MFE Decide

```bash
pnpm nx g @nx/angular:application packages/mfe-decide \
  --name=mfe-decide \
  --standalone=true \
  --routing=true \
  --style=scss \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --bundler=rspack \
  --ssr=false
```

### Crear MFE Checkout

```bash
pnpm nx g @nx/angular:application packages/mfe-checkout \
  --name=mfe-checkout \
  --standalone=true \
  --routing=true \
  --style=scss \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --bundler=rspack \
  --ssr=false
```

### Crear shared-catalog

```bash
pnpm nx g @nx/js:library shared-catalog \
  --directory=packages/shared-catalog \
  --bundler=tsc \
  --unitTestRunner=jest
```

Crea una librería TypeScript para contratos, modelos y eventos compartidos.

### Crear ts-design-system

```bash
pnpm nx g @nx/angular:library \
  --name=ts-design-system \
  --directory=packages/ts-design-system \
  --standalone=true \
  --style=scss \
  --unitTestRunner=jest \
  --linter=eslint
```

Crea una librería Angular para componentes visuales compartidos.

---

## 8. Comandos Git útiles

### Ver estado del repo

```bash
git status
```

### Ver historial de commits

```bash
git log --oneline
```

### Agregar cambios

```bash
git add .
```

### Crear commit

```bash
git commit -m "mensaje del commit"
```

### Restaurar un archivo modificado

```bash
git restore <path>
```

Ejemplo:

```bash
git restore packages/mfe-explore/src/app/app.ts
```

### Eliminar outputs generados

```bash
rm -rf dist
```

No se debe versionar `dist/`.

---

## 9. Archivos clave de configuración

### `pnpm-workspace.yaml`

Define qué carpetas forman parte del workspace pnpm.

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### `nx.json`

Configura plugins, cache, `namedInputs`, `targetDefaults` y generadores.

### `eslint.config.mjs`

Contiene reglas globales de lint, incluyendo:

```txt
@nx/enforce-module-boundaries
```

Esta regla protege que los proyectos no se importen indebidamente entre sí.

### `project.json`

Cada proyecto tiene su configuración propia:

```txt
apps/shell/project.json
packages/mfe-explore/project.json
packages/mfe-decide/project.json
packages/mfe-checkout/project.json
packages/shared-catalog/project.json
packages/ts-design-system/project.json
```

### `rspack.config.ts`

Cada app Angular generada con Rspack tiene su configuración de build/dev server.

Ejemplos:

```txt
apps/shell/rspack.config.ts
packages/mfe-explore/rspack.config.ts
packages/mfe-decide/rspack.config.ts
packages/mfe-checkout/rspack.config.ts
```

---

## 10. Puertos actuales

```txt
shell         → 4200
mfe-explore   → 4201
mfe-decide    → 4202
mfe-checkout  → 4203
```

Configurados en los `rspack.config.ts` de cada app, dentro del bloque `development.options.devServer.port`.

---

## 11. Reglas de arquitectura actuales

### Permitido

```txt
shell → puede depender de explore, decide, checkout, shared-catalog y ts-design-system

mfe-explore → puede depender de shared-catalog y ts-design-system

mfe-decide → puede depender de shared-catalog y ts-design-system

mfe-checkout → puede depender de shared-catalog y ts-design-system

ts-design-system → puede depender de shared-catalog

shared-catalog → no debe depender de MFEs ni de UI
```

### No permitido

```txt
mfe-explore → mfe-decide
mfe-explore → mfe-checkout

mfe-decide → mfe-explore
mfe-decide → mfe-checkout

mfe-checkout → mfe-explore
mfe-checkout → mfe-decide
```

Los MFEs se comunicarán por contratos, eventos, rutas o Module Federation, no por imports directos.

---

## 12. Comandos recomendados antes de hacer commit

```bash
pnpm lint:all
pnpm test:all
pnpm build:all
```

O usando affected:

```bash
pnpm nx affected -t lint test build --base=HEAD
```

Si todo pasa:

```bash
git add .
git commit -m "mensaje descriptivo"
```
