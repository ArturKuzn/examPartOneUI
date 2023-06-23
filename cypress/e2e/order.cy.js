/// <reference types="cypress"/>

import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';
import { createUserViaApi, loginViaApi } from '../support/helper';
import HomePage from '../support/pages/HomePage';
import BasketPage from '../support/pages/BasketPage';
import SelectAdressPage from '../support/pages/SelectAdressPage';
import AddAddressPage from '../support/pages/AddAddressPage';
import DeliveryMethodPage from '../support/pages/DeliveryMethodPage';
import PaymentOptionPage from '../support/pages/PaymentOptionPage';
import OrderSummaryPage from '../support/pages/OrderSummaryPage';

user.password = faker.internet.password({ length: 10 });
user.email = faker.internet.email();
user.answer = faker.animal.lion.name;

describe('Order test', () => {
    before(() => {
        createUserViaApi(user);
        loginViaApi(user);
    })

    it('Order', () => {

        HomePage.visit();
        HomePage.closeBanner().click();
        HomePage.closeCookiesPopUp().click();
        cy.get('[aria-label="Show the shopping cart"]').should('be.visible');

        let product = 'Strawberry Juice (500ml)';
        cy.log(`Order ${product}`);
        HomePage.getSearchButton().type(`${product}{enter}`);
        HomePage.getAddToCartButton().click();
        cy.get('.fa-layers-counter').should('contain', '1');

        HomePage.getOpenCartButton().click();

        cy.get('mat-cell.mat-column-product').should('contain', `${product}`);

        BasketPage.getCheckoutButton().click();

        SelectAdressPage.getAddAddressButton().click();

        let country = faker.location.country();
        let name = faker.person.firstName();
        let mobile = faker.phone.number('3######');
        let zip = faker.location.zipCode('#####');
        let address = faker.location.streetAddress();
        let city = faker.location.city();
        let state = faker.location.state();

        cy.log(`Add new address ${country}, ${name}, ${mobile}, ${zip}, ${address}, ${city}, ${state}`)
        
        AddAddressPage.submitNewAdress(country, name, mobile, zip, address, city, state);

        SelectAdressPage.getSelectRadioButton().last().click();

        SelectAdressPage.getContinueButton().click();

        DeliveryMethodPage.getDeliveryOptionStandartDelivery().click();

        DeliveryMethodPage.getContinueButton().click();

        let cardNumber = faker.finance.creditCardNumber('4### #### #### ####');
        let exprireMonth = faker.number.int({ min: 1, max: 12 }).toString();
        let expireYear = faker.number.int({ min: 2080, max: 2099 }).toString();

        PaymentOptionPage.getAddNewCardButton().click();

        cy.log(`Add new card ${name}, ${cardNumber}, ${exprireMonth}, ${expireYear}`)

        PaymentOptionPage.addNewCard(name, cardNumber, exprireMonth, expireYear);

        PaymentOptionPage.getCardOption().last().click();

        PaymentOptionPage.getContinueButton().click();

        OrderSummaryPage.getPurchaseButton().click();

        cy.get('h1.confirmation')
            .should('contain', 'Thank you for your purchase!')
            .and('have.css', 'color', 'rgb(104, 159, 56)');

    })
})