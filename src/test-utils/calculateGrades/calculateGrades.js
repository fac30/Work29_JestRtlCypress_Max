// This function student grades based on their score
export function calculateGrades(score) {
  if (score < 0 || score > 100) {
    throw new Error("Score must be between 0 and 100");
  }

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
