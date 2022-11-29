/// <reference types="cypress" />

describe("signin", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("should sign in", () => {
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.location("pathname").should("eq", "/");
  });
});
