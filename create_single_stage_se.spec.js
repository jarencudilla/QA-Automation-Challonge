describe('Create Single Stage Tournaments', function () {

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
    cy.get(".button-dropdown-menu > .item > .link" )
      .contains("href:/tournaments/new", {force: true})
      .click()

 });

 });