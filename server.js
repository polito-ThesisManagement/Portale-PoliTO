const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/thesisProposals', async (req, res) => {
  const { grp, lang } = req.query;

  try {
    const response = await axios.get(`https://didattica.polito.it/pls/portal30/sviluppo.tesiv.jsn`, {
      params: {
        dgrp: grp,
        lang: lang,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).send('Error during thesis proposals fetching');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
