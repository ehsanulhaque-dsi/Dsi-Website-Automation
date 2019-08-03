describe('Verify Dsi Contact',() => {

    it('Verify Dsi contact form ', () => {
        let message = "Hi! Dsi people. Very pleased to contact with you.";
        cy.visit('http://127.0.0.1:5500/dist/index.html');
        cy.get('#contactUs').scrollIntoView().click();
        cy.url().should('include', '/contact.html')

        cy.get('#txtName').type("Ehsan");
        cy.get('#txtEmail').type("ehsan@gmail.com");
        cy.get('#txtNumber').type("012345678910");
        cy.get('#txtMessage').type(message);


        cy.get('#btnSubmit > strong').click();

        cy.url().should('include','/index.html');

    })

})