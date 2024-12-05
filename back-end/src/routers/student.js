const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

const getStudentData = async () => {
  const studentData = await sequelize.query(
    `
      SELECT 
          d.id_collegio AS collegioId,
          d.level AS level,
          GROUP_CONCAT(tpd.thesis_proposal_id) AS studentThesisProposalIds
      FROM student s
      INNER JOIN degree d ON s.degree_id = d.id
      LEFT JOIN thesis_proposal_degree tpd ON s.degree_id = tpd.degree_id
      WHERE s.id = (SELECT student_id FROM logged_student)
      GROUP BY s.degree_id, d.id_collegio, d.level
      `,
    { type: QueryTypes.SELECT },
  );

  if (!studentData.length) {
    throw new Error('Student data not found');
  }

  const { collegioId, level, studentThesisProposalIds } = studentData[0];
  return {
    collegioId,
    level,
    studentThesisProposalIdArray: studentThesisProposalIds ? studentThesisProposalIds.split(',') : [],
  };
};

module.exports = { getStudentData };
