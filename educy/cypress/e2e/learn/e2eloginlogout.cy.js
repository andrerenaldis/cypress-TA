/// <reference types="cypress" />

describe('Login test', () => {
    it('Visit The Kitchen Sink', () => {
     cy.visit('http://zero.webappsecurity.com/index.html')
     cy.url().should('include', 'index.html')
     cy.login()
    
    })
 });