/// <reference types="cypress" />

describe('Searchbox test', () => {
   it('Visit The Kitchen Sink', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')

        cy.get('#searchTerm').type('online {enter}')

        cy.get('h2').should('contain.text', 'Search Result')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text', 'Zero - Online Statements')
   
   })
});