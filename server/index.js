const express = require('express');

const morgan = require('morgan');

const path = require('path');

const axios = require('axios');

const API_KEY_AF = require('../config/keyAF.js');

const API_KEY_BC = require('../config/keyBC.js');

const PORT = 3000;

const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

//  handles client request to get all products
//  server makes request to external API
//  sends results back to client
//  upon error log the error
//  API URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/
//  API Key in headers: { headers: { 'Authorization': API KEY HERE } }
app.get('/api/allproducts', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products', { headers: { Authorization: API_KEY_AF } })
    .then((results) => res.send(results.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.post('/api/interactions', (req, res) => {
  const { element, widget, time } = req.body;
  console.log(element, widget, time);
  res.send(201);
  // axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/interactions', { headers: { "Authorization": API_KEY_AF } })
  //   .then((results) => {console.log('FROM API:', results); res.send(201)})
  //   .catch((err) => {
  //     console.log('FROM SERVER:', err);
  //     res.send(422);
  //   });
});

app.get('/api/qa/questions/:productId', (req, res) => {
  const { productId } = req.params;
  // res.send(200);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions`, {
    parameters: {
      product_id: Number(productId),
      page: 1,
      count: 4 },
    headers: { Authorization: API_KEY_BC } })
    .then((results) => res.send(results))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
