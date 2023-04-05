/// <reference types="cypress" />

describe('Navigation Bar', () => {
    it('Visit The Kitchen Sink', () => {
     cy.visit('http://zero.webappsecurity.com/index.html')
 
         cy.contains('Online Banking').click()
         cy.url().should('include', 'online-banking.html')
         cy.get('h1').should('be.visible')

         cy.contains('Feedback').click()
         cy.url().should('include', 'feedback.html')

         cy.contains('Zero Bank').click()
         cy.url().should('include', 'index.html')

    
    })
 });