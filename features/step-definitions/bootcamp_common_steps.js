import { Given, When } from '@wdio/cucumber-framework';

Given('the home page is open', async () => {
  await browser.url(HOME_PAGE_ADDRESS);
});

When(
  'the customer closes the promotional banner in case of its appearance',
  async () => {
    try {
      const banner = await $('.modal-content');
      const closeButton = await banner.$('.close');
      await expect(closeButton).toBeClickable();
      await closeButton.click();
    } catch (error) {
      console.error(error.message);
    }
  }
);
