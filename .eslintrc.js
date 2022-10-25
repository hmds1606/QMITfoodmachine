module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
