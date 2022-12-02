const { Given, When, Then } = require('@wdio/cucumber-framework');

const HOME_PAGE_ADDRESS = 'https://www.newegg.com/';

Given('the home page is open', async () => {
  await browser.url(HOME_PAGE_ADDRESS);
});

When('I close the promotional banner in case of its appearance', async () => {
  try {
    const banner = await $('.modal-content');
    const closeButton = await banner.$('.close');
    await expect(closeButton).toBeClickable();
    await closeButton.click();
  } catch (error) {
    console.error(error.message);
  }
});

When('I enter {string} in the search bar', async (text) => {
  const searchBar = await $('input[type="search"]');
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(text);
});

When('I click on the search button', async () => {
  const button = await $('.ico.ico-search');
  await expect(button).toBeClickable();
  await button.click();
});

When('I click on the Newegg logo', async () => {
  const logo = await $(`a[href="${HOME_PAGE_ADDRESS}"]`);
  await expect(logo).toBeClickable();
  await logo.click();
});

Then('I should see at least one respective item', async () => {
  const singleItem = await $('.page-content .item-cell');
  await expect(singleItem).toBeExisting();
});

When('I open {string} tab', async (tabName) => {
  const link = await $(`*=${tabName}`);
  await expect(link).toBeClickable();
  await link.click();
});

Then('I should see the home page', async () => {
  await expect(browser).toHaveUrl(HOME_PAGE_ADDRESS);
});
