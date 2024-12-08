require('jest');

const { sequelize } = require('../../src/models');
const {
  getStudentData,
  getStudents,
  getLoggedStudent,
  updateLoggedStudent,
} = require('../../src/controllers/students');

jest.mock('../../src/models', () => ({
  sequelize: {
    query: jest.fn(),
  },
}));

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('getStudentData', () => {
  test('should return student data', async () => {
    const studentData = [
      {
        collegioId: 1,
        level: 'Bachelor',
        studentThesisProposalIds: '1,2',
      },
    ];

    sequelize.query.mockResolvedValueOnce(studentData);

    const result = await getStudentData();

    expect(result).toEqual({
      collegioId: 1,
      level: 'Bachelor',
      studentThesisProposalIdArray: ['1', '2'],
    });
  });

  test('should return student data with empty studentThesisProposalIds', async () => {
    const studentData = [
      {
        collegioId: 1,
        level: 'Bachelor',
        studentThesisProposalIds: null,
      },
    ];

    sequelize.query.mockResolvedValueOnce(studentData);

    const result = await getStudentData();

    expect(result).toEqual({
      collegioId: 1,
      level: 'Bachelor',
      studentThesisProposalIdArray: [],
    });
  });

  test('should throw an error if student data is not found', async () => {
    sequelize.query.mockResolvedValueOnce([]);

    await expect(getStudentData()).rejects.toThrow('Student data not found');
  });
});

describe('getStudents', () => {
  test('should return students', async () => {
    const mockStudents = [
      {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        profile_picture_url: 'http://example.com/profile.jpg',
        degree_id: '1',
        is_logged: true,
      },
      {
        id: '2',
        first_name: 'Jane',
        last_name: 'Doe',
        profile_picture_url: 'http://example.com/profile.jpg',
        degree_id: '2',
        is_logged: false,
      },
    ];

    const result = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        profilePictureUrl: 'http://example.com/profile.jpg',
        degreeId: '1',
        isLogged: true,
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        profilePictureUrl: 'http://example.com/profile.jpg',
        degreeId: '2',
        isLogged: false,
      },
    ];

    sequelize.query.mockResolvedValueOnce(mockStudents);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getStudents(req, res);

    expect(res.json).toHaveBeenCalledWith({
      students: result,
    });
  });

  test('should return 500 status if an error occurred', async () => {
    sequelize.query.mockRejectedValueOnce(new Error('An error occurred'));

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getStudents(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred' });
  });
});

describe('getLoggedStudent', () => {
  test('should return logged student', async () => {
    const loggedStudent = [
      {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        profile_picture_url: 'http://example.com/profile.jpg',
        degree_id: '1',
      },
    ];

    const result = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      profilePictureUrl: 'http://example.com/profile.jpg',
      degreeId: '1',
      isLogged: undefined,
    };

    sequelize.query.mockResolvedValueOnce(loggedStudent);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getLoggedStudent(req, res);

    expect(res.json).toHaveBeenCalledWith({ student: result });
  });

  test('should return 404 status if logged student is not found', async () => {
    sequelize.query.mockResolvedValueOnce([]);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getLoggedStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Logged student not found' });
  });

  test('should return 500 status if an error occurred', async () => {
    sequelize.query.mockRejectedValueOnce(new Error('An error occurred'));

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getLoggedStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred' });
  });
});

describe('updateLoggedStudent', () => {
  test('should update logged student', async () => {
    const studentId = '1';

    const student = [
      {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        profile_picture_url: 'http://example.com/profile.jpg',
        degree_id: '1',
      },
    ];

    sequelize.query.mockResolvedValueOnce(student);

    const req = {
      body: {
        student_id: studentId,
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await updateLoggedStudent(req, res);

    expect(sequelize.query).toHaveBeenCalledWith(
      `
      UPDATE logged_student
      SET student_id = :studentId
      `,
      { replacements: { studentId }, type: 'UPDATE' },
    );

    expect(res.json).toHaveBeenCalledWith({ message: 'Logged student updated' });
  });

  test('should return 400 status if student id is missing', async () => {
    const req = {
      body: {},
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await updateLoggedStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing student id' });
  });

  test('should return 404 status if student is not found', async () => {
    const studentId = '1';

    sequelize.query.mockResolvedValueOnce([]);

    const req = {
      body: {
        student_id: studentId,
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await updateLoggedStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Student not found' });
  });

  test('should return 500 status if an error occurred', async () => {
    const studentId = '1';

    sequelize.query.mockResolvedValueOnce([{ id: '1' }]);
    sequelize.query.mockRejectedValueOnce(new Error('An error occurred'));

    const req = {
      body: {
        student_id: studentId,
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await updateLoggedStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred' });
  });
});
