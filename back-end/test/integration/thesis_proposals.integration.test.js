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
  test('Should return the list of all active thesis proposals ordered by id', async () => {
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
    let previousId = null;

    response.body.thesisProposals.forEach(proposal => {
      const id = proposal.id;

      if (previousId) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(id).toBeGreaterThan(previousId);
      }
      previousId = id;
    });
  });

  test('Should filter thesis proposals by search', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ search: 'descrizione' });
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

  test('Should filter thesis proposals by teacherId', async () => {
    const teacherId = 3019;
    const response = await request(app).get('/api/thesis-proposals').query({ teacherId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      // the supervisor can be either the supervisor or the co-supervisor
      const isSupervisor = proposal.supervisor && proposal.supervisor.id === teacherId;
      const isCoSupervisor =
        proposal.internalCoSupervisors &&
        proposal.internalCoSupervisors.some(supervisor => supervisor.id === teacherId);
      expect(isSupervisor || isCoSupervisor).toBe(true);
    });
  });

  test('Should filter thesis proposals by keywordId', async () => {
    const keywordId = 1;
    const response = await request(app).get('/api/thesis-proposals').query({ keywordId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(4);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.keywords.some(keyword => keyword.id === keywordId)).toBe(true);
    });
  });

  test('Should filter thesis proposals by typeId', async () => {
    const typeId = 1;
    const response = await request(app).get('/api/thesis-proposals').query({ typeId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.types.some(type => type.id === typeId)).toBe(true);
    });
  });

  test('Should filter thesis proposals by multiple filters (search, isInternal, teacherId)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals')
      .query({ search: 'descrizione', isInternal: 'true', teacherId: 3019 });
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

  test('Should filter thesis proposals by multiple filters (teacherId, keywordId, typeId)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals')
      .query({ teacherId: 3019, keywordId: 8, typeId: 1 });
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

  test('Should filter thesis proposals by multiple filters (keywordId, typeId)', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ keywordId: 1, typeId: 2 });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.keywords.some(keyword => keyword.id === 1)).toBe(true);
      expect(proposal.types.some(type => type.id === 2)).toBe(true);
    });
  });

  test('Should return an empty list if no thesis proposals match the filters', async () => {
    const response = await request(app).get('/api/thesis-proposals').query({ search: 'non esiste' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(0);
    expect(response.body.thesisProposals).toBeInstanceOf(Array);
    expect(response.body.thesisProposals.length).toBe(0);
  });
});

describe('GET /api/thesis-proposals/targeted', () => {
  test('Should return the list of targeted thesis proposals for the student degree course', async () => {
    const response = await request(app).get('/api/thesis-proposals/targeted');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('count');
    expect(response.body).toHaveProperty('thesisProposals');
    expect(response.body).toHaveProperty('currentPage');
    expect(response.body).toHaveProperty('totalPages');
    expect(response.body.count).toEqual(5);
    expect(response.body.thesisProposals).toBeInstanceOf(Array);
    expect(response.body.thesisProposals.length).toEqual(5);
    expect(response.body.currentPage).toEqual(1);
    expect(response.body.totalPages).toEqual(1);
  });

  test('Should filter targeted thesis proposals by search (in english)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals/targeted')
      .query({ lang: 'en', search: 'description' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(5);
    response.body.thesisProposals.forEach(proposal => {
      const topic = proposal.topic.toLowerCase();
      const description = proposal.description.toLowerCase();
      expect(topic.includes('description') || description.includes('description')).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by isInternal', async () => {
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ isInternal: 'true' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(4);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.isInternal).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by isAbroad', async () => {
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ isAbroad: 'true' });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.isAbroad).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by teacherId', async () => {
    const teacherId = 3019;
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ teacherId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(2);
    response.body.thesisProposals.forEach(proposal => {
      // the supervisor can be either the supervisor or the co-supervisor
      const isSupervisor = proposal.supervisor && proposal.supervisor.id === teacherId;
      const isCoSupervisor =
        proposal.internalCoSupervisors &&
        proposal.internalCoSupervisors.some(supervisor => supervisor.id === teacherId);
      expect(isSupervisor || isCoSupervisor).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by keywordId', async () => {
    const keywordId = 1;
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ keywordId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(3);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.keywords.some(keyword => keyword.id === keywordId)).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by typeId', async () => {
    const typeId = 1;
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ typeId });
    expect(response.status).toBe(200);
    expect(response.body.count).toBe(1);
    response.body.thesisProposals.forEach(proposal => {
      expect(proposal.types.some(type => type.id === typeId)).toBe(true);
    });
  });

  test('Should filter targeted thesis proposals by multiple filters (search, isInternal, teacherId)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals/targeted')
      .query({ search: 'descrizione', isInternal: 'true', teacherId: 3019 });
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

  test('Should filter targeted thesis proposals by multiple filters (teacherId, keywordId, typeId)', async () => {
    const response = await request(app)
      .get('/api/thesis-proposals/targeted')
      .query({ teacherId: 3019, keywordId: 8, typeId: 1 });
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

  test('Should return a 500 error if orderBy is not valid', async () => {
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ orderBy: 'invalid' });
    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Invalid orderBy parameter');
  });

  test('Should return a 500 error if sortBy is not valid', async () => {
    const response = await request(app).get('/api/thesis-proposals/targeted').query({ sortBy: 'invalid' });
    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Invalid sortBy parameter');
  });
});

