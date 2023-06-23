/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';

user.password = faker.internet.password({ length: 10 });
user.email = faker.internet.email();
user.answer = faker.animal.lion.name;


describe('Registration', () => {
  it('Registration test', () => {
    RegistrationPage.visit();
    RegistrationPage.closeBanner().click();
    RegistrationPage.closeCookiesPopUp().click();
    RegistrationPage.registerNewUser(user.email, user.password, user.answer);
    cy.get('.mat-simple-snack-bar-content')
      .should('have.text', 'Registration completed successfully. You can now log in.');
  })


  it('Login test', () => {

    LoginPage.visit();
    LoginPage.closeBanner().click();
    LoginPage.closeCookiesPopUp().click();
    LoginPage.submitLoginForm(user.email, user.password);
    cy.get('[aria-label="Show the shopping cart"]').should('be.visible');
  })

})