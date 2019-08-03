describe('Verify the menu link and projects',() => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/website/dist/index.html');
        
    })
    it('Verify DSI home page menu link', () => {
        
        cy.get("#clients").click();
        cy.wait(1000);
        cy.get("#people").click();
        cy.wait(1000);
        cy.get("#joinUs").click();
        
    })

    it('Verify mejor projects', () => {
         //verify heaalth care project

        cy.get("#projects").click();
        cy.get('[href="olwel.html"]').click();
        cy.url().should('include', '/olwel.html');


    })

    it('verify heaalth care project', () => {
         
       // verify heaalth care project

       cy.get("#projects").click();
       cy.get('#olwel').click();
       cy.url().should('include', '/olwel.html');


    })

    it('Verify Higher Education project', () => {
         
        // verify Higher Education project

        cy.get("#projects").click();
        cy.get('#jenzabar').click();
        cy.url().should('include', '/jenzabar.html');
 
    })

    it('Verify eDiscovery project', () => {

         // verify eDiscovery project

         cy.get("#projects").click();
         cy.get('#iControl').click();
         cy.url().should('include', '/iControl.html');
 
    })

    it('Verify Banking project', () => {

        // Verify Banking project 
        
        cy.get("#projects").click();
        cy.get('#infoImage').click();
        cy.url().should('include', '/infoImage.html');
    
    })

    it('Verify "Off-Dock Management" project', () => {

        // Verify "Off-Dock Management" project 
        
        cy.get("#projects").click();
        cy.get('#odms').click();
        cy.url().should('include', '/odms.html');
    
    })

    it('Verify Digital Verification project ', () => {

        // Verify Digital Verification project 
        
        cy.get("#projects").click();
        cy.get('#digitalverification').click();
        cy.url().should('include', '/digitalverification.html');
    
    })
})