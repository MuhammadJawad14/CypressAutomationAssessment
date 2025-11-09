import selectors from "../support/selectors";

class CardPage {

  getColumn(columnName: string) {
    return cy.contains(selectors.board.columnTitle, columnName).parent();
  }

  getCard(cardName: string) {
    return cy.contains(selectors.board.cardTitle, cardName);
  }

  dragCard(cardName: string, sourceColumn: string, targetColumn: string) {
    this.getColumn(sourceColumn)
      .contains(selectors.board.cardTitle, cardName)
      .trigger("mousedown", { button: 0 });

    this.getColumn(targetColumn)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  }
}

export default new CardPage();
