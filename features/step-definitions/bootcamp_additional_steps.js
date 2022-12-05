import { When, Then } from '@wdio/cucumber-framework';
import * as selectors from '../utils/selectors';
import { TEST_EMAIL, TEST_PASSWORD } from '../utils/globalVariables';

let pickedItemPrice;
// let pickedItemName;

When(
  'the customer clicks on item number {int} in the top section',
  async (itemNumber) => {
    const item = await $$(
      '.page-section.radius-m.bg-lightgray.swiper-section .swiper-slide.swiper-slide-active'
    )[itemNumber - 1];
    await expect(item).toBeExisting();
    await item.click();
  }
);

When("the system collects the item's price", async () => {
  // const itemName = await $('h1.product-title');
  const itemPrice = await $(
    '.product-buy-box > .product-pane:not(.is-collapsed) .product-price li.price-current'
  );
  // pickedItemName = await itemName.getText();
  pickedItemPrice = await itemPrice.getText();
  // await expect(pickedItemName).not.toEqual(undefined);
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

When('the customer sets ADD THIS OFFER TO CART unchecked', async () => {
  const checkbox = await $('.product-gift .form-checkbox');
  await expect(checkbox).toBeClickable();
  await checkbox.click();
});

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
  await emailInput.setValue(TEST_EMAIL);
  const submitButton = await $('#signInSubmit');
  await expect(submitButton).toBeClickable();
  await submitButton.click();
  const passwordInput = await $('#labeled-input-password');
  await expect(passwordInput).toExist();
  await passwordInput.setValue(TEST_PASSWORD);
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
