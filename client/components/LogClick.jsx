import axios from 'axios';

// LogClick('div', 'App');

//  function to make a post request to the server which will then log the click event to the API
const LogClick = (element, widget) => {
  //  create new data element
  const time = new Date();

  //  make a post request to our server
  axios.post('http://localhost:3000/api/interactions', { element, widget, time })
    .catch((err) => console.log(err));
};

export default LogClick;
