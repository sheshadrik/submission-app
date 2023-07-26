import { fillInputField } from "./utils";

export const initializeContactDetailsPage = ({phone,email,address}) => {    
    fillInputField('input[name=phone]',phone);
    fillInputField('input[name=email]',email);
    fillInputField('input[name=address]',address);
    cy.get('button[name=continue]').click();
}