import addNewLead from "../Pajeobject.js/Addnewlead.po"
import newlead from "../fixtures/addNewleadCreds.json"
import leadDetails from "../Pajeobject.js/leadDetails.po"
import leadData from "../fixtures/leadDetailsPage.json"
import cubeSheet from "../Pajeobject.js/cubeSheet.po"
import canvas from "../Pajeobject.js/canvas.po"
import estimator from "../Pajeobject.js/estimateForm.po"
var moment = require('moment');

describe('estimator', () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    }
    )
    cy.visit('/')
    cy.login('venkatesh', 'Cms@123')
    //cy.url().should('eq', 'http://estimatorapptesting.allmysons.com/#/ams/calendar/0/0/0')
  })
  it('addNewleadFunction', () => {
    cy.wait(6000)
    addNewLead.addlead().realClick(); ({ force: true })
    cy.wait(6000)
    var currentDate = moment().format("DD-MM-YYYY");
    addNewLead.addnewleadmodule(newlead.moveType, newlead.sourceType, newlead.FirstName,
      newlead.LastName, currentDate, newlead.OrginZip, newlead.Email, newlead.PhoneNumber, newlead.PhoneNumber)

    cy.wait(10000)
    //continue Lead Details Page 
    leadDetails.leadModule(leadData.pagehead, leadData.phoneNum2, leadData.orginType,
      leadData.orginZip, leadData.destinationType, leadData.Sucessmsg)

    //Continue  Cube SheatPage
    cubeSheet.cubeMethod()
    //DR Room 
    //AMS
    //continue Estimator Sheet Page
    estimator.estimatorForm()

    //continue signature part

    canvas.canvasSignature()

    cy.get('[ng-click="emailPopup()"]').realClick();
    cy.wait(7000)
    cy.get('[ng-click="emailSend(CustomerEmail,Body)"]').click({ force: true })
    cy.wait(9000)
    cy.contains('Email sent successfully.', { timeout: 60000 }).should('be.visible')
    cy.get('[ng-click="$buttonTapped(button, $event)"]').realClick();
    cy.wait(2000)
    cy.url().then((url) => {
    var x = url.split("/")[6]
    cy.log(x)

    const payload = {
        "CustomerID": x,
        "SignType": "ESTAPPESTSIGN"
      }
      cy.request('POST', "http://pricingapistaging.allmysons.com/Estimator/IsSignSaved", payload).then((response) => {

        expect(response.status).equal(200);
        console.log(response.body);
  
        let status = response.body;
        expect(status).to.equal(true)


      })
    })

  })

})