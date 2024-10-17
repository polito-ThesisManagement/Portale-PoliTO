const express = require('express');
const axios = require('axios');
const cors = require('cors'); // importa il pacchetto cors
const app = express();
const PORT = 5000;

app.use(cors()); // usa il middleware CORS

app.get('/api/thesesProposals', async (req, res) => {
  const { grp, lang } = req.query; // ricevi i parametri dalla richiesta

  try {
    const response = await axios.get(`https://didattica.polito.it/pls/portal30/sviluppo.tesiv.jsn`, {
      params: {
        dgrp: grp,
        lang: lang,
      },
    });
    res.json(response.data); // rispondi con i dati dell'API
  } catch (error) {
    res.status(error.response ? error.response.status : 500).send('Errore durante il fetch delle tesi');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
