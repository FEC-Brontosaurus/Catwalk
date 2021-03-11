import axios from 'axios';

// LogClick('div', 'App');

//  function to make a post request to the server which will then log the click event to the API
const LogClick = (element, widget) => {
  //  create new data element
  const time = new Date();

  //  make a post request to our server
  //  added headers to reduce the effect of spammed axios requests
  //  still an issue if spammed long enough
  axios.post('/api/interactions', { element, widget, time }, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
    .catch((err) => console.log(err));
};

export default LogClick;
