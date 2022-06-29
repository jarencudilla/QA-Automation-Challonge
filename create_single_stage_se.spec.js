describe('Create Single Stage Tournaments', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Login to Master Staging', function (){
    cy.login('Jaren', '12345678')
  });

  it('Create Tournament Single Elimination', function (){

    cy.get(".button-dropdown")
      .click();
    cy.get(".button-dropdown-menu" )
      .contains("Tournament")
      .click({force: true})
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
    // loop until all pairs are scored
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
      if (cy.get('.form-group > #user_session_username_or_email')) {
        cy.updatelogin('Jaren', '12345678')
          //loop scoring 4 times  
          for (var i = 0; i < 3 ; i++) {
            cy.get(':nth-child(6) > .match-report > .fa')
              .click({force: true, multiple: true})
              cy.wait(300)
            cy.get(':nth-child(1) > :nth-child(2) > .form-control')
              .type('9',{force: true})
            cy.get(':nth-child(2) > :nth-child(2) > .form-control')
              .type('6',{force: true})
            cy.get('.mid > .btn')
              .click({force: true})
            cy.wait(2000)
          }
        } else {
          for (var i = 0; i < 3 ; i++) {
            cy.get(':nth-child(6) > .match-report > .fa')
              .click({force: true})
            cy.get(':nth-child(1) > :nth-child(2) > .form-control')
              .type('9',{force: true})
            cy.get(':nth-child(2) > :nth-child(2) > .form-control')
              .type('6',{force: true})
            cy.get('.mid > .btn')
              .click({force: true})
            cy.wait(1000)
          }
        }})
        //2nd round of scoring
  });
  describe('Reporting Scores Round 2', () => {
    it('Should report scores for the 2nd round all participant pairs', () => {
    // loop until all pairs are scored
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
    if (cy.get('.form-group > #user_session_username_or_email')) {
      cy.updatelogin('Jaren', '12345678')
    //loop scoring 2 times  
      for (var i = 0; i < 1 ; i++) {
        cy.get(':nth-child(6) > .match-report > .fa')
          .click({force: true, multiple: true})
        cy.wait(300)
        cy.get(':nth-child(1) > :nth-child(2) > .form-control')
          .type('3',{force: true})
        cy.get(':nth-child(2) > :nth-child(2) > .form-control')
          .type('7',{force: true})
        cy.get('.mid > .btn')
          .click({force: true})
        cy.wait(2000)
     }
    } else {
      for (var i = 0; i < 1 ; i++) {
        cy.get(':nth-child(6) > .match-report > .fa')
          .click({force: true})
        cy.get(':nth-child(1) > :nth-child(2) > .form-control')
          .type('6',{force: true})
        cy.get(':nth-child(2) > :nth-child(2) > .form-control')
          .type('11',{force: true})
        cy.get('.mid > .btn')
          .click({force: true})
        cy.wait(1000)
      }
    }})
  });
  describe('Reporting Scores 3rd Round', () => {
    it('Should report scores for the 3rd round all participant pairs', () => {
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
    if (cy.get('.form-group > #user_session_username_or_email')) {
      cy.updatelogin('Jaren', '12345678')
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true, multiple: true})
      cy.wait(300)
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('33',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('32',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(2000)
    } else {
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true})
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('41',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('44',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(1000)
    }})
  });
  describe('Reporting Scores Semi Final Round', () => {
    it('Should report scores for the Semi Final Round', () => {
    // loop until all pairs are scored
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
    if (cy.get('.form-group > #user_session_username_or_email')) {
      cy.updatelogin('Jaren', '12345678')
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true, multiple: true})
      cy.wait(300)
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('33',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('32',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(2000)
    } else {
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true})
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('41',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('44',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(1000)
    }})
  });
  describe('Reporting Scores Final Round', () => {
    it('Should report scores for the Final Round', () => {
    // loop until all pairs are scored
      cy.get(".tabbed-navlist")
        .contains("Report Scores")
        .click({force: true})
    if (cy.get('.form-group > #user_session_username_or_email')) {
      cy.updatelogin('Jaren', '12345678')
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true, multiple: true})
      cy.wait(300)
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('12',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('13',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(2000)
    } else {
      cy.get(':nth-child(6) > .match-report > .fa')
        .click({force: true})
      cy.get(':nth-child(1) > :nth-child(2) > .form-control')
        .type('13',{force: true})
      cy.get(':nth-child(2) > :nth-child(2) > .form-control')
        .type('12',{force: true})
      cy.get('.mid > .btn')
        .click({force: true})
      cy.wait(1000)
    }})
  });
});