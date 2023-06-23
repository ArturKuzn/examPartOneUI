export function findProduct(productName) {

    cy.get('.mat-grid-list').then(body => {
        if (body.find(`.item-name:contains(${productName})`).length > 0) {
            cy.get(`.item-name:contains(${productName})`).click();
        } else {
            cy.get('[aria-label="Next page"]').click();
            findProduct(productName)
        }
    })
}


export function createUserViaApi(user) {


    cy.request({
        method: 'POST',
        url: '/api/Users',
        body: {
            email: user.email,
            password: user.password,
            passwordRepeat: user.password,
            securityQuestion: {
                id: 7,
                question: "Name of your favorite pet?",
            },
            securityAnswer: user.answer
        },
    }).then(response => {
        expect(response.status).to.be.equal(201);
        expect(response.body.status).to.be.equal('success');

        const userId = response.body.data.id;

        cy.request({
            method: 'POST',
            url: '/api/SecurityAnswers',
            body: {
                UserId: userId,
                answer: user.answer,
                SecurityQuestionId: 7
            },
        }).then(response => {
            expect(response.status).to.be.equal(201);
            expect(response.body.status).to.be.equal('success');
        })

    })
}



export function loginViaApi(user) {

    cy.log(`Auth user with email: ${user.email} and password: ${user.password}`);

    cy.request({
        method: 'POST',
        url: '/rest/user/login',
        body: {
            email: user.email,
            password: user.password
        },
    }).then(response => {
        expect(response.status).to.be.equal(200);
        const token = response.body.authentication.token;
        const bid = response.body.authentication.bid;
        cy.setCookie('token', token)
        window.localStorage.setItem('token', token)
        window.sessionStorage.setItem('bid', bid)
    })

}