describe('Delete Users', () => {
    it('Update user', () => {
        var newUser = {
            "name": 'Oim Trust',
            "job": 'Engineering Manager'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    })
 
 
});