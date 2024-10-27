const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "<rootDir>/src/**/?(*.)+(test).[jt]s?(x)", // Match test files in src directory, including subdirectories
    "!**/*.solution.test.[jt]s?(x)",
  ],
};

module.exports = createJestConfig(customJestConfig);
