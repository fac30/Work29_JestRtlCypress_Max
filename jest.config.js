const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  //testMatch: ["<rootDir>/src/*.test.js", "<rootDir>/src/*.test.jsx"],
};

module.exports = createJestConfig(customJestConfig);
