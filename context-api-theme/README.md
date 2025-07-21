# context-api-theme

## Testing

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests.

### Installed Testing Packages

- `vitest` — Test runner
- `@testing-library/react` — React component testing utilities
- `@testing-library/jest-dom` — Custom DOM matchers for assertions
- `@testing-library/user-event` — Simulates user interactions
- `jsdom` — JavaScript implementation of the DOM for testing

### How to Run Tests

```bash
npm run test
```

Or, for watch mode:

```bash
npx vitest --watch
```

### How to Run Coverage

To generate a coverage report, run:

```bash
npx vitest run --coverage
```

The coverage report will be output in the `coverage/` directory. Open `coverage/index.html` in your browser to view a detailed, interactive report.

### Test Cases Checklist

#### ThemeProvider & useTheme
- [x] Provides default theme (light)
- [x] Reads theme from localStorage
- [x] Saves theme to localStorage on change
- [x] Applies correct class to document body
- [x] useTheme returns theme and toggleTheme
- [x] useTheme throws error if used outside provider

#### ThemeToggler
- [x] Renders toggle button
- [x] Toggles theme on click
- [x] Reflects current theme in button text

#### ThemedContent
- [x] Renders with correct background and text color for light theme
- [x] Renders with correct background and text color for dark theme
- [x] Displays current theme text

---

## Creating/Running Tests

Test files are placed alongside components or in a `__tests__` folder. Use `.test.tsx` or `.test.ts` extensions.

---
