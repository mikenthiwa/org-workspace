# My Org Workspace

Angular workspace containing two applications:

- `example-app`: the primary customer-facing app.
- `back-office`: a secondary Angular app shell.

The main app is built with standalone Angular components, lazy routes, Angular
Material, SCSS, Tailwind utilities, SSR support, service worker configuration,
HTTP interceptors, and signal-based state in the feature layer.

## Requirements

- Node.js LTS
- Yarn

Install dependencies with:

```bash
yarn install
```

## Development

Start the main app:

```bash
yarn start:example-app
```

The dev server runs the `example-app` Angular project and serves it at
`http://localhost:4200/` by default.

To serve another project directly:

```bash
yarn ng serve --project=back-office
```

## Project Structure

```text
projects/
  example-app/
    src/app/
      core/       App-wide providers, guards, interceptors, services
      feature/    Lazy-loaded product features
      layout/     Route shells and navigation layouts
      model/      Shared TypeScript API and domain models
      ui/         Reusable presentation components and directives
  back-office/
    src/app/      Secondary Angular application shell
```

Important root files:

- `angular.json`: Angular project and target configuration.
- `package.json`: scripts and dependencies.
- `eslint.config.js`: Angular ESLint and dependency-boundary rules.
- `tailwind.config.js`: Tailwind theme extensions.
- `tsconfig.json`: shared TypeScript compiler settings.

## Main App Routes

`example-app` uses lazy route files under `projects/example-app/src/app/feature`.

```text
/                  -> redirects to /home
/home              -> home feature
/access/login      -> login feature
/lifestyle         -> lifestyle feature
/lifestyle/bus     -> bus booking feature
```

The bus booking flow includes schedule search, schedule results, and seat
selection routes.

## Scripts

```bash
yarn build          # Build example-app
yarn test           # Run Angular unit tests
yarn lint           # Run ESLint
yarn format:test    # Check Prettier formatting
yarn format:write   # Format project files
```

Bundle and dependency analysis:

```bash
yarn analyze
yarn analyze:sme
yarn analyze:deps
```

## Architecture Notes

- `core` owns app-wide providers, HTTP setup, route guards, feature flags, and
  API services.
- `feature` owns routed business features and should keep feature-specific UI
  close to the route that uses it.
- `ui` contains reusable presentation components and directives.
- `model` contains shared TypeScript types used across app layers.
- Dependency boundaries are enforced in `eslint.config.js`; run `yarn lint`
  before submitting changes.

## Testing

Unit tests are colocated with components and services as `.spec.ts` files.

Run all configured Angular tests with:

```bash
yarn test
```

For meaningful behavior changes, add or update focused tests near the changed
code.
