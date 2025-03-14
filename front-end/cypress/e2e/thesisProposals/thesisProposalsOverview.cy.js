/// <reference types="cypress" />

describe('Thesis proposals overview page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('a[href="/carriera"]').should('be.visible').click();
    cy.get('a[href="/carriera/proposte_di_tesi"]').should('be.visible').click();
  });

  it('should toggle between course proposals and all proposals', () => {
    // Step 1: Verify the initial state is course proposals
    cy.get('#course').should('be.checked');
    cy.get('#all').should('not.be.checked');

    // Step 2: Toggle to all proposals
    cy.get('#all').click();

    // Step 3: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 4: Toggle back to course proposals
    cy.get('#course').click();

    // Step 5: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
  });

  it("should filter proposals by topic or description (string that doesn't exist)", () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Filter proposals by title, form control with aria label "search_proposals"
    cy.get('input[aria-label="search_proposals"]').type('string that does not exist');

    // Step 3: Verify that there are no proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 0);
  });

  it('should filter proposals by topic or description (string that exists)', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Filter proposals by title, form control with aria label "search_proposals"
    cy.get('input[aria-label="search_proposals"]').type('test');

    // Step 4: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 5: Verify that the filtered proposals are listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

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

    // Function to process the description text of an article
    const processDescriptionText = (article, topicText) => {
      getDescriptionText(article).then(descriptionText => {
        verifyTextContainsTest(topicText, descriptionText);
      });
    };

    // Main test logic
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      processArticle(article);
    });
  });

  it('should filter internal proposals and reset filters', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select environment' select
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains("Seleziona l'ambiente...").click();

    // Step 5: Select 'Tesi interna' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains('Tesi interna').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Verify that each proposal contains the tag 'Internal thesis'
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article)
        .find('.card-body > .custom-badge-container')
        .then($tag => {
          const tag = $tag.text().toLowerCase();
          expect(tag.includes('tesi interna')).to.be.true;
        });
    });

    // Step 10: Reset the filter
    cy.get('.applied-filters-container .badge-group .custom-badge-container').contains('Tesi interna').click();
  });

  it('should filter external proposals and reset filter', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Toggle to all proposals
    cy.get('#all').click();

    // Step 3: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 4: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 5: Click on 'Select environment' select
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains("Seleziona l'ambiente...").click();

    // Step 6: Select 'Tesi in azienda' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains('Tesi in azienda').click();

    // Step 7: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 8: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 9: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 10: Verify that each proposal contains the tag 'Company thesis'
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article)
        .find('.card-body > .custom-badge-container')
        .then($tag => {
          const tag = $tag.text().toLowerCase();
          expect(tag.includes('tesi in azienda')).to.be.true;
        });
    });

    // Step 11: Reset the filter
    cy.get('.applied-filters-container .badge-group .custom-badge-container').contains('Tesi in azienda').click();
  });

  it('should filter Italy proposals and reset filter', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select location' select
    cy.get('#dropdown-filters > div > div > div:nth-child(2)').contains('Seleziona il luogo...').click();

    // Step 5: Select 'Tesi all\'estero' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(2)').contains('Tesi in Italia').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that there proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Verify that each proposal contains the fi-it icon
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article).find('.card-header > .row > .thesis-topic.text-end > .fi-it').should('be.visible');
    });

    // Step 10: Reopen the filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 11: Click on the reset badge
    cy.get('#dropdown-filters div.custom-badge-container button').contains('Tesi in Italia').click();

    // Step 12: apply the change
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();
  });

  it('should filter abroad proposals and reset filter', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select location' select
    cy.get('#dropdown-filters > div > div > div:nth-child(2)').contains('Seleziona il luogo...').click();

    // Step 5: Select 'Tesi all\'estero' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(2)').contains("Tesi all'estero").click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that there proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Verify that each proposal contains the fa-earth-americas icon
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article).find('.card-header > .row > .thesis-topic.text-end > .fa-earth-americas').should('be.visible');
    });

    // Step 10: Reset the filter
    cy.get('.applied-filters-container .badge-group .custom-badge-container').contains("Tesi all'estero").click();
  });

  it('should filter proposals by keywords and reset filter', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select keyword' select
    cy.get('#dropdown-filters > div > div > div:nth-child(10)').contains('Seleziona le parole chiave...').click();

    // Step 5: Select 'aerospace' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(10)').contains('Aerospace').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that there are no proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 0);

    // Step 9: Reset the filters
    cy.get('#dropdown-filters').should('be.visible').click();
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Resetta')
      .click();

    // Step 10: Verify that the filters are reset
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
  });

  it('should filter proposals by keywords', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Type 'europeizzazione' in the keywords input
    cy.get('#dropdown-filters > div > div > div:nth-child(10)')
      .contains('Seleziona le parole chiave...')
      .type('europeizzazione');

    // Step 5: Select 'europeizzazione' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(10)').contains('Europeizzazione').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that the filtered proposals are listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Check that each proposal contains the keyword 'europeizzazione'
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article)
        .find('.custom-badge-container')
        .then($keywordTags => {
          const keywordTags = $keywordTags.text().toLowerCase();
          expect(keywordTags.includes('europeizzazione')).to.be.true;
        });
    });
  });

  it('should filter proposals by teacher and reset filters', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select supervisors' select
    cy.get('#dropdown-filters > div > div > div:nth-child(8)').contains('Seleziona i relatori...').click();

    // Step 5: Select 'Rosario Ceravolo' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(8)').contains('Rosario Ceravolo').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that the filtered proposals are listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Check that each proposal contains the teacher 'Rosario Ceravolo'
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article)
        .find('.custom-badge-container')
        .then($professorTags => {
          const professorTags = $professorTags.text();
          expect(professorTags.includes('Rosario Ceravolo')).to.be.true;
        });
    });

    // Step 10: Reset the filters by clicking on the badge
    cy.get('.applied-filters-container .badge-group .custom-badge-container').contains('Rosario Ceravolo').click();
  });

  it('should filter proposals by type and reset filters', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 3: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 4: Click on 'Select types' select
    cy.get('#dropdown-filters > div > div > div:nth-child(6)').contains('Seleziona le tipologie...').click();

    // Step 5: Select 'Sperimentale' from the dropdown
    cy.get('#dropdown-filters > div > div > div:nth-child(6)').contains('Sperimentale').click();

    // Step 6: Click on the apply button
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 7: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 8: Verify that the filtered proposals are listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 9: Check that each proposal contains the type 'Sperimentale'
    cy.get('.proposals-container .card-container .roundCard').each(article => {
      cy.wrap(article)
        .find('.custom-badge-container')
        .then($tags => {
          const tags = $tags.text().toLowerCase();
          expect(tags.includes('sperimentale')).to.be.true;
        });
    });

    // Step 10: Reset the filters
    cy.get('#dropdown-filters').should('be.visible').click();
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Resetta')
      .click();
  });

  it('should apply multiple filters and reset them', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Open filters dropdown
    cy.get('#dropdown-filters').should('be.visible').click();

    // Step 3: Apply internal proposals filter and remove it clicking on 'Resetta'
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains("Seleziona l'ambiente...").click();
    cy.get('#dropdown-filters > div > div > div:nth-child(4)').contains('Tesi interna').click();
    cy.get('#dropdown-filters > div > div > div:nth-child(3) > button').contains('Resetta').click();

    // Step 4 Filter proposals by keyword 'europeizzazione'
    cy.get('#dropdown-filters > div > div > div:nth-child(10)')
      .contains('Seleziona le parole chiave...')
      .type('europeizzazione');
    cy.get('#dropdown-filters > div > div > div:nth-child(10)').contains('Europeizzazione').click();

    // Step 5: Filter proposals by teacher 'Rosario Ceravolo'
    cy.get('#dropdown-filters > div > div > div:nth-child(8)').contains('Seleziona i relatori...').click();
    cy.get('#dropdown-filters > div > div > div:nth-child(8)').contains('Rosario Ceravolo').click();

    // Step 6: Filter proposals by type 'Sperimentale'
    cy.get('#dropdown-filters > div > div > div:nth-child(6)').contains('Seleziona le tipologie...').click();
    cy.get('#dropdown-filters > div > div > div:nth-child(6)').contains('Sperimentale').click();

    // Step 7: Apply filters
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Applica')
      .click();

    // Step 8: Verify that there are no proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 0);

    // Step 9: Reset the filters
    cy.get('#dropdown-filters').should('be.visible').click();
    cy.get('#dropdown-filters div > div > div.d-flex.w-100.justify-content-between > button')
      .contains('Resetta')
      .click();

    // Step 10: Verify that the filters are reset
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
  });

  it('should sort proposals by topic', () => {
    // Step 1: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown, select topic and apply the sort
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Argomento').click();

    // Step 3: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 4: Verify that the sorted proposals are listed and alphabetically ordered by topic in ascending order
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
    cy.get('.card-container .roundCard .thesis-topic').then($topics => {
      let topics = $topics.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      topics = topics.filter(topic => topic !== '');
      let sortedTopics = [...topics].sort((a, b) => a.localeCompare(b));
      sortedTopics = sortedTopics.filter(topic => topic !== '');
      expect(topics).to.deep.equal(sortedTopics);
    });

    // Step 5: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    // Step 6: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 7: Verify that the sorted proposals are listed and alphabetically ordered by topic
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 8: Extract all topics and verify they are sorted
    cy.get('.card-container .roundCard h3.thesis-topic').then($topics => {
      let topics = $topics.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      topics = topics.filter(topic => topic !== '');
      let sortedTopics = [...topics].sort((a, b) => b.localeCompare(a));
      sortedTopics = sortedTopics.filter(topic => topic !== '');
      expect(topics).to.deep.equal(sortedTopics);
    });

    // Step 10: Open the sort dropdown and reset the sort
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Argomento').click();
  });

  it('should sort proposals by description', () => {
    // Step 1: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select description
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Descrizione').click();

    // Step 3: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 4: Verify that the sorted proposals are listed and alphabetically ordered by description in ascending order
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
    cy.get('.thesis-description').then($descriptions => {
      const descriptions = $descriptions.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedDescriptions = [...descriptions].sort((a, b) => a.localeCompare(b));
      expect(descriptions).to.deep.equal(sortedDescriptions);
    });

    // Step 5: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    // Step 6: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 7: Verify that the sorted proposals are listed and alphabetically ordered by description in descending order
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
    cy.get('.thesis-description').then($descriptions => {
      const descriptions = $descriptions.map((index, el) => Cypress.$(el).text().toLowerCase()).get();
      const sortedDescriptions = [...descriptions].sort((a, b) => b.localeCompare(a));
      expect(descriptions).to.deep.equal(sortedDescriptions);
    });

    // Step 8: Reset sorting through reset badge
    cy.get('.applied-filters-container .badge-group .custom-badge-container')
      .contains('Ordina per: Descrizione')
      .click();
  });

  it('should sort proposals by creation date', () => {
    // Step 1: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select creation date
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Data di creazione').click();

    // Step 4: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 5: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    // Step 6: Change the order to ascending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();
  });

  it('should sort proposals by expiration date', () => {
    // Step 1: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals/targeted*').as('getTargetedThesisProposals');

    // Step 2: Open the sort dropdown and select expiration date
    cy.get('#dropdown-sort').click();
    cy.get('a.dropdown-item').contains('Data di scadenza').click();

    // Step 3: Wait for the network request to complete
    cy.wait('@getTargetedThesisProposals');

    // Step 4: Change the order to descending
    cy.get('#dropdown-sort > button > svg:nth-child(1)').click();

    // Step 5: Reset sorting through reset badge
    cy.get('.applied-filters-container .badge-group .custom-badge-container')
      .contains('Ordina per: Data di scadenza')
      .click();
  });

  it('should move across the pages of the thesis proposals list', () => {
    // Step 1: Verify that there are thesis proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 2: Toggle to all proposals
    cy.get('#all').click();

    // Step 3: Intercept the network request for the search
    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 4: Move to the second page
    cy.get('a.page-link').contains('2').click();

    // Step 5: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 6: Verify that the second page of proposals is listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 7: Move to the next page
    cy.get('a.page-link').contains('›').click();

    // Step 8: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 9: Move to the last page
    cy.get('a.page-link').contains('»').click();

    // Step 10: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 11: Verify that the last page of proposals is listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 12: Move to the previous page
    cy.get('a.page-link').contains('‹').click();

    // Step 13: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 14: Verify that the page of proposals is listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);

    // Step 15: Move to the first page
    cy.get('a.page-link').contains('«').click();

    // Step 16: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 17: Verify that the first page of proposals is listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
  });

  it('should change the number of proposals per page', () => {
    // Step 1: Intercept the network request
    cy.intercept('GET', '**/api/thesis-proposals*').as('getThesisProposals');

    // Step 2: Toggle to all proposals
    cy.get('#all').click();

    // Step 3: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 4: Verify that there are 10 proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 10);

    // Step 5: Change the number of proposals per page to 20
    cy.get('#dropdown-pagination > button').click();
    cy.get('a.dropdown-item').contains('20').click();

    // Step 6: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 7: Verify that there are 20 proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 20);

    // Step 8: Change the number of proposals per page to 50
    cy.get('#dropdown-pagination > button').click();
    cy.get('a.dropdown-item').contains('50').click();

    // Step 9: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 10: Verify that there are 50 proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length', 50);

    // Step 11: Change the number of proposals per page to 100
    cy.get('#dropdown-pagination > button').click();
    cy.get('a.dropdown-item').contains('100').click();

    // Step 12: Wait for the network request to complete
    cy.wait('@getThesisProposals');

    // Step 13: Verify that there are more than 50 proposals listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 50);
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

    // Step 3: Verify the page breadcrumb
    cy.get('.breadcrumb').should('be.visible');
    cy.get('.breadcrumb-item').should('have.length', 2);
    cy.get('.breadcrumb-item').eq(0).contains('Carriera');
    cy.get('.breadcrumb-item').eq(1).contains('Proposte di tesi');

    // Step 4: Verify the thesis proposals are listed
    cy.get('.proposals-container .card-container .roundCard').should('have.length.greaterThan', 0);
  });
});
