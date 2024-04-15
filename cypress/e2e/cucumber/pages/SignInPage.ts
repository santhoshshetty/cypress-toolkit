export class SignInPage {
  private elements = {
    signInButton: () => cy.get("#signin"),
    emailInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    submitButton: () => cy.get("#login-btn"),
  };

  public login(email: string, password: string) {
    this.elements.signInButton().click();
    this.elements.emailInput().type(email + "{enter}");
    this.elements.passwordInput().type(password + "{enter}");
    this.elements.submitButton().click();
  }
}
