import React, { useState } from 'react';
import axios from 'axios';

// LogClick('div', 'App');

//  function to make a post request to the server which will then log the click event to the API
const LogClick = (element, widget) => {
  //  create new data element
  const date = new Date();

  //  make a post request to our server
  axios.post('http://localhost:3000/api/interactions', {'element': element, 'widget': widget, time: date})
  .catch((err) => console.log(err));
};

export default LogClick;