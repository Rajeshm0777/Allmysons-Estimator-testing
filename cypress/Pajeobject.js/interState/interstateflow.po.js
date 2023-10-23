class interstatePage{
    
    clickElementContinue1(){
        return cy.xpath('//span[@class="MuiTouchRipple-root"]', { timeout: 60000 })     
    }
    headerYourMove(){
        return cy.xpath('//h1[text()="Your Move Includes"]')
    } 
    clickElementContinue2(){
        return cy.xpath('(//span[@class="MuiTouchRipple-root"])[3]', { timeout: 60000 })
    }
    headerBindingEstimated(){
        return cy.xpath('//h1[text()="Binding Estimated Cost of Goods and Services"]')
    }
  
    clickElementContinue3(){
        return cy.xpath('(//span[@class="MuiTouchRipple-root"])[4]', { timeout: 60000 })
    }
    headerHouseHold(){
        return cy.xpath('//h1[text()="Household Belongings"]')
    }
    clickElementcontinue4(){
        return cy.xpath('(//span[@class="MuiTouchRipple-root"])[4]', { timeout: 60000 })
    }

    clickElementcontinue5(){
        return cy.xpath('(//span[@class="MuiTouchRipple-root"])[5]', { timeout: 60000 })
    }
    CustometrSignCanvas(){
        return cy.get('[id=sign-estimate-canvas]')
    }

    continuebuttonsMethod(){
       
        cy.wait(7000)
        this.clickElementContinue1().realClick();
        cy.wait(3000)
        this.headerYourMove().should('be.visible')
        
        this.clickElementContinue2().realClick();
        cy.wait(3000)
        this.headerBindingEstimated().should('be.visible')
        
        this.clickElementContinue3().realClick();
        cy.wait(3000)
        this.headerHouseHold().should('be.visible')
        
        this.clickElementcontinue4().realClick();
        cy.wait(3000)
        this.clickElementcontinue5().realClick();
    }
    CanvasCustomerSignatureMethod(){
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 2;
            const canvasCenterB = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 3;
            const canvasCenterB = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 4;
            const canvasCenterB = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 5;
            const canvasCenterB = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 6;
            const canvasCenterB = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 7;
            const canvasCenterB = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 8;
            const canvasCenterB = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 9;
            const canvasCenterB = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 10;
            const canvasCenterB = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 11;
            const canvasCenterB = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 12;
            const canvasCenterB = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 13;
            const canvasCenterB = canvasHeight / 13;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 14;
            const canvasCenterB = canvasHeight / 14;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 15;
            const canvasCenterB = canvasHeight / 15;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 16;
            const canvasCenterB = canvasHeight / 16;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 17;
            const canvasCenterB = canvasHeight / 17;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 18;
            const canvasCenterB = canvasHeight / 18;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 19;
            const canvasCenterB = canvasHeight / 19;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 20;
            const canvasCenterB = canvasHeight / 20;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
        this.CustometrSignCanvas().then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterA = canvaswidth / 21;
            const canvasCenterB = canvasHeight / 21;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterA, canvasCenterB,)
        })
    }


}

const interstate = new interstatePage
export default interstate





  // cy.wait(7000)
        // interstate.clickElementContinue1().realClick();
        // cy.wait(3000)
        // interstate.clickElementContinue2().realClick();
        // cy.wait(3000)
        // interstate.clickElementContinue3().realClick();
        // cy.wait(3000)
        // interstate.clickElementcontinue4().realClick();
        // cy.wait(3000)
        // interstate.clickElementcontinue5().realClick();
        // cy.xpath('//span[@class="MuiTouchRipple-root"]', { timeout: 60000 }).realClick();
        // cy.wait(3000)
        // cy.xpath('(//span[@class="MuiTouchRipple-root"])[3]', { timeout: 60000 }).realClick()
        // cy.wait(3000)
        // cy.xpath('(//span[@class="MuiTouchRipple-root"])[4]', { timeout: 60000 }).realClick()
        // cy.wait(3000)
        // cy.xpath('(//span[@class="MuiTouchRipple-root"])[4]', { timeout: 60000 }).realClick()
        // cy.wait(3000)
        // cy.xpath('(//span[@class="MuiTouchRipple-root"])[5]', { timeout: 60000 }).realClick()