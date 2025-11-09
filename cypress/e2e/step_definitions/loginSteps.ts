import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pages/loginPage";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I enter username {string} and password {string}", (username: string, password: string) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
});

When("I click the login button", () => {
  LoginPage.clickLogin();
});

Then("I should be redirected to the dashboard", () => {
  LoginPage.verifyDashboardVisible();
});

Then("I should see an error message {string}", (message: string) => {
  LoginPage.verifyErrorMessage(message);
});
