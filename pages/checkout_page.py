from playwright.sync_api import Page, expect

from pages.base_page import BasePage


class CheckoutPage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)
        self.first_name_input = page.locator('[data-test="firstName"]')
        self.last_name_input = page.locator('[data-test="lastName"]')
        self.postal_code_input = page.locator('[data-test="postalCode"]')
        self.continue_button = page.locator('[data-test="continue"]')
        self.finish_button = page.locator('[data-test="finish"]')
        self.complete_header = page.locator(".complete-header")

    def fill_customer_details(self, first_name: str, last_name: str, postal_code: str) -> None:
        self.first_name_input.fill(first_name)
        self.last_name_input.fill(last_name)
        self.postal_code_input.fill(postal_code)

    def continue_to_payment(self) -> None:
        self.continue_button.click()

    def complete_order(self) -> None:
        self.finish_button.click()

    def expect_order_confirmation(self) -> None:
        expect(self.complete_header).to_have_text("Thank you for your order!")
