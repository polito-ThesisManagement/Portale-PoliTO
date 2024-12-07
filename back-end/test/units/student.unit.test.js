require('jest');

const { sequelize } = require('../../src/models');
const { getStudentData } = require('../../src/controllers/student');

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
