class canvasboxpage{
    canvaselement(){
        return cy.get('#EstimatorSignatureCanvas')
    }  
    canvasSignature(){
        this.canvaselement().then($canvas=>{
            const canvaswidth = $canvas.width();
            const canvasHeight =$canvas.height();
       
            const canvasCenterX =canvaswidth/0;
            const canvasCenterY =canvasHeight/0;
             
            cy.wrap($canvas)
            .scrollIntoView()
            .click(canvasCenterX,canvasCenterY,)
       
           })
           this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 2;
             const canvasCenterY =canvasHeight/ 2;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 3;
             const canvasCenterY =canvasHeight/ 3;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 4;
             const canvasCenterY =canvasHeight/ 4;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 5;
             const canvasCenterY =canvasHeight/ 5;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 6;
             const canvasCenterY =canvasHeight/ 6;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 7;
             const canvasCenterY =canvasHeight/ 7;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 8;
             const canvasCenterY =canvasHeight/ 8;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 9;
             const canvasCenterY =canvasHeight/ 9;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 10;
             const canvasCenterY =canvasHeight/ 10;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 11;
             const canvasCenterY =canvasHeight/ 11;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 12;
             const canvasCenterY =canvasHeight/ 12;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 13;
             const canvasCenterY =canvasHeight/ 13;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
        
             const canvasCenterX =canvaswidth/ 14;
             const canvasCenterY =canvasHeight/ 14;    
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
            this.canvaselement().then($canvas=>{
             const canvaswidth = $canvas.width();
             const canvasHeight =$canvas.height();
             
       
             const canvasCenterX =canvaswidth/ 15;
             const canvasCenterY =canvasHeight/ 15;
                
             cy.wrap($canvas)
             .scrollIntoView()
             .click(canvasCenterX,canvasCenterY,)
        
            })
    }


}

const canvas = new canvasboxpage()
export default canvas