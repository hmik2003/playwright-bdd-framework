from pytest_bdd import given, parsers, then, when

from fixtures.test_data import USERS


@given("I am on the login page")
def on_login_page(login_page):
    login_page.goto()


@given("I am logged in as a standard user")
def logged_in_standard_user(login_page, inventory_page):
    login_page.goto()
    login_page.login(USERS["standard"]["username"], USERS["standard"]["password"])
    inventory_page.expect_products_page()


@given("I am on the products page")
def on_products_page(inventory_page):
    inventory_page.expect_products_page()


@when(parsers.re(r'I log in as "(?P<username>[^"]*)" with password "(?P<password>[^"]*)"'))
def log_in(login_page, username, password):
    login_page.login(username, password)


@then("I should see the products page")
def see_products_page(inventory_page):
    inventory_page.expect_products_page()


@then(parsers.parse('I should see an error message containing "{error_text}"'))
def see_error_message(login_page, error_text):
    login_page.expect_error_containing(error_text)
