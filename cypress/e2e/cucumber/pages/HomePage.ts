export class HomePage {
  private elements = {
    logoutButton: () => cy.get("#logout"),
  };

  public logout() {
    this.elements.logoutButton().click();
  }
}
