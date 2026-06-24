import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  private readonly cartItems = this.page.locator('.cart_item');
  private readonly checkoutButton = this.page.locator('[data-test="checkout"]');

  async expectProductVisible(productName: string) {
    await expect(this.cartItems.filter({ hasText: productName })).toBeVisible();
  }

  async expectItemCount(count: number) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
