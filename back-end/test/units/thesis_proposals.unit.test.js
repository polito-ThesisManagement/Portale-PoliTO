require('jest');

const { getThesisProposalById } = require('../../src/controllers/thesis-proposals');
const { ThesisProposal } = require('../../src/models');

jest.mock('../../src/models', () => ({
  ThesisProposal: {
    findByPk: jest.fn(),
  },
}));

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('ThesisProposals', () => {
  test('getThesisProposals', () => {
    expect(true).toBe(true);
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
