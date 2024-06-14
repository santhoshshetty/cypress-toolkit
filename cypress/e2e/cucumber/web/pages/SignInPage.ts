/**
 * Represents the sign-in page of the application.
 */
export class SignInPage {
  private elements = {
    signInButton: () => cy.get("#signin"),
    emailInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    submitButton: () => cy.get("#login-btn"),
  };

  /**
   * Logs in to the application with the provided email and password.
   * @param email - The email address to use for login.
   * @param password - The password to use for login.
   */
  public login(email: string, password: string) {
    this.elements.signInButton().click();
    this.elements.emailInput().type(email + "{enter}");
    this.elements.passwordInput().type(password + "{enter}");
    this.elements.submitButton().click();
  }
}
