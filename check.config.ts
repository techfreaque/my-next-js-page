/* eslint-disable i18next/no-literal-string */
/**
 * Unified Check Configuration
 *
 * Single source of truth for all code quality tools:
 * - Oxlint (fast Rust linter)
 * - ESLint (import sorting, react hooks)
 * - Prettier (code formatting)
 * - TypeScript (type checking)
 * - Testing (vitest)
 * - VSCode integration
 */

import type { CheckConfig } from "@next-vibe/checker/system/check/config/types";

// --------------------------------------------------------
// Vibe Check Defaults
// --------------------------------------------------------
const vibeCheck: CheckConfig["vibeCheck"] = {
  fix: true,
  skipEslint: false,
  skipOxlint: false,
  skipTypecheck: false,
  timeout: 3600,
  limit: 200,
};

// ============================================================
// Feature Flags (local to this file, not part of CheckConfig)
// ============================================================

const features = {
  // Linting features
  react: true, // React-specific rules
  reactCompiler: true, // React compiler rules (requires react)
  accessibility: true, // jsx-a11y rules
  promise: true, // Promise best practices
  node: true, // Node.js rules
  unicorn: true, // Unicorn rules (modern JS)
  nextjs: true, // Next.js specific rules
  pedantic: false, // Stricter/pedantic rules
  // Custom plugins
  i18n: false, // Check for untranslated strings
  jsxCapitalization: false, // Enforce capitalized JSX components
  restrictedSyntax: true, // No throw, unknown, object types
  // TypeScript
  tsgo: true, // Use tsgo instead of tsc for type checking
  strictTypes: true, // Strict type checking rules
} as const;

// ============================================================
// Shared Ignores (files, folders, globs - mixed)
// ============================================================

const { oxlintIgnores } = formatIgnorePatterns([
  // Directories
  "dist",
  ".dist",
  ".next",
  ".tmp",
  "node_modules",
  ".git",
  "coverage",
  "public",
  "drizzle",
  ".vscode",
  ".vibe-guard-instance",
  ".github",
  ".claude",
  "to_migrate",
  "postgres_data",
  ".nyc_output",
  "build",
  "test-files",
  "test-project",
  // Files
  ".DS_Store",
  "thumbs.db",
  ".gitignore",
  ".env",
  ".env.local",
  ".env.development",
  ".env.production",
  "next-env.d.ts",
  "nativewind-env.d.ts",
  // Glob patterns
  "**/test-files/**",
]);

// --------------------------------------------------------
// Typecheck Configuration
// --------------------------------------------------------
const typecheck = {
  enabled: true as const,
  cachePath: ".tmp/typecheck-cache",
  useTsgo: features.tsgo,
};

