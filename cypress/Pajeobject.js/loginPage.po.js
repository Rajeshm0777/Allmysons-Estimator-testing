class loginPage {
    logoVerify(){
        return cy.get('[class="logo_ams logo_ams_login"]')
    }

    getUsernameField() {
        return cy.get('[placeholder="Username"]')
    }
    getPasswordField() {
        return cy.get('[placeholder="Password"]')
    }
    clickField(){
        return cy.get('[ng-model="rememberme"]')
    }
    getSubmitField() {
        return cy.get('[value="Login"]')
    } 
}

const login = new loginPage()
export default login