/// <reference types="cypress" />


describe('Using Interacting Element', () => {
    let data;
    before(() => {
      cy.fixture('user').then((fData) => {
          data = fData;
      })
    })
    it('Visit To web login', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.url().should('include', 'login.html')

      cy.login()


    })
  });