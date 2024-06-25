import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SignInPage } from "../../pages/SignInPage";
import { HomePage } from "../../pages/HomePage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import ordersData from "../../../../../fixtures/orders.json";

/**
 * Represents the sign-in page object.
 */
const signInPage = new SignInPage();
/**
 * Represents the home page object.
 */
const homePage = new HomePage();
/**
 * Represents the checkout page object.
 */
const checkoutPage = new CheckoutPage();

/**
 * Given step: I access the application.
 * Visits the application URL.
 */
Given("I access the application", () => {
  cy.visit(Cypress.env("url"));
});

/**
 * Then step: I login to the application.
 * Logs in to the application using the provided username and password.
 */
Then("I login to the application", () => {
  signInPage.login(ordersData.username, ordersData.password);
});

/**
 * Then step: I select the product and add to the cart.
 * Adds the first product to the cart on the home page.
 */
Then("I select the product and add to the cart", () => {
  homePage.addFirstProductToCart();
});

/**
 * Then step: I proceed to checkout.
 * Proceeds to the checkout page from the home page.
 */
Then("I proceed to checkout", () => {
  homePage.checkout();
});

/**
 * Then step: I submit the shipping details.
 * Submits the shipping details on the checkout page.
 * @param firstName - The first name for shipping.
 * @param lastName - The last name for shipping.
 * @param address - The address for shipping.
 * @param province - The province for shipping.
 * @param postalCode - The postal code for shipping.
 */
Then("I submit the shipping details", () => {
  checkoutPage.submitShippingDetails(
    ordersData.firstName,
    ordersData.lastName,
    ordersData.address,
    ordersData.province,
    ordersData.postalCode,
  );
});

/**
 * Then step: I see the order confirmation message.
 * Verifies that the order confirmation page is loaded.
 */
Then("I see the order confirmation message", () => {
  checkoutPage.verifyOrderConfirmationPageLoaded();
});

/**
 * Then step: I logout from the application.
 * Logs out from the application on the home page.
 */
Then("I logout from the application", () => {
  homePage.logout();
});
