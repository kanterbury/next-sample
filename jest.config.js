const nextJest = require("next/jest");

const createjsonConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js/"],
  testEnvironment: "jsdom",
};

module.exports = createjsonConfig(customJestConfig);
