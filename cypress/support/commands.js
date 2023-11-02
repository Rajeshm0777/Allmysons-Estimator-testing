// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

import login from "../Pajeobject.js/loginPage.po"
Cypress.Commands.add('login', (username, password) => {
    login.logoVerify().should("be.visible")
    login.getUsernameField().type(username)
    login.getPasswordField().type(password)
    login.clickField().click()
    login.getSubmitField().click()

})
Cypress.Commands.add('interstateLogin',(username,password)=>{
    cy.get('[class="jss30 extcustomIcon"]').should('be.visible')
    cy.get('#username').realTouch();
    cy.realType(username)
    cy.get('#password').realTouch();
    cy.realType(password)
    cy.get("#btnLOGIN").realClick();
})

    

