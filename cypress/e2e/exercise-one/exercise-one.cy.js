describe("Exercise One", () => {
  // Runs before each test to prevent repetition
  beforeEach(() => {
    cy.visit("/exercise-one");
  });

  it("should display the correct title", () => {
    // Fix this failing test
    cy.get(".title").should("contain.text", "Exercise One");
  });

  it("should display the correct description text", () => {
    cy.get(".text").should(
      "contain.text",
      "This is a simple UI exercise page to test navigation and button presence."
    );
  });

  it("should display a button and trigger alert on click", () => {
    cy.get("button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.eq("Button clicked!");
    });
  });

  it("should have a working link to the Home page", () => {
    cy.get(".link").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
