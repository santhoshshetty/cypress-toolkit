/**
 * Extends the Cypress Chainable interface to include custom commands.
 */
declare namespace Cypress {
  interface Chainable {
    /**
     * Waits for a network request with the specified URL alias and verifies the response status code.
     * @param urlAlias - The alias of the URL to wait for.
     * @param expectedStatusCode - The expected status code of the response.
     * @returns A Chainable element representing the intercepted response.
     */
    waitForInterceptAndVerify(
      urlAlias: string,
      expectedStatusCode: number,
    ): Chainable<Element>;

    /**
     * Retrieves an element using its data-testid attribute value.
     * @param dataTestIdValue - The value of the data-testid attribute.
     * @returns A Chainable element matching the specified data-testid value.
     */
    getByDataTestId(dataTestIdValue: string): Chainable<Element>;

    /**
     * Intercepts a network response with the specified URL alias.
     * @param urlAlias - The alias of the URL to intercept.
     * @returns A Chainable element representing the intercepted response.
     */
    interceptResponse(urlAlias: string): Chainable<Element>;
  }
}
