# Playwright BDD Framework (Python)

[![BDD Tests](https://github.com/hmik2003/playwright-bdd-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/hmik2003/playwright-bdd-framework/actions/workflows/playwright.yml)
[![Scenarios](https://img.shields.io/badge/scenarios-9%20passing-brightgreen)](https://github.com/hmik2003/playwright-bdd-framework)
[![Playwright](https://img.shields.io/badge/Playwright-Python-blue?logo=playwright)](https://playwright.dev/python/)
[![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-green?logo=cucumber)](https://cucumber.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **Behavior-Driven Development (BDD)** test framework combining Playwright with Cucumber-style **Gherkin** feature files. Bridges QA automation with business stakeholders who write acceptance criteria in plain English.

> **Portfolio highlight:** Shows you can translate business requirements into executable tests — a skill recruiters value for senior QA and SDET roles.

## Features

- **Gherkin feature files** — human-readable scenarios stakeholders can review
- **pytest-bdd** — native pytest integration with Playwright fixtures
- **Reusable step definitions** — DRY step library mapped to Page Objects
- **Scenario Outlines** — data-driven tests via Examples tables
- **Tagged scenarios** — `@smoke`, `@cart`, `@checkout` for selective runs

## Project Structure

```
playwright-bdd-framework/
├── .github/workflows/     # CI pipeline
├── conftest.py            # pytest fixtures
├── fixtures/              # Test data
├── pages/                 # Page Object classes
├── tests/
│   ├── features/          # Gherkin .feature files
│   ├── steps/             # Step definition implementations
│   └── test_bdd.py        # Scenario bindings
├── utils/                 # Gherkin helper utilities
├── pytest.ini
└── requirements.txt
```

## Getting Started

### Prerequisites

- Python 3.11+
- pip

### Installation

```bash
git clone https://github.com/hmik2003/playwright-bdd-framework.git
cd playwright-bdd-framework
pip install -r requirements.txt
playwright install
```

### Run Tests

```bash
# Run all BDD scenarios
pytest --browser chromium

# Headed mode
pytest --browser chromium --headed

# Filter by tag (via pytest-bdd / feature tags)
pytest -k login
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
    Then my cart should contain 1 items
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

- [Playwright for Python](https://playwright.dev/python/) — browser automation
- [pytest-bdd](https://pytest-bdd.readthedocs.io/) — Gherkin + pytest
- [pytest-playwright](https://github.com/microsoft/playwright-pytest) — browser fixtures
- [GitHub Actions](https://github.com/features/actions) — CI/CD

## License

MIT
