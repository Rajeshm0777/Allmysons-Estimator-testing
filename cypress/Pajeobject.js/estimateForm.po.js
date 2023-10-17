class estimatorpage{
    clickestimatorpage(){
     return cy.get('[ng-click="gotoEstimateCostPage()"]')
    }
    clickViewQuote(){
        return cy.xpath('//a[text()=" View Quote"]')

    }
    estimatorForm(){
        this.clickestimatorpage().click({ force: true })
        cy.wait(11000)
        this.clickViewQuote().realClick()
        cy.wait(10000)


    // estimator.clickestimatorpage().click({ force: true })
    // cy.wait(11000)
    // estimator.clickViewQuote.realClick()
    // cy.wait(10000)
    }
}

const estimator = new estimatorpage
export default estimator