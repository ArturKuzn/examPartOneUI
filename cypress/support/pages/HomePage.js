class HomePage {
    visit() {
        cy.log('Open home page');
        cy.visit('/');
    }
    closeBanner() {
        return cy.get('.close-dialog');
    }

    closeCookiesPopUp() {
        return cy.get('.cc-dismiss')
    }

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton');
    }


    getHamburgerMenu() {
        return cy.get('[aria-label="Open Sidenav"]')
    }

    getFeedbackTab() {
        return cy.get('.menu-text:contains("Customer Feedback")')
    }


    getReviewField() {
        return cy.get('[aria-label="Text field to review a product"]')
    }

    getSubmitReviewButton() {
        return cy.get('[aria-label="Send the review"]')
    }


    getSearchButton() {
        return cy.get('.mat-search_icon-search')
    }

    getAddToCartButton() {
        return cy.get('[aria-label="Add to Basket"]')
    }

    getOpenCartButton() {
        return cy.get('[aria-label="Show the shopping cart"]')
    }
}
export default new HomePage();


