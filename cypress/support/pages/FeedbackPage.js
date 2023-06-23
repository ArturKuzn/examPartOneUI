const math = require('mathjs');


class FeedbackPage {
    visit() {
        cy.log('Open feedback page');
        cy.visit('/#/contact');
    }

    closeBanner() {
        return cy.get('.close-dialog');
    }

    closeCookiesPopUp() {
        return cy.get('.cc-dismiss')
    }

    getAuthorField() {
        return cy.get('[aria-label="Field with the name of the author"]')
    }


    getCommentField() {
        return cy.get('[aria-label="Field for entering the comment or the feedback"]')
    }


    getRating() {
        return cy.get('#rating')
    }


    getResultField() {
        return cy.get('#captchaControl')
    }

    captchaResult() {
        cy.get('code').then(code => {
            let mathExpression = code.text();
            cy.log(`Captcha: ${mathExpression}`);
            let result = math.evaluate(mathExpression);
            cy.log(`Captcha result: ${result}`);
            this.getResultField().type(result);
        })
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }


    submitFeedbackForm(comment) {
        this.getCommentField().type(comment);
        this.getRating().type('{upArrow}{downArrow}');
        this.captchaResult();
        this.getSubmitButton().click();

    }
}
export default new FeedbackPage();