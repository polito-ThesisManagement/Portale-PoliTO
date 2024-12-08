const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const thesisProposalsRouter = require('./routers/thesis-proposals');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/thesis-proposals', thesisProposalsRouter);
app.use('/api/thesis-proposals/targeted', thesisProposalsRouter);
app.use('/api/thesis-proposals/types', thesisProposalsRouter);
app.use('/api/thesis-proposals/keywords', thesisProposalsRouter);
app.use('/api/thesis-proposals/teachers', thesisProposalsRouter);
app.use('/api/thesis-proposals/{:thesisProposalId}', thesisProposalsRouter);

module.exports = { app };
