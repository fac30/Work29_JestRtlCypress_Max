import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseTwoComponent from "./ExerciseTwoComponent";

const mockRandomName = "Ms Elizabeth Gray";

describe("ExerciseTwoComponent", () => {
  // 1. Render Title and Form Elements
  it("should render the title, form fields, and dropdown", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);
    expect(
      screen.getByRole("heading", { name: /exercise two/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select a course/i)).toBeInTheDocument();
  });

  // 2. Render Static List Items
  it("should render the hardcoded list items", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);
    expect(
      screen.getByText(
        /john doe - testemail@test.com - first hard coded list item/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /little jimmy - lilj@gmail.com - second hard coded list item/i
      )
    ).toBeInTheDocument();
  });

  // 3. Form Input and Dropdown Functionality
  it("should allow input into name and email fields and selection from the course dropdown", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);

    // Name Input
    const nameInput = screen.getByLabelText(/your name/i);
    fireEvent.change(nameInput, { target: { value: "Alice Smith" } });
    expect(nameInput).toHaveValue("Alice Smith");

    // Email Input
    const emailInput = screen.getByLabelText(/your email/i);
    fireEvent.change(emailInput, { target: { value: "alice@example.com" } });
    expect(emailInput).toHaveValue("alice@example.com");

    // Course Selection
    const courseSelect = screen.getByLabelText(/select a course/i);
    fireEvent.change(courseSelect, { target: { value: "course1" } });
    expect(courseSelect).toHaveValue("course1");
  });

  // 4. Enable Submit Button when Form is Complete
  it("should enable the submit button only when all fields are filled", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "Alice Smith" },
    });
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/select a course/i), {
      target: { value: "course1" },
    });

    expect(submitButton).toBeEnabled();
  });

  // 5. Form Submission Adds New Item to List
  it("should add a new entry to the list upon form submission", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "Alice Smith" },
    });
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/select a course/i), {
      target: { value: "course1" },
    });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Check that a new list item has been added
    expect(
      screen.getByText("Alice Smith - alice@example.com - course1")
    ).toBeInTheDocument();
  });

  // 6. Check Back Link Navigation
  it("should display a link to navigate back to the home page", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);
    const backLink = screen.getByRole("link", { name: /back to home/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });

  // 7. Write a test to check the prop passed in displays a welcome message + the name
  it("should display randomName from prop", () => {
    render(<ExerciseTwoComponent randomName={mockRandomName} />);
    const randomName = screen.getByText(/Ms Elizabeth Gray/);
    expect(randomName).toBeInTheDocument();
  });
});
