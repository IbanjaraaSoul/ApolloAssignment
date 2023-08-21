import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import utilFuncs from "../../utils/reusableFuncs";
import * as data from "../../fixtures/data.json";
var res;

Given("the API is hit", () => {
  res = utilFuncs.getApiCall(data.getUserURL, data.header);
});

When("verify that the response code is ok", () => {
  res.then((response) => {
    expect(response.status).to.equal(200);
  });

  And(
    "verify that ID email first_name last_name from responses for all users matches with expected data",
    () => {
      //load fixture data
      cy.fixture("users").then((fixtureData) => {
        res.then((response) => {
          const users = response.body.data;
          expect(users).to.be.an("array");
          expect(users).to.have.lengthOf(6);
          users.forEach((user, index) => {
            const fixtureUser = fixtureData.data[index];
            // Validate "id", "email", "first_name", and "last_name" for each user
            expect(user.id).to.equal(fixtureUser.id);
            expect(user.email).to.equal(fixtureUser.email);
            expect(user.first_name).to.equal(fixtureUser.first_name);
            expect(user.last_name).to.equal(fixtureUser.last_name);
          });
        });
      });
    }
  );
});
