describe("Registacion funcionality-Gallery app", () => {
    it.only("succesful registration", () => {

        cy.visit("/register");
        cy.url().should("contain", "/register");
        cy.get("h1").should("have.text", "Register");
        cy.get("label").should("have.text", "Register");
        cy.get("label").eq(0).should("have.text", "First-name");
        cy.get("label").eq(1).should("have.text", "Last-name");
        cy.get("label").eq(2).should("have.text", "Email");

        // majmune, dodaj ostalo kod kuce



        cy.get("#first-name").type("Nemanja");
        cy.get("#last-name").type("Markovic");
        cy.get("#email").type("Blabluc2@gmail.com");
        cy.get("#password").type("Blabluc92");
        cy.get("#password-confirmation").type("Blabluc92");
        cy.get(".form-check-input").check();
        cy.get("button").click();

        cy.url().should("not.contain", "/register");

    });


})