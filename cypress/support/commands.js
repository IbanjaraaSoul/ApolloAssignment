// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("isPieChartPercentageGreaterThanZero", (selector) => {
  cy.get(selector).then(($el) => {
    const value = parseFloat($el.text());
    expect(value).to.be.greaterThan(0);
  });
});

Cypress.Commands.add("sliderSelect", (selector, postion) => {
  // Calculate the position to slide to (for example, 50%)
  const desiredPosition = postion;
  const sliderWidth = 300; // Assuming the width of the slider is 300 pixels
  const positionInPixels = (desiredPosition / 100) * sliderWidth;

  // Simulate dragging the slider handle to the desired position
  cy.get(selector)
    .trigger("mousedown", { which: 1 }) // Start dragging by triggering 'mousedown' event
    .trigger("mousemove", { pageX: positionInPixels }) // Move the handle to the desired position
    .trigger("mouseup"); // Stop dragging by triggering 'mouseup' event
});
