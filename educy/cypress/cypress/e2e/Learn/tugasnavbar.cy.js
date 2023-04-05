/// <reference types="cypress" />

describe('Navigation Bar', () => {
    it('Visit The Kitchen Sink', () => {
     cy.visit('http://zero.webappsecurity.com/index.html')
 
         cy.contains('Online Banking').click()
         cy.url().should('include', 'online-banking.html')
         cy.get('h3').should('contain.text', 'Sign in')
         cy.get('h1').should('be.visible')

         cy.contains('Feedback').click()
         cy.url().should('include', 'feedback.html')
         cy.get('p').should('contain.text', 'Frequently Asked Questions')

         cy.contains('Zero Bank').click()
         cy.url().should('include', 'index.html')
         cy.get('a').should('contain.text', 'More Services')

    
    })
 });