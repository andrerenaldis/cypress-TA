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

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#signin_button').click()
 
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('andre')
    cy.get('#user_password').type('invalid 222')
    cy.get('input[name="submit"]').click()
    cy.get('.alert-error').should('be.visible').and('contain.text','Login and/or password are wrong.')
    cy.fixture("user").then(user => {
       const username = user.username
       const password = user.password

       cy.get('#user_login').clear()
       cy.get('#user_login').type('username')
       cy.get('#user_password').clear()
       cy.get('#user_password').type('password')
       cy.get('input[name="submit"]').click()

      
       cy.get('h2').should('contain.text', 'Investment Accounts')
      
       cy.contains('username').click()
       cy.get('#logout_link').click()
       cy.get('#signin_button').should('contain.text', 'Signin')
       cy.get('div').should('contain.text', 'home')
    })
})
