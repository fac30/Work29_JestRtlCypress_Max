const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "<rootDir>/src/**/?(*.)+(test).[jt]s?(x)", // Match test files in src directory, including subdirectories

    // "**/src/__tests__/**/*.[jt]s?(x)", // Include tests in src/__tests__ folder
    // "**/?(*.)+(spec|test).[tj]s?(x)", // Include *.test.js or *.spec.js
  ],
};

module.exports = createJestConfig(customJestConfig);
