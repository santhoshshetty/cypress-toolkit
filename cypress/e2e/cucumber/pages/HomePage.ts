/**
 * Represents the home page of the application.
 */
export class HomePage {
  private elements = {
    /**
     * Returns the "Add to cart" button element.
     * @returns The "Add to cart" button element.
     */
    addToCartButton: () => cy.contains("Add to cart"),

    /**
     * Returns the "Checkout" button element.
     * @returns The "Checkout" button element.
     */
    checkoutButton: () => cy.contains("Checkout"),

    /**
     * Returns the "Logout" button element.
     * @returns The "Logout" button element.
     */
    logoutButton: () => cy.get("#logout"),
  };

  /**
   * Adds the first product to the cart.
   */
  public addFirstProductToCart() {
    this.elements.addToCartButton().first().click();
  }

  /**
   * Performs the checkout action.
   */
  public checkout() {
    this.elements.checkoutButton().click();
  }

  /**
   * Performs the logout action.
   */
  public logout() {
    this.elements.logoutButton().click();
  }
}
