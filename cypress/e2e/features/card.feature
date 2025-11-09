@ui @card @smoke
Feature: Card Management on Kanban Board

  As an authenticated user
  I want to drag and drop cards between columns
  So that I can organize my work efficiently

  Background:
    Given I login as "admin"

  Scenario: Drag a card from "To Do" to "In Progress"
    When I drag the card "Card A" from "To Do" to "In Progress"
    Then the card "Card A" should be visible in "In Progress"