// --------------------------------------------------------
// Oxlint Configuration
// --------------------------------------------------------
const oxlint: CheckConfig["oxlint"] = {
  enabled: true,
  configPath: ".tmp/.oxlintrc.json",
  cachePath: ".tmp/oxlint-cache",
  lintableExtensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"],
  $schema: "./node_modules/oxlint/configuration_schema.json",
  ignorePatterns: oxlintIgnores,
  plugins: [
    "typescript",
    "oxc",
    ...(features.unicorn ? ["unicorn"] : []),
    ...(features.react ? ["react"] : []),
    ...(features.accessibility ? ["jsx-a11y"] : []),
    ...(features.promise ? ["promise"] : []),
    ...(features.node ? ["node"] : []),
    ...(features.nextjs ? ["nextjs"] : []),
  ],
  jsPlugins: [
    ...(features.restrictedSyntax
      ? ["@next-vibe/checker/oxlint-plugins/restricted-syntax.js"]
      : []),
    ...(features.jsxCapitalization
      ? ["@next-vibe/checker/oxlint-plugins/jsx-capitalization.js"]
      : []),
    ...(features.i18n ? ["@next-vibe/checker/oxlint-plugins/i18n.js"] : []),
  ],
  categories: {
    correctness: "error",
    suspicious: "error",
    pedantic: features.pedantic ? "warn" : "off",
    style: "off",
  },
  rules: {
    // ── Core ESLint (always enabled) ──────────────────────────
    "no-debugger": "error",
    "no-console": "error",
    curly: "error",
    eqeqeq: "error",
    "no-undef": "off",
    camelcase: "error",
    "no-template-curly-in-string": "error",
    "no-unsafe-optional-chaining": "error",
    "array-callback-return": "error",
    "no-constructor-return": "error",
    "no-self-compare": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "prefer-template": "error",
    "require-atomic-updates": "warn",
    "no-promise-executor-return": "error",

    // ── TypeScript (always enabled) ───────────────────────────
    "typescript/no-explicit-any": "error",
    "typescript/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        caughtErrors: "none",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^$",
        varsIgnorePattern: "^$",
      },
    ],
    "typescript/no-inferrable-types": "error",
    "typescript/consistent-type-imports": "error",
    "typescript/no-empty-function": "error",
    "typescript/prefer-includes": "error",
    "typescript/prefer-string-starts-ends-with": "error",
    "typescript/ban-ts-comment": "error",
    "typescript/consistent-type-definitions": "error",
    "typescript/no-empty-object-type": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-wrapper-object-types": "error",
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-extra-non-null-assertion": "error",
    "no-extraneous-class": "off",
    // Strict type rules (enabled via strictTypes flag)
    ...(features.strictTypes
      ? {
          "typescript/await-thenable": "error",
          "typescript/no-floating-promises": "error",
          "typescript/no-for-in-array": "error",
          "typescript/no-misused-promises": "error",
          "typescript/no-unsafe-assignment": "error",
          "typescript/no-unnecessary-type-assertion": "error",
          "typescript/explicit-function-return-type": "error",
          "typescript/restrict-template-expressions": "error",
        }
      : {}),

    // ── React (enabled via react flag) ────────────────────────
    ...(features.react
      ? {
          "react/jsx-key": "error",
          "react/jsx-no-duplicate-props": "error",
          "react/jsx-no-undef": "error",
          "react/jsx-uses-react": "off",
          "react/jsx-uses-vars": "error",
          "react/no-children-prop": "error",
          "react/no-deprecated": "error",
          "react/no-direct-mutation-state": "error",
          "react/no-unknown-property": "error",
          "react/self-closing-comp": "error",
          "react/react-in-jsx-scope": "off",
        }
      : {}),

    // ── Accessibility (enabled via accessibility flag) ────────
    ...(features.accessibility
      ? {
          "jsx-a11y/alt-text": "error",
          "jsx-a11y/aria-props": "error",
          "jsx-a11y/aria-role": "error",
          "jsx-a11y/anchor-has-content": "error",
          "jsx-a11y/aria-proptypes": "error",
          "jsx-a11y/aria-unsupported-elements": "error",
          "jsx-a11y/click-events-have-key-events": "error",
          "jsx-a11y/heading-has-content": "error",
          "jsx-a11y/html-has-lang": "error",
          "jsx-a11y/iframe-has-title": "error",
          "jsx-a11y/img-redundant-alt": "error",
          "jsx-a11y/no-access-key": "error",
          "jsx-a11y/no-autofocus": "error",
          "jsx-a11y/no-distracting-elements": "error",
          "jsx-a11y/no-redundant-roles": "error",
          "jsx-a11y/role-has-required-aria-props": "error",
          "jsx-a11y/role-supports-aria-props": "error",
          "jsx-a11y/scope": "error",
          "jsx-a11y/tabindex-no-positive": "error",
        }
      : {}),

    // ── Promise (enabled via promise flag) ────────────────────
    ...(features.promise
      ? {
          "promise/param-names": "error",
          "promise/always-return": "error",
          "promise/catch-or-return": "error",
        }
      : {}),

    // ── Node (enabled via node flag) ──────────────────────────
    ...(features.node
      ? {
          "node/no-missing-import": "off",
          "node/no-unsupported-features/es-syntax": "off",
        }
      : {}),

    // ── Unicorn (enabled via unicorn flag) ────────────────────
    ...(features.unicorn
      ? {
          "unicorn/prefer-string-starts-ends-with": "error",
          "unicorn/no-empty-file": "error",
          "unicorn/no-unnecessary-await": "error",
          "unicorn/no-useless-spread": "error",
          "unicorn/prefer-set-size": "error",
          "unicorn/no-await-in-promise-methods": "error",
          "unicorn/no-invalid-fetch-options": "error",
          "unicorn/no-invalid-remove-event-listener": "error",
          "unicorn/no-new-array": "error",
          "unicorn/no-single-promise-in-promise-methods": "error",
          "unicorn/no-thenable": "error",
          "unicorn/no-useless-fallback-in-spread": "off",
          "unicorn/no-useless-length-check": "error",
          "unicorn/prefer-array-flat": "error",
          "unicorn/prefer-array-flat-map": "error",
          "unicorn/prefer-includes": "error",
          "unicorn/prefer-modern-dom-apis": "error",
          "unicorn/prefer-node-protocol": "error",
          "unicorn/prefer-spread": "error",
        }
      : {}),

    // ── OXC (always enabled) ──────────────────────────────────
    "oxc/no-optional-chaining": "off",
    "oxc/missing-throw": "error",
    "oxc/number-arg-out-of-range": "error",
    "oxc/only-used-in-recursion": "error",
    "oxc/bad-array-method-on-arguments": "error",
    "oxc/bad-comparison-sequence": "error",
    "oxc/const-comparisons": "error",
    "oxc/double-comparisons": "error",
    "oxc/erasing-op": "error",
    "oxc/bad-char-at-comparison": "error",
    "oxc/bad-min-max-func": "error",
    "oxc/bad-object-literal-comparison": "error",
    "oxc/bad-replace-all-arg": "error",
    "oxc/uninvoked-array-callback": "error",

    // ── Pedantic rule overrides ─────────────────────────────────
    "max-lines": "off",
    ...(features.pedantic ? { "max-lines-per-function": ["warn", { max: 150 }] } : {}),
    // Disable rules that conflict with TypeScript strict null checks
    // (.at() and .codePointAt() return T | undefined)
    "unicorn/prefer-at": "off",
    "unicorn/prefer-code-point": "off",
    "unicorn/prefer-negative-index": "off",
    // Conflicts with promise/always-return which requires returning something
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-useless-switch-case": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/prefer-query-selector": "off",

    // ── Custom JS Plugins (enabled via feature flags) ────────
    // Options defined inline, plugins read from config.oxlint.rules
    ...(features.restrictedSyntax
      ? {
          "oxlint-plugin-restricted/restricted-syntax": [
            "error",
            {
              jsxAllowedProperties: [
                "icon",
                "content",
                "title",
                "description",
                "children",
                "header",
                "footer",
                "element",
                "component",
                "label",
                "placeholder",
                "tooltip",
                "badge",
                "prefix",
                "suffix",
                "startAdornment",
                "endAdornment",
                "emptyState",
                "fallback",
              ],
            },
          ],
        }
      : {}),
    ...(features.jsxCapitalization
      ? {
          "oxlint-plugin-jsx-capitalization/jsx-capitalization": [
            "error",
            {
              excludedPaths: ["/src/packages/next-vibe-ui/web/"],
              excludedFilePatterns: [
                "/email.tsx",
                ".email.tsx",
                "/test.tsx",
                ".test.tsx",
                ".spec.tsx",
                "/__tests__/",
              ],
              typographyElements: ["h1", "h2", "h3", "h4", "p", "blockquote", "code"],
              standaloneElements: ["span", "pre"],
              svgElements: [
                "svg",
                "path",
                "circle",
                "rect",
                "line",
                "polyline",
                "polygon",
                "ellipse",
                "g",
                "text",
                "tspan",
                "defs",
                "linearGradient",
                "radialGradient",
                "stop",
                "clipPath",
                "mask",
                "pattern",
                "use",
                "symbol",
                "marker",
                "foreignObject",
              ],
              imageElements: ["img", "picture"],
              commonUiElements: [
                "div",
                "section",
                "article",
                "aside",
                "header",
                "footer",
                "main",
                "nav",
                "button",
                "input",
                "textarea",
                "select",
                "option",
                "label",
                "form",
                "fieldset",
                "legend",
                "ul",
                "ol",
                "li",
                "dl",
                "dt",
                "dd",
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
                "th",
                "td",
                "caption",
                "video",
                "audio",
                "source",
                "track",
                "canvas",
                "hr",
                "br",
                "iframe",
                "embed",
                "object",
                "details",
                "summary",
                "dialog",
                "menu",
                "figure",
                "figcaption",
                "time",
                "progress",
                "meter",
                "output",
                "strong",
                "em",
                "b",
                "i",
                "u",
                "s",
              ],
            },
          ],
        }
      : {}),
    ...(features.i18n
      ? {
          "oxlint-plugin-i18n/no-literal-string": [
            "error",
            {
              words: {
                exclude: [
                  String.raw`^[\[\]{}—<>•+%#@.:_*;,/()\-]+$`,
                  String.raw`^\s+$`,
                  String.raw`^\d+$`,
                  String.raw`^[^\s]+\.[^\s]+$`,
                  String.raw`\.(?:jpe?g|png|svg|webp|gif|csv|json|xml|pdf)$`,
                  String.raw`^(?:https?://|/)[^\s]*$`,
                  String.raw`^[#@]\w+$`,
                  String.raw`^[a-z]+$`,
                  String.raw`^[a-z]+(?:[A-Z][a-zA-Z0-9]*)*$`,
                  String.raw`^[^\s]+(?:-[^\s]+)+$`,
                  String.raw`^[^\s]+\/(?:[^\s]*)$`,
                  String.raw`^[A-Z]+(?:_[A-Z]+)*$`,
                  String.raw`^use (?:client|server|custom)$`,
                  String.raw`^&[a-z]+;$`,
                  String.raw`^[MmLlHhVvCcSsQqTtAaZz0-9\s,.-]+$`,
                  String.raw`^[▶◀▲▼►◄▴▾►◄✅✕✔✓🔧]+$`,
                  String.raw`^[\d\s]+(?:px|em|rem|%|vh|vw|deg|rad)?(?:\s+[\d]+)*$`,
                  String.raw`^url\([^)]+\)$`,
                  String.raw`^(?:translate|rotate|scale|matrix|skew)\([^)]+\)$`,
                  String.raw`^(?:Esc|Enter|Tab|Shift|Ctrl|Alt|Cmd|Space|Backspace|Delete|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|F\d+)$`,
                  String.raw`^[A-Z0-9]{1,2}$`,
                ],
              },
              "jsx-attributes": {
                exclude: [
                  "className",
                  "*ClassName",
                  "id",
                  "data-testid",
                  "to",
                  "href",
                  "style",
                  "target",
                  "rel",
                  "type",
                  "src",
                  "viewBox",
                  "d",
                  "fill",
                  "stroke",
                  "transform",
                  "gradientTransform",
                  "gradientUnits",
                  "cn",
                  "cx",
                  "cy",
                  "r",
                  "fx",
                  "fy",
                  "offset",
                  "stopColor",
                  "stopOpacity",
                  "width",
                  "height",
                  "x",
                  "y",
                  "x1",
                  "x2",
                  "y1",
                  "y2",
                  "strokeWidth",
                  "strokeLinecap",
                  "strokeLinejoin",
                  "fillRule",
                  "clipRule",
                  "opacity",
                  "xmlns",
                  "xmlnsXlink",
                  "aria-label",
                  "aria-labelledby",
                  "aria-describedby",
                  "title",
                  "placeholder",
                ],
              },
              "object-properties": {
                exclude: [
                  "id",
                  "key",
                  "type",
                  "className",
                  "*ClassName",
                  "imageUrl",
                  "style",
                  "path",
                  "href",
                  "to",
                  "data",
                  "alg",
                  "backgroundColor",
                  "borderRadius",
                  "color",
                  "fontSize",
                  "lineHeight",
                  "padding",
                  "textDecoration",
                  "marginTop",
                  "marginBottom",
                  "margin",
                  "value",
                  "email",
                  "displayName",
                ],
              },
            },
          ],
        }
      : {}),

    // ── Next.js (enabled via nextjs flag) ─────────────────────
    ...(features.nextjs
      ? {
          "nextjs/google-font-display": "error",
          "nextjs/google-font-preconnect": "error",
          "nextjs/inline-script-id": "error",
          "nextjs/next-script-for-ga": "error",
          "nextjs/no-assign-module-variable": "error",
          "nextjs/no-before-interactive-script-outside-document": "error",
          "nextjs/no-css-tags": "error",
          "nextjs/no-document-import-in-page": "error",
          "nextjs/no-duplicate-head": "error",
          "nextjs/no-head-element": "error",
          "nextjs/no-head-import-in-document": "error",
          "nextjs/no-html-link-for-pages": "off",
          "nextjs/no-img-element": "warn",
          "nextjs/no-page-custom-font": "error",
          "nextjs/no-script-component-in-head": "error",
          "nextjs/no-styled-jsx-in-document": "error",
          "nextjs/no-sync-scripts": "error",
          "nextjs/no-title-in-document-head": "error",
          "nextjs/no-typos": "error",
          "nextjs/no-unwanted-polyfillio": "error",
        }
      : {}),
  },
  settings: {
    "jsx-a11y": {
      polymorphicPropName: null,
      components: {},
      attributes: {},
    },
    next: { rootDir: ["."] },
    react: { formComponents: [], linkComponents: [] },
    jsdoc: {
      ignorePrivate: false,
      ignoreInternal: false,
      ignoreReplacesDocs: true,
      overrideReplacesDocs: true,
      augmentsExtendsReplacesDocs: false,
      implementsReplacesDocs: false,
      exemptDestructuredRootsFromChecks: false,
      tagNamePreference: {},
    },
  },
  env: { builtin: true },
  globals: {
    React: "readonly",
    JSX: "readonly",
    NodeJS: "readonly",
    __dirname: "readonly",
    __filename: "readonly",
    process: "readonly",
    global: "readonly",
  },
};