describe('GET /api/thesis-proposals/types', () => {
  test('Should return the list of all thesis types', async () => {
    const response = await request(app).get('/api/thesis-proposals/types');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2);
    expect(response.body).toEqual([
      { id: 1, type: 'RICERCA' },
      { id: 2, type: 'SPERIMENTALE' },
    ]);
  });

  test('Should filter thesis types by search_string', async () => {
    const response = await request(app).get('/api/thesis-proposals/types').query({ search: 'ricerca' });
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toEqual({ id: 1, type: 'RICERCA' });
  });
});

describe('GET /api/thesis-proposals/keywords', () => {
  test('Should return the list of all keywords', async () => {
    const response = await request(app).get('/api/thesis-proposals/keywords');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(13);
    expect(response.body).toEqual([
      { id: 13, keyword: 'APPLICAZIONI WEB' },
      { id: 9, keyword: 'AUTOMOTIVE' },
      { id: 5, keyword: 'DOMOTICA' },
      { id: 2, keyword: 'GENERAZIONE DI CODICE' },
      { id: 1, keyword: 'IA' },
      { id: 6, keyword: 'IOT' },
      { id: 3, keyword: 'ISTRUZIONE' },
      { id: 4, keyword: 'LLM' },
      { id: 10, keyword: 'REALTÀ' },
      { id: 7, keyword: 'SIMULATORE' },
      { id: 11, keyword: 'SVILUPPO APPLICAZIONI MOBILI' },
      { id: 12, keyword: 'SVILUPPO WEB' },
      { id: 8, keyword: 'TESTING' },
    ]);
  });

  test('Should filter keywords by search_string', async () => {
    const response = await request(app).get('/api/thesis-proposals/keywords').query({ search: 'web' });
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body).toEqual([
      { id: 13, keyword: 'APPLICAZIONI WEB' },
      { id: 12, keyword: 'SVILUPPO WEB' },
    ]);
  });
});

describe('GET /api/thesis-proposals/teachers', () => {
  test('Should return the list of all teachers', async () => {
    const response = await request(app).get('/api/thesis-proposals/teachers');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(220);
    response.body.forEach(teacher => {
      expect(teacher).toHaveProperty('id');
      expect(teacher).toHaveProperty('firstName');
      expect(teacher).toHaveProperty('lastName');
    });
  });

  test('Should filter teachers by search_string', async () => {
    const response = await request(app).get('/api/thesis-proposals/teachers').query({ search: 'mario' });
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    response.body.forEach(teacher => {
      const firstName = teacher.firstName.toLowerCase();
      const lastName = teacher.lastName.toLowerCase();
      expect(firstName.includes('mario') || lastName.includes('mario')).toBe(true);
    });
  });
});

