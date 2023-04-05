/// <reference types="cypress" />


describe('Some Test', () => {

        it('Login correct', () => {

        cy.visit('http://www.saucedemo.com')
        cy.get ('.selector-in-question').debug()
    })
})
      
   
