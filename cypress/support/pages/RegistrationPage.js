class RegistrationPage {
    visit() {
        cy.log('Open registration page');
        cy.visit('/#/register');
    }

    closeBanner() {
        return cy.get('.close-dialog');
    }

    closeCookiesPopUp() {
        return cy.get('.cc-dismiss')
    }
    getEmailField() {
        return cy.get('#emailControl');
    }

    getPasswordField() {
        return cy.get('#passwordControl');
    }

    getRepeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }


    getSecurityQuestionDropdown() {
        return cy.get('#mat-select-0')
    }

    selectQuestion() {
        return cy.contains(' Name of your favorite pet? ')
    }

    getAnswerField() {
        return cy.get('#securityAnswerControl')
    }

    getRegisterButton() {
        return cy.get('[aria-label="Button to complete the registration"]')
    }

    registerNewUser(email, password, answer) {
        cy.log(`Registration for user with email: ${email} , password: ${password} and security answer: ${answer}`)
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getRepeatPasswordField().type(password);
        this.getSecurityQuestionDropdown().click();
        this.selectQuestion().click();
        this.getAnswerField().type(answer);
        this.getRegisterButton().click();
    }
}
export default new RegistrationPage();