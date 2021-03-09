/* eslint-disable camelcase */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const API_KEY_AF = require('../config/keyAF.js');
const API_KEY_GS = require('../config/keyGS.js');
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

//  post request to send click event to the API
app.post('/api/interactions', (req, res) => {
  const { element, widget, time } = req.body;
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/interactions', {element: element, widget: widget, time: time}, { headers: { Authorization: API_KEY_GS } })
    .then(() => res.send(201))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.get('/api/qa/questions/:productId', (req, res) => {
  const { productId } = req.params;
  const numId = Number(productId);
  // console.log(numId);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', {
    headers: { Authorization: API_KEY_BC },
    params: {
      product_id: numId,
      page: 2,
      count: 5,
    },

  })
    .then((results) => res.send(results.data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get('/api/qa/questions/:questId/answers', (req, res) => {
  const { questId } = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions/${Number(questId)}/answers`, {
    headers: { Authorization: API_KEY_BC },
    params: {
      page: 1,
      count: 2,
    },
  })
    .then((result) => res.send(result.data))
    .catch((err) => {
      console.log('error in api get answers req', err);
      res.sendStatus(500);
    });
});

app.get('/api/moreAnswers/:questId', (req, res) => {
  const { questId } = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions/${Number(questId)}/answers`, {
    headers: { Authorization: API_KEY_BC },
    params: {
      page: 1,
      count: 4,
    },
  })
    .then((result) => res.send(result.data))
    .catch((err) => {
      console.log('error in api get more answers req', err);
      res.sendStatus(500);
    });
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

//  RatingsAndReviews API Requests
//  Get all the Reviews
app.get('/api/getAllReviews', (req, res) => {
  const { id } = req.query;
  const idNum = Number(id);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/', { headers: { Authorization: API_KEY_GS }, params: { product_id: idNum } })
    .then((results) => {
      // console.log(results);
      res.send(results.data.results);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

//Get the meta data for a product
app.get('/api/getProductMetadata', (req, res) => {
  const { id } = req.query;
  const idNum = Number(id);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/meta', { headers: { Authorization: API_KEY_GS}, params: {product_id: idNum} })
    .then((results) => {
      res.send(results.data)
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.post('/api/addtocart', (req, res) => {
  const { sku_id } = req.body;
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/cart', { sku_id }, { headers: { Authorization: API_KEY_AF } })
    .then(() => res.send(201))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});


//MARK REVIEW AS HELPFUL- updates a review to show it was found helpful
app.put('/api/reviews/:review_id/helpful', (req, res) => {
  //the request will have two values: the id of what to change and the +1 incremented value of the helpfulness review (on the client side)
  const { review_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/${review_id}/helpful`, {body: {review_id}}, { headers: { Authorization: API_KEY_GS}})
    .then(() => {
      res.send(204);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
