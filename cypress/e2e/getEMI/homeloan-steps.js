import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import utilFuncs from "../../utils/reusableFuncs";
import homePagepo from "../../pageobject/homePagePO";

Given("user navigates to the app URL", () => {
  cy.visit("/");
});

When("app loads successfully", () => {
  homePagepo.label_header().should("be.visible");
});

Then("verify the EMI with below data", (dataTable) => {
  dataTable.rows().forEach((row) => {
    const [amount, rate, tenure] = row.map(parseFloat);
    homePagepo.input_loanAmount().clear().type(amount);
    homePagepo.input_loanInterest().clear().type(rate);
    homePagepo.input_loanTerm().clear().type(tenure);
    homePagepo.label_articleHeader().click();
    homePagepo
      .label_loanEMI()
      .should(
        "have.text",
        Math.round(
          utilFuncs.calculateEMI(amount, rate, tenure)
        ).toLocaleString()
      );
  });
});

And("verify availability of pie chart", () => {
  homePagepo.pieChart().should("be.visible");
});

And("verify that pie char percentage is greater than zero", () => {
  utilFuncs.isPieChartPercentageGreaterThanZero(
    homePagepo.selector.pieChart_firstHalf
  );
  utilFuncs.isPieChartPercentageGreaterThanZero(
    homePagepo.selector.pieChart_restHalf
  );
});
