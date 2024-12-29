/// <reference types="cypress" />

describe('Thesis proposal details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1920, 1080);
  });

  it('should see thesis proposal details page (not abroad)', () => {
    // Step 1: Navigate to the thesis proposals page
    cy.get('a[href="/carriera"]').should('be.visible').click();
    cy.get('a[href="/carriera/proposte_di_tesi"]').should('be.visible').click();

    // Step 2: Click on the first thesis proposal
    cy.get('.list-section .thesis-article').should('have.length.greaterThan', 0);
    cy.get('.list-section .thesis-article .btn-primary').first().click();

    // Step 3: Check the page Title
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');

    // Step 4: Reduce sidebar
    cy.get('.sidebar-toggle').click();

    // Step 5: Check the thesis proposal details
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');
  });

  it('should see thesis proposal details page (abroad)', () => {
    cy.visit('http://localhost:3000/carriera/proposte_di_tesi/3593');

    // Step 1: Check the page Title
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');

    // Step 2: Check the thesis proposal details
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');
    cy.get('.badge.abroad_light').contains("Tesi all'estero").should('be.visible');
  });

  it('should see thesis proposal details page with attachment if present', () => {
    cy.visit('http://localhost:3000/carriera/proposte_di_tesi/13923');

    // Step 1: Check the page Title
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');

    // Step 2: Check the thesis proposal details
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');
    cy.get('.detail-title').contains('Allegato').should('be.visible');
  });

  it('should see expired thesis proposal details page', () => {
    cy.visit('http://localhost:3000/carriera/proposte_di_tesi/10410');

    // Step 1: Check the page Title
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');

    // Step 2: Check the thesis proposal details
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');

    // Step 3: Check the expired badge
    cy.get('.badge.error_light').contains('La proposta di tesi risulta scaduta').should('be.visible');
  });
});

describe('Thesis proposal details page - responsiveness', () => {
  beforeEach(() => {
    // Reduce the viewport to mobile sizes
    cy.viewport('iphone-x');
    cy.visit('http://localhost:3000');
  });

  it('should see thesis proposal details page on mobile', () => {
    // Step 1: open the sidebar modal
    cy.get('.sidebar-modal-toggler').click();

    // Step 2: Navigate to the thesis proposals page
    cy.get('.modal-menu a[href="/carriera"]').should('be.visible').click();
    cy.get('a[href="/carriera/proposte_di_tesi"]').click();

    // Step 3: Click on the first thesis proposal
    cy.get('.list-section .thesis-article').should('have.length.greaterThan', 0);
    cy.get('.list-section .thesis-article .btn-primary').first().click();

    // Step 4: Check the page Title
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');

    // Step 5: Check the thesis proposal details
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');

    // Step 6: Check the responsiveness
    cy.viewport('iphone-6');
    cy.get('.section-title').should('contain', 'Dettagli proposta di tesi');
    cy.get('.subsection-proposal-title').should('be.visible');
    cy.get('.course-detail').should('be.visible');
    cy.get('.badge.teacher_light').should('be.visible');
  });
});
