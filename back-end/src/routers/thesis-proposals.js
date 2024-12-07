const express = require('express');
const router = express.Router();
const {
  getThesisProposals,
  getTargetedThesisProposals,
  getThesisProposalById,
} = require('../controllers/thesis-proposals');

router.get('/', getThesisProposals);
router.get('/targeted', getTargetedThesisProposals);
router.get('/:thesisProposalId', getThesisProposalById);

module.exports = router;
