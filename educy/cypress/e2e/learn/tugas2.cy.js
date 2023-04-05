/// <reference types="cypress" />

describe('My First Test', () => {
    it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()


        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('andresihombing15@gmail.com')
        .should('have.value', 'andresihombing15@gmail.com')
    });
  });