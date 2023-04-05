it('Add a new user', () => {
       var user = {
           "name": 'andre',
           "job": 'leader'
       } 
       cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
           expect(response.status).equal(201)
           assert.isObject(user)
       })
   })
