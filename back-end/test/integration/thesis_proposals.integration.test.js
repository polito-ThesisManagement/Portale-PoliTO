require('jest');

const { app } = require('../../src/app');
const { sequelize } = require('../../src/models');

const request = require('supertest');

let server;

beforeAll(async () => {
  server = app.listen(4000, () => {
    console.log('Test server running on port 4000');
  });
});

afterAll(async () => {
  await server.close(() => {
    console.log('Test server closed');
    sequelize.close();
  });
});

describe('GET /api/thesis-proposals', () => {
  test('should return a list of thesis proposals', async () => {
    const response = await request(app).get('/api/thesis-proposals');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
