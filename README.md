## Description

A submission for the homework task following the "E2E" lecture.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/RagingZonkey/E2E-WDIO-hometask.git test-project
```

`cd` into the project directory:

```bash
cd test-project
```

Set up dependencies:

```bash
yarn install
```

Run the test suite:

```bash
yarn wdio
```

## Reasoning for addiotional scenario choice

#### Due to the fact that, according to the software testing pyramid, the amount of E2E tests should be very limited and strongly specified matching the most vital business needs, so that after completing the testing lifecycle stakeholders can be confident about the scenarios which are going to be the most profitable ones to be stable and the processes to be sound. So, from my point of view, in the case with Newegg the most crucial parts of user experience are interacting with the shopping cart and choosing the right products through well aligned categories which were basically covered within my test suite.

## Test-suite last run results

"spec" Reporter:</br>

[chrome 107.0.5304.110 linux #0-1] Running: chrome (v107.0.5304.110) on linux</br>
[chrome 107.0.5304.110 linux #0-1] Session ID: 202c365a8f60c5b92abdf4f0f6065909</br>
[chrome 107.0.5304.110 linux #0-1]</br>
[chrome 107.0.5304.110 linux #0-1] » /features/bootcamp.feature</br>
[chrome 107.0.5304.110 linux #0-1] Bootcamp E2E</br>
[chrome 107.0.5304.110 linux #0-1] Search bar</br>
[chrome 107.0.5304.110 linux #0-1] ✓ Given a customer opens the home page</br>
[chrome 107.0.5304.110 linux #0-1] ✓ When the customer closes the promotional banner in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-1] ✓ When the customer enters 'Windows' in the search bar</br>
[chrome 107.0.5304.110 linux #0-1] ✓ And the customer clicks on the search button</br>
[chrome 107.0.5304.110 linux #0-1] ✓ Then the customer should see at least one respective item</br>
[chrome 107.0.5304.110 linux #0-1]</br>
[chrome 107.0.5304.110 linux #0-1] Internet shop logo button</br>
[chrome 107.0.5304.110 linux #0-1] ✓ Given a customer opens the home page</br>
[chrome 107.0.5304.110 linux #0-1] ✓ When the customer closes the promotional banner in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-1] ✓ When the customer opens "Today's Best Deals" tab</br>
[chrome 107.0.5304.110 linux #0-1] ✓ And the customer clicks on the Newegg logo</br>
[chrome 107.0.5304.110 linux #0-1] ✓ Then the customer should see the home page</br>
[chrome 107.0.5304.110 linux #0-1]</br>
[chrome 107.0.5304.110 linux #0-1] 10 passing (41.1s)</br>

---</br>

[chrome 107.0.5304.110 linux #0-0] Running: chrome (v107.0.5304.110) on linux</br>
[chrome 107.0.5304.110 linux #0-0] Session ID: f828e439d5134f3a44e4df5b72619e3d</br>
[chrome 107.0.5304.110 linux #0-0]</br>
[chrome 107.0.5304.110 linux #0-0] » /features/bootcamp_additional.feature</br>
[chrome 107.0.5304.110 linux #0-0] Bootcamp additional "add item to cart" scenarios</br>
[chrome 107.0.5304.110 linux #0-0] Add one item from "Today's Best Deals" category to the cart and proceed to the checkout from the item's page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Given a customer opens the home page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer closes the promotional banner in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer opens "Today's Best Deals" tab</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer clicks on item number 1</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system collects the item's price and name</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on ADD TO CART button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer rejects protection plan by clicking NO,THANKS button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the PROCEED TO CHECKOUT button has inscription saying '1 ITEM'</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on PROCEED TO CHECKOUT button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer logs in with existing credentials</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Then the customer should see the checkout page with the respective item price</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system deletes browser cookies</br>
[chrome 107.0.5304.110 linux #0-0]</br>
[chrome 107.0.5304.110 linux #0-0] Add two items from "Today's Best Deals" category to the cart and view them on the cart page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Given a customer opens the home page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer closes the promotional banner in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer opens "Today's Best Deals" tab</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer clicks on item number 1</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system collects the item's price and name</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on ADD TO CART button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer rejects protection plan by clicking NO,THANKS button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the page has a message saying 'ITEM HAS BEEN ADDED TO CART'</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer loads back to the previous page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer clicks on item number 4</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system collects the item's price and name</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on ADD TO CART button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer rejects protection plan by clicking NO,THANKS button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the page has a message saying 'ITEM HAS BEEN ADDED TO CART'</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on VIEW CART button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Then the customer should see two respective items on the cart page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system deletes browser cookies</br>
[chrome 107.0.5304.110 linux #0-0]</br>
[chrome 107.0.5304.110 linux #0-0] Add one item from "Today's Best Deals" category to the cart and proceed to the checkout from the item's page as an unregistered user</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Given a customer opens the home page</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer closes the promotional banner in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer opens "Today's Best Deals" tab</br>
[chrome 107.0.5304.110 linux #0-0] ✓ When the customer clicks on item number 1</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system collects the item's price and name</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on ADD TO CART button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer rejects protection plan by clicking NO,THANKS button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the PROCEED TO CHECKOUT button has inscription saying '1 ITEM'</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer clicks on PROCEED TO CHECKOUT button</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer creates a new account</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the customer closes ADD ADDRESS modal window</br>
[chrome 107.0.5304.110 linux #0-0] ✓ Then the customer should see the checkout page with the respective item price</br>
[chrome 107.0.5304.110 linux #0-0] ✓ And the system deletes browser cookies</br>
[chrome 107.0.5304.110 linux #0-0]</br>
[chrome 107.0.5304.110 linux #0-0] 46 passing (3m 8.2s)</br>

Spec Files: 2 passed, 2 total (100% completed) in 00:03:10
