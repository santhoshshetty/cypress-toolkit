Cypress.Commands.add(
  "waitForInterceptAndVerify",
  (urlAlias, expectedStatusCode) => {
    cy.wait(`@${urlAlias}`).then((response) => {
      expect(response.response.statusCode).to.equal(expectedStatusCode);
      return cy.wrap(response.response.body);
    });
  },
);

Cypress.Commands.add("getByDataTestId", (dataTestIdValue) => {
  cy.get(`[data-testid="${dataTestIdValue}"]`);
});

Cypress.Commands.add("interceptResponse", (urlAlias) => {
  cy.wait(`@${urlAlias}`).then((response) => {
    return cy.wrap(response.response.body);
  });
});
