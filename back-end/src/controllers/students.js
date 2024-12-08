const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const StudentSchema = require('../schemas/Student');

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

const getStudents = async (req, res) => {
  try {
    const students = await sequelize.query(
      `
      SELECT 
        s.*, 
        CASE 
          WHEN ls.student_id IS NOT NULL THEN true 
          ELSE false 
        END AS is_logged
      FROM student s
      LEFT JOIN logged_student ls ON s.id = ls.student_id
      `,
      { type: QueryTypes.SELECT },
    );
    res.json({
      students: students.map(student => {
        student.is_logged = Boolean(student.is_logged);
        return StudentSchema.parse(student);
      }),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLoggedStudent = async (req, res) => {
  try {
    const loggedStudent = await sequelize.query(
      `
      SELECT 
        s.*
      FROM student s
      INNER JOIN logged_student ls ON s.id = ls.student_id
      LIMIT 1
      `,
      { type: QueryTypes.SELECT },
    );

    if (!loggedStudent.length) {
      return res.status(404).json({ error: 'Logged student not found' });
    }

    res.json({ student: StudentSchema.parse(loggedStudent[0]) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLoggedStudent = async (req, res) => {
  try {
    const studentId = req.body.student_id;
    if (!studentId) {
      return res.status(400).json({ error: 'Missing student id' });
    }

    const student = await sequelize.query(
      `
      SELECT 
        s.*
      FROM student s
      WHERE s.id = :studentId
      `,
      { replacements: { studentId }, type: QueryTypes.SELECT },
    );

    if (!student.length) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await sequelize.query(
      `
      UPDATE logged_student
      SET student_id = :studentId
      `,
      { replacements: { studentId }, type: QueryTypes.UPDATE },
    );

    res.json({ message: 'Logged student updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getStudentData, getStudents, getLoggedStudent, updateLoggedStudent };
