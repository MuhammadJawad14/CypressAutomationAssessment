import selectors from "../support/selectors";

class LoginPage {

  visit() {
    cy.visit("/login");
  }

  enterUsername(username: string) {
    cy.get(selectors.login.username).clear().type(username);
  }

  enterPassword(password: string) {
    cy.get(selectors.login.password).clear().type(password);
  }

  clickLogin() {
    cy.get(selectors.login.submit).click();
  }

  verifyDashboardVisible() {
    cy.get(selectors.dashboard.header).should("be.visible");
  }

  verifyErrorMessage(text: string) {
    cy.contains(selectors.login.errorMessage, text).should("be.visible");
  }
}

export default new LoginPage();
