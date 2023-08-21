import * as data from "../fixtures/data.json";

class homePagepo {
  selector = {
    pieChart_firstHalf:
      ".highcharts-label.highcharts-data-label.highcharts-data-label-color-1 > text > tspan",
    pieChart_restHalf:
      ".highcharts-label.highcharts-data-label.highcharts-data-label-color-0 > text > tspan",
    slider_amount: "#loanamountslider > span",
    slider_rate: "#loaninterestslider > span",
    slider_tenure: "#loantermslider > span",
    individual_bars: "g.highcharts-series-0 rect.highcharts-point",
  };

  input_loanAmount() {
    return cy.get("#loanamount");
  }

  input_loanInterest() {
    return cy.get("#loaninterest");
  }

  input_loanTerm() {
    return cy.get("#loanterm");
  }

  label_header() {
    return cy.contains(data.homePageHeader);
  }

  label_articleHeader() {
    return cy.contains(data.articleHeader);
  }

  label_loanEMI() {
    return cy.get("#emiamount > p > span");
  }

  pieChart() {
    return cy.get(".highcharts-series-group").first();
  }

  label_personalLoan() {
    return cy.contains(data.personalLoanAmount);
  }

  tab_personalLoan() {
    return cy.get("#personal-loan > a");
  }

  window_calendar(month) {
    return cy.get(".month").eq(month);
  }

  barChart() {
    return cy.get(".highcharts-plot-background");
  }

  group_barChart() {
    return cy.get("g.highcharts-series-group");
  }

  tooltip_bar(num) {
    return cy
      .get(
        "g.highcharts-series-group g.highcharts-series-0 rect.highcharts-point"
      )
      .eq(num);
  }

  label_tooltip() {
    return cy.get(".highcharts-tooltip tspan");
  }
}
export default new homePagepo();
