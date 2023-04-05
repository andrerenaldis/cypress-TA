/// <reference types="cypress" />


describe('Using Interacting Element', () => {
  let data;
  before(() => {
    cy.fixture('cek').then((fData) => {
        data = fData;
    })
  })
  it('Visit To web login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', 'login.html')
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')
    cy.get('[type="checkbox"]').check() 
    cy.get('#user_login').clear()
    cy.get('#user_login').type(data.username)
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(data.password)
    cy.get('input[name="submit"]').click()
    cy.get('.alert').should('have.text','\n                    Login and/or password are wrong.\n                ')
  })
});