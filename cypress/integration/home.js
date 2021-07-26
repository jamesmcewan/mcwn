describe("Home", () => {
  it("should render the Homepage", () => {
    cy.visit("/");
    cy.eyesOpen({ appName: "mcwn", testname: "home" });
    cy.eyesCheckWindow({ tag: "Homepage", target: "window", fully: true });
    cy.eyesClose();
  });
});
