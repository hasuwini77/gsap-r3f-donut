import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // This turns off the no-explicit-any rule
      // You can also set it to "warn" instead of "off" if you want warnings but not errors:
      // "@typescript-eslint/no-explicit-any": "warn"
    },
  },
];

export default eslintConfig;
