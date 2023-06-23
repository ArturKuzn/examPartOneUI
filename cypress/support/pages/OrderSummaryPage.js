class OrderSummaryPage {

    getPurchaseButton() {
        return cy.get('[aria-label="Complete your purchase"]')
    }

}
export default new OrderSummaryPage();