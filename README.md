# Challonge-Tests
Cypress Automation Tests for Challonge Master Staging.

## What I've learned creating Cypress tests:
Let's start with creating a test,
nameofyourtest.spec.js
This is the JavaScript function syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
To run a Cypress test in VSCode's terminal:
You type "npx cypress run"
This command opens up Cypress Test Runner
Where it's easier to run Cypress tests individually
I start my test using Mocha's BDD "describe" and "it"
https://mochajs.org/#bdd
describe('Array', function () {
  before(function () {
    // ...
  });
For assertions, Cypress uses Chai
https://www.chaijs.com/api/bdd/ mostly for "expect"
My sample Cypress test : Login to master.challonge.online
describe('Visit Challonge Master Staging', function () {

   it('Visit Master staging', function (){
      cy.visit("https://master.challonge.online/");
      cy.wait(1000)
   });
   it('Login to Master', function (){
      cy.visit("https://master.challonge.online/user_session/new?continue=%2F");
      cy.wait(1000)
      cy.get(".form-group > #user_session_username_or_email")
        .type('Jaren')
      cy.get(".form-group > #user_session_password")
        .type('12345678')
      cy.get(".form-group > .btn")
        .click()
   });

  });
I mostly use "cy.get" https://docs.cypress.io/api/commands/get, and "cy.click" https://docs.cypress.io/api/commands/click
Also, I make it a habit to open a new browser and use devtools (Right click on a site -> select inspect)
So you can check the DOM elements you would be targeting for your tests.
(See screenshot)
Don't worry about picking the wrong element, Cypress will definitely inform you via the Testrunner if it can't find what you want the test to look for or if there is an error. So you can modify/fix your test immediately without combing for tons of error messages and/or vague error codes.
(Optional)
I use VSCode https://code.visualstudio.com/download to create my Cypress tests and these plugins help make my life easier:
ES6 Mocha Snippets https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets
Cypress Snippets https://marketplace.visualstudio.com/items?itemName=andrew-codes.cypress-snippets
Cypress Helper https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper
Hopefully, this helps you get started in your Cypress journey.
