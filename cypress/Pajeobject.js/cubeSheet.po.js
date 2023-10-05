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

}

const cubeSheet = new cubeSheetPage
export default cubeSheet