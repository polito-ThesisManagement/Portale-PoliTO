/// <reference types="cypress" />

describe('Thesis proposals overview page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('a[href="/carriera"]').should('be.visible').click();
    cy.get('a[href="/carriera/proposte_di_tesi"]').should('be.visible').click();
  });

  it('should toggle between course proposals and all proposals', () => {
    // Step 1: Verify the initial state is course proposals
    cy.get('.proposals-toggle input').eq(0).should('be.checked');
    cy.get('.proposals-toggle input').eq(1).should('not.be.checked');

    // Step 2: Toggle to all proposals
    cy.get('.proposals-toggle label').eq(1).click();
    cy.get('.proposals-toggle input').eq(1).should('be.checked');
    cy.get('.proposals-toggle input').eq(0).should('not.be.checked');

    // Step 3: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 4: Toggle back to course proposals
    cy.get('.proposals-toggle label').eq(0).click();
    cy.get('.proposals-toggle input').eq(0).should('be.checked');

    // Step 5: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
  });

  it("should filter proposals by topic or description (string that doesn't exist)", () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Filter proposals by title, form control with aria label "search_proposals"
    cy.get('input[aria-label="search_proposals"]').type('string that does not exist');

    // Step 3: Verify that there are no proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 0);
  });

  it('should filter proposals by topic or description (string that exists)', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Filter proposals by title, form control with aria label "search_proposals"
    cy.get('input[aria-label="search_proposals"]').type('test');

    // Step 4: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the filtered proposals are listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 6: Check that the title or description of each proposal contains the string 'test'
    // Function to get the topic text of an article
    const getTopicText = article =>
      cy
        .wrap(article)
        .find('.thesis-topic')
        .invoke('text')
        .then(text => text.toLowerCase());

    // Function to get the description text of an article
    const getDescriptionText = article =>
      cy
        .wrap(article)
        .find('.thesis-description')
        .invoke('text')
        .then(text => text.toLowerCase());

    // Function to verify if either topic or description contains the string 'test'
    const verifyTextContainsTest = (topicText, descriptionText) => {
      expect(topicText.includes('test') || descriptionText.includes('test')).to.be.true;
    };

    // Function to process a single article
    const processArticle = article => {
      getTopicText(article).then(topicText => {
        processDescriptionText(article, topicText);
      });
    };

    const processDescriptionText = (article, topicText) => {
      getDescriptionText(article).then(descriptionText => {
        verifyTextContainsTest(topicText, descriptionText);
      });
    };

    // Main test logic
    cy.get('.list-section .thesis-overview').each(article => {
      processArticle(article);
    });
  });

  it('should toggle between all proposals and internal proposals', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Toggle to internal proposals
    cy.get('label.radio-1-light.btn.btn-primary').contains('Tesi interne').click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Verify the toggle state is internal proposals
    cy.get('label.radio-1-light.btn.btn-primary.checked').should('be.visible');

    // Step 8: Verify that each proposal contains the tag 'Internal thesis'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.thesis-position-tags')
        .then($tag => {
          console.log($tag.text().toLowerCase());
          const tag = $tag.text().toLowerCase();
          expect(tag.includes('tesi interna')).to.be.true;
        });
    });
  });

  it('should toggle between all proposals and external proposals', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Toggle to external proposals
    cy.get('label.radio-2-light.btn.btn-primary').contains('Tesi in azienda').click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Verify the toggle state is external proposals
    cy.get('label.radio-2-light.btn.btn-primary.checked').should('be.visible');

    // Step 8: Verify that each proposal contains the tag 'Company thesis'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.thesis-position-tags')
        .then($tag => {
          const tag = $tag.text().toLowerCase();
          expect(tag.includes('tesi in azienda')).to.be.true;
        });
    });
  });

  it('should filter abroad proposals', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Filter proposals by abroad
    cy.get('label.toggle-check-light.btn.btn-primary').contains("Tesi all'estero").click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that there proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Verify that each proposal contains the tag 'Abroad thesis'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.thesis-position-tags')
        .then($tag => {
          const tag = $tag.text().toLowerCase();
          expect(tag.includes("tesi all'estero")).to.be.true;
        });
    });
  });

  it('should filter proposals by keywords and reset filter', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Filter proposals by keywords
    cy.get('#dropdown-keyword').click();
    cy.get('#208').click();
    cy.get(
      '#dropdown-keyword > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button',
    ).click();

    // Step 5: Verify that there are no proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 0);

    // Step 6: Reset the filters
    cy.get('#dropdown-keyword').click();
    cy.get(
      '#dropdown-keyword > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button.btn.btn-link.btn-sm',
    ).click();

    // Step 7: Verify that the filters are reset
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
  });

  it('should filter proposals by keywords', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Filter proposals by keywords
    cy.get('#dropdown-keyword').click();
    cy.get('#dropdown-keyword > div > div:nth-child(1) > div > input').type('europeizzazione');
    cy.get('#137').click();
    cy.get(
      '#dropdown-keyword > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button',
    ).click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that the filtered proposals are listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Check that each proposal contains the keyword 'europeizzazione'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.badge-container')
        .then($keywordTags => {
          const keywordTags = $keywordTags.text().toLowerCase();
          expect(keywordTags.includes('europeizzazione')).to.be.true;
        });
    });
  });

  it('should filter proposals by teacher', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Filter proposals by teacher 'Rosario Ceravolo'
    cy.get('#dropdown-teacher').click();
    cy.get('#dropdown-teacher > div > div:nth-child(1) > div > input').type('Rosario');
    cy.get('#2389').click();
    cy.get(
      '#dropdown-teacher > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button',
    ).click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that the filtered proposals are listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Check that each proposal contains the teacher 'Rosario Ceravolo'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.thesis-professor-tags')
        .then($professorTags => {
          const professorTags = $professorTags.text();
          expect(professorTags.includes('Rosario Ceravolo')).to.be.true;
        });
    });
  });

  it('should filter proposals by type', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 4: Filter proposals by type 'Sperimentale'
    cy.get('#dropdown-type').click();
    cy.get('#dropdown-type > div > div:nth-child(1) > div > input').type('sperimentale');
    cy.get('#9').click();
    cy.get('#dropdown-type > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button').click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 6: Verify that the filtered proposals are listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Check that each proposal contains the type 'Sperimentale'
    cy.get('.list-section .thesis-overview').each(article => {
      cy.wrap(article)
        .find('.thesis-type-tags')
        .then($tags => {
          const tags = $tags.text().toLowerCase();
          expect(tags.includes('sperimentale')).to.be.true;
        });
    });
  });

  it('should apply multiple filters and reset them', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 3: Filter proposals by keyword 'europeizzazione'
    cy.get('#dropdown-keyword').click();
    cy.get('#dropdown-keyword > div > div:nth-child(1) > div > input').type('europeizzazione');
    cy.get('#137').click();
    cy.get(
      '#dropdown-keyword > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button',
    ).click();

    // Step 4: Filter proposals by teacher 'Rosario Ceravolo'
    cy.get('#dropdown-teacher').click();
    cy.get('#dropdown-teacher > div > div:nth-child(1) > div > input').type('Rosario');
    cy.get('#2389').click();
    cy.get(
      '#dropdown-teacher > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button',
    ).click();

    // Step 5: Filter proposals by type 'Sperimentale'
    cy.get('#dropdown-type').click();
    cy.get('#dropdown-type > div > div:nth-child(1) > div > input').type('sperimentale');
    cy.get('#9').click();
    cy.get('#dropdown-type > div > div.d-flex.justify-content-between.ms-2.me-3.mt-2 > button#dropdown-button').click();

    // Step 6: Verify that there are no proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 0);

    // Step 7: Reset the filters
    cy.get(
      '#root > div > div.main-space.reduced.col > div > div.proposals-container > div.container > div:nth-child(4) > button',
    ).click();

    // Step 8: Verify that the filters are reset
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
  });

  it('should sort proposals by topic', () => {
    // Step 1: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown, select topic and apply the sort
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Argomento').click();
    cy.get('#dropdown-button').contains('OK').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 3: Verify that the sorted proposals are listed and alphabetically ordered by topic in ascending order
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
    cy.get('.list-section .thesis-overview .thesis-topic').then($topics => {
      const topics = $topics.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedTopics = [...topics].sort((a, b) => a.localeCompare(b));
      expect(topics).to.deep.equal(sortedTopics);
    });

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 4: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the sorted proposals are listed and alphabetically ordered by topic
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 6: Extract all topics and verify they are sorted
    cy.get('.list-section .thesis-overview .thesis-topic').then($topics => {
      const topics = $topics.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedTopics = [...topics].sort((a, b) => b.localeCompare(a));
      expect(topics).to.deep.equal(sortedTopics);
    });

    // Step 7: Open the sort dropdown and reset the sort
    cy.get('#dropdown-sort').click();
    cy.get('button.btn.btn-link.btn-sm').click();
  });

  it('should sort proposals by description', () => {
    // Step 1: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select description
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Descrizione').click();
    cy.get('#dropdown-button').contains('OK').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 3: Verify that the sorted proposals are listed and alphabetically ordered by description in ascending order
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
    cy.get('.list-section .thesis-overview .thesis-description').then($descriptions => {
      const descriptions = $descriptions.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedDescriptions = [...descriptions].sort((a, b) => a.localeCompare(b));
      expect(descriptions).to.deep.equal(sortedDescriptions);
    });

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 4: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the sorted proposals are listed and alphabetically ordered by description in descending order
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
    cy.get('.list-section .thesis-overview .thesis-description').then($descriptions => {
      const descriptions = $descriptions.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedDescriptions = [...descriptions].sort((a, b) => b.localeCompare(a));
      expect(descriptions).to.deep.equal(sortedDescriptions);
    });
  });

  it('should sort proposals by creation date', () => {
    // Step 1: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select creation date
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Data di creazione').click();
    cy.get('#dropdown-button').contains('OK').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 3: Verify that the sorted proposals are listed and ordered by creation date in ascending order
    cy.get('.list-section .thesis-overview .thesis-footer .thesis-dates').then($dates => {
      const dates = $dates.map((index, el) => Cypress.$(el).text().split('Creata il ')[1]).get();
      const parsedDates = dates.map(date => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
      });
      const sortedDates = [...parsedDates].sort((a, b) => new Date(a) - new Date(b));
      expect(parsedDates).to.deep.equal(sortedDates);
    });

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 4: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the sorted proposals are listed and ordered by creation date in descending order
    cy.get('.list-section .thesis-overview .thesis-footer .thesis-dates').then($dates => {
      const dates = $dates.map((index, el) => Cypress.$(el).text().split('Creata il ')[1]).get();
      const parsedDates = dates.map(date => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
      });
      const sortedDates = [...parsedDates].sort((a, b) => new Date(b) - new Date(a));
      expect(parsedDates).to.deep.equal(sortedDates);
    });
  });

  it('should sort proposals by expiration date', () => {
    // Step 1: Open advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select expiration date
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Data di scadenza').click();
    cy.get('#dropdown-button').contains('OK').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 3: Verify that the sorted proposals are listed and ordered by expiration date in ascending order
    cy.get('.list-section .thesis-overview .thesis-footer .thesis-dates').then($dates => {
      const dates = $dates.map((index, el) => Cypress.$(el).text().split('Scade il ')[1]).get();
      const parsedDates = dates.map(date => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
      });
      const sortedDates = [...parsedDates].sort((a, b) => new Date(a) - new Date(b));
      expect(parsedDates).to.deep.equal(sortedDates);
    });

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 4: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the sorted proposals are listed and ordered by expiration date in descending order
    cy.get('.list-section .thesis-overview .thesis-footer .thesis-dates').then($dates => {
      const dates = $dates.map((index, el) => Cypress.$(el).text().split('Scade il ')[1]).get();
      const parsedDates = dates.map(date => {
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
      });
      const sortedDates = [...parsedDates].sort((a, b) => new Date(b) - new Date(a));
      expect(parsedDates).to.deep.equal(sortedDates);
    });

    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');
  });

  it('should move across the pages of the thesis proposals list', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 2: Toggle to all proposals
    cy.get('.proposals-toggle label').eq(1).click();

    // Step 3: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 4: Move to the second page
    cy.get('a.page-link').contains('2').click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 6: Verify that the second page of proposals is listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 7: Move to the next page
    cy.get('a.page-link').contains('›').click();

    // Step 8: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 9: Move to the last page
    cy.get('a.page-link').contains('»').click({ force: true });

    // Step 10: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 11: Verify that the last page of proposals is listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 12: Move to the previous page
    cy.get('a.page-link').contains('‹').click();

    // Step 13: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 14: Verify that the page of proposals is listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 15: Move to the first page
    cy.get('a.page-link').contains('«').click();

    // Step 16: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 17: Verify that the first page of proposals is listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);
  });

  it('should change the number of proposals per page', () => {
    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 1: Toggle to all proposals
    cy.get('.proposals-toggle label').eq(1).click();

    cy.wait('@getThesisProposals');

    // Step 2: Verify that there are 5 proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 5);

    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 3: Change the number of proposals per page to 10
    cy.get('select.form-select').select('10');

    cy.wait('@getThesisProposals');

    // Step 4: Verify that there are 10 proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 10);

    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 5: Change the number of proposals per page to 20
    cy.get('select.form-select').select('20');

    cy.wait('@getThesisProposals');

    // Step 6: Verify that there are 20 proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 20);

    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 7: Change the number of proposals per page to 50
    cy.get('select.form-select').select('50');

    cy.wait('@getThesisProposals');

    // Step 8: Verify that there are 50 proposals listed
    cy.get('.list-section .thesis-overview').should('have.length', 50);
  });
});

describe('Thesis proposal overview page - responsiveness', () => {
  beforeEach(() => {
    // Reduce the viewport to mobile sizes
    cy.viewport('iphone-x');
    cy.visit('http://localhost:3000');
  });

  it('should see thesis proposals overview page on mobile', () => {
    // Step 1: open the sidebar modal
    cy.get('.sidebar-modal-toggler').click();

    // Step 2: Navigate to the thesis proposals page
    cy.get('.modal-menu a[href="/carriera"]').should('be.visible').click();
    cy.get('a[href="/carriera/proposte_di_tesi"]').click();

    // Step 3: Verify the page title
    cy.get('.section-title').should('contain', 'Proposte di Tesi');

    // Step 4: Verify the thesis proposals are listed
    cy.get('.list-section .thesis-overview').should('have.length.greaterThan', 0);

    // Step 5: Open the advanced filters accordion
    cy.get('.accordion-button.collapsed').should('be.visible').click();

    // Step 6: Verify the advanced filters are visible
    cy.get('.filters-section').should('be.visible');
    cy.get('.hr-light').should('be.visible');
    cy.get('.reset-button-container').should('be.visible');
  });
});
