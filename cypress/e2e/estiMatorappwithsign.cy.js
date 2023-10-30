import addNewLead from "../Pajeobject.js/Addnewlead.po"
import newlead from "../fixtures/addNewleadCreds.json"
import leadDetails from "../Pajeobject.js/leadDetails.po"
import leadData from "../fixtures/leadDetailsPage.json"
import cubeSheet from "../Pajeobject.js/cubeSheet.po"
import canvas from "../Pajeobject.js/canvas.po"
import estimator from "../Pajeobject.js/estimateForm.po"
import interstate from "../Pajeobject.js/interState/interstateflow.po"

var moment = require('moment');
var CiD;
var customerToken;

describe('estimator', () => {

    it('addNewleadFunction', () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        })

        cy.visit('/')
        cy.login('venkatesh', 'Cms@123')

        cy.wait(6000)
        addNewLead.addlead().realClick(); ({ force: true })
        cy.wait(6000)
         var currentDate = moment().format("MM-DD-YYYY");
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

        cy.contains('Email sent successfully.', { timeout: 60000 }).should('be.visible')
        cy.get('[ng-click="$buttonTapped(button, $event)"]').realClick();
        cy.wait(3000)
        cy.url().then((url) => {
            CiD = url.split("/")[6]
            cy.log(CiD)
            cy.writeFile("cypress/fixtures/ids.json", { customerid: CiD })

            const payload = {
                "CustomerID": CiD,
                "SignType": "ESTAPPESTSIGN"
            }
            cy.request('POST', "http://pricingapistaging.allmysons.com/Estimator/IsSignSaved", payload).then((response) => {
                expect(response.status).equal(200);
                console.log(response.body);
                let cust = response.body;
                expect(cust).to.equal(true)

            })
            const payload2 = {
                "CustomerID": CiD
            }
            cy.request('POST', "http://pricingapistaging.allmysons.com/Estimator/getAccessToken", payload2).then((response) => {
                expect(response.status).equal(200);
                console.log(response.body);
                customerToken = response.body;
                cy.log(customerToken)
                cy.readFile('cypress/fixtures/ids.json').then((data) => {
                    data.token = customerToken
                    cy.writeFile('cypress/fixtures/ids.json', data)
                })

            })
        })
    })

    it("continue bol2", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        })
        cy.readFile('cypress/fixtures/ids.json').then((data) => {
            cy.visit('https://interstatedev.allmysons.com/?customerid=' + data.customerid + '&customerToken=' + data.token)
        })
        cy.wait(3000)
        interstate.continuebuttonsMethod()
        cy.wait(3000)
        interstate.CanvasCustomerSignatureMethod()

        cy.xpath('(//span[@class="MuiTouchRipple-root"])[6]').realClick();
        cy.wait(4000)
        cy.readFile('cypress/fixtures/ids.json').then((interstate) => {
            cy.request({
                method: 'POST',
                url: 'http://pricingapistaging.allmysons.com/Estimator/IsSignSaved',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: {
                    "CustomerID": interstate.customerid,
                    "SignType": "INTCUSTSIGN"
                }
            }).then((response) => {
                expect(response.status).equal(200);
                console.log(response.body);
                var intercust = response.body;
                cy.log(intercust)
                expect(intercust).to.equal(true)
            })

        })
        cy.wait(3000)
        cy.xpath('(//span[@class="MuiTouchRipple-root"])[7]').realClick();
        cy.wait(5000)
        cy.xpath('(//span[@class="MuiTouchRipple-root"])[8]').realClick();
        cy.wait(4000)
        cy.xpath('(//span[@class="MuiTouchRipple-root"])[9]').realClick();

    })

})  