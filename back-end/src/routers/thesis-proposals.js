const express = require('express');
const router = express.Router();
const {
  getThesisProposals,
  getTargetedThesisProposals,
  getThesisProposalsTypes,
  getThesisProposalKeywords,
  getThesisProposalTeachers,
  getThesisProposalById,
} = require('../controllers/thesis-proposals');

router.get('/', getThesisProposals);
router.get('/targeted', getTargetedThesisProposals);
router.get('/types', getThesisProposalsTypes);
router.get('/keywords', getThesisProposalKeywords);
router.get('/teachers', getThesisProposalTeachers);
router.get('/:thesisProposalId', getThesisProposalById);

module.exports = router;
