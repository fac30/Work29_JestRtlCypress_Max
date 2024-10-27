describe("Exercise Two (solution)", () => {
  beforeEach(() => {
    cy.visit("/exercise-two");
  });

  // 1. Page Load and Title Check
  it("should load the page and display the correct title", () => {
    cy.contains("h1.title", "Exercise Two");
  });

  // 2. Check for Static Text and List Items
  it("should display static text and hardcoded list items", () => {
    cy.contains("label", "Your Name");
    cy.contains("label", "Select a Course");
    cy.get(".list-item").should(
      "contain.text",
      "John Doe - testemail@test.com - First hard coded list item"
    );
    cy.get(".list-item").should(
      "contain.text",
      "Little jimmy - lilj@gmail.com - Second hard coded list item"
    );
  });

  // 3. Form Input and Dropdown Selection
  it("should allow input in name and email fields and course selection", () => {
    cy.get("#name").type("Alice Smith").should("have.value", "Alice Smith");
    cy.get("#email")
      .type("alice@example.com")
      .should("have.value", "alice@example.com");
    cy.get("#course").select("Course 1").should("have.value", "course1");
  });

  // 4. Check Button Disabled/Enabled State
  it("should enable the submit button only when the form is complete", () => {
    cy.get(".button").should("be.disabled");
    cy.get("#name").type("Alice Smith");
    cy.get("#email").type("alice@example.com");
    cy.get("#course").select("Course 2");
    cy.get(".button").should("not.be.disabled");
  });

  // 5. Form Submission Adds Entry to List
  it("should add a new entry to the list upon form submission", () => {
    cy.get("#name").type("Alice Smith");
    cy.get("#email").type("alice@example.com");
    cy.get("#course").select("Course 1");
    cy.get(".button").click();

    cy.get(".list-item")
      .should("have.length.greaterThan", 2)
      .last()
      .should("exist")
      .and("contain.text", "Alice Smith - alice@example.com - course1");
  });

  // 6. Back to Home Navigation
  it("should navigate back to the home page when 'Back to Home' is clicked", () => {
    cy.get("a.link").contains("Back to Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
