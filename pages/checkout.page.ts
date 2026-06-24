import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  private readonly firstNameInput = this.page.locator('[data-test="firstName"]');
  private readonly lastNameInput = this.page.locator('[data-test="lastName"]');
  private readonly postalCodeInput = this.page.locator('[data-test="postalCode"]');
  private readonly continueButton = this.page.locator('[data-test="continue"]');
  private readonly finishButton = this.page.locator('[data-test="finish"]');
  private readonly completeHeader = this.page.locator('.complete-header');

  async fillCustomerDetails(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToPayment() {
    await this.continueButton.click();
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async expectOrderConfirmation() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
