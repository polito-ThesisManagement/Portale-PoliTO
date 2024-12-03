const express = require('express');
const router = express.Router();
const { getThesisProposals, getThesisProposalById } = require('../controllers/thesis-proposals');

router.get('/', getThesisProposals);
router.get('/:thesisProposalId', getThesisProposalById);

module.exports = router;
