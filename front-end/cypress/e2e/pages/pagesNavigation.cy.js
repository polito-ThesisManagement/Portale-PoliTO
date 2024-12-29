/// <reference types="cypress" />

describe('Pages navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Navigate into each page', () => {
    // Step 1: Check if the homepage title is visible
    cy.get('.section-title').should('contain', 'Homepage');

    // Step 2: Navigate to the 'Education' page
    cy.get('a[href="/didattica"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Didattica');

    // Step 3: Navigate to the 'Personal Area' page
    cy.get('a[href="/area_personale"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Area personale');

    // Step 4: Navigate to the 'Career' page and then to the 'Degree and final exam' page
    cy.get('a[href="/carriera"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Carriera');
    cy.get('a[href="/carriera/laurea_ed_esame_finale"]').should('be.visible').click();

    // Step 5: Navigate to the 'Opportunities' page
    cy.get('a[href="/opportunita"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Opportunità');

    // Step 6: Navigate to the 'Services' page
    cy.get('a[href="/servizi"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Servizi');

    // Step 7: Navigate to the 'Help' page
    cy.get('a[href="/help"]').should('be.visible').click();
    cy.get('.section-title').should('contain', 'Help');

    // Step 8: Navigate to the 'NotFound' page and then back to the 'Homepage'
    cy.visit('http://localhost:3000/unknown');
    cy.get('h3.bold-weight').should('contain', 'Pagina non trovata');
    cy.get('#root > div > div.main-space.reduced.col > div > div > div:nth-child(4) > a > button').click();
  });
});
