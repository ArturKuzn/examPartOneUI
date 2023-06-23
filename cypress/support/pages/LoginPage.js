class LoginPage {
    visit() {
        cy.log('Open login page');
        cy.visit('/#/login');
    }

    closeBanner() {
        return cy.get('.close-dialog');
    }

    closeCookiesPopUp() {
        return cy.get('.cc-dismiss')
    }
    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('[aria-label="Login"]');
    }

    submitLoginForm(email, password) {
        cy.log(`Auth user with email: ${email} and password: ${password}`);

        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
    }

    getRegistrationButton() {
        return cy.get('[href="#/register"]');
    }
}
export default new LoginPage();