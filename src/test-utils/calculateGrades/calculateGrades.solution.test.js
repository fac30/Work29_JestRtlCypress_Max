import { calculateGrades } from "./path-to-your-function";

describe("calculateGrades", () => {
  it("should return 'A' for scores 90 and above", () => {
    // Arrange
    const score = 92;

    // Act
    const result = calculateGrades(score);

    // Assert
    expect(result).toEqual("A");
  });

  it("should return 'B' for scores between 80 and 89", () => {
    // Arrange
    const score = 85;

    // Act
    const result = calculateGrades(score);

    // Assert
    expect(result).toEqual("B");
  });

  it("should return 'C' for scores between 70 and 79", () => {
    // Arrange
    const score = 75;

    // Act
    const result = calculateGrades(score);

    // Assert
    expect(result).toEqual("C");
  });

  it("should return 'D' for scores between 60 and 69", () => {
    // Arrange
    const score = 65;

    // Act
    const result = calculateGrades(score);

    // Assert
    expect(result).toEqual("D");
  });

  it("should return 'F' for scores below 60", () => {
    // Arrange
    const score = 55;

    // Act
    const result = calculateGrades(score);

    // Assert
    expect(result).toEqual("F");
  });

  it("should throw an error for negative scores", () => {
    // Arrange
    const score = -5;

    // Act & Assert
    expect(() => calculateGrades(score)).toThrow(
      "Score must be between 0 and 100"
    );
  });

  it("should throw an error for scores above 100", () => {
    // Arrange
    const score = 105;

    // Act & Assert
    expect(() => calculateGrades(score)).toThrow(
      "Score must be between 0 and 100"
    );
  });

  describe("Stretch: Look into this medium article (https://elfi-y.medium.com/reduce-boilerplate-test-code-with-jest-it-each-30a0eec9776d) and see if you can apply the principles to streamline your tests", () => {
    it.each([
      [95, "A"], // Score of 95 should return "A"
      [90, "A"], // Score of 90 should return "A"
      [85, "B"], // Score of 85 should return "B"
      [80, "B"], // Score of 80 should return "B"
      [75, "C"], // Score of 75 should return "C"
      [70, "C"], // Score of 70 should return "C"
      [65, "D"], // Score of 65 should return "D"
      [60, "D"], // Score of 60 should return "D"
      [59, "F"], // Score of 59 should return "F"
      [30, "F"], // Score of 30 should return "F"
    ])("returns %s for a score of %d", (score, expectedGrade) => {
      const result = calculateGrades(score);

      expect(result).toEqual(expectedGrade);
    });
  });
});
