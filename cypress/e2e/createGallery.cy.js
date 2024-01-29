describe("Login funcionality-Gallery app", () => {
    before(() => {

    })
    beforeEach(() => {
        cy.visit("login");
        cy.visit("#email").type("blabluc92@gmail.com");
        cy.visit("#password").type("BlaBluc1992");
        cy.visit("button").contains("Submit").click();
    });

});

it("Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create gallerry");
    cy.get("#title").should("be.visible").type("Nova galerija 1 - Nemanja");
    cy.get("#description").should("be.visible").type("Galerija cypresss");

});

it("Succesfully create gallery with one image", () => {
    cy.get('a[href="/create"]').should("be.visible").click();
    cy.get("h1").should("have.text", "Create gallerry");
    cy.get("#title").should("be.visible").type("Nova galerija 1 - Nemanja");
    cy.get("#description").should("be.visible").type("Galerija cypresss");

});
