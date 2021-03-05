import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import QandA from './QandA/QandA';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  //  Function to get all products.
  //  Makes a get request to the server
  //  expects to get an array of products
  //  if an error occurs log the error
  const getAllProducts = () => {
    axios.get('http://localhost:3000/api/allproducts')
      .then((results) => {
        // setAllProducts(results.data);
        setCurrentProduct(results.data[2]);
      })
      .catch((err) => console.log(err));
  };

  //  componentDidMount and componentDidUpdate in one.
  //  When whatever is inside of the array changes useEffect will run
  useEffect(() => getAllProducts(), []);

  return (
    <div id="App-div">
      <Overview currentProduct={currentProduct} />
      <QandA id={currentProduct.id} />
      <RatingsAndReviews currentProduct={currentProduct} />

    </div>
  );
};

export default App;
