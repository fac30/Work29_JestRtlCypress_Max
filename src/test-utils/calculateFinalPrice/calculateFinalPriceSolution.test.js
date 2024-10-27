import { calculateFinalPrice } from "./calculateFinalPrice";

describe("calculateFinalPrice", () => {
  // Test valid inputs
  it("should calculate the final price with valid inputs", () => {
    expect(calculateFinalPrice(100, 10, 5)).toBe(94.5);
    expect(calculateFinalPrice(200, 25, 10)).toBe(165.0);
  });

  // Test input validation: negative inputs
  it("should throw an error if any inputs are negative", () => {
    expect(() => calculateFinalPrice(-100, 10, 5)).toThrow(
      "Price, discount, and tax must be non-negative values"
    );
    expect(() => calculateFinalPrice(100, -10, 5)).toThrow(
      "Price, discount, and tax must be non-negative values"
    );
    expect(() => calculateFinalPrice(100, 10, -5)).toThrow(
      "Price, discount, and tax must be non-negative values"
    );
  });

  // Test edge case: discount greater than 100%
  it("should throw an error if discount is greater than 100%", () => {
    expect(() => calculateFinalPrice(100, 150, 5)).toThrow(
      "Discount cannot be greater than 100%"
    );
  });

  // Test edge case: tax greater than 50%
  it("should throw an error if tax is greater than 50%", () => {
    expect(() => calculateFinalPrice(100, 10, 75)).toThrow(
      "Tax cannot be greater than 50%"
    );
  });

  // Test zero discount and tax
  it("should return the original price if discount and tax are zero", () => {
    expect(calculateFinalPrice(100, 0, 0)).toBe(100.0);
  });

  // Test zero original price
  it("should return 0 if the original price is zero", () => {
    expect(calculateFinalPrice(0, 10, 5)).toBe(0.0);
  });
});
