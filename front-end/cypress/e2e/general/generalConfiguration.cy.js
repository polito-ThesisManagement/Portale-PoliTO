/// <reference types="cypress" />

describe('General configuration settings', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('changes language from default to English, then to Italian', () => {
    // Step 1: Change language to English
    cy.get('#dropdown-icon').should('be.visible').click();
    cy.get('.dropdown-submenu.dropdown-item').first().should('be.visible').trigger('mouseover');
    cy.get('.submenu.dropdown-menu').first().invoke('show').should('be.visible');

    cy.get('.dropdown-item').contains('English').click();

    // Verify that the language has changed to English
    cy.get('body').should('contain', 'English');

    // Verify using the lang attribute
    cy.get('html').should('have.attr', 'lang', 'en');

    // Step 2: Change language to Italian without resetting
    cy.get('#dropdown-icon').should('be.visible').click();
    cy.get('.dropdown-submenu.dropdown-item').first().should('be.visible').trigger('mouseover');
    cy.get('.submenu.dropdown-menu').first().invoke('show').should('be.visible');

    cy.get('.dropdown-item').contains('Italiano').click();

    // Verify that the language has changed to Italian
    cy.get('body').should('contain', 'Italiano');

    // Verify using the lang attribute
    cy.get('html').should('have.attr', 'lang', 'it');
  });

  it('changes theme from default to Dark, then to Light', () => {
    // Step 1: Change theme to dark
    cy.get('label[for="theme-toggle-radio3"]').should('be.visible').click();

    // Verify using the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'dark');

    // Step 2: Change theme to light without resetting
    cy.get('label[for="theme-toggle-radio2"]').should('be.visible').click();

    // Verify using the data-theme attribute
    cy.get('html').should('have.attr', 'data-theme', 'light');
  });
});
