describe('Update Users', () => {
    it('Successfully Update User', () => {
        var user ={
            "name": 'Andre Renaldy',
            "job": 'Leader QA'
        

        }
        cy.request('PUT', 'https:reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)  //untuk cek assertion apakah dibody ada user update
        
        })
          
    });
 });
 