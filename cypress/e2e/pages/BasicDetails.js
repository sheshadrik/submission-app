import { fillInputField } from "./utils";

export const initializeBasicDetailsPage = ({firstName,lastName,dob,last4ssn}) => {
    cy.get('a#ApplyLoan').click();
    fillInputField('input[name=firstName]',firstName);
    fillInputField('input[name=lastName]',lastName);
    fillInputField('input[name=dob]',dob);
    fillInputField('input[name=last4ssn]',last4ssn);
    cy.get('button[name=continue]').click();
}