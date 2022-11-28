const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePageAddress = 'https://www.newegg.com/';

Given('I am on the home page', async () => {
  await browser.url(homePageAddress);
});

When('I close the promotional banner in case of its appearance', async () => {
  try {
    const banner = await $('.modal-content');
    // Use this to reduce the amount of attempts $(findElement) makes
    // to find the promo modal window
    await banner.waitForExist({ timeout: 2000 });
    const closeButton = await banner.$('.close');
    await expect(closeButton).toBeClickable();
    await closeButton.click();
  } catch (error) {
    console.error(
      "Couldn't find the promotional banner! Continuing test execution."
    );
  }
});

When('I enter {string} in the search bar', async (text) => {
  const searchBar = await $('input[type="search"]');
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(text);
});

When('I click on the {string}', async (elementOption) => {
  if (elementOption.indexOf('button') !== -1) {
    const button = await $('.ico.ico-search');
    await expect(button).toBeClickable();
    await button.click();
  } else if (elementOption.indexOf('logo') !== -1) {
    const logo = await $(`a[href="${homePageAddress}"]`);
    await expect(logo).toBeClickable();
    await logo.click();
  }
});

Then('I should see at least one respective item', async () => {
  const singleItem = await $('#item_cell_32-350-881_1_0');
  console.log(singleItem);
  await expect(singleItem).toBeExisting();
});

When('I open {string} tab', async (tabName) => {
  const anchorElement = await $(`*=${tabName}`);
  await expect(anchorElement).toBeClickable();
  await anchorElement.click();
});

Then('I should see the home page', async () => {
  await expect(browser).toHaveUrl(homePageAddress);
});
