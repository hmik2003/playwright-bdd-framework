# Playwright BDD Framework

[![BDD Tests](https://github.com/hmik2003/playwright-bdd-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/hmik2003/playwright-bdd-framework/actions/workflows/playwright.yml)
[![Scenarios](https://img.shields.io/badge/scenarios-9%20passing-brightgreen)](https://github.com/hmik2003/playwright-bdd-framework)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-blue?logo=playwright)](https://playwright.dev)
[![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-green?logo=cucumber)](https://cucumber.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **Behavior-Driven Development (BDD)** test framework combining Playwright with Cucumber-style **Gherkin** feature files. Bridges QA automation with business stakeholders who write acceptance criteria in plain English.

> **Portfolio highlight:** Shows you can translate business requirements into executable tests — a skill recruiters value for senior QA and SDET roles.

## Features

- **Gherkin feature files** — human-readable scenarios stakeholders can review
- **playwright-bdd** — native Playwright integration (no separate WebDriver layer)
- **Reusable step definitions** — DRY step library mapped to Page Objects
- **Scenario Outlines** — data-driven tests via Examples tables
- **Tagged scenarios** — `@smoke`, `@cart`, `@checkout` for selective runs

## Project Structure

```
playwright-bdd-framework/
├── .github/workflows/     # CI pipeline
├── fixtures/              # Test data & BDD fixtures
├── pages/                 # Page Object classes
├── tests/
│   ├── features/          # Gherkin .feature files
│   └── steps/             # Step definition implementations
├── utils/                 # Gherkin helper utilities
├── playwright.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm 9+

### Installation

```bash
git clone https://github.com/hmik2003/playwright-bdd-framework.git
cd playwright-bdd-framework
npm install
npx playwright install
```

### Run Tests

```bash
# Generate BDD specs from features and run
npm test

# Headed mode
npm run test:headed

# Regenerate specs only
npm run bddgen
```

## Example Feature File

```gherkin
Feature: Shopping Cart Management
  As a logged-in customer
  I want to manage items in my cart
  So that I can purchase the products I need

  Scenario: Add a product to the cart
    Given I am logged in as a standard user
    When I add "Sauce Labs Backpack" to the cart
    Then my cart should contain 1 item
```

## Scenario Coverage

| Feature   | Scenarios | Tags              |
|-----------|-----------|-------------------|
| Login     | 4         | @login @smoke     |
| Cart      | 3         | @cart @smoke      |
| Checkout  | 2         | @checkout @e2e    |

## Why BDD?

| Audience          | Benefit                                      |
|-------------------|----------------------------------------------|
| Product Owners    | Read scenarios without reading code          |
| QA Engineers      | Maintain step library, reuse across features |
| Developers        | Clear acceptance criteria before coding      |
| Recruiters        | Demonstrates cross-functional collaboration  |

## Tech Stack

- [Playwright](https://playwright.dev/) — browser automation
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — Gherkin + Playwright
- [TypeScript](https://www.typescriptlang.org/) — type-safe step definitions
- [GitHub Actions](https://github.com/features/actions) — CI/CD

## License

MIT
