Feature: Board Management

  @smoke
  Scenario: Login with remember-me and session persists
    Given I open the login page
    When I login with valid credentials and enable remember me
    And I reload the page
    Then I should still be logged in

  Scenario: Create a board, rename it, archive it, and verify it is not listed
    Given I am logged in
    When I create a new board with name "Automation Board"
    And I rename the board to "Updated Automation Board"
    And I archive the board
    Then the board should not appear in the board list

  Scenario: Negative - Attempt to create board with more than 60 characters
    Given I am logged in
    When I attempt to create a board named "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    Then I should see a validation error message
