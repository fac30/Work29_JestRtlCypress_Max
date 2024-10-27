import Home from "../app/page";
import render from "../test-utils/index";
import { screen } from "@testing-library/react";

test("renders a welcome message", () => {
  render(<Home />);
  const heading = screen.getByText(/welcome/i);
  expect(heading).toBeInTheDocument();
});