// --------------------------------------------------------
// Prettier Configuration
// --------------------------------------------------------
const prettier: CheckConfig["prettier"] = {
  enabled: true,
  configPath: ".tmp/.oxfmtrc.json",
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  arrowParens: "always",
  endOfLine: "lf",
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  proseWrap: "preserve",
};

// --------------------------------------------------------
// Testing Configuration
// --------------------------------------------------------
const testing: CheckConfig["testing"] = {
  enabled: true,
  command: "bun test",
  timeout: 300_000,
  include: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
  exclude: [...oxlintIgnores],
  coverage: {
    enabled: false,
    provider: "v8",
    thresholds: { lines: 80, branches: 80, functions: 80, statements: 80 },
  },
};

// --------------------------------------------------------
// VSCode Integration
// --------------------------------------------------------
const vscode: CheckConfig["vscode"] = {
  enabled: true,
  autoGenerateSettings: true,
  settingsPath: "./.vscode/settings.json",
  settings: {
    oxc: {
      enable: true,
      lintRun: "onSave",
      configPath: ".tmp/.oxlintrc.json",
      fmtConfigPath: ".tmp/.oxfmtrc.json",
      fmtExperimental: true,
      typeAware: true,
      traceServer: "verbose",
    },
    editor: {
      formatOnSave: true,
      defaultFormatter: "oxc.oxc-vscode",
      codeActionsOnSave: {
        "source.fixAll.eslint": "explicit",
        "source.organizeImports": "explicit",
      },
    },
    typescript: {
      validateEnable: true,
      suggestAutoImports: true,
      preferTypeOnlyAutoImports: true,
      experimentalUseTsgo: typecheck.enabled && typecheck.useTsgo,
    },
    files: { eol: "\n" },
    search: {
      exclude: {
        "**/node_modules": true,
        "**/tsconfig.tsbuildinfo": true,
        "**/*.tmp": true,
        "**/*.next": true,
      },
    },
  },
};

