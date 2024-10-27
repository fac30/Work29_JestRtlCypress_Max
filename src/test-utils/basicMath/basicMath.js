// Write tests for the following functions, consider the
// different options as they could have positive, negative number
// inputs or non number inputs

// Basic maths functions
// 1a - adds
export function add(a, b) {
  return a + b;
}

// 1b - subtract
export function subtract(a, b) {
  return a - b;
}

// 1c - multiply
export function multiply(a, b) {
  return a * b;
}

// 1d - square
export function square(n) {
  return n * n;
}

// Stretch: Basic maths functions with errors
// 2a - divide with an error
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// 2b - sqrt with an error
export function sqrt(n) {
  if (n < 0) {
    throw new Error("Cannot calculate the square root of a negative number");
  }
  return Math.sqrt(n);
}
