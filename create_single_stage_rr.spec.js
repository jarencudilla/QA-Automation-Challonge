///<reference types="Cypress" />

describe('Create Single Stage Tournaments', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Login to Master Staging', function (){
    cy.login('Jaren', '12345678')
  });

  // Single Stage Round Robin