const config = (): CheckConfig => {
  // --------------------------------------------------------
  // ESLint Configuration (disabled: all rules ported to Oxlint)
  // --------------------------------------------------------
  const eslint: CheckConfig["eslint"] = {
    enabled: false, // Disabled: all rules ported to Oxlint for speed
  };

  return {
    vibeCheck,
    oxlint,
    prettier,
    eslint,
    typecheck,
    testing,
    vscode,
  };
};

/** ESLint stub plugin for rules handled by oxlint */
interface EslintStubPlugin {
  rules: Record<
    string,
    {
      create: () => Record<string, never>;
      meta: { docs: { description: string } };
    }
  >;
}

/** Format result for ignore patterns */
interface IgnoreFormats {
  oxlintIgnores: string[];
  eslintIgnores: string[];
}

/**
 * Creates stub ESLint plugin for rules handled by oxlint.
 *
 * This allows ESLint disable comments (e.g., `// eslint-disable-next-line rule-name`)
 * to work without errors, even though the actual linting is done by oxlint.
 *
 * @param rules - Array of rule names to stub
 * @returns ESLint plugin with no-op rules
 *
 * @example
 * ```typescript
 * const tsStub = createEslintStub(["no-explicit-any", "no-unused-vars"]);
 * // Use in ESLint config:
 * plugins: { "@typescript-eslint": tsStub }
 * ```
 */
