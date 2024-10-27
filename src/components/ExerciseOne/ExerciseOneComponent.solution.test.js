import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseOneComponent from "./ExerciseOneComponent";
import "@testing-library/jest-dom/extend-expect";

describe("ExerciseOneComponent", () => {
  // 1. Check Title Rendering
  it("should render the title correctly", () => {
    render(<ExerciseOneComponent />);
    const titleElement = screen.getByRole("heading", { name: /exercise one/i });
    expect(titleElement).toBeInTheDocument();
  });

  // 2. Check Text Content
  it("should display the description text", () => {
    render(<ExerciseOneComponent />);
    const descriptionText = screen.getByText(
      /this is a simple ui exercise page to test navigation and button presence/i
    );
    expect(descriptionText).toBeInTheDocument();
  });

  // 3. Check Button Presence and Functionality
  it("should render a button and handle click events", () => {
    window.alert = jest.fn(); // Mock alert function
    render(<ExerciseOneComponent />);
    const button = screen.getByRole("button", { name: /test button/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button); // Simulate button click
    expect(window.alert).toHaveBeenCalledWith("Button clicked!");
  });

  // 4. Check Link Navigation
  it("should have a link to navigate back to the home page", () => {
    render(<ExerciseOneComponent />);
    const linkElement = screen.getByRole("link", { name: /back to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
