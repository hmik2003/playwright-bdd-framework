@checkout @e2e
Feature: Checkout Process
  As a customer with items in my cart
  I want to complete the checkout process
  So that I can receive my order confirmation

  Background:
    Given I am logged in as a standard user
    And I am on the products page
    And I add "Sauce Labs Backpack" to the cart
    And I open the shopping cart
    And I proceed to checkout

  Scenario: Complete checkout with valid information
    When I enter checkout details:
      | firstName | lastName | postalCode |
      | Ahmed     | Khan     | 54000      |
    And I continue to the payment overview
    And I complete the order
    Then I should see the order confirmation message

  Scenario: Checkout requires customer information
    When I continue to the payment overview without entering details
    Then I should see a checkout validation error
