@ui @login @smoke
Feature: User Login

  As a registered user
  I want to log in to the application
  So that I can access my dashboard

  Scenario: Successful Login as Admin
    Given I open the login page
    When I enter username "admin" and password "admin123"
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Login with invalid credentials
    Given I open the login page
    When I enter username "wrong" and password "wrongpass"
    And I click the login button
    Then I should see an error message "Invalid username or password"
