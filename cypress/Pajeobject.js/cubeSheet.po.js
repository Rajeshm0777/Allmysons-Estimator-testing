class cubeSheetPage{
    clickOnCubeSheet(){
        return cy.contains('Cube Sheet')
    }
    selectLrRoom(){
        return cy.get('.yellow.selected')
    }
    selectArtBookcase(){
        return cy.xpath('//p[text()="Bookcase 20"]')
    }
    selectArtChair(){
        return cy.xpath('//p[text()="Chair, Overstuffed 25"]')
    }
    selectArtCurio(){
        return cy.xpath('//p[text()="Curio Cabinet  15"]')
    }
    selectArtLamp(){
        return cy.xpath('//p[text()="Lamp 5"]')
    }
    selectArtPictures(){
        return cy.xpath('//p[text()="Pictures 2"]')
    }
    selectAmsCartonele1(){
        return cy.xpath('(//p[text()="1.5"])[1]')
    }
    selectAmsCartonele2(){
        return cy.xpath('(//p[text()="3.0"])[1]')
    }
    selectAmsCartonele3(){
        return cy.xpath('(//p[text()="4.5"])[1]')
    }
    selectAmsCartonele4(){
        return cy.xpath('(//p[text()="BB"])[1]')
    }
    selectDrRoomelement(){
        return cy.xpath('(//div[@ng-click="showSubItemsRight(subitem)"])[2]')
    }
    selectDrartbuffet(){
        return cy.xpath('//p[text()="Buffet (Base) 30"]')
    }
    selectDrartCabinet(){
        return cy.xpath('//p[text()="Cabinet, China 25"]')
    }
    selectDrartCart(){
        return cy.xpath('//p[text()="Cart 10"]')
    }
    selectDrAmsCartonElement1(){
        return cy.xpath('(//p[text()="1.5"])[1]')
    }
    selectDrAmsCartonElement2(){
        return cy.xpath('(//p[text()="3.0"])[1]')
    }
    selectDrAmsCartonElement3(){
        return cy.xpath('(//p[text()="4.5"])[1]')
    }
    selectDrAmsCartonElement4(){
        return cy.xpath('(//p[text()="BB"])[1]')
    }
    saveCubebtn(){
        return cy.xpath('//a[text()="Save"]')
    }
    cubeSuccessmsg(){
        return cy.xpath('//h3[text()="Success"]')
    }
    clickcubeSuccessOkbtn(){
        return cy.xpath('//button[text()="OK"]')
    }





    cubeMethod(){
    this.clickOnCubeSheet().realClick()
    cy.wait(6000)
    this.selectLrRoom().realClick()
    //Articles
    this.selectArtBookcase().click()
    this.selectArtChair().click()
    this.selectArtCurio().click()
    this.selectArtLamp().click()
    this.selectArtPictures().click()
    ///AMS Actions
    this.selectAmsCartonele1().click()
    this.selectAmsCartonele2().click()
    this.selectAmsCartonele3().click()
    this.selectAmsCartonele4().click()

    //DR Room
    this.selectDrRoomelement().realClick()
    this.selectDrartbuffet().click()
    this.selectDrartCabinet().click()
    this.selectDrartCart().click()

    this.selectDrRoomelement().realClick()
    this.selectDrartbuffet().click()
    this.selectDrartCabinet().click()
    this.selectDrartCart().click()
    //AMS
    this.selectDrAmsCartonElement1().click()
    this.selectDrAmsCartonElement2().click()
    this.selectDrAmsCartonElement3().click()
    this.selectDrAmsCartonElement4().click()
    this.saveCubebtn().click({ force: true })
    cy.wait(5000)

    this.cubeSuccessmsg().should("be.visible")
    this.clickcubeSuccessOkbtn().click({ force: true })
    cy.wait(3000)
            ///AMS Actions
    // cy.xpath('(//p[text()="3.0"])[1]').click()
    // cy.xpath('(//p[text()="1.5"])[1]').click()
    // cy.xpath('(//p[text()="4.5"])[1]').click()
    // cy.xpath('(//p[text()="BB"])[1]').click()
    //PBS Actions
    //cy.xpath('(//p[text()="3.0"])[2]').click()
    //cy.xpath('(//p[text()="1.5"])[2]').click()
    //cy.xpath('(//p[text()="4.5"])[2]').click()
    //cy.xpath('(//p[text()="BB"])[2]').click()
    //cy.xpath('//a[text()="Save"]').click({ force: true })
    // cy.wait(5000)

    //DR Room
    // cubeSheet.selectDrRoomelement().realClick()
    // cubeSheet.selectDrartbuffet().click()
    // cubeSheet.selectDrartCabinet().click()
    // cubeSheet.selectDrartCart().click()
    // //AMS
    // cubeSheet.selectDrAmsCartonElement1().click()
    // cubeSheet.selectDrAmsCartonElement2().click()
    // cubeSheet.selectDrAmsCartonElement3().click()
    // cubeSheet.selectDrAmsCartonElement4().click()
    // cubeSheet.saveCubebtn().click({ force: true })
    // cy.wait(5000)

    // cubeSheet.cubeSuccessmsg().should("be.visible")
    // cubeSheet.clickcubeSuccessOkbtn().click({ force: true })
    // cy.wait(3000)
    // 
    


    }


}

const cubeSheet = new cubeSheetPage
export default cubeSheet
