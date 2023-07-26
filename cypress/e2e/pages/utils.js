export const fillInputField = (selector,value) => {
    cy.get(selector).type(value);
  }