/// <reference types="cypress" />

describe('Browser actions', () => {
    it('should load correct url', () => {
        cy.visit('https://example.com/',{timeout: 10000})
        cy.url().should('include', 'example.com')
    });
});