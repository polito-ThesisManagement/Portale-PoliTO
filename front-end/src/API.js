import axios from 'axios';

// API URL Endpoint
const URL = 'http://localhost:3001/api';

/****** APIs for Thesis Proposals ******/

async function getThesisProposals(lang, page, limit) {
  try {
    const response = await axios.get(`${URL}/thesis-proposals`, {
      params: {
        lang,
        page,
        limit,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals:', error);
  }
}

async function getTargetedThesisProposals(lang, page, limit) {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/targeted`, {
      params: {
        lang,
        page,
        limit,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching targeted thesis proposals:', error);
  }
}

async function getThesisProposalsTypes(lang) {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/types`, {
      params: {
        lang,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals types:', error);
  }
}

async function getThesisProposalsKeywords(lang) {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/keywords`, {
      params: {
        lang,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals keywords:', error);
  }
}

async function getThesisProposalsTeachers() {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/teachers`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals teachers:', error);
  }
}

async function getThesisProposalById(id, lang) {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/${id}`, {
      params: {
        lang,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposal by ID:', error);
  }
}

const API = {
  getThesisProposals,
  getTargetedThesisProposals,
  getThesisProposalsTypes,
  getThesisProposalsKeywords,
  getThesisProposalsTeachers,
  getThesisProposalById,
};

export default API;
