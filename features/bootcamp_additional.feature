Feature: Bootcamp additional "add item to cart" scenarios

    Background:
        Given a customer opens the home page
        When the customer closes the promotional banner in case of its appearance
        When the customer opens "Today's Best Deals" tab

    # Scenario: Add one item from "Today's Best Deals" category to the cart and proceed to the checkout from the item's page

    #     When the customer clicks on item number 1
    #     And the system collects the item's price and name
    #     And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance
    #     And the customer clicks on ADD TO CART button
    #     And the customer rejects protection plan by clicking NO,THANKS button
    #     And the PROCEED TO CHECKOUT button has inscription saying '1 ITEM'
    #     And the customer clicks on PROCEED TO CHECKOUT button
    #     And the customer logs in with existing credentials
    #     Then the customer should see the checkout page with the respective item price
    #     And the system deletes browser cookies

    Scenario: Add two items from "Today's Best Deals" category to the cart and view them on the cart page

        When the customer clicks on item number 1
        And the system collects the item's price and name
        And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance
        And the customer clicks on ADD TO CART button
        And the customer rejects protection plan by clicking NO,THANKS button
        And the page has a message saying 'ITEM HAS BEEN ADDED TO CART'
        And the customer loads back to the previous page
        When the customer clicks on item number 4
        And the system collects the item's price and name
        And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance
        And the customer clicks on ADD TO CART button
        And the customer rejects protection plan by clicking NO,THANKS button
        And the page has a message saying 'ITEM HAS BEEN ADDED TO CART'
        And the customer clicks on VIEW CART button
        Then the customer should see two respective items on the cart page
