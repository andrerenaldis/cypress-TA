describe('Delete Users', () => {
    it('Successfully delete Users', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2).then((response)=> {
        expect(response.status).equal(204) 
      }) 
    });


});
  



 