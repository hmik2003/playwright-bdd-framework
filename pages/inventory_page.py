from playwright.sync_api import Page, expect

from pages.base_page import BasePage


class InventoryPage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)
        self.title = page.locator(".title")
        self.inventory_items = page.locator(".inventory_item")
        self.cart_badge = page.locator(".shopping_cart_badge")
        self.cart_link = page.locator(".shopping_cart_link")

    def expect_products_page(self) -> None:
        expect(self.title).to_have_text("Products")

    def add_product(self, product_name: str) -> None:
        self.inventory_items.filter(has_text=product_name).locator("button").click()

    def expect_cart_count(self, count: int) -> None:
        if count == 0:
            expect(self.cart_badge).to_have_count(0)
        else:
            expect(self.cart_badge).to_have_text(str(count))

    def open_cart(self) -> None:
        self.cart_link.click()
