/// <reference types="cypress" />

describe('example to-do app', () => {
  it('Visit The Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
      cy.get('h1').contains('Kitchen Sink')
      cy.contains('get').click()
      cy.url().should('include', '/commands/querying')
  });
});

// assertion seperti konfirmasi apa yang kita lakukan benar