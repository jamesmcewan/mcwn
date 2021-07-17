describe("Home", () => {
  it("should render the header, main and the footer", () => {
    cy.visit("/");
    cy.get('[data-testid="header"]').should("have.length", 1);
    cy.get('[data-testid="main"]').should("have.length", 1);
    cy.get('[data-testid="footer"]').should("have.length", 1);
  });
});
