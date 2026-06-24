@cart @smoke
Feature: Shopping Cart Management
  As a logged-in customer
  I want to manage items in my cart
  So that I can purchase the products I need

  Background:
    Given I am logged in as a standard user
    And I am on the products page

  Scenario: Add a product to the cart
    When I add "Sauce Labs Backpack" to the cart
    Then my cart should contain 1 items

  Scenario: Add multiple products to the cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then my cart should contain 2 items

  Scenario: View product in cart
    When I add "Sauce Labs Bolt T-Shirt" to the cart
    And I open the shopping cart
    Then I should see "Sauce Labs Bolt T-Shirt" in the cart
