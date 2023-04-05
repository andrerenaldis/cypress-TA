/// <reference types="cypress" />


describe('My First Test', () => { 
    it('Visit WEB', () => { 
        cy.visit('https://www.saucedemo.com'); 
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="submit"]').click()
        cy.pause()
        cy.get('input[name="remove-sauce-labs-backpack"]').click()
        cy.get('input[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('input[name="item_4_title_link"]').click()
        
    },) 
  });