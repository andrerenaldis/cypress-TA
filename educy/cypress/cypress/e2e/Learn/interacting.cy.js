/// <reference types="cypress" />

describe('Using Interacting Element', () => {
    
        it('test', () => {
      cy.visit('https://www.saucedemo.com',{timeout: 10000})

    
        cy.get('#user_name').clear()
        cy.get('#user_name').type('username')
 
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('password')
});
});