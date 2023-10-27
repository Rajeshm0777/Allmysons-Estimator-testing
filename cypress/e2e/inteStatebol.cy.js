describe('interstatebol', () => {
    it('interStatebolContinuesProcess', () => {
        cy.visit('https://wipbol.allmysons.com/auth?phone=6082951342&dob=08/25/1972&customerId=7058922&bolType=0&dailysheetId=6743106')
        cy.get('[class="jss30 extcustomIcon"]').should('be.visible')
        cy.get('#username').realTouch();
        cy.realType('venkatesh')
        cy.get('#password').realTouch();
        cy.realType('Cms@123')
        cy.get("#btnLOGIN").realClick();
        cy.wait(5000)
        cy.xpath('//span[text()="CONTINUE"]').click()
        cy.wait(5000)
        cy.get('#btnCONTINUE').click()
        cy.wait(5000)
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
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

            const canvasCenterY = canvaswidth / 3;
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

            const canvasCenterY = canvaswidth / 6;
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

            const canvasCenterY = canvaswidth / 8;
            const canvasCenterZ = canvasHeight / 8;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 9;
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

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 12;
            const canvasCenterZ = canvasHeight / 12;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 13;
            const canvasCenterZ = canvasHeight / 13;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 14;
            const canvasCenterZ = canvasHeight / 14;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 15;
            const canvasCenterZ = canvasHeight / 15;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 16;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 17;
            const canvasCenterZ = canvasHeight / 17;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 18;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 19;
            const canvasCenterZ = canvasHeight / 19;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 20;
            const canvasCenterZ = canvasHeight / 20;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 21;
            const canvasCenterZ = canvasHeight / 21;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 22;
            const canvasCenterZ = canvasHeight / 22;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 23;
            const canvasCenterZ = canvasHeight / 23;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 24;
            const canvasCenterZ = canvasHeight / 24;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 25;
            const canvasCenterZ = canvasHeight / 25;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 26;
            const canvasCenterZ = canvasHeight / 26;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 27;
            const canvasCenterZ = canvasHeight / 27;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 28;
            const canvasCenterZ = canvasHeight / 28;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 29;
            const canvasCenterZ = canvasHeight / 29;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 30;
            const canvasCenterZ = canvasHeight / 30;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 31;
            const canvasCenterZ = canvasHeight / 31;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 32;
            const canvasCenterZ = canvasHeight / 32;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 33;
            const canvasCenterZ = canvasHeight / 33;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 34;
            const canvasCenterZ = canvasHeight / 34;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 35;
            const canvasCenterZ = canvasHeight / 35;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 36;
            const canvasCenterZ = canvasHeight / 36;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 37;
            const canvasCenterZ = canvasHeight / 37;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 38;
            const canvasCenterZ = canvasHeight / 38;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 39;
            const canvasCenterZ = canvasHeight / 39;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 40;
            const canvasCenterZ = canvasHeight / 40;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 41;
            const canvasCenterZ = canvasHeight / 41;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 42;
            const canvasCenterZ = canvasHeight / 42;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 43;
            const canvasCenterZ = canvasHeight / 43;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 44;
            const canvasCenterZ = canvasHeight / 44;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 45;
            const canvasCenterZ = canvasHeight / 45;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 46;
            const canvasCenterZ = canvasHeight / 46;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 47;
            const canvasCenterZ = canvasHeight / 47;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 48;
            const canvasCenterZ = canvasHeight / 48;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 49;
            const canvasCenterZ = canvasHeight / 49;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 50;
            const canvasCenterZ = canvasHeight / 50;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 51;
            const canvasCenterZ = canvasHeight / 51;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 52;
            const canvasCenterZ = canvasHeight / 52;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 53;
            const canvasCenterZ = canvasHeight / 53;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 54;
            const canvasCenterZ = canvasHeight / 54;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 55;
            const canvasCenterZ = canvasHeight / 55;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 56;
            const canvasCenterZ = canvasHeight / 56;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 57;
            const canvasCenterZ = canvasHeight / 57;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 58;
            const canvasCenterZ = canvasHeight / 58;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 59;
            const canvasCenterZ = canvasHeight / 59;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 60;
            const canvasCenterZ = canvasHeight / 60;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 61;
            const canvasCenterZ = canvasHeight / 61;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 62;
            const canvasCenterZ = canvasHeight / 62;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 63;
            const canvasCenterZ = canvasHeight / 63;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 64;
            const canvasCenterZ = canvasHeight / 64;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 65;
            const canvasCenterZ = canvasHeight / 65;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 66;
            const canvasCenterZ = canvasHeight / 66;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 67;
            const canvasCenterZ = canvasHeight / 67;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 68;
            const canvasCenterZ = canvasHeight / 68;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 69;
            const canvasCenterZ = canvasHeight / 69;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 70;
            const canvasCenterZ = canvasHeight / 70;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 71;
            const canvasCenterZ = canvasHeight / 71;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 72;
            const canvasCenterZ = canvasHeight / 72;

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

            const canvasCenterY = canvaswidth / 74;
            const canvasCenterZ = canvasHeight / 74;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 75;
            const canvasCenterZ = canvasHeight / 75;

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

            const canvasCenterY = canvaswidth / 11;
            const canvasCenterZ = canvasHeight / 11;

            cy.wrap($canvas)
                .scrollIntoView()

                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
                    const canvaswidth = $canvas.width();
                    const canvasHeight = $canvas.height();

                    const canvasCenterY = canvaswidth / 14;
                    const canvasCenterZ = canvasHeight / 15;

                    cy.wrap($canvas)
                        .scrollIntoView()
                        .click(canvasCenterY, canvasCenterZ,)
                })
                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 16;
            const canvasCenterZ = canvasHeight / 17;

            cy.wrap($canvas)
                .scrollIntoView()

                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
                    const canvaswidth = $canvas.width();
                    const canvasHeight = $canvas.height();

                    const canvasCenterY = canvaswidth / 17;
                    const canvasCenterZ = canvasHeight / 18;

                    cy.wrap($canvas)
                        .scrollIntoView()
                        .click(canvasCenterY, canvasCenterZ,)
                })
                cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 18;
            const canvasCenterZ = canvasHeight / 19;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 2;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 2;
            const canvasCenterZ = canvasHeight / 2;

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
        }) .click(canvasCenterY, canvasCenterZ,)
        })  .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 32;
            const canvasCenterZ = canvasHeight / 32;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 31;
            const canvasCenterZ = canvasHeight / 30;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })
        cy.xpath('//canvas[@class="sigCanvas"]').then($canvas => {
            const canvaswidth = $canvas.width();
            const canvasHeight = $canvas.height();

            const canvasCenterY = canvaswidth / 29;
            const canvasCenterZ = canvasHeight / 28;

            cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterY, canvasCenterZ,)
        })



    })
})