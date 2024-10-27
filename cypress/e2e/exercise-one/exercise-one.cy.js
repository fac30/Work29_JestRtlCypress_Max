describe("Exercise One", () => {
  // Runs before each test to prevent repetition
  beforeEach(() => {
    cy.visit("/exercise-one");
  });

  it("should display the correct title", () => {
    // Fix this failing test
    cy.get(".title").should("contain.text", "Exercise Two");
    cy.get(".text").should(
      "contain.text",
      "This is a simple UI exercise page to test navigation and button presence."
    );
  });

  it("should display the correct description text", () => {});

  it("should display a button and trigger alert on click", () => {});

  it("should have a working link to the Home page", () => {});
});
