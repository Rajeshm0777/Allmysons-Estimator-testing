class addLeadPage{
    addlead(){
        return cy.xpath('(//a[@class="item item-input heade"])[2]')
    }
    getFirstNameField(){
        return cy.get('[ng-model="newLead.FirstName"]')
    }
    getLastNameField(){
        return cy.get('[ng-model="newLead.LastName"]')
    }
    getMovedate(){
        return cy.get('[ng-model="newLead.Date"]')
    }
    getOrginZip(){
        return cy.get('[ng-model="newLead.OriginZip"]')
    }
    getMoveType(){
        return cy.get('[ng-model="newLead.MoveType"]')
    }
    getEmailField(){
        return cy.get('[type="email"]')
    }
    getPhoneNumber(){
        return cy.xpath('(//input[@type="tel"])[1]')
    }
    getTelephone(){
        return cy.xpath('(//input[@type="tel"])[2]')
    }
    getSource(){
        return cy.get('[ng-model="newLead.Src"]')
    }
    getSubmitbtn(){
        return cy.get('[class="button button-positive"]')
    }
    successMsgHeader(){
        return cy.contains('Success')
    }
    newLeadSuccessFullMsg(){
        return cy.contains('New Lead successfully created')
    }
    getOkBtn(){
        return cy.get('[ng-click="$buttonTapped(button, $event)"]')
    }

    addnewleadmodule(value1, value2,leadFirstname,leadLastname,currentDate,OrginZip,Email,PhoneNumber,){

        this.getFirstNameField().focus();
        cy.realType(leadFirstname)
        this.getLastNameField().focus();
        cy.realType(leadLastname)
        cy.wait(4000)
        this.getMovedate().realTouch();                       //.invoke('attr', 'type', "text").focus();  
    
        cy.realType(currentDate)
        this.getOrginZip().realTouch()
        cy.realType(OrginZip)
        this.getMoveType().realTouch().select(value1)
        this.getEmailField().focus();
        cy.realType(Email)
        this.getPhoneNumber().focus();
        cy.realType(PhoneNumber);                           // type into focused field
        this.getTelephone().focus();
        cy.realType(PhoneNumber);
        //this.getTelephone().realType(newlead.PhoneNumber)
        cy.wait(5000)
        this.getSource().realTouch().select(value2).should('be.visible')
        this.getSubmitbtn().click({ force: true })
        cy.wait(6000)
        this.successMsgHeader().should('be.visible')
        this.newLeadSuccessFullMsg().should('be.visible')
        this.getOkBtn().realClick();
       
    }


}
const addNewLead = new addLeadPage()
export default  addNewLead







// addNewLead.getFirstNameField().focus();
//     cy.realType(newlead.FirstName)
//     addNewLead.getLastNameField().focus();
//     cy.realType(newlead.LastName)
//     cy.wait(4000)
//     addNewLead.getMovedate().realTouch();                      //.invoke('attr', 'type', "text").focus();  
//     var currentDate = moment().format("DD-MM-YYYY");
//     cy.realType(currentDate)
//     addNewLead.getOrginZip().realTouch()
//     cy.realType(newlead.OrginZip)
//     addNewLead.getMoveType().realTouch().select('Local')
//     addNewLead.getEmailField().focus();
//     cy.realType(newlead.Email)
//     addNewLead.getPhoneNumber().focus();
//     cy.realType(newlead.PhoneNumber);                           // type into focused field
//     addNewLead.getTelephone().focus();
//     cy.realType(newlead.PhoneNumber);
//     addNewLead.getTelephone().realType(newlead.PhoneNumber)
//     cy.wait(5000)
//     addNewLead.getSource().realTouch().select("Self Generated").should('be.visible')
//     addNewLead.getSubmitbtn().click({ force: true })
//     cy.wait(6000)
//     addNewLead.successMsgHeader().should('be.visible')
//     addNewLead.newLeadSuccessFullMsg().should('be.visible')