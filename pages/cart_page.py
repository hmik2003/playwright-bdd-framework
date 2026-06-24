from playwright.sync_api import Page, expect

from pages.base_page import BasePage


class CartPage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)
        self.cart_items = page.locator(".cart_item")
        self.checkout_button = page.locator('[data-test="checkout"]')

    def expect_product_visible(self, product_name: str) -> None:
        expect(self.cart_items.filter(has_text=product_name)).to_be_visible()

    def expect_item_count(self, count: int) -> None:
        expect(self.cart_items).to_have_count(count)

    def proceed_to_checkout(self) -> None:
        self.checkout_button.click()
