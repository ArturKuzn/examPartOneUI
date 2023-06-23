class BasketPage {

    getCheckoutButton() {
        return cy.get('.checkout-button')
    }

}
export default new BasketPage();