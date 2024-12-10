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

describe('GET /api/students', () => {
  test('Should return the list of students', async () => {
    const response = await request(server).get('/api/students');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: '314796',
        firstName: 'Daniele',
        lastName: 'De Rossi',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/114685212',
        degreeId: '37-18',
        isLogged: false,
      },
      {
        id: '318952',
        firstName: 'Sylvie',
        lastName: 'Molinatto',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/126864619',
        degreeId: '37-18',
        isLogged: false,
      },
      {
        id: '320213',
        firstName: 'Luca',
        lastName: 'Barbato',
        profilePictureUrl: 'https://avatars.githubusercontent.com/u/59212611',
        degreeId: '37-18',
        isLogged: true,
      },
    ]);
  });
});

describe('GET /api/students/logged-student', () => {
  test('Should return the logged student', async () => {
    const response = await request(server).get('/api/students/logged-student');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: '320213',
      firstName: 'Luca',
      lastName: 'Barbato',
      profilePictureUrl: 'https://avatars.githubusercontent.com/u/59212611',
      degreeId: '37-18',
    });
  });
});

describe('PUT /api/students/logged-student', () => {
  afterAll(async () => {
    await request(server).put('/api/students/logged-student').send({ student_id: '320213' });
  });
  test('Should update the logged student', async () => {
    const response = await request(server).put('/api/students/logged-student').send({ student_id: '314796' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Logged student updated' });
  });

  test('Should return 400 if student_id is missing', async () => {
    const response = await request(server).put('/api/students/logged-student');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Missing student id' });
  });

  test('Should return 404 if student_id is not found', async () => {
    const response = await request(server).put('/api/students/logged-student').send({ student_id: '999999' });
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Student not found' });
  });
});
