Feature: Bootcamp additional "add item to cart" scenarios

    Background:
        Given the home page is open
        When the customer closes the promotional banner in case of its appearance

    Scenario: Add one item from "Best Sellers" category to the cart and proceed to the checkout page

        When the customer opens 'Best Sellers' tab
        When the customer clicks on item number 1 in the top section
        And the system collects the item's price
        And the customer sets ADD THIS OFFER TO CART unchecked
        And the customer clicks on ADD TO CART button
        And the customer rejects protection plan by clicking NO,THANKS button
        And the PROCEED TO CHECKOUT button has inscription saying '1 ITEM'
        And the customer clicks on PROCEED TO CHECKOUT button
        And the customer logs in with existing credentials
        Then the customer should see the checkout page with the respective item price

# Scenario: Delete all items from the cart

#     When the customer clicks on the shopping cart icon
#     And the customer clicks REMOVE ALL button
#     And the customer clicks
#     Then the customer should see a message saying "Oh...seems like the cart is empty..."
#     And the system cleans browser cookies