// Write tests to cover the different test scenarios for the ageInRange function
// 7 potential test scenarios but see if you can find any more

import { calculateGrades } from "./calculateGrades";

describe("calculateGrades", () => {
  it("Calculate grade above 90, should return A", () => {
    expect(calculateGrades(90)).toEqual("A");
  });
  it("Calculate grade above 80, should return B", () => {
    expect(calculateGrades(80)).toEqual("B");
  });
  it("Calculate grade above 70, should return C", () => {
    expect(calculateGrades(70)).toEqual("C");
  });
  it("Calculate grade above 60, should return D", () => {
    expect(calculateGrades(60)).toEqual("D");
  });
  it("Calculate grade lower than 60, should return F", () => {
    expect(calculateGrades(50)).toEqual("F");
  });
  it("Calculate grade with negative number, should throw error", () => {
    expect(() => calculateGrades(-10)).toThrow();
  });
  it("Calculate grade with number above 100, should throw error", () => {
    expect(() => calculateGrades(110)).toThrow();
  });
});

// Stretch: Look into this medium article (https://elfi-y.medium.com/reduce-boilerplate-test-code-with-jest-it-each-30a0eec9776d) and see if you can apply the principles to streamline your tests
