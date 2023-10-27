
describe('api',()=>{
    it('tokenapi',()=>{
      cy.readFile('cypress/fixtures/ids.json').then((interstate)=>{
        cy.request({
          method: 'POST',
          url : 'http://pricingapistaging.allmysons.com/Estimator/IsSignSaved',
          headers:{
            "Content-Type": "application/x-www-form-urlencoded",
          },
          
          body:{"CustomerID" : interstate.customerid,
                 "SignType": "INTCUSTSIGN"
          }  

        }).then((response)=>{
          expect(response.status).equal(200);
            console.log(response.body);
          var intercust = response.body;
            cy.log(intercust)
            expect(intercust).to.equal(true)
        })

      })

    })
})