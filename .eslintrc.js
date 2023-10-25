module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@synthui/eslint-config`
  extends: ["synthui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
