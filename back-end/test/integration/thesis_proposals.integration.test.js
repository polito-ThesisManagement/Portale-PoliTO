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