describe('GET /api/thesis-proposals/:thesisProposalId', () => {
  test('Should return the thesis proposal with the given id', async () => {
    const thesisProposalId = 12946;
    const response = await request(app).get('/api/thesis-proposals/12946');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toEqual(thesisProposalId);
    expect(response.body).toHaveProperty('topic');
    expect(response.body).toHaveProperty('description');
    expect(response.body).toHaveProperty('link');
    expect(response.body).toHaveProperty('requiredSkills');
    expect(response.body).toHaveProperty('additionalNotes');
    expect(response.body).toHaveProperty('supervisor');
    expect(response.body).toHaveProperty('internalCoSupervisors');
    expect(response.body).toHaveProperty('externalCoSupervisors');
    expect(response.body).toHaveProperty('creationDate');
    expect(response.body).toHaveProperty('expirationDate');
    expect(response.body).toHaveProperty('isInternal');
    expect(response.body).toHaveProperty('isAbroad');
    expect(response.body).toHaveProperty('attachmentUrl');
    response.body.internalCoSupervisors.forEach(teacher => {
      expect(teacher).toHaveProperty('id');
      expect(teacher).toHaveProperty('firstName');
      expect(teacher).toHaveProperty('lastName');
      expect(teacher).toHaveProperty('role');
      expect(teacher).toHaveProperty('email');
      expect(teacher).toHaveProperty('profileUrl');
      expect(teacher).toHaveProperty('profilePictureUrl');
      expect(teacher).toHaveProperty('facilityShortName');
    });
  });

  test('Should return the thesis proposal with the given id (in english)', async () => {
    const thesisProposalId = 12946;
    const response = await request(app).get('/api/thesis-proposals/12946').query({ lang: 'en' });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toEqual(thesisProposalId);
    expect(response.body).toHaveProperty('topic');
    expect(response.body).toHaveProperty('description');
    expect(response.body).toHaveProperty('link');
    expect(response.body).toHaveProperty('requiredSkills');
    expect(response.body).toHaveProperty('additionalNotes');
    expect(response.body).toHaveProperty('supervisor');
    expect(response.body).toHaveProperty('internalCoSupervisors');
    expect(response.body).toHaveProperty('externalCoSupervisors');
    expect(response.body).toHaveProperty('creationDate');
    expect(response.body).toHaveProperty('expirationDate');
    expect(response.body).toHaveProperty('isInternal');
    expect(response.body).toHaveProperty('isAbroad');
    expect(response.body).toHaveProperty('attachmentUrl');
    expect(response.body.supervisor).toHaveProperty('id');
    expect(response.body.supervisor).toHaveProperty('firstName');
    expect(response.body.supervisor).toHaveProperty('lastName');
    expect(response.body.supervisor).toHaveProperty('role');
    expect(response.body.supervisor).toHaveProperty('email');
    expect(response.body.supervisor).toHaveProperty('profileUrl');
    expect(response.body.supervisor).toHaveProperty('profilePictureUrl');
    expect(response.body.supervisor).toHaveProperty('facilityShortName');
    response.body.internalCoSupervisors.forEach(teacher => {
      expect(teacher).toHaveProperty('id');
      expect(teacher).toHaveProperty('firstName');
      expect(teacher).toHaveProperty('lastName');
      expect(teacher).toHaveProperty('role');
      expect(teacher).toHaveProperty('email');
      expect(teacher).toHaveProperty('profileUrl');
      expect(teacher).toHaveProperty('profilePictureUrl');
      expect(teacher).toHaveProperty('facilityShortName');
    });
  });

  test('Should return a 404 error if the thesis proposal does not exist', async () => {
    const thesisProposalId = 100;
    const response = await request(app).get(`/api/thesis-proposals/${thesisProposalId}`);
    expect(response.status).toBe(404);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Thesis proposal not found');
  });
});
