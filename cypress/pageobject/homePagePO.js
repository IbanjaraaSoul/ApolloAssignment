import * as data from "../fixtures/data.json";
class homePagepo {
  selector = {
    pieChart_firstHalf:
      ".highcharts-label.highcharts-data-label.highcharts-data-label-color-1 > text > tspan",
    pieChart_restHalf:
      ".highcharts-label.highcharts-data-label.highcharts-data-label-color-0 > text > tspan",
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

  button_submit() {
    return cy.get("#user_form_submit");
  }

  input_firstName() {
    return cy.get("#user_first_name");
  }

  input_lastName() {
    return cy.get("#user_last_name");
  }

  input_email() {
    return cy.get("#user_email");
  }

  input_phone() {
    return cy.get("#user_phone");
  }

  input_password() {
    return cy.get("#user_password");
  }

  dropdown_state() {
    return cy.select("#user_state");
  }

  input_zipcode() {
    return cy.get("#user_zipcode");
  }

  button_upload() {
    return cy.get(".upload");
  }

  checkbox_agreement() {
    return cy.get("#user_email_optin");
  }

  icon_asterick(locator) {
    return cy.get(locator);
  }

  dropdown_occupation() {
    return cy.get("#user_occupation");
  }

  dropdown_speciality() {
    return cy.get("#user_specialty");
  }

  dropdown_state() {
    return cy.get("#user_state");
  }
}
export default new homePagepo();
