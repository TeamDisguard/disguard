import type { PrettierSchema } from "./schema";

export const prettierConfig: PrettierSchema = {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 90,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false
};

module.exports = prettierConfig;
export default prettierConfig;