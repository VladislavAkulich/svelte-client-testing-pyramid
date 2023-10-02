# How to execute test types

## Unit tests / Component tests

Exeecute unit-tests and component tests based on testing-library/svelte:
```bash
npm run vitest
```

## Component tests

Execute component test with playwright-ct:
```bash
npm run test-ct
```

## E2E / Perfromance / Accessibility

Execute playwright tests:

```bash
npm run test
```

- Uses DevTools protocol and lighthouse for performance. 
- Uses Ax-Playwright for accessibility.
