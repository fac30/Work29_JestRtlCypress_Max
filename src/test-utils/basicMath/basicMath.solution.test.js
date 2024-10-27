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
  const a = -3;
  const b = -2;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toEqual(-5);
});

// 1b - subtract
it("should return the difference of two numbers", () => {
  // Arrange
  const a = 5;
  const b = 3;

  // Act
  const result = subtract(a, b);

  // Assert
  expect(result).toEqual(2);
});

// 1c - multiply
it("should return the product of two positive numbers", () => {
  // Arrange
  const a = 4;
  const b = 5;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toEqual(20);
});

it("should return a negative product when one factor is negative", () => {
  // Arrange
  const a = -4;
  const b = 5;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toEqual(-20);
});

// Stretch: Basic maths functions with errors
// 2a - divide with an error
it("should return the quotient of two positive numbers", () => {
  // Arrange
  const a = 10;
  const b = 2;

  // Act
  const result = divide(a, b);

  // Assert
  expect(result).toEqual(5);
});

it("should throw an error when dividing by zero", () => {
  // Arrange
  const a = 10;
  const b = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrow("Cannot divide by zero");
});

// 2b - sqrt with an error
it("should return the square of a positive number", () => {
  // Arrange
  const n = 4;

  // Act
  const result = square(n);

  // Assert
  expect(result).toEqual(16);
});

it("should return the square of a negative number", () => {
  // Arrange
  const n = -4;

  // Act
  const result = square(n);

  // Assert
  expect(result).toEqual(16);
});
