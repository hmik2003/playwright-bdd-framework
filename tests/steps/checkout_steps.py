from pytest_bdd import given, then, when
from playwright.sync_api import expect


@given("I proceed to checkout")
def proceed_to_checkout(cart_page):
    cart_page.proceed_to_checkout()


@when("I enter checkout details:")
def enter_checkout_details(checkout_page, datatable):
    headers = [cell for cell in datatable[0]]
    values = [cell for cell in datatable[1]]
    row = dict(zip(headers, values))
    checkout_page.fill_customer_details(
        row["firstName"], row["lastName"], row["postalCode"]
    )


@when("I continue to the payment overview")
def continue_to_payment_overview(checkout_page):
    checkout_page.continue_to_payment()


@when("I continue to the payment overview without entering details")
def continue_without_details(checkout_page):
    checkout_page.continue_to_payment()


@when("I complete the order")
def complete_order(checkout_page):
    checkout_page.complete_order()


@then("I should see the order confirmation message")
def see_order_confirmation(checkout_page):
    checkout_page.expect_order_confirmation()


@then("I should see a checkout validation error")
def see_checkout_validation_error(page):
    expect(page.locator('[data-test="error"]')).to_be_visible()
