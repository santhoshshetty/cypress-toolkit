/**
 * Custom Cypress command that waits for a network request to be intercepted and verifies the response.
 * @param {string} urlAlias - The alias of the intercepted URL.
 * @param {number} expectedStatusCode - The expected status code of the intercepted response.
 * @returns {Cypress.Chainable} - A Cypress chainable object that resolves to the intercepted response body.
 */
Cypress.Commands.add(
  "waitForInterceptAndVerify",
  (urlAlias, expectedStatusCode) => {
    cy.wait(`@${urlAlias}`).then((response) => {
      expect(response.response.statusCode).to.equal(expectedStatusCode);
      return cy.wrap(response.response.body);
    });
  },
);

/**
 * Custom Cypress command that retrieves an element by its data-testid attribute value.
 * @param {string} dataTestIdValue - The value of the data-testid attribute.
 * @returns {Cypress.Chainable} - A Cypress chainable object representing the retrieved element.
 */
Cypress.Commands.add("getByDataTestId", (dataTestIdValue) => {
  cy.get(`[data-testid="${dataTestIdValue}"]`);
});

/**
 * Custom Cypress command that intercepts a network response and returns the response body.
 * @param {string} urlAlias - The alias of the intercepted URL.
 * @returns {Cypress.Chainable} - A Cypress chainable object that resolves to the intercepted response body.
 */
Cypress.Commands.add("interceptResponse", (urlAlias) => {
  cy.wait(`@${urlAlias}`).then((response) => {
    return cy.wrap(response.response.body);
  });
});
