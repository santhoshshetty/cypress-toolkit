Feature: Order Test

    @OrderTest
    Scenario: Place Order
        Given I access the application
        Then I login to the application
        And I select the product and add to the cart
        And I place the Order
        Then I should see the order confirmation message
        Then I logout from the application