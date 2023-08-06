class utilFuncs {
  isLabelPresent(labeltext) {
    return cy.contains(labeltext);
  }

  calculateEMI(principal, interestRate, loanTenureYears) {
    const r = interestRate / (12 * 100);
    const n = loanTenureYears * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(2);
  }

  isPieChartPercentageGreaterThanZero(selector) {
    cy.get(selector).then(($el) => {
      const value = parseFloat($el.text());
      expect(value).to.be.greaterThan(0);
    });
  }

  sliderSelect(selector, postion) {
    // Calculate the position to slide to (for example, 50%)
    const desiredPosition = postion;
    const sliderWidth = 300; // Assuming the width of the slider is 300 pixels
    const positionInPixels = (desiredPosition / 100) * sliderWidth;

    // Simulate dragging the slider handle to the desired position
    cy.get(selector)
      .trigger("mousedown", { which: 1 }) // Start dragging by triggering 'mousedown' event
      .trigger("mousemove", { pageX: positionInPixels }) // Move the handle to the desired position
      .trigger("mouseup"); // Stop dragging by triggering 'mouseup' event
  }

  getApiCall(passUrl, passHeader) {
    // using cy.api which is plugin for api call
    return cy.api({
      method: "GET",
      url: passUrl,
      headers: passHeader,
    });
  }
}

export default new utilFuncs();
