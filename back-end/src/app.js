const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const thesisProposalsRouter = require('./routers/thesis-proposals');
const studentsRouter = require('./routers/students');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/thesis-proposals', thesisProposalsRouter);
app.use('/api/thesis-proposals/targeted', thesisProposalsRouter);
app.use('/api/thesis-proposals/{:thesisProposalId}', thesisProposalsRouter);
app.use('/api/students', studentsRouter);
app.use('/api/students/logged-student', studentsRouter);

module.exports = { app };
