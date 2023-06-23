class PaymentOptionPage {

    getAddNewCardButton() {
        return cy.get('mat-panel-title:contains("Add new card")')
    }

    getNameField() {
        return cy.get('input[type="text"]').eq(1)
    }

    getCardNumberField() {
        return cy.get('input[type="number"]')
    }


    getExpireMonthField() {
        return cy.get('select').first()
    }


    getExpireYearField() {
        return cy.get('select').last()
    }


    getSubmitNewCardButton() {
        return cy.get('button#submitButton')
    }


    addNewCard(name, cardNumber, exprireMonth, expireYear) {


        this.getNameField().type(name);
        this.getCardNumberField().type(cardNumber);
        this.getExpireMonthField().select(exprireMonth);
        this.getExpireYearField().select(expireYear);
        this.getSubmitNewCardButton().click();

    }


    getCardOption() {
        return cy.get('.mat-radio-button.mat-accent')
    }


    getContinueButton() {
        return cy.get('[aria-label="Proceed to review"]')
    }
}
export default new PaymentOptionPage();