export const eslintConfig = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.eslint.json"
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    complexity: "warn",
    camelcase: "warn",
    yoda: "error",
    "accessor-pairs": "warn",
    "max-len": ["error", 200, 2],
    "eol-last": "error",
    "@typescript-eslint/indent": ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-namespace": "off"
  }
};

module.exports = eslintConfig;
export default eslintConfig;
