const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// Ignore warning for now, see issue:
// https://github.com/facebook/react-native/issues/32528

module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: [ERROR, "double", { avoidEscape: true }],
  },
};
