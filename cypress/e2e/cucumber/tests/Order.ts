import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SignInPage } from "../pages/SignInPage";
import { HomePage } from "../pages/HomePage";

const signInPage = new SignInPage();
const homePage = new HomePage();

Given("I access the application", () => {
  cy.visit(Cypress.env("url"));
});

Then("I login to the application", () => {
  signInPage.login("demouser", "testingisfun99");
});

Then("I select the product and add to the cart", () => {});

Then("I place the Order", () => {});

Then("I should see the order confirmation message", () => {});

Then("I logout from the application", () => {
  homePage.logout();
});
