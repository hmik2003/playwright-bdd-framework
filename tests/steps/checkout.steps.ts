import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/test-fixtures';

const { Given, When, Then } = createBdd(test);

Given('I proceed to checkout', async ({ cartPage }) => {
  await cartPage.proceedToCheckout();
});

When(
  'I enter checkout details:',
  async ({ checkoutPage }, dataTable) => {
    const row = dataTable.hashes()[0];
    await checkoutPage.fillCustomerDetails(row.firstName, row.lastName, row.postalCode);
  },
);

When('I continue to the payment overview', async ({ checkoutPage }) => {
  await checkoutPage.continueToPayment();
});

When('I continue to the payment overview without entering details', async ({ checkoutPage }) => {
  await checkoutPage.continueToPayment();
});

When('I complete the order', async ({ checkoutPage }) => {
  await checkoutPage.completeOrder();
});

Then('I should see the order confirmation message', async ({ checkoutPage }) => {
  await checkoutPage.expectOrderConfirmation();
});

Then('I should see a checkout validation error', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
