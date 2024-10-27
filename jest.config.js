const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/src/__tests__/**/*.[jt]s?(x)", // Include tests in src/__tests__ folder
    "**/?(*.)+(spec|test).[tj]s?(x)", // Include *.test.js or *.spec.js
  ],
};

module.exports = createJestConfig(customJestConfig);
