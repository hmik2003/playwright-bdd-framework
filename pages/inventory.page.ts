import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  private readonly title = this.page.locator('.title');
  private readonly inventoryItems = this.page.locator('.inventory_item');
  private readonly cartBadge = this.page.locator('.shopping_cart_badge');
  private readonly cartLink = this.page.locator('.shopping_cart_link');

  async expectProductsPage() {
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(productName: string) {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.locator('button').click();
  }

  async expectCartCount(count: number) {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }

  async openCart() {
    await this.cartLink.click();
  }
}
