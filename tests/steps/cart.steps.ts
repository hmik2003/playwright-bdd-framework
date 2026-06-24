import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/test-fixtures';

const { When, Then } = createBdd(test);

When('I add {string} to the cart', async ({ inventoryPage }, productName: string) => {
  await inventoryPage.addProduct(productName);
});

When('I open the shopping cart', async ({ inventoryPage }) => {
  await inventoryPage.openCart();
});

Then('my cart should contain {int} items', async ({ inventoryPage }, count: number) => {
  await inventoryPage.expectCartCount(count);
});

Then(
  'I should see {string} in the cart',
  async ({ cartPage }, productName: string) => {
    await cartPage.expectProductVisible(productName);
  },
);
