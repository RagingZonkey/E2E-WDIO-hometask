import { Given, When } from '@wdio/cucumber-framework';
import { HOME_PAGE_ADDRESS } from '../utils/globalVariables';
import * as selectors from '../utils/selectors';

Given('the home page is open', async () => {
  await browser.url(HOME_PAGE_ADDRESS);
});

When(
  'the customer closes the promotional banner in case of its appearance',
  async () => {
    try {
      const banner = await $(selectors.PROMOTIONAL_BANNER);
      const closeButton = await banner.$(
        selectors.PROMOTIONAL_BANNER_CLOSE_BUTTON
      );
      await expect(closeButton).toBeClickable();
      await closeButton.click();
    } catch (error) {
      console.error(error.message);
    }
  }
);

When('the customer opens {string} tab', async (tabName) => {
  const link = await $(`*=${tabName}`);
  await expect(link).toBeClickable();
  await link.click();
});