export function createEslintStub(rules: string[]): EslintStubPlugin {
  return {
    rules: Object.fromEntries(
      rules.map((rule) => [
        rule,
        {
          create: (): Record<string, never> => ({}),
          meta: { docs: { description: "Stub - handled by oxlint" } },
        },
      ]),
    ),
  };
}

/**
 * Converts an array of ignore patterns to both oxlint and ESLint formats.
 *
 * Oxlint accepts mixed patterns (directories, files, globs) directly.
 * ESLint flat config requires glob patterns with proper prefixes/suffixes.
 *
 * Pattern conversion rules for ESLint:
 * - Glob patterns (contain `*`): kept as-is
 * - Files with extensions (contain `.` but don't start with `.`): wrapped as `** /filename`
 * - Directories and dotfiles/dotdirs: wrapped as `** /name/**`
 *
 * @param patterns - Array of ignore patterns (directories, files, or globs)
 * @returns Object with patterns formatted for oxlint and eslint
 *
 * @example
 * ```typescript
 * const { oxlintIgnores, eslintIgnores } = formatIgnorePatterns([
 *   "dist",           // Directory
 *   ".next",          // Dotdir
 *   ".env",           // Dotfile
 *   "file.min.js",    // File
 *   "** /test/**",    // Glob (already formatted)
 * ]);
 *
 * // oxlintIgnores = ["dist", ".next", ".env", "file.min.js", "** /test/**"]
 * // eslintIgnores = ["** /dist/**", "** /.next/**", "** /.env/**", "** /file.min.js", "** /test/**"]
 * ```
 */
export function formatIgnorePatterns(patterns: string[]): IgnoreFormats {
  const eslintPatterns = patterns.map((pattern) => {
    // Already a glob pattern - keep as-is
    if (pattern.includes("*")) {
      return pattern;
    }
    // File with extension (but not dotfile) - wrap with **/ prefix only
    if (pattern.includes(".") && !pattern.startsWith(".")) {
      return `**/${pattern}`;
    }
    // Directory or dotfile/dotdir - wrap with **/ prefix and /** suffix
    return `**/${pattern}/**`;
  });

  return {
    oxlintIgnores: patterns,
    eslintIgnores: eslintPatterns,
  };
}

export default config;
