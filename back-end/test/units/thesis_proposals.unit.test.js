require('jest');

const { getThesisProposals, getTargetedThesisProposals } = require('../../src/controllers/thesis-proposals');
const { getStudentData } = require('../../src/controllers/student');
const { ThesisProposal, sequelize } = require('../../src/models');

jest.mock('../../src/controllers/student', () => ({
  getStudentData: jest.fn(),
}));

jest.mock('../../src/models', () => ({
  ThesisProposal: {
    findAndCountAll: jest.fn(),
  },
  sequelize: {
    literal: jest.fn(),
  },
}));

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

const creation_date = new Date();
const expiration_date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

const createThesisProposal = (
  id,
  topic,
  description,
  supervisor,
  internalCoSupervisors,
  creationDate,
  expirationDate,
  isInternal,
  isAbroad,
  keywords = [],
  types = [],
) => ({
  id,
  topic,
  description,
  supervisor,
  internalCoSupervisors,
  creationDate,
  expirationDate,
  isInternal,
  isAbroad,
  keywords,
  types,
});

const createThesisProposalWithToJSON = (
  id,
  topic,
  description,
  creation_date,
  expiration_date,
  is_internal,
  is_abroad,
  keywords = [],
  types = [],
  teachers,
) => ({
  id,
  topic,
  description,
  creation_date,
  expiration_date,
  is_internal,
  is_abroad,
  keywords,
  types,
  teachers,
  toJSON: jest.fn().mockReturnValue({
    id,
    topic,
    description,
    creation_date,
    expiration_date,
    is_internal,
    is_abroad,
    keywords,
    types,
    teachers,
  }),
});

const mockThesisProposals = [
  createThesisProposal(
    1,
    'Title 1',
    'Description 1',
    { id: 1, firstName: 'John', lastName: 'Doe' },
    [{ id: 2, firstName: 'Jane', lastName: 'Doe' }],
    creation_date,
    expiration_date,
    true,
    false,
  ),
  createThesisProposal(
    2,
    'Title 2',
    'Description 2',
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    [],
    creation_date,
    expiration_date,
    true,
    false,
  ),
];

const mockThesisProposalsToJSON = [
  createThesisProposalWithToJSON(
    1,
    'Title 1',
    'Description 1',
    creation_date,
    expiration_date,
    true,
    false,
    [],
    [],
    [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        'thesis-proposal-supervisor-cosupervisor': {
          is_supervisor: true,
        },
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        'thesis-proposal-supervisor-cosupervisor': {
          is_supervisor: false,
        },
      },
    ],
  ),
  createThesisProposalWithToJSON(
    2,
    'Title 2',
    'Description 2',
    creation_date,
    expiration_date,
    true,
    false,
    [],
    [],
    [
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        'thesis-proposal-supervisor-cosupervisor': {
          is_supervisor: true,
        },
      },
    ],
  ),
];

describe('getThesisProposals', () => {
  test('should return the list of thesis proposals with pagination (given page and limit) in English', async () => {
    ThesisProposal.findAndCountAll.mockResolvedValueOnce({
      count: 2,
      rows: mockThesisProposalsToJSON,
    });

    const req = { query: { lang: 'en', page: 1, limit: 10 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposals(req, res);

    expect(ThesisProposal.findAndCountAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      count: 2,
      currentPage: 1,
      thesisProposals: mockThesisProposals,
      totalPages: 1,
    });
  });

  test('should return the list of thesis proposals with pagination (default page and limit) in Italian (without lang query param)', async () => {
    ThesisProposal.findAndCountAll.mockResolvedValueOnce({
      count: 2,
      rows: mockThesisProposalsToJSON,
    });

    const req = { query: {} };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposals(req, res);

    expect(ThesisProposal.findAndCountAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      count: 2,
      currentPage: 1,
      thesisProposals: mockThesisProposals,
      totalPages: 1,
    });
  });

  test('should return an error if an exception is thrown', async () => {
    ThesisProposal.findAndCountAll.mockRejectedValueOnce(new Error('Database error'));

    const req = { query: { lang: 'en', page: 1, limit: 10 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposals(req, res);

    expect(ThesisProposal.findAndCountAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
  });
});

describe('getTargetedThesisProposals', () => {
  test('should return the list of targeted thesis proposals with pagination (given page and limit) in Italian (without lang query param)', async () => {
    getStudentData.mockResolvedValueOnce({
      collegioId: 1,
      level: '1',
      studentThesisProposalIdArray: [1, 2],
    });

    sequelize.literal.mockReturnValueOnce([3, 4]);

    ThesisProposal.findAndCountAll.mockResolvedValueOnce({
      count: 2,
      rows: mockThesisProposalsToJSON,
    });

    const req = { query: { page: 1, limit: 10 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getTargetedThesisProposals(req, res);

    expect(ThesisProposal.findAndCountAll).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      count: 2,
      currentPage: 1,
      thesisProposals: mockThesisProposals,
      totalPages: 1,
    });
  });

  test('should return an error if an exception is thrown inside getStudentData', async () => {
    getStudentData.mockRejectedValueOnce(new Error('Database error'));

    const req = { query: { lang: 'en', page: 1, limit: 10 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getTargetedThesisProposals(req, res);

    expect(ThesisProposal.findAndCountAll).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
  });
});
