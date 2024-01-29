class RegistrationPage {
    get emailInputField() {
        return cy.get("#email");
    }
    get passwordInputField() {
        return cy.get("#passsword");
    }

    get submitBtn() {
        return cy.get("button");
    }
}

export const registrationPage = new RegistrationPage();

cy.get("#first-name");
cy.get("#last-name");
cy.get("#email");
cy.get("#password");
cy.get("#password-confirmation");
cy.get(".form-check-input");
cy.get("button").click();