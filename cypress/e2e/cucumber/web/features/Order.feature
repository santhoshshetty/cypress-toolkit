Feature: Order Test

    @OrderTest
    Scenario: Place Order
        Given I access the application
        Then I login to the application
        And I select the product and add to the cart
        And I proceed to checkout
        And I submit the shipping details
        Then I see the order confirmation message
        Then I logout from the application