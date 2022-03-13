describe('Locators', () => {
    beforeEach(() => {
        cy.visit("/elements");
    });

    it('Locates elements with the get command', () => {
        cy.get('button');
        cy.get('.btn-with-class');
        cy.get('[class="Elements-btn btn-with-class"]');
        cy.get('[class="Elements-btn btn-with-class more-btn-classes"]');
        cy.get('#btn-with-id');
        cy.get('[type=submit]');
        cy.get('button.Elements-btn');
        cy.get('button.Elements-btn#btn-with-id');
        cy.get('button.Elements-btn[type=submit]');
    });
});