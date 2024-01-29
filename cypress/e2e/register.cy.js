import { registrationPage } from "../page_objects/registrationPage"

const locators = require('../fixtures/locators.json')

describe("Registacion funcionality-Gallery app", () => {
    it.only("succesful registration", () => {

        cy.visit("/register");
        cy.url().should("contain", "/register");
        cy.get("h1").should("have.text", "Register");
        // cy.get("label").should("have.text", "Register");
        cy.get("label").eq(0).should("have.text", "First Name");
        cy.get("label").eq(1).should("have.text", "Last Name");
        cy.get("label").eq(2).should("have.text", "Email");

        // majmune, dodaj ostalo kod kuce



        cy.get(locators.registrationPage.firstNameInputField).type("Nemanja");
        cy.get(locators.registrationPage.lastNameInputField).type("Markovic");
        cy.get(locators.registrationPage.emailInputField).type("Blabluc2@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("Blabluc92");
        cy.get(locators.registrationPage.passwordConformation).type("Blabluc92");
        cy.get(locators.registrationPage.termsCheckbox).check();
        cy.get(locators.registrationPage.submitButton).click();

        cy.url().should("not.contain", "/register");

    });


})