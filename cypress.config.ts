import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import allurewriter from "@shelex/cypress-allure-plugin/writer";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  allurewriter(on, config);
  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin(config)] }),
  );
  return config;
}

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    supportFile: false,
    specPattern: "**/*.feature",
    env: {
      url: "https://bstackdemo.com",
    },
    setupNodeEvents,
  },
});
