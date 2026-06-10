# Setup

- Use Node.js LTS and Yarn for this Angular workspace.
- Install dependencies with `yarn install`.
- Run the primary app with `yarn start:example-app`.
- Serve the secondary app with `yarn ng serve --project=back-office`.
- Build the primary app with `yarn build`.
- Keep work aligned with the existing standalone Angular, SCSS, Angular Material,
  Tailwind, lazy route, and signal-based patterns.

# Testing

- Unit tests are Jasmine/Karma specs colocated with source files as `.spec.ts`.
- Use Angular `TestBed` for Angular services, guards, components, and resolvers.
- Run all configured tests with `yarn test`.
- Run lint checks with `yarn lint`.
- Run formatting checks with `yarn format:test`; apply formatting with
  `yarn format:write` when needed.
- Add or update focused tests near meaningful behavior changes.

# Style

- Prefer TypeScript and standalone Angular components.
- Keep feature-specific UI inside its feature folder under
  `projects/example-app/src/app/feature`.
- Put app-wide providers, guards, interceptors, feature flags, and API services
  under `core`.
- Put shared presentation components/directives under `ui`.
- Put shared API and domain types under `model`.
- Respect the dependency boundary rules in `eslint.config.js`.
- Preserve existing naming, selector prefixes, SCSS usage, and file layout.

# Review

- Before finishing, review `git diff` for focused scope and unintended edits.
- Run relevant checks: usually `yarn lint`, `yarn format:test`, and `yarn test`.
- Call out any checks that were skipped and why.
- Check for behavior regressions, missing tests, hardcoded secrets, unnecessary
  complexity, and dependency-boundary drift.
- Keep README and route documentation current when public commands, structure, or
  workflows change.
