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

const API = { getThesisProposals, getThesisProposalById };

export default API;
