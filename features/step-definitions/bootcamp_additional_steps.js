import { When, Then } from '@wdio/cucumber-framework';
import * as selectors from '../utils/selectors';
import * as variables from '../utils/globalVariables';

// Used for comparing initial product price with the value on the checkout page
let pickedItemPrice;
// Used for comparing multiple products' names
let pickedItemsNames = [];

When('the customer clicks on item number {int}', async (itemNumber) => {
  const item = await $$(selectors.TODAYS_BEST_DEALS_ITEM)[itemNumber - 1];
  await expect(item).toBeClickable();
  await item.click();
});

When("the system collects the item's price and name", async () => {
  const itemName = await $(selectors.ITEM_PAGE_NAME_TITLE);
  const itemPrice = await $(selectors.ITEM_PAGE_PRICE);
  pickedItemsNames.push(await itemName.getText());
  pickedItemPrice = await itemPrice.getText();
  await expect(pickedItemsNames).not.toEqual(undefined);
  await expect(pickedItemPrice).not.toEqual(undefined);
});

When('the customer clicks on ADD TO CART button', async () => {
  const button = await $(selectors.ADD_TO_CART_BUTTON);
  await expect(button).toBeClickable();
  await button.click();
});

When(
  'the customer rejects protection plan by clicking NO,THANKS button',
  async () => {
    const button = await $(selectors.NO_THANKS_BUTTON);
    await expect(button).toBeClickable();
    await button.click();
  }
);

When(
  'the customer sets ADD THIS OFFER TO CART unchecked in case of its appearance',
  async () => {
    try {
      const checkbox = await $(selectors.ADD_THIS_OFFER_TO_CART_CHECKBOX);
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
    const button = await $(selectors.PROCEED_TO_CHECKOUT_BUTTON);
    await expect(button).toHaveTextContaining(text);
  }
);

When('the customer clicks on PROCEED TO CHECKOUT button', async () => {
  const button = await $(selectors.PROCEED_TO_CHECKOUT_BUTTON);
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer logs in with existing credentials', async () => {
  const emailInput = await $(selectors.SIGN_IN_EMAIL_INPUT);
  await expect(emailInput).toExist();
  await emailInput.setValue(variables.TEST_EMAIL);
  const submitButton = await $(selectors.SIGN_IN_SUBMIT_BUTTON);
  await expect(submitButton).toBeClickable();
  await submitButton.click();
  const passwordInput = await $(selectors.SIGN_IN_PASSWORD_INPUT);
  await expect(passwordInput).toExist();
  await passwordInput.setValue(variables.TEST_PASSWORD);
  await expect(submitButton).toBeClickable();
  await submitButton.click();
});

Then(
  'the customer should see the checkout page with the respective item price',
  async () => {
    const checkoutLabel = await $(selectors.CHECKOUT_LABEL);
    await expect(checkoutLabel).toHaveTextContaining('Checkout');
    const itemPrice = await $(selectors.CHECKOUT_PAGE_PRICE);
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
  const message = await $(selectors.ITEM_ADDED_TO_CART_LABEL);
  await expect(message).toHaveTextContaining(text);
});

When('the customer loads back to the previous page', async () => {
  await browser.back();
});

When('the customer clicks on VIEW CART button', async () => {
  const button = await $(selectors.VIEW_CART_BUTTON);
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
  const button = await $(selectors.ADD_ADDRESS_CLOSE_BUTTON);
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer creates a new account', async () => {
  const link = await $(selectors.SIGN_UP_LINK);
  await expect(link).toBeClickable();
  await link.click();
  const firstNameInput = await $$(selectors.SIGN_UP_INPUT)[0];
  await expect(firstNameInput).toExist();
  await firstNameInput.setValue(variables.RANDOM_FIRST_NAME);
  const lastNameInput = await $$(selectors.SIGN_UP_INPUT)[1];
  await expect(lastNameInput).toExist();
  await lastNameInput.setValue(variables.RANDOM_LAST_NAME);
  const emailInput = await $$(selectors.SIGN_UP_INPUT)[2];
  await expect(emailInput).toExist();
  await emailInput.setValue(variables.RANDOM_TEST_EMAIL);
  const passwordInput = await $$(selectors.SIGN_UP_INPUT)[4];
  await expect(passwordInput).toExist();
  await passwordInput.setValue(variables.RANDOM_TEST_PASSWORD);
  const submitButton = await $(selectors.SIGN_UP_SUBMIT_BUTTON);
  await expect(submitButton).toBeClickable();
  await submitButton.click();
});
