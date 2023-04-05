describe('Basic Auth', function() {
    it('Successfully login by appending username and password in URL', function () {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
     
    Cypress.Commands.add('loginViaAPI', (
        email = Cypress.env('userEmail'),
        password = Cypress.env('userPassword')
      ) => {
        cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
          username: email,
          password,
        }).then((response) => {
          cy.setCookie('sessionId', response.body.sessionId)
          cy.setCookie('userId', response.body.userId)
          cy.setCookie('userName', response.body.userName)
          cy.visit('/#!/main')
        });
        })
     })
     
})