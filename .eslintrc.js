module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-synthui`
  extends: ["synthui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
