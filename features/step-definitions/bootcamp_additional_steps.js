import { When, Then } from '@wdio/cucumber-framework';
import * as selectors from '../utils/selectors';
import * as variables from '../utils/globalVariables';

// Used for comparing initial product price with the value on the checkout page
let pickedItemPrice;
// Used for comparing multiple products' names
let pickedItemsNames = [];

When('the customer clicks on item number {int}', async (itemNumber) => {
  const item = await $$('.page-content  .item-container.items-grid-view > a')[
    itemNumber - 1
  ];
  await expect(item).toBeClickable();
  await item.click();
});

When("the system collects the item's price and name", async () => {
  const itemName = await $('h1.product-title');
  const itemPrice = await $(
    '.product-buy-box > .product-pane:not(.is-collapsed) .product-price li.price-current'
  );
  pickedItemsNames.push(await itemName.getText());
  pickedItemPrice = await itemPrice.getText();
  await expect(pickedItemsNames).not.toEqual(undefined);
  await expect(pickedItemPrice).not.toEqual(undefined);
});

When('the customer clicks on ADD TO CART button', async () => {
  const button = await $('.nav-col .btn.btn-primary.btn-wide');
  await expect(button).toBeClickable();
  await button.click();
});

When(
  'the customer rejects protection plan by clicking NO,THANKS button',
  async () => {
    const button = await $('.modal-footer button:nth-child(1)');
    await expect(button).toBeClickable();
    await button.click();
  }
);

When(
  'the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance',
  async () => {
    try {
      const checkbox = await $('.product-gift .form-checkbox');
      await expect(checkbox).toBeClickable();
      await checkbox.click();
    } catch {
      console.error("The gift offer doesn't apply to this product.");
    }
  }
);

When(
  'the PROCEED TO CHECKOUT button has inscription saying {string}',
  async (text) => {
    const button = await $('.btn.btn-undefined.btn-primary');
    await expect(button).toHaveTextContaining(text);
  }
);

When('the customer clicks on PROCEED TO CHECKOUT button', async () => {
  const button = await $('.btn.btn-undefined.btn-primary');
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer logs in with existing credentials', async () => {
  const emailInput = await $('#labeled-input-signEmail');
  await expect(emailInput).toExist();
  await emailInput.setValue(variables.TEST_EMAIL);
  const submitButton = await $('#signInSubmit');
  await expect(submitButton).toBeClickable();
  await submitButton.click();
  const passwordInput = await $('#labeled-input-password');
  await expect(passwordInput).toExist();
  await passwordInput.setValue(variables.TEST_PASSWORD);
  await expect(submitButton).toBeClickable();
  await submitButton.click();
});

Then(
  'the customer should see the checkout page with the respective item price',
  async () => {
    const checkoutLabel = await $('#totalItemCountId');
    await expect(checkoutLabel).toHaveTextContaining('Checkout');
    const itemPrice = await $('.summary-content:not(.fixed-hide) > ul  span');
    await expect(itemPrice).toExist();
    await expect(itemPrice).toHaveText(pickedItemPrice);
  }
);

When('the system deletes browser cookies', async () => {
  await browser.deleteCookies();
  const cookies = await browser.getCookies();
  await expect(cookies).toEqual([]);
  pickedItemsNames = [];
});

When('the page has a message saying {string}', async (text) => {
  const message = await $('.modal-title .message-title');
  await expect(message).toHaveTextContaining(text);
});

When('the customer loads back to the previous page', async () => {
  await browser.back();
});

When('the customer clicks on VIEW CART button', async () => {
  const button = await $('.item-actions > button:nth-child(2)');
  await expect(button).toBeClickable();
  await button.click();
});

Then(
  'the customer should see two respective items on the cart page',
  async () => {
    const firstItem = await $(`=${pickedItemsNames[0]}`);
    const secondItem = await $(`=${pickedItemsNames[1]}`);
    await expect(firstItem).toExist();
    await expect(secondItem).toExist();
  }
);

When('the customer closes ADD ADDRESS modal window', async () => {
  const button = await $('button.close');
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer creates a new account', async () => {
  const link = await $('=Sign Up');
  await expect(link).toBeClickable();
  await link.click();
  const firstNameInput = await $$('.form-input input')[0];
  await expect(firstNameInput).toExist();
  await firstNameInput.setValue(variables.RANDOM_FIRST_NAME);
  const lastNameInput = await $$('.form-input input')[1];
  await expect(lastNameInput).toExist();
  await lastNameInput.setValue(variables.RANDOM_LAST_NAME);
  const emailInput = await $$('.form-input input')[2];
  await expect(emailInput).toExist();
  await emailInput.setValue(variables.RANDOM_TEST_EMAIL);
  const passwordInput = await $$('.form-input input')[4];
  await expect(passwordInput).toExist();
  await passwordInput.setValue(variables.RANDOM_TEST_PASSWORD);
  const submitButton = await $('.btn.btn-orange');
  await expect(submitButton).toBeClickable();
  await submitButton.click();
});
