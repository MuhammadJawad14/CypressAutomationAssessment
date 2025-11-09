import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CardPage from "../../pages/cardPage";

When(
  "I drag the card {string} from {string} to {string}",
  (cardName: string, source: string, target: string) => {
    CardPage.dragCard(cardName, source, target);
  }
);

Then(
  "the card {string} should be visible in {string}",
  (cardName: string, columnName: string) => {
    CardPage.getColumn(columnName)
      .contains(cardName)
      .should("be.visible");
  }
);
