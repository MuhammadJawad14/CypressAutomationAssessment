@rbac @smoke
Feature: RBAC Permissions

  Scenario: Viewer user cannot edit cards
    Given I login as "viewer"
    When I attempt to edit card "Card A"
    Then edit controls should be disabled

  Scenario: Viewer receives 403 when calling edit API
    Given I login as "viewer"
    When I send an update request for card "Card A"
    Then the response should be 403
