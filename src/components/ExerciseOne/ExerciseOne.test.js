import { screen, render } from "@testing-library/react";
import ExerciseOneTest from "./ExerciseOneTest";

test("renders a welcome message", () => {
  render(<ExerciseOneTest />);
  const heading = screen.getByText(/Exercise One/i);
  expect(heading).toBeInTheDocument();
});
