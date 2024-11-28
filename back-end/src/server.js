const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { sequelize } = require('./models');
const thesisProposalsRouter = require('./routers/thesis-proposals');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/thesis-proposals', thesisProposalsRouter);
app.use('/api/thesis-proposals/{:thesisProposalId}', thesisProposalsRouter);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
