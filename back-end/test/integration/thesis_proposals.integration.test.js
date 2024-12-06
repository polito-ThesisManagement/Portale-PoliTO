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
  test('should return a list of thesis proposals', async () => {
    const response = await request(app).get('/api/thesis-proposals');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('thesisProposals');
    expect(response.body.thesisProposals).toBeInstanceOf(Array);
  });
});

describe('GET /api/thesis-proposals/:thesisProposalId', () => {
  test('Should return the thesis proposal with the given id', async () => {
    const thesisProposalId = 12946;
    const response = await request(app).get('/api/thesis-proposals/12946');
    if (response.body.error) {
      console.log(response.body.error);
    }
    expect(response.status).toBe(200);
    console.log(response.body);
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

  test('Should return a 404 error if the thesis proposal does not exist', async () => {
    const thesisProposalId = 100;
    const response = await request(app).get(`/api/thesis-proposals/${thesisProposalId}`);
    expect(response.status).toBe(404);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Thesis proposal not found');
  });
});
