/**
 * Represents the checkout page of the application.
 */
export class CheckoutPage {
  private elements = {
    firstNameInput: () => cy.get("#firstNameInput"),
    lastNameInput: () => cy.get("#lastNameInput"),
    addressLine1Input: () => cy.get("#addressLine1Input"),
    provinceInput: () => cy.get("#provinceInput"),
    postCodeInput: () => cy.get("#postCodeInput"),
    shippingContinueButton: () => cy.get("#checkout-shipping-continue"),
    continueShoppingButton: () => cy.contains("button", "Continue Shopping"),
  };

  /**
   * Submits the shipping details on the checkout page.
   * @param firstName - The first name of the customer.
   * @param lastName - The last name of the customer.
   * @param address - The address of the customer.
   * @param province - The province of the customer.
   * @param postCode - The postal code of the customer.
   */
  public submitShippingDetails(
    firstName: string,
    lastName: string,
    address: string,
    province: string,
    postCode: string,
  ) {
    this.elements.firstNameInput().type(firstName);
    this.elements.lastNameInput().type(lastName);
    this.elements.addressLine1Input().type(address);
    this.elements.provinceInput().type(province);
    this.elements.postCodeInput().type(postCode);
    this.elements.shippingContinueButton().click();
  }

  /**
   * Verifies if the order confirmation page is loaded.
   */
  public verifyOrderConfirmationPageLoaded() {
    cy.url().should("include", "confirmation");
    this.elements.continueShoppingButton().should("be.visible").click();
  }
}
