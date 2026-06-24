@login @smoke
Feature: User Authentication
  As a customer
  I want to log in to the store
  So that I can browse and purchase products

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I log in as "standard_user" with password "secret_sauce"
    Then I should see the products page

  Scenario: Login failure for locked out user
    When I log in as "locked_out_user" with password "secret_sauce"
    Then I should see an error message containing "locked out"

  Scenario Outline: Login failure for invalid credentials
    When I log in as "<username>" with password "<password>"
    Then I should see an error message containing "<error>"

    Examples:
      | username      | password       | error                              |
      | invalid_user  | wrong_password | Username and password do not match |
      | standard_user |                | Password is required               |
