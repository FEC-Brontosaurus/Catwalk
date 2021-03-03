const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const API_KEY_AF = require('../config/keyAF.js');

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

app.get('/api/getallstyles', (req, res) => {
  const { id } = req.query;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/${id}/styles`, { headers: { Authorization: API_KEY_AF } })
    .then((results) => {
      res.send(results.data.results);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

//RatingsAndReviews API Requests
app.get('/api/getAllReviews', (req, res) => {
  const { id } = req.query;
  console.log(id);
  const idNum = Number(id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/`, { headers: {Authorization: API_KEY_AF}, params: { product_id: idNum} })
    .then((results) => {
      console.log(results);
      res.send(results.data.results);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
