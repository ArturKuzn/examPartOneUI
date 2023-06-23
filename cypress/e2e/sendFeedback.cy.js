/// <reference types="cypress"/>
import FeedbackPage from "../support/pages/FeedbackPage"
import { faker } from '@faker-js/faker';


describe('Send feeback', () => {
    it('Send feedback', () => {

        FeedbackPage.visit();
        FeedbackPage.closeBanner().click();
        FeedbackPage.closeCookiesPopUp().click();
        let comment = faker.lorem.words(20);
        cy.log(`Submit form anonym with ${comment}`);
        FeedbackPage.submitFeedbackForm(comment);
        cy.get('simple-snack-bar').should('contain', 'Thank you for your feedback');


    })
})