import { initializeBasicDetailsPage } from "./pages/BasicDetails";
import { initializeContactDetailsPage } from "./pages/ContactDetails";
import { ReviewDetailsPage } from "./pages/ReviewDetails";

describe('Home Page', () => {
  it('Basic Details', () => {
    cy.visit('http://localhost:3000/');
    initializeBasicDetailsPage({firstName: 'John', lastName: 'Mike', dob: '09/09/1990', last4ssn: '3456'});        
  });

  it('Contact Details', () => {
    cy.visit('http://localhost:3000/');
    initializeBasicDetailsPage({firstName: 'John', lastName: 'Mike', dob: '09/09/1990', last4ssn: '3456'});        
    initializeContactDetailsPage({phone: '8483913395', email: 'test.k@outlook.com', address: '832 dollar dr edison nj 08817'});  
  });

  it('Review Details', () => {
    cy.visit('http://localhost:3000/');
    initializeBasicDetailsPage({firstName: 'John', lastName: 'Mike', dob: '09/09/1990', last4ssn: '3456'});        
    initializeContactDetailsPage({phone: '8483913395', email: 'test.k@outlook.com', address: '832 dollar dr edison nj 08817'});  
    ReviewDetailsPage();
  });
})

