describe("Exercise One (solution)", () => {
  beforeEach(() => {
    cy.visit("/exercise-one");
  });

  it("should display the correct title", () => {
    cy.get(".title").should("contain.text", "Exercise One");
  });

  it("should display the correct description text", () => {
    cy.get(".text").should(
      "contain.text",
      "This is a simple UI exercise page to test navigation and button presence."
    );
  });

  it("should display a button and trigger alert on click", () => {
    cy.get(".button").should("contain.text", "Test Button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Button clicked!");
    });
  });

  it("should have a working link to the Home page", () => {
    cy.get("a.link")
      .contains("Back to Home")
      .should("have.attr", "href", "/")
      .click();
    cy.url().should("include", "/");
  });
});
