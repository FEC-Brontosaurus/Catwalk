import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import QandA from './QandA/QandA';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import LogClick from './LogClick.jsx';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [overviewAverage, setOverviewAverage] = useState(0);
  const reviewScroll = useRef(null);

  //  Function to get all products.
  //  Makes a get request to the server
  //  expects to get an array of products
  //  if an error occurs log the error
  const getAllProducts = () => {
    axios.get('http://localhost:3000/api/allproducts')
      .then((results) => {
        // setAllProducts(results.data);
        setCurrentProduct(results.data[0]);
      })
      .catch((err) => console.log(err));
  };

  //  componentDidMount and componentDidUpdate in one.
  //  When whatever is inside of the array changes useEffect will run
  useEffect(() => getAllProducts(), []);

  return (
    <div id="App-div">
      {(currentProduct) ? (
        <Overview
          currentProduct={currentProduct}
          overviewAverage={overviewAverage}
          reviewScroll={reviewScroll}
          LogClick={LogClick}
        />
      ) : null}
      {(currentProduct) ? <QandA id={currentProduct.id} /> : null}
      {(currentProduct) ? (
        <RatingsAndReviews
          currentProduct={currentProduct}
          setOverviewAverage={setOverviewAverage}
          reviewScroll={reviewScroll}
          LogClick={LogClick}
        />
      ) : null}
    </div>
  );
};

export default App;
