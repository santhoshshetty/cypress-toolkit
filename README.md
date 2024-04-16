# Cypress Test Automation

This is a demo test framework developed with a goal to have end to end testing and component testing capabilities with the best possible standards covering most of the features and build as a template or prototype that anyone can incorporate in the projects.

## Testing tools and Technologies:

- **Test Framework**: Cypress
- **Programming Language**: TypeScript

## Getting Started:

### Installation:

1.  **Download and Install Node.js and NPM:**

    - Verify Installation: To verify that Node.js and NPM are installed successfully, open your terminal or command prompt and run the following commands:
      ```bash
      node -v
      npm -v
      ```

2.  **Clone the project https://github.com/santhoshshetty/cypress.git**
3.  **Open the project in your favorite editor.**
4.  **Install Project Dependencies:**
    Navigate to the project directory using the terminal and run the following command to install the project dependencies:

    ```bash
    npm install
    ```

5.  **External Cypress Installation:**
    If you want to set up Cypress externally, use the following npm command to install Cypress as a dev dependency. This is optional and can be skipped if completed the step 4:

    ```bash
    npm install cypress --save-dev
    ```

6.  **Run Cypress:**
    Verify your Cypress installation by launching the Test Runner:

    ```bash
    npx cypress open
    ```

    If the setup was successful, the Test Runner will be displayed. From here, you can choose the specific feature to run and select the preferred browser.
    Navigate to the test runner, select the option 'E2E Testing', choose the feature you want to execute, and then select your desired browser from the dropdown to visualize the test execution.

    Alternatively, to run the tests via CLI in headless mode:

    ```bash
    npx cypress run
    ```

7.  **Run specific Cypress Tests:**
    By default, Cypress runs all the specs in the project. If you want to run a specific spec, use the following command:
    ```bash
    npx cypress run --spec path/to/your/spec/file.feature
    ```

## Cypress Configuration and File Structure

Below you'll find a list of default Cypress files included in the project:

- **`cypress.config.ts`:**
  This file is the Cypress configuration file for E2E testing. It contains various configuration options that you can customize to suit your project needs. Some common configurations include setting the base URL, specifying browsers, and configuring test files' locations.

- **`cypress/support/e2e.ts`:**
  It is a support file that is bundled and loaded before each E2E spec. You can use this file to set up global configurations, include utility functions, or perform any actions that should happen before each test run.

- **`cypress/support/commands.ts`:**
  It is a support file specifically useful for creating custom Cypress commands and overwriting existing ones. Custom commands can enhance readability and reusability of your test code.

## Tests development

**Writing Test Cases in BDD Format:**

When creating your end-to-end (E2E) test cases, use the Behavior-Driven Development (BDD) format within the feature file. BDD encourages collaboration among stakeholders by providing a shared language for expressing requirements and test scenarios.

Follow these guidelines:

- **Gherkin Syntax:** Utilize the Gherkin syntax, incorporating Given-When-Then statements, to structure your test cases.
- **Define Preconditions, Actions, and Expected Outcomes:** Clearly define the preconditions (Given), actions (When), and expected outcomes (Then) for each test scenario.
- **Multiple Test Cases:** Write multiple test cases within the feature file to cover various aspects of the feature under test.

Example:

```gherkin
Feature: Visit and validate

As a user, I want to have an E2E test example.

Scenario: Visit and validate Cypress TODO website
  When I visit Cypress TODO website
  Then I validate TODO list
```

## Build

Within the root project, you'll find a `workflows` folder containing the workflows tailored for pipeline runs. The workflow is encapsulated in a file named `cypresstest.yml`. It orchestrates the creation of an Ubuntu container, configuration of Cypress, and execution of smoke tests.
