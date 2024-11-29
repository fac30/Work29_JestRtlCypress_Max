import { add, subtract, multiply, divide, square } from "./basicMath";
// Basic maths functions

// 1a - add
it("should return the sum of two positive numbers", () => {
  // Arrange
  const a = 3;
  const b = 2;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toEqual(5);
});

it("should return the sum of two negative numbers", () => {
  // Arrange
  const a = -2;
  const b = -4;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toEqual(-6);
});

// 1b - subtract
it("should return the difference of two numbers", () => {
  // Arrange
  const a = 3;
  const b = 2;

  // Act
  const result = subtract(a, b);

  // Assert
  expect(result).toEqual(1);
});

// 1c - multiply
it("should return the product of two positive numbers", () => {
  // Arrange
  const a = 3;
  const b = 2;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toEqual(6);
});

it("should return a negative product when one factor is negative", () => {
  // Arrange
  const a = 3;
  const b = -2;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toEqual(-6);
});

// Stretch: Basic maths functions with errors
// 2a - divide with an error
it("should return the quotient of two positive numbers", () => {
  // Arrange
  const a = 4;
  const b = 2;

  // Act
  const result = divide(a, b);

  // Assert
  expect(result).toEqual(2);
});

it("should throw an error when dividing by zero", () => {
  // Arrange
  const a = 3;
  const b = 0;

  // Act
  //const result = divide(a, b);

  // Assert
  expect(() => divide(a, b)).toThrow();
});

// 2b - sqrt with an error
it("should return the square of a positive number", () => {
  // Arrange
  const a = 3;
  const b = 2;

  // Act
  const result = square(a, b);

  // Assert
  expect(result).toEqual(9);
});

it("should return the square of a negative number", () => {
  // Arrange
  const a = -3;

  // Act
  const result = square(a);

  // Assert
  expect(result).toEqual(9);
});
