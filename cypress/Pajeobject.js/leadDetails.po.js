class leadDetailspage{
    leadDetailsHeader(){
        return cy.contains('Lead Details')
    }
    getPhone2(){
        return cy.xpath('(//input[@type="tel"])[2]')
    }
    selectOrginType(){
        return cy.get('[ng-model="selectedAddTypeFrom"]')
    }
    selectDestinationType(){
        return cy.get('[ng-model="selectedAddTypeTo"]')
    }
    destinationZipcode(){
        return cy.get('[ng-model="lead.ToZip"]')
    }
    clickSaveBtn(){
        return cy.get('[title="Save"]')
    }
    successMsg(){
        return cy.get('.popup-title.ng-binding')
    }
    clickOkBtn(){
        return cy.get('[ng-click="$buttonTapped(button, $event)"]')
    }

    leadModule(Pageheader,phoneNum2,orginType,destinationType,orginZip,leadsucess){
    leadDetails.leadDetailsHeader().should("have.text",Pageheader)
    leadDetails.getPhone2().focus();
    cy.realType(phoneNum2);
    cy.wait(4000)
    leadDetails.selectOrginType().realTouch().select(orginType)
    cy.wait(4000)
    leadDetails.selectDestinationType().realTouch().select(destinationType)
    leadDetails.destinationZipcode().clear()
    cy.realType(orginZip)
    leadDetails.clickSaveBtn().click({ force: true });
    cy.wait(6000)
    leadDetails.successMsg().should('have.text', leadsucess)
    leadDetails.clickOkBtn().click().should("be.visible")
    cy.wait(4000)
    }


}
 

const leadDetails = new leadDetailspage()
export default leadDetails