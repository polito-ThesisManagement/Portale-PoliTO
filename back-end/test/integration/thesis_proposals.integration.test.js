require('jest');

const { app } = require('../../src/app');
const { sequelize } = require('../../src/models');

const request = require('supertest');

let server;

beforeAll(async () => {
  server = app.listen(0, () => {
    console.log(`Test server running on port ${server.address().port}`);
  });
});

afterAll(async () => {
  await server.close(() => {
    sequelize.close();
  });
});

describe('GET /api/thesis-proposals', () => {
  test('Should return the list of all active thesis proposals ordered by creation_date', async () => {
    const response = await request(app).get('/api/thesis-proposals');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('count');
    expect(response.body).toHaveProperty('thesisProposals');
    expect(response.body).toHaveProperty('currentPage');
    expect(response.body).toHaveProperty('totalPages');
    expect(response.body.count).toEqual(7);
    expect(response.body.thesisProposals).toBeInstanceOf(Array);
    expect(response.body.thesisProposals.length).toEqual(7);
    expect(response.body.currentPage).toEqual(1);
    expect(response.body.totalPages).toEqual(1);
    const now = new Date();
    let previousCreationDate = null;

    response.body.thesisProposals.forEach(proposal => {
      const expirationDate = proposal.expirationDate ? new Date(proposal.expirationDate) : null;
      const creationDate = proposal.creationDate ? new Date(proposal.creationDate) : null;

      expect(expirationDate.getTime()).toBeGreaterThan(now.getTime());

      if (previousCreationDate && creationDate && !isNaN(creationDate.getTime())) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(creationDate.getTime()).toBeLessThanOrEqual(previousCreationDate.getTime());
      }
      previousCreationDate = creationDate;
    });
  });

  test('Should filter thesis proposals by search_string', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ search_string: 'descrizione' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(7);
    response.body.thesisProposals.forEach(proposal => {
      const topic = proposal.topic.toLowerCase();
      const description = proposal.description.toLowerCase();
      expect(topic.includes('descrizione') || description.includes('descrizione')).toBe(true);
    });
  });

  test('Should filter thesis proposals by isInternal', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ isInternal: 'true' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(4);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.isInternal).toBe(true);
    });
  });

  test('Should filter thesis proposals by isAbroad', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ isAbroad: 'true' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.isAbroad).toBe(true);
    });
  });

  test('Should filter thesis proposals by supervisor', async () => {
    const supervisorId = 3019;
    const response = await request(app).get('/api/thesis-proposals').query({ supervisor: supervisorId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      // the supervisor can be either the supervisor or the co-supervisor
      const isSupervisor = proposal.supervisor && proposal.supervisor.id === supervisorId;
      const isCoSupervisor =
        proposal.internalCoSupervisors &&
        proposal.internalCoSupervisors.some(supervisor => supervisor.id === supervisorId);
      expect(isSupervisor || isCoSupervisor).toBe(true);
    });
  });

  test('Should filter thesis proposals by keyword', async () => {
    const keywordId = 1;
    const response = await request(app).get('/api/thesis-proposals').query({ keyword: keywordId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(4);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.keywords.some(keyword => keyword.id === keywordId)).toBe(true);
    });
  });

  test('Should filter thesis proposals by thesis_type', async () => {
    const thesisTypeId = 1;
    const response = await request(app).get('/api/thesis-proposals').query({ thesis_type: thesisTypeId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.types.some(type => type.id === thesisTypeId)).toBe(true);
    });
  });

  test('Should filter thesis proposals by multiple filters (search_string, isInternal, supervisor)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals')
      .query({ search_string: 'descrizione', isInternal: 'true', supervisor: 3019 });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      const topic = proposal.topic.toLowerCase();
      const description = proposal.description.toLowerCase();
      expect(topic.includes('descrizione') || description.includes('descrizione')).toBe(true);
      expect(proposal.isInternal).toBe(true);
      const isSupervisor = proposal.supervisor && proposal.supervisor.id === 3019;
      const isCoSupervisor =
        proposal.internalCoSupervisors && proposal.internalCoSupervisors.some(supervisor => supervisor.id === 3019);
      expect(isSupervisor || isCoSupervisor).toBe(true);
    });
  });

  test('Should filter thesis proposals by multiple filters (supervisor, keyword, type)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals')
      .query({ supervisor: 3019, keyword: 8, thesis_type: 1 });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      const isSupervisor = proposal.supervisor && proposal.supervisor.id === 3019;
      const isCoSupervisor =
        proposal.internalCoSupervisors && proposal.internalCoSupervisors.some(supervisor => supervisor.id === 3019);
      expect(isSupervisor || isCoSupervisor).toBe(true);
      expect(proposal.keywords.some(keyword => keyword.id === 8)).toBe(true);
      expect(proposal.types.some(type => type.id === 1)).toBe(true);
    });
  });

  test('Should filter thesis proposals by multiple filters (keyword, type)', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ keyword: 1, thesis_type: 2 });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.keywords.some(keyword => keyword.id === 1)).toBe(true);
      expect(proposal.types.some(type => type.id === 2)).toBe(true);
    });
  });

  test('Should return an empty list if no thesis proposals match the filters', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ search_string: 'non esiste' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(0);
    expect(response.body.thesisProposals).toBeInstanceOf(Array);
    expect(response.body.thesisProposals.length).toBe(0);
  });
});
