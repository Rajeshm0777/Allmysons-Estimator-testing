describe('interstatebol', () => {
    it('interStatebolContinuesProcess', () => {
        cy.visit('https://wipbol.allmysons.com/auth?phone=6082951342&dob=08/25/1972&customerId=7058922&bolType=0&dailysheetId=6743106')
        cy.interstateLogin('venkatesh', 'Cms@123')
        // cy.get('[class="jss30 extcustomIcon"]').should('be.visible')
        // cy.get('#username').realTouch();
        // cy.realType('venkatesh')
        // cy.get('#password').realTouch();
        // cy.realType('Cms@123')
        // cy.get("#btnLOGIN").realClick();
        cy.wait(5000)
        cy.xpath('//span[text()="CONTINUE"]').click()
        cy.wait(5000)
        cy.get('#btnCONTINUE').click()
        cy.wait(5000)
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 2;

           // const buttonY = canvasCenterY + ((canvasCenterY / -5) * -5)
           // const buttonZ = canvasCenterZ + ((canvasCenterZ / -5) * -5)

            cy.wrap($canvas)
            .scrollIntoView()
            .click(canvasCenterY, canvasCenterZ, )
        })

        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()  
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width(); 
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight /2 ;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 3;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 4;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 6 ;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 5;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 6;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 7;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()

                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
                    const canvaswidth = $canvas.width();
                    const canvasHeight = $canvas.height();

                    const canvasCenterY = canvaswidth / 9;
                    const canvasCenterZ = canvasHeight / 5;

                    cy.wrap($canvas)
                        .scrollIntoView()
                        .click(canvasCenterY, canvasCenterZ,)
                })
                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()

                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
                    const canvaswidth = $canvas.width();
                    const canvasHeight = $canvas.height();

                    const canvasCenterY = canvaswidth / 9;
                    const canvasCenterZ = canvasHeight / 7;

                    cy.wrap($canvas)
                        .scrollIntoView()
                        .click(canvasCenterY, canvasCenterZ,)
                })
                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        }) .click(canvasCenterY, canvasCenterZ,)
        })  .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 10;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 3;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })

        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 13;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 13;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 14;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 15;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 4;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 5;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })

        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 6;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 7;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 9;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 10;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 21;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })

        cy.xpath('//span[text()="SIGN & CONTINUE"]').realClick();
        cy.xpath('//span[text()="SELECT STANDARD VALUATION"]').realClick();
        cy.get('[type="checkbox"]').check() 
        cy.get("btnCONTINUE").realClick()
        cy.get('[type="checkbox"]').check(); 
        cy.xpath('//span[text()="CONTINUE"]').realClick();  



    })
})