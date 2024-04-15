declare namespace Cypress {
  interface Chainable {
    waitForInterceptAndVerify(
      urlAlias: string,
      expectedStatusCode: number
    ): Chainable<Element>;
    getByDataTestId(dataTestIdValue: string): Chainable<Element>;
    interceptResponse(urlAlias: string): Chainable<Element>;
  }
}
