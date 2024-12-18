import axios from 'axios';

// API URL Endpoint
const URL = 'http://localhost:3001/api';

/****** User APIs ******/

async function getStudents() {
  try {
    const response = await axios.get(`${URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
  }
}

async function getLoggedStudent() {
  try {
    const response = await axios.get(`${URL}/students/logged-student`);
    return response.data;
  } catch (error) {
    console.error('Error fetching logged student:', error);
  }
}

async function updateLoggedStudent(student) {
  try {
    const response = await axios.put(`${URL}/students/logged-student`, { student_id: student.id });
    return response.data;
  } catch (error) {
    console.error('Error updating logged student:', error);
  }
}

/****** Thesis Proposal APIs ******/

async function getThesisProposals(lang, page, limit, filterObj, sorting, searchQuery) {
  try {
    const { keyword, teacher, type } = filterObj;
    const keywordIds = keyword ? keyword.join(',') : '';
    const teacherIds = teacher ? teacher.join(',') : '';
    const typeIds = type ? type.join(',') : '';

    if (searchQuery) {
      searchQuery.trim().toLowerCase();
    }

    console.log(sorting);

    const response = await axios.get(`${URL}/thesis-proposals`, {
      params: {
        lang,
        page,
        limit,
        keywordIds: keywordIds || '',
        teacherIds: teacherIds || '',
        typeIds: typeIds || '',
        sortBy: sorting.field || '',
        orderBy: sorting.order || '',
        searchQuery,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals:', error);
  }
}

async function getTargetedThesisProposals(lang, page, limit, filterObj, sorting, searchQuery) {
  try {
    console.log(filterObj);
    const { keyword, teacher, type } = filterObj;
    const keywordIds = keyword ? keyword.join(',') : '';
    const teacherIds = teacher ? teacher.join(',') : '';
    const typeIds = type ? type.join(',') : '';

    if (searchQuery) {
      searchQuery.trim().toLowerCase();
    }

    const response = await axios.get(`${URL}/thesis-proposals/targeted`, {
      params: {
        lang,
        page,
        limit,
        keywordIds: keywordIds || '',
        teacherIds: teacherIds || '',
        typeIds: typeIds || '',
        sortBy: sorting.field || '',
        orderBy: sorting.order || '',
        searchQuery,
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
    return response.data;
  } catch (error) {
    console.error('Error fetching thesis proposals keywords:', error);
  }
}

async function getThesisProposalsTeachers() {
  try {
    const response = await axios.get(`${URL}/thesis-proposals/teachers`);
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
  getStudents,
  getLoggedStudent,
  updateLoggedStudent,
  getThesisProposals,
  getTargetedThesisProposals,
  getThesisProposalsTypes,
  getThesisProposalsKeywords,
  getThesisProposalsTeachers,
  getThesisProposalById,
};

export default API;
