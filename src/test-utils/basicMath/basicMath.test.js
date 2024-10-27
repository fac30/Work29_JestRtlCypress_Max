import { add } from "./basicMath";
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
  // Act
  // Assert
});

// 1b - subtract
it("should return the difference of two numbers", () => {
  // Arrange
  // Act
  // Assert
});

// 1c - multiply
it("should return the product of two positive numbers", () => {
  // Arrange
  // Act
  // Assert
});

it("should return a negative product when one factor is negative", () => {
  // Arrange
  // Act
  // Assert
});

// Stretch: Basic maths functions with errors
// 2a - divide with an error
it("should return the quotient of two positive numbers", () => {
  // Arrange
  // Act
  // Assert
});

it("should throw an error when dividing by zero", () => {
  // Arrange
  // Act
  // Assert
});

// 2b - sqrt with an error
it("should return the square of a positive number", () => {
  // Arrange
  // Act
  // Assert
});

it("should return the square of a negative number", () => {
  // Arrange
  // Act
  // Assert
});
