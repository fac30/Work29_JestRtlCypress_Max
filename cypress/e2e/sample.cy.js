describe("Home Page", () => {
  it("should display the welcome message", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Welcome");
  });
});
