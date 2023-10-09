import addNewLead from "../Pajeobject.js/Addnewlead.po"
import newlead from "../fixtures/addNewleadCreds.json"
import leadDetails from "../Pajeobject.js/leadDetails.po"
import leadData from "../fixtures/leadDetailsPage.json"
import cubeSheet from "../Pajeobject.js/cubeSheet.po"
import canvas from "../Pajeobject.js/canvas.po"
var moment = require('moment');

describe('estimator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('venkatesh', 'Cms@123')
    cy.url().should('eq', 'http://estimatorapptesting.allmysons.com/#/ams/calendar/0/0/0')
  })
  it('addNewleadFunction', () => {
    cy.wait(6000)
    addNewLead.addlead().realClick(); ({ force: true })
    cy.wait(6000)
    var currentDate = moment().format("DD-MM-YYYY");
    addNewLead.addnewleadmodule(newlead.moveType, newlead.sourceType, newlead.FirstName,
      newlead.LastName, currentDate, newlead.OrginZip, newlead.Email, newlead.PhoneNumber, newlead.PhoneNumber)

    cy.wait(7000)
    //continue Lead Details Page 
    leadDetails.leadModule(leadData.pagehead, leadData.phoneNum2, leadData.orginType,
      leadData.destinationType, leadData.orginZip, leadData.Sucessmsg)

    // leadDetails.leadDetailsHeader().should("have.text", "Lead Details")
    // leadDetails.getPhone2().focus();
    // cy.realType(leadData.phoneNum2);
    // cy.wait(4000)
    // leadDetails.selectOrginType().realTouch().select(leadData.orginType)
    // cy.wait(4000)
    // leadDetails.selectDestinationType().realTouch().select(leadData.destinationType)
    // leadDetails.destinationZipcode().clear()
    // cy.realType(leadData.orginZip)
    // leadDetails.clickSaveBtn().click({ force: true });
    // cy.wait(6000)
    // leadDetails.successMsg().should('have.text', 'AMS Estimator')
    // leadDetails.clickOkBtn().click().should("be.visible")
    // cy.wait(4000)
    //Continue  Cube SheatPage

    cubeSheet.clickOnCubeSheet().realClick()
    cy.wait(6000)
    cubeSheet.selectLrRoom().realClick()
    //Articles
    cubeSheet.selectArtBookcase().click()
    cubeSheet.selectArtChair().click()
    cubeSheet.selectArtCurio().click()
    cubeSheet.selectArtLamp().click()
    cubeSheet.selectArtPictures().click()
    ///AMS Actions
    cy.xpath('(//p[text()="3.0"])[1]').click()
    cy.xpath('(//p[text()="1.5"])[1]').click()
    cy.xpath('(//p[text()="4.5"])[1]').click()
    cy.xpath('(//p[text()="BB"])[1]').click()
    //PBS Actions
    //cy.xpath('(//p[text()="3.0"])[2]').click()
    //cy.xpath('(//p[text()="1.5"])[2]').click()
    //cy.xpath('(//p[text()="4.5"])[2]').click()
    //cy.xpath('(//p[text()="BB"])[2]').click()
    //cy.xpath('//a[text()="Save"]').click({ force: true })
    cy.wait(5000)

    //DR Room
    cy.xpath('(//div[@ng-click="showSubItemsRight(subitem)"])[2]').realClick()
    cy.xpath('//p[text()="Buffet (Base) 30"]').click()
    cy.xpath('//p[text()="Cabinet, China 25"]').click()
    cy.xpath('//p[text()="Cart 10"]').click()
    //AMS
    cy.xpath('(//p[text()="1.5"])[1]').click()
    cy.xpath('(//p[text()="3.0"])[1]').click()
    cy.xpath('(//p[text()="4.5"])[1]').click()
    cy.xpath('(//p[text()="BB"])[1]').click()
    cy.xpath('//a[text()="Save"]').click({ force: true })
    cy.wait(5000)
    cy.xpath('//h3[text()="Success"]').should("be.visible")
    cy.xpath('//button[text()="OK"]').click({ force: true })
    cy.wait(3000)
    cy.get('[ng-click="gotoEstimateCostPage()"]').click({ force: true })
    cy.wait(10000)
    cy.xpath('//a[text()=" View Quote"]').realClick()
    cy.wait(10000)

    canvas.canvasSignature()
    cy.get('[ng-click="emailPopup()"]').realClick();
    cy.get('#tinymce').realTouch();
    cy.realType('Test ')
    cy.get('[ng-click="emailSend(CustomerEmail,Body)"]').click({force:true})
    
    cy.contains('Email sent successfully.').should('be.visible')
    cy.get('[ng-click="$buttonTapped(button, $event)"]').realClick();
    // canvas.canvaselement().then($canvas=>{
    //  const canvaswidth = $canvas.width();
    //  const canvasHeight =$canvas.height();

    //  const canvasCenterX =canvaswidth/0;
    //  const canvasCenterY =canvasHeight/0;
      
    //  cy.wrap($canvas)
    //  .scrollIntoView()
    //  .click(canvasCenterX,canvasCenterY,)

    // })
    // canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 2;
    //   const canvasCenterY =canvasHeight/ 2;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 3;
    //   const canvasCenterY =canvasHeight/ 3;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 4;
    //   const canvasCenterY =canvasHeight/ 4;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 5;
    //   const canvasCenterY =canvasHeight/ 5;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 6;
    //   const canvasCenterY =canvasHeight/ 6;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 7;
    //   const canvasCenterY =canvasHeight/ 7;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 8;
    //   const canvasCenterY =canvasHeight/ 8;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 9;
    //   const canvasCenterY =canvasHeight/ 9;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 10;
    //   const canvasCenterY =canvasHeight/ 10;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 11;
    //   const canvasCenterY =canvasHeight/ 11;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 12;
    //   const canvasCenterY =canvasHeight/ 12;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 13;
    //   const canvasCenterY =canvasHeight/ 13;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 14;
    //   const canvasCenterY =canvasHeight/ 14;    
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    //  canvas.canvaselement().then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
      

    //   const canvasCenterX =canvaswidth/ 15;
    //   const canvasCenterY =canvasHeight/ 15;
         
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY,)
 
    //  })
    
    // {release:false})
    //  .trigger('mousemove',{ clientX: 200, clientY: 300 })
    //  .trigger('mouseup',{ clientX: 400, clientY: 400 })
    //  .trigger('mouseleave')
//     cy.get("[datatestid='xyz']").trigger('mousedown','center')
// .click({release:false})
// .trigger('mousemove',{ clientX: 200, clientY: 300 })
// .trigger('mouseup',5,5)
// .trigger('mouseleave');


    //cy.get('[ng-model="EstimatedForm.objCust.estimatetype"]').select('Binding',{force: true})
    //cy.get('#EstimatorSignatureCanvas').type('ghkhlrkha')
    // const canvas =cy.get("#EstimatorSignatureCanvas");
    // const ctx = canvas("2d");
    // ctx.font = "30px Arial";
    // ctx.fillText("type",10,50); 
    // cy.get('#EstimatorSignatureCanvas').trigger('mousedown', { button: 0 });
    // cy.get('#EstimatorSignatureCanvas').trigger('mousemove', { clientX: 100, clientY: 100 });
    // cy.get('#EstimatorSignatureCanvas').trigger('mouseup', { force: true })  
    
    // cy.get('#EstimatorSignatureCanvas').then($canvas=>{
    //   const canvaswidth = $canvas.width();
    //   const canvasHeight =$canvas.height();
 
    //   const canvasCenterX =canvaswidth/ 3;
    //   const canvasCenterY =canvasHeight/ 3;
 
    //   const buttonX =canvasCenterX +((canvasCenterX /3)*3)
    //   const buttonY =canvasCenterY +((canvasCenterY /3)*3)
    //   cy.wrap($canvas)
    //   .scrollIntoView()
    //   .click(canvasCenterX,canvasCenterY)
 
    //  }
 
    //  )


    //  const buttonX =canvasCenterX +((canvasCenterX /3)*2)
    //  const buttonY =canvasCenterY +((canvasCenterY /3)*2)
    //  const buttonZ =canvasCenterZ +((canvasCenterZ /3)*2)


  })

})