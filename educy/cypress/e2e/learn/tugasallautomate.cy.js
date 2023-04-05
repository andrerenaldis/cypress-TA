/// <reference types="cypress" />


describe('My First Test', () => { 
    it('Visit WEB', () => { 
        cy.visit('https://www.saucedemo.com'); 
        //login
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="submit"]').click()
        cy.pause()
        cy.get('div').should('contain.text', 'Products') 
        //Menambahkan dan menghapus barang pesanan
        cy.get('input[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('input[name="remove-sauce-labs-backpack"]').click()
        //melihat product Tas
        cy.get('input[name="item_4_title_link"]').click()
        cy.get('div').should('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.') 
        //kembali ke Home Page
        cy.get('input[name="back-to-products"]').click()
        cy.get('div').should('contain.text', ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy') 
    },) 
  });