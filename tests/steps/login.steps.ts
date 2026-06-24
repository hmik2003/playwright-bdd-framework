import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/test-fixtures';
import { USERS } from '../../fixtures/test-data';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ page, loginPage }) => {
  await loginPage.goto();
});

Given('I am logged in as a standard user', async ({ page, loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(USERS.standard.username, USERS.standard.password);
  await inventoryPage.expectProductsPage();
});

Given('I am on the products page', async ({ inventoryPage }) => {
  await inventoryPage.expectProductsPage();
});

When(
  'I log in as {string} with password {string}',
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.login(username, password);
  },
);

Then('I should see the products page', async ({ inventoryPage }) => {
  await inventoryPage.expectProductsPage();
});

Then(
  'I should see an error message containing {string}',
  async ({ loginPage }, errorText: string) => {
    await loginPage.expectErrorContaining(errorText);
  },
);
