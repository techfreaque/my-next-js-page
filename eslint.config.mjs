import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import nodePlugin from "eslint-plugin-node";
import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import promisePlugin from "eslint-plugin-promise";
import useServerPlugin from "@c-ehrlich/eslint-plugin-use-server";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Clean up browser globals to remove any weird whitespace:
function cleanGlobals(globalsObj) {
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
  );
}

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: [
      ".next",
      "node_modules",
      ".git",
      "public",
      ".vscode",
      "next-env.d.ts",
    ],
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: [resolve(__dirname, "tsconfig.json")],
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.node,
        ...cleanGlobals(globals.browser),
      },
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true,
          extensions: [".ts", ".tsx", ".js", ".jsx", ".d.ts"]
        },
        node: {
          extensions: [".ts", ".tsx", ".js", ".jsx", ".d.ts"],
          moduleDirectory: ["node_modules", "src"]
        },
      },
      react: { version: "detect" },
    },
    plugins: {
      js,
      '@typescript-eslint': ts,
      import: importPlugin,
      prettier: eslintPluginPrettier,
      'react-compiler': reactCompiler,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      node: nodePlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11y,
      promise: promisePlugin,
      '@c-ehrlich/use-server': useServerPlugin,
      '@next/next': nextPlugin,
    },

    rules: {
      // ESLint base recommended rules
      ...js.configs.recommended.rules,
      // TypeScript recommended rules
      ...ts.configs.recommended.rules,
      ...ts.configs["recommended-requiring-type-checking"].rules,

      // TypeScript custom rules
      "@typescript-eslint/no-unused-vars": [
        "error",
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/no-empty-function": [
        "error",
        { allow: ["arrowFunctions"] },
      ],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/no-floating-promises": ["error", { "ignoreIIFE": true }],
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }],
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],

      // Insane Strict rules

      'react/no-unknown-property': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',

      // Node
      "node/no-process-env": "error",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // React specific rules
      "@c-ehrlich/use-server/no-top-level-use-server": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-children-prop": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-unknown-property": "error",
      "react/self-closing-comp": "error",
      "react/react-in-jsx-scope": "error", // Next.js doesn't require React import

      // Next.js specific rules
      "@next/next/google-font-display": "error",
      "@next/next/google-font-preconnect": "error",
      "@next/next/next-script-for-ga": "error",
      "@next/next/no-before-interactive-script-outside-document": "error",
      "@next/next/no-css-tags": "error",
      "@next/next/no-document-import-in-page": "error",
      "@next/next/no-duplicate-head": "error",
      "@next/next/no-head-element": "error",
      "@next/next/no-head-import-in-document": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-styled-jsx-in-document": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-title-in-document-head": "error",
      "@next/next/no-typos": "error",
      "@next/next/no-unwanted-polyfillio": "error",

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/anchor-has-content": "error",

      // Promise rules
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "error",
      "promise/no-nesting": "warn",

      // Other plugin rules
      "react-compiler/react-compiler": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/no-unresolved": [
        "error",
      ],
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/extensions": ["error", "never", { "json": "always" }],
      "import/namespace": "error",
      "import/no-restricted-paths": "error",


      // General code-quality rules
      curly: "error",
      eqeqeq: ["error", "always"],
      "import/newline-after-import": "error",
      "prefer-template": "error",
      "no-console": "error",
      "no-debugger": "error",
      "no-template-curly-in-string": "error",
      "no-unsafe-optional-chaining": "error",
      "require-atomic-updates": "warn",
      "array-callback-return": "error",
      "no-constructor-return": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-unreachable-loop": "error",
      "no-unused-private-class-members": "error",
      "camelcase": ["error", { "properties": "never" }],

      // force relative imports
      "no-restricted-imports": [
        "error",
        {
          "patterns": ["^(?!\\./|\\.\\./)"]
        }
      ],

      // Prettier code style integration
      "prettier/prettier": [
        "error",
        {
          plugins: ["prettier-plugin-sort-json"],
          jsonRecursiveSort: true,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: false,
          trailingComma: "all",
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "lf",
          jsxSingleQuote: false,
          proseWrap: "preserve",
          quoteProps: "consistent",
        },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector: "TSUnknownKeyword",
          message: "Usage of the 'unknown' type isn't allowed. Consider using generics with interface or type alias for explicit structure.",
        },
        {
          selector: "TSObjectKeyword",
          message: "Usage of the 'object' type isn't allowed. Consider using generics with interface or type alias for explicit structure.",
        },
        {
          selector: "ThrowStatement",
          message: "Usage of 'throw' statements is not allowed. Use proper ResponseType<T> patterns instead.",
        },
      ],
    },
  },
];

export default config;

