import selectors from "../support/selectors";

class BoardPage {

  clickCreateBoard() {
    cy.get(selectors.board.createBoardButton).click();
  }

  enterBoardName(name: string) {
    cy.get(selectors.board.boardNameInput).clear().type(name);
  }

  saveBoard() {
    cy.get(selectors.board.createSubmit).click();
  }

  renameBoard(newName: string) {
    cy.get(selectors.board.boardTitle).click();
    cy.get(selectors.board.boardTitleInput).clear().type(newName).type('{enter}');
  }

  archiveBoard() {
    cy.get(selectors.board.boardMenu).click();
    cy.get(selectors.board.archiveButton).click();
  }

  verifyBoardNotListed(name: string) {
    cy.contains(name).should('not.exist');
  }
}

export default new BoardPage();
