class DeliveryMethodPage {

    getDeliveryOptionOneDay() {
        return cy.get('mat-cell:contains("One Day Delivery")')
    }

    getDeliveryOptionFastDelivery() {
        return cy.get('mat-cell:contains("Fast Delivery")')
    }

    getDeliveryOptionStandartDelivery() {
        return cy.get('mat-cell:contains("Standard Delivery")')
    }

    getContinueButton() {
        return cy.get('[aria-label="Proceed to delivery method selection"]')
    }

}
export default new DeliveryMethodPage();