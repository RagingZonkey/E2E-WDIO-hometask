import { When, Then } from '@wdio/cucumber-framework';

const HOME_PAGE_ADDRESS = 'https://www.newegg.com/';

When('the customer enters {string} in the search bar', async (text) => {
  const searchBar = await $('input[type="search"]');
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(text);
});

When('the customer clicks on the search button', async () => {
  const button = await $('.ico.ico-search');
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer clicks on the Newegg logo', async () => {
  const logo = await $(`a[href="${HOME_PAGE_ADDRESS}"]`);
  await expect(logo).toBeClickable();
  await logo.click();
});

Then('the customer should see at least one respective item', async () => {
  const singleItem = await $('.page-content .item-cell');
  await expect(singleItem).toBeExisting();
});

When('the customer opens {string} tab', async (tabName) => {
  const link = await $(`*=${tabName}`);
  await expect(link).toBeClickable();
  await link.click();
});

Then('the customer should see the home page', async () => {
  await expect(browser).toHaveUrl(HOME_PAGE_ADDRESS);
});
