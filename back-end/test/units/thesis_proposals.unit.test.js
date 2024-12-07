require('jest');

const {
  getThesisProposals,
  getTargetedThesisProposals,
  getThesisProposalById,
} = require('../../src/controllers/thesis-proposals');
const { getStudentData } = require('../../src/controllers/student');
const { ThesisProposal, sequelize } = require('../../src/models');

jest.mock('../../src/controllers/student', () => ({
  getStudentData: jest.fn(),
}));

jest.mock('../../src/models', () => ({
  ThesisProposal: {
    findAndCountAll: jest.fn(),
    findByPk: jest.fn(),
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

describe('getThesisProposalById', () => {
  test('should return the thesis proposal by id in English', async () => {
    const creation_date = new Date();
    const expiration_date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    ThesisProposal.findByPk.mockResolvedValueOnce({
      id: 1,
      topic: 'Title 1',
      description: 'Description 1',
      link: 'http://example.com',
      required_skills: 'Required skills',
      additional_notes: 'Additional notes',
      external_cosupervisors: 'External cosupervisors',
      creation_date,
      expiration_date,
      is_internal: true,
      is_abroad: false,
      attachment_url: 'http://example.com/attachment',
      keywords: [],
      types: [],
      teachers: [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          role: 'Teacher',
          email: 'Jonh.Doe@email.com',
          profile_url: 'http://example.com/profile',
          profile_picture_url: null,
          facility_short_name: 'FSN',
          'thesis-proposal-supervisor-cosupervisor': {
            is_supervisor: true,
          },
        },
        {
          id: 2,
          first_name: 'Jane',
          last_name: 'Doe',
          role: 'Teacher',
          email: 'Jane.Doe@email.com',
          profile_url: 'http://example.com/profile',
          profile_picture_url: null,
          facility_short_name: 'FSN',
          'thesis-proposal-supervisor-cosupervisor': {
            is_supervisor: false,
          },
        },
      ],
      toJSON: jest.fn().mockReturnValue({
        id: 1,
        topic: 'Title 1',
        description: 'Description 1',
        link: 'http://example.com',
        required_skills: 'Required skills',
        additional_notes: 'Additional notes',
        external_cosupervisors: 'External cosupervisors',
        creation_date,
        expiration_date,
        is_internal: true,
        is_abroad: false,
        attachment_url: 'http://example.com/attachment',
        keywords: [],
        types: [],
        teachers: [
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            role: 'Teacher',
            email: 'John.Doe@email.com',
            profile_url: 'http://example.com/profile',
            profile_picture_url: null,
            facility_short_name: 'FSN',
            'thesis-proposal-supervisor-cosupervisor': {
              is_supervisor: true,
            },
          },
          {
            id: 2,
            first_name: 'Jane',
            last_name: 'Doe',
            role: 'Teacher',
            email: 'Jane.Doe@email.com',
            profile_url: 'http://example.com/profile',
            profile_picture_url: null,
            facility_short_name: 'FSN',
            'thesis-proposal-supervisor-cosupervisor': {
              is_supervisor: false,
            },
          },
        ],
      }),
    });

    const req = { query: { lang: 'en' }, params: { thesisProposalId: 1 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposalById(req, res);

    expect(ThesisProposal.findByPk).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      topic: 'Title 1',
      description: 'Description 1',
      link: 'http://example.com',
      requiredSkills: 'Required skills',
      additionalNotes: 'Additional notes',
      supervisor: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        role: 'Teacher',
        email: 'John.Doe@email.com',
        profileUrl: 'http://example.com/profile',
        profilePictureUrl: null,
        facilityShortName: 'FSN',
      },
      internalCoSupervisors: [
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          role: 'Teacher',
          email: 'Jane.Doe@email.com',
          profileUrl: 'http://example.com/profile',
          profilePictureUrl: null,
          facilityShortName: 'FSN',
        },
      ],
      externalCoSupervisors: 'External cosupervisors',
      creationDate: creation_date,
      expirationDate: expiration_date,
      isInternal: true,
      isAbroad: false,
      attachmentUrl: 'http://example.com/attachment',
      keywords: [],
      types: [],
    });
  });

  test('should return the thesis proposal by id in Italian (without lang query param)', async () => {
    const creation_date = new Date();
    const expiration_date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    ThesisProposal.findByPk.mockResolvedValueOnce({
      id: 1,
      topic: 'Title 1',
      description: 'Description 1',
      link: 'http://example.com',
      required_skills: 'Required skills',
      additional_notes: 'Additional notes',
      external_cosupervisors: 'External cosupervisors',
      creation_date,
      expiration_date,
      is_internal: true,
      is_abroad: false,
      attachment_url: 'http://example.com/attachment',
      keywords: [],
      types: [],
      teachers: [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          role: 'Teacher',
          email: 'Jonh.Doe@email.com',
          profile_url: 'http://example.com/profile',
          profile_picture_url: null,
          facility_short_name: 'FSN',
          'thesis-proposal-supervisor-cosupervisor': {
            is_supervisor: true,
          },
        },
      ],
      toJSON: jest.fn().mockReturnValue({
        id: 1,
        topic: 'Title 1',
        description: 'Description 1',
        link: 'http://example.com',
        required_skills: 'Required skills',
        additional_notes: 'Additional notes',
        external_cosupervisors: 'External cosupervisors',
        creation_date,
        expiration_date,
        is_internal: true,
        is_abroad: false,
        attachment_url: 'http://example.com/attachment',
        keywords: [],
        types: [],
        teachers: [
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            role: 'Teacher',
            email: 'John.Doe@email.com',
            profile_url: 'http://example.com/profile',
            profile_picture_url: null,
            facility_short_name: 'FSN',
            'thesis-proposal-supervisor-cosupervisor': {
              is_supervisor: true,
            },
          },
        ],
      }),
    });

    const req = { query: {}, params: { thesisProposalId: 1 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposalById(req, res);

    expect(ThesisProposal.findByPk).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      topic: 'Title 1',
      description: 'Description 1',
      link: 'http://example.com',
      requiredSkills: 'Required skills',
      additionalNotes: 'Additional notes',
      supervisor: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        role: 'Teacher',
        email: 'John.Doe@email.com',
        profileUrl: 'http://example.com/profile',
        profilePictureUrl: null,
        facilityShortName: 'FSN',
      },
      internalCoSupervisors: [],
      externalCoSupervisors: 'External cosupervisors',
      creationDate: creation_date,
      expirationDate: expiration_date,
      isInternal: true,
      isAbroad: false,
      attachmentUrl: 'http://example.com/attachment',
      keywords: [],
      types: [],
    });
  });

  test('should return an error if the thesis proposal is not found', async () => {
    ThesisProposal.findByPk.mockResolvedValueOnce(null);

    const req = { query: { lang: 'en' }, params: { thesisProposalId: 1 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposalById(req, res);

    expect(ThesisProposal.findByPk).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Thesis proposal not found' });
  });

  test('should return an error if an exception is thrown', async () => {
    ThesisProposal.findByPk.mockRejectedValueOnce(new Error('Database error'));

    const req = { query: { lang: 'en' }, params: { thesisProposalId: 1 } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getThesisProposalById(req, res);

    expect(ThesisProposal.findByPk).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
  });
});
