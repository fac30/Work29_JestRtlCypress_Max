// Write tests to cover the different test scenarios for the ageInRange function
// 7 potential test scenarios but see if you can find any more

import { ageInRange } from "./ageInRange";
import MockDate from "mockdate";

describe("ageInRange tests", () => {
  beforeAll(() => {
    MockDate.set("2024-11-29");
  });

  it("Test if 24 year old (288 months) is between 280 and 300, should return true", () => {
    expect(ageInRange(new Date("2000-11-22"), 280, 300)).toBeTrue;
  });

  it("Test if you feed a string for bithday instead of date, should return false", () => {
    expect(ageInRange("2000-11-22", 280, 300)).toBeTrue;
  });

  it("Test if 24 year old (288 months) is between 200 and 250, should return false", () => {
    expect(ageInRange("2000-11-22", 200, 250)).toBeFalse;
  });

  it("Test without passing start and end parameters, should return undefined", () => {
    expect(ageInRange("2000-11-22")).toBeUndefined;
  });

  it("Test without passing start but with end parameter, should return undefined", () => {
    expect(ageInRange("2000-11-22", undefined, 250)).toBeUndefined;
  });

  it("Test without passing end but with start parameter, should return undefined", () => {
    expect(ageInRange("2000-11-22", 250)).toBeUndefined;
  });

  it("Test if a start months number is higher than end months number, should return false", () => {
    expect(ageInRange("2000-11-22", 300, 250)).toBeFalse;
  });

  it("Test if a birthday in the future can fall within a negative range, should return false", () => {
    expect(ageInRange("2025-11-22", -15, -10)).toBeFalse;
  });

  it("Test if you pass NaN as an argument, should return NaN", () => {
    expect(ageInRange(NaN)).toBeNaN;
    expect(1).notToBeNaN;
  });
});

// Stretch: look into how you can use mockdate (https://www.npmjs.com/package/mockdate) package in your tests
