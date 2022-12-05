import { When, Then } from '@wdio/cucumber-framework';
import { HOME_PAGE_ADDRESS } from '../utils/globalVariables';
import * as selectors from '../utils/selectors';

When('the customer enters {string} in the search bar', async (text) => {
  const searchBar = await $(selectors.MAIN_SEARCH_BAR);
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(text);
});

When('the customer clicks on the search button', async () => {
  const button = await $(selectors.MAIN_SEARCH_BAR_BUTTON);
  await expect(button).toBeClickable();
  await button.click();
});

When('the customer clicks on the Newegg logo', async () => {
  const logo = await $(selectors.NEWEGG_LOGO);
  await expect(logo).toBeClickable();
  await logo.click();
});

Then('the customer should see at least one respective item', async () => {
  const singleItem = await $(selectors.SEARCH_RESULTS_PAGE_ITEM);
  await expect(singleItem).toBeExisting();
});

Then('the customer should see the home page', async () => {
  await expect(browser).toHaveUrl(HOME_PAGE_ADDRESS);
});
