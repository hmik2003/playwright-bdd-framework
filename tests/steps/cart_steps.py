from pytest_bdd import given, parsers, then, when


@given(parsers.parse('I add "{product_name}" to the cart'))
@when(parsers.parse('I add "{product_name}" to the cart'))
def add_product_to_cart(inventory_page, product_name):
    inventory_page.add_product(product_name)


@given("I open the shopping cart")
@when("I open the shopping cart")
def open_shopping_cart(inventory_page):
    inventory_page.open_cart()


@then(parsers.parse("my cart should contain {count:d} items"))
def cart_should_contain_items(inventory_page, count):
    inventory_page.expect_cart_count(count)


@then(parsers.parse('I should see "{product_name}" in the cart'))
def see_product_in_cart(cart_page, product_name):
    cart_page.expect_product_visible(product_name)
