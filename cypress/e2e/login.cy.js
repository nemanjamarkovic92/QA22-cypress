
describe("Login funcionality-Gallery app", () => {
    it("succesful login", () => {
        cy.visit("/login");

        cy.visit("/login");
        cy.url().should("contain", "/login");
        cy.get("h1").should("contain", "Please login");
        cy.get("label").eq(0).should("have.text", "Email");
        cy.get("label").eq(1).should("have.text", "Password");







        cy.get(locators.emailInputField).type("Blabluc2@gmail.com");
        cy.get(locators.passwordInputField).type("BlaBluc1992");
        cy.get(locators.submitButton).click();

    });


})