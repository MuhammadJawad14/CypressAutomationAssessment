import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import selectors from "../../support/selectors";

When("I attempt to edit card {string}", (cardName: string) => {
  cy.contains(selectors.board.cardTitle, cardName)
    .click();
});

Then("edit controls should be disabled", () => {
  cy.get(selectors.board.editButton).should("be.disabled");
});

When("I send an update request for card {string}", () => {
  cy.request({ method: "PUT", url: "/api/cards/1", failOnStatusCode: false }).as("update");
});

Then("the response should be 403", () => {
  cy.get("@update").its("status").should("eq", 403);
});
