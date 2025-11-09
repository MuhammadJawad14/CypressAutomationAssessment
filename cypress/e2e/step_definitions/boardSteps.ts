import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/loginPage";
import BoardPage from "../../pages/boardPage";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I login with valid credentials and enable remember me", () => {
  LoginPage.loginWithRemember("admin@test.com", "Password123");
});

Then("I should still be logged in", () => {
  LoginPage.verifyLoggedIn();
});

Given("I am logged in", () => {
  LoginPage.login("admin@test.com", "Password123");
});

When("I create a new board with name {string}", (name: string) => {
  BoardPage.clickCreateBoard();
  BoardPage.enterBoardName(name);
  BoardPage.saveBoard();
});

When("I rename the board to {string}", (newName: string) => {
  BoardPage.renameBoard(newName);
});

When("I archive the board", () => {
  BoardPage.archiveBoard();
});

Then("the board should not appear in the board list", () => {
  BoardPage.verifyBoardNotListed("Updated Automation Board");
});

When("I attempt to create a board named {string}", (longName: string) => {
  BoardPage.clickCreateBoard();
  BoardPage.enterBoardName(longName);
  BoardPage.saveBoard();
});

Then("I should see a validation error message", () => {
  cy.contains("Maximum name length is 60 characters").should("be.visible");
});
