describe('Create Single Stage Tournaments', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Login to Master Staging', function (){
    //  cy.visit("https://master.challonge.online/user_session/new?continue=%2F");
    //  cy.wait(1000)
    //  cy.get(".form-group > #user_session_username_or_email")
    //    .type('Jaren')
    //  cy.get(".form-group > #user_session_password")
    //    .type('12345678')
    //  cy.get(".form-group > .btn")
    //    .click()
    cy.login('Jaren', '12345678')
  });
  
  it('Create Tournament Single Elimination', function (){

    cy.get(".button-dropdown")
      .click();
    cy.get(".button-dropdown-menu" )
      .contains("Tournament")
      .click({force: true})
    // cy.get(".form-group > #user_session_username_or_email")
    //   .type('Jaren')
    // cy.get(".form-group > #user_session_password")
    //   .type('12345678')
    // cy.get(".form-group > .btn")
    //   .click()
    cy.updatelogin('Jaren', '12345678')
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
      //adding participants
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
      .type('Test 7{enter}')
      .type('Test 8{enter}')
    cy.get('.control-group > .pull-right > .btn')
      .click()
    cy.get(".tabbed-navlist")
      .contains("Bracket")
      .click({force: true})
    // Start Tournament
    cy.get('.button_to > .btn')
      .click()
    });
  describe('Reporting Scores', () => {
    it('Should report scores for all participant pairs', () => {
            // cy.get(".form-group > #user_session_username_or_email")
      //  .type('Jaren')
      // cy.get(".form-group > #user_session_password")
      //  .type('12345678')
      // cy.get(".form-group > .btn")
      //  .click()
      // loop until all pairs are scored
      var i = 0;
      for (i = 0; i < 3 ; i++) {
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
      cy.updatelogin('Jaren', '12345678')
      cy.get(':nth-child(6) > .match-report > .fa')
        .click()
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('9',{ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('6',{ force: true })
      cy.get('.mid > .btn')
      }
    });

  });

 });