import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import utilFuncs from "../../utils/reusableFuncs";
import homePagepo from "../../pageobject/homePagePO";

When("user navigates to the personal loan tab", () => {
  homePagepo.tab_personalLoan().click();
  homePagepo.label_personalLoan().should("be.visible");
});

When("set the personal loan slider with below data", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    const amountPos = parseFloat(row.amountPageX.split(":")[1]);
    const ratePos = parseFloat(row.ratePageX.split(":")[1]);
    const tenurePos = parseFloat(row.tenurePageX.split(":")[1]);
    utilFuncs.sliderSelect(homePagepo.selector.slider_amount, amountPos);
    utilFuncs.sliderSelect(homePagepo.selector.slider_rate, ratePos);
    utilFuncs.sliderSelect(homePagepo.selector.slider_tenure, tenurePos);
  });
});

When("change the month from the calendar widget", () => {
  cy.get("#startmonthyear")
    .click()
    .then(() => {
      homePagepo.window_calendar(5).click();
    });
});

When("check the availability of bar chart", () => {
  homePagepo.barChart().should("be.visible");
});

When("count the number of bars available", () => {
  // Use cy.get() to select all the rectangles representing the bars in the chart
  homePagepo
    .group_barChart()
    .find(homePagepo.selector.individual_bars)
    .its("length")
    .then((count) => {
      // 'count' variable will contain the number of bars in the chart
      cy.log("Number of bars:", count);
    });
});

When("Read the values from any one bar tool tip", () => {
  // Use cy.get() to select the bars
  homePagepo.tooltip_bar(1).trigger("mouseover", { force: true });

  // Get the tooltip text and print it to the console
  homePagepo
    .label_tooltip()
    .invoke("text")
    .then((tooltipText) => {
      cy.log("Tooltip Text:", tooltipText);
    });
});
