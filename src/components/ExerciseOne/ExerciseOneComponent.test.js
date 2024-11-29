import { render, screen } from "@testing-library/react";
import ExerciseOneComponent from "./ExerciseOneComponent";

// Write tests for the following
// 1. Check Title Rendering
// 2. Check Text Content
// 3. Check Button Presence and Functionality
// 4. Check Link Navigation

describe("ExerciseOneComponent", () => {
  it("should render the title correctly", () => {
    // What is jest render?
    // Renders the ExerciseOneTest component to simulate its behavior in a testing environment
    // After calling render, the component’s elements (like headings, buttons, links) are available in the virtual DOM, allowing you to interact with or assert their properties
    // Once rendered, you can use query functions Eg. getByText, getByRole
    // Each render call is independent, allowing tests to isolate components without interference from other tests.
    // Link to docs -> https://testing-library.com/docs/react-testing-library/api/#render

    render(<ExerciseOneComponent />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
  });
  it("should contain correct text content", () => {
    render(<ExerciseOneComponent />);
    const text = screen.getByText(
      "This is a simple UI exercise page to test navigation and button presence."
    );
    expect(text).toBeInTheDocument();
  });
});
