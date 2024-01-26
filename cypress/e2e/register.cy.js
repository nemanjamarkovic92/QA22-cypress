describe("Registacion funcionality-Gallery app", () => {
    it("succesful registration", () => {
        cy.get("#first name").type("Nemanja");
        cy.get("#last name").type("Markovic");
        cy.get("#email").type("Blabluc@gmail.com");
        cy.get("#password").type("Blabluc92");
        cy.get("#password-confirmation").type("Blabluc92");
        cy.get(".form-check-input").check();
        cy.get("button").click();
    });
})