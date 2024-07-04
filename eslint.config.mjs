import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,ts}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
  },
  { plugins: tsPlugin },
  {
    ignores: [
      "node_modules",
      "**/*.md",
      "**/*.mdx",
      "html-reporter.js",
      "e2e-test-report/**",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
