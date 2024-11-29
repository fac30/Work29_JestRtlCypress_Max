import { calculateFinalPrice } from "./calculateFinalPrice";

describe("calculateFinalPrice", () => {
  // 1a - Test valid inputs
  it("should calculate the final price with valid inputs", () => {
    expect(calculateFinalPrice(100, 10, 20)).toEqual(108);
  });

  // 1b - Test input validation: negative inputs
  it("should throw an error if any inputs are negative", () => {
    expect(() => calculateFinalPrice(-100, 10, 20)).toThrow();
  });

  // 1c -Test edge case: discount greater than 100%
  it("should throw an error if discount is greater than 100%", () => {
    expect(() => calculateFinalPrice(100, 110, 20)).toThrow();
  });

  // 1d -Test edge case: tax greater than 50%
  it("should throw an error if tax is greater than 50%", () => {
    expect(() => calculateFinalPrice(100, 10, 60)).toThrow();
  });

  // 1e -Test zero discount and tax
  it("should return the original price if discount and tax are zero", () => {
    expect(calculateFinalPrice(100, 0, 0)).toEqual(100);
  });

  // 1f - Test zero original price
  it("should return 0 if the original price is zero", () => {
    expect(calculateFinalPrice(0, 10, 20)).toEqual(0);
  });
});
