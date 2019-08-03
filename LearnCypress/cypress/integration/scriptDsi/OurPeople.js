describe('Verify Dsi people',() => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/dist/index.html');
        cy.get("#people").click();
        cy.get("#morePeople").click();
        
    })
    it('Verify Dsi people mehedi ', () => {
        cy.get('#mehedi').click();
        cy.url().should('include', '/mehedi.html');
    })

    it('Verify Dsi people masum ', () => {
        cy.get('#masum').click();
        cy.url().should('include', '/masum.html');
    })

    it('Verify Dsi people anik ', () => {
        cy.get('#anik').click();
        cy.url().should('include', '/anik.html');
    })

    it('Verify Dsi people nafija ', () => {
        cy.get('#nafija').click();
        cy.url().should('include', '/nafija.html');
    })

    it('Verify Dsi people habib ', () => {
        cy.get('#habib').click();
        cy.url().should('include', '/habib.html');
    })

    it('Verify Dsi people nahid ', () => {
        cy.get('#nahid').click();
        cy.url().should('include', '/nahid.html');
    })

    it('Verify Dsi people nazmul ', () => {
        cy.get('#nazmul').click();
        cy.url().should('include', '/nazmul.html');
    })

    it('Verify Dsi people newaz ', () => {
        cy.get('#newaz').click();
        cy.url().should('include', '/newaz.html');
    })

    it('Verify Dsi people dania ', () => {
        cy.get('#dania').click();
        cy.url().should('include', '/dania.html');
    })

    it('Verify Dsi people yeasin ', () => {
        cy.get('#yeasin').click();
        cy.url().should('include', '/yeasin.html');
    })

    it('Verify Dsi people aurick ', () => {
        cy.get('#aurick').click();
        cy.url().should('include', '/aurick.html');
    })

    it('Verify Dsi people nobosha ', () => {
        cy.get('#nobosha').click();
        cy.url().should('include', '/nobosha.html');
    })

})