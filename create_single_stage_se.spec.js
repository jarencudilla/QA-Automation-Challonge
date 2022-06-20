describe('Create Single Stage Tournaments', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Login to Master Staging', function (){
     cy.visit("https://master.challonge.online/user_session/new?continue=%2F");
     cy.wait(1000)
     cy.get(".form-group > #user_session_username_or_email")
       .type('Jaren')
     cy.get(".form-group > #user_session_password")
       .type('12345678')
     cy.get(".form-group > .btn")
       .click()
  });

  it('Create Tournament Single Elimination', function (){
    cy.get(".button-dropdown")
      .click();
    // cy.get(".button-dropdown-menu > :nth-child(1)" )
    //   .click({force: true})
    cy.get(".button-dropdown-menu" )
      .contains("Tournament")
      .click({force: true})
    cy.get(".form-group > #user_session_username_or_email")
      .type('Jaren')
    cy.get(".form-group > #user_session_password")
      .type('12345678')
    cy.get(".form-group > .btn")
      .click()
    cy.get('#tournament_name')
      .type('Cypress Test - SE')
    cy.get('.trumbowyg-editor')
      .type('Cypress Test - SE')
    cy.get('#tournament_game_name')
      .type('Battle City')
    cy.get('.single-stage > #tournament_tournament_type')
      .select('Single Elimination')
    cy.get('#mark_as_tentative')
      .click()
    cy.get('.right > .btn')
      .click()
    // cy.wait(5000)
    // cy.get(':nth-child(8) > .link')
    // cy.get('.chl-text')
    cy.get(".tabbed-navlist")
      .contains("Participants")
      .click({force: true})
    cy.get('.clickable')
      .click()
    cy.get('.controls > .form-control')
      .type('Test 1{enter}')
      .type('Test 2{enter}')
      .type('Test 3{enter}')
      .type('Test 4{enter}')
      .type('Test 5{enter}')
      .type('Test 6{enter}')
    cy.get('.control-group > .pull-right > .btn')
      .click()
  });

 });