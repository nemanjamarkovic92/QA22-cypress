describe("Login funcionality-Gallery app", () => {
    it("succesful login", () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("Blabluc@gmail.com");
        cy.get("#password").type("BlaBluc1992");
        cy.get("button").click();
    });
})