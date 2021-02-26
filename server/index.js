const express = require('express');

const morgan = require('morgan');

const path = require('path');

const axios = require('axios');

const API_KEY_AF = require('../config/keyAF.js');

const PORT = 3000;

const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(PUBLIC_DIR));

//  handles client request to get all products
//  server makes request to external API
//  sends results back to client
//  upon error log the error
//  API URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/
//  API Key in headers: { headers: { 'Authorization': API KEY HERE } }
app.get('/api/allproducts', (req, res) => {
  console.log('GET');
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products', { headers: { Authorization: API_KEY_AF } })
    .then((results) => res.send(results.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
