/// <reference types="cypress" />

describe('Language switching', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should change the interface language from default to English and then to Italian', () => {
    // Step 1: Change language to English
    cy.get('#dropdown-icon').should('be.visible').click();
    cy.get('.dropdown-submenu.dropdown-item').first().should('be.visible').trigger('mouseover');
    cy.get('.submenu.dropdown-menu').first().invoke('show').should('be.visible');

    cy.get('.dropdown-item').contains('English').click();

    // Verify that the language has changed to English
    cy.get('body').should('contain', 'English');

    // Verify using the lang attribute
    cy.get('html').should('have.attr', 'lang', 'en');

    // Step 2: Change language to Italian
    cy.get('#dropdown-icon').should('be.visible').click();
    cy.get('.dropdown-submenu.dropdown-item').first().should('be.visible').trigger('mouseover');
    cy.get('.submenu.dropdown-menu').first().invoke('show').should('be.visible');

    cy.get('.dropdown-item').contains('Italiano').click();

    // Verify that the language has changed to Italian
    cy.get('body').should('contain', 'Italiano');

    // Verify using the lang attribute
    cy.get('html').should('have.attr', 'lang', 'it');
  });
});

describe('Theme switching', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // Function to create a fake matchMedia object
  function createFakeMatchMedia(query) {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      addListener: () => {},
      removeListener: () => {},
    };
  }

  // Function to stub matchMedia on the window object
  function stubMatchMedia(win) {
    cy.stub(win, 'matchMedia').callsFake(createFakeMatchMedia);
  }

  it('should toggle themes and correctly apply the system theme when auto is selected', () => {
    // Step 1: Change theme to dark
    cy.get('#dark').click();

    // Verify theme is dark through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'dark');

    // Step 2: Change theme to light
    cy.get('#light').click();

    // Verify theme is light through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'light');

    // Cypress test to stub matchMedia for dark mode simulation
    cy.window().then(stubMatchMedia);

    // Step 3: Change theme to auto
    cy.get('#auto').click();

    // Verify theme is dark through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'dark');
  });

  it('should toggle themes and correctly apply the system theme when auto is selected (mobile view)', () => {
    // Reduce the viewport to mobile sizes
    cy.viewport('iphone-x');

    // Step 1: Change theme to light
    cy.get('input[name="theme-segmented-control-reduced"]').click();

    // Verify theme is light through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'light');

    // Step 2: Change theme to dark
    cy.get('input[name="theme-segmented-control-reduced"]').click();

    // Verify theme is dark through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'dark');

    // Cypress test to stub matchMedia for dark mode simulation
    cy.window().then(stubMatchMedia);

    // Step 3: Change theme to auto
    cy.get('input[name="theme-segmented-control-reduced"]').click();

    // Verify theme is dark through the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'dark');
  });
});
