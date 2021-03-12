import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import QandA from './QandA/QandA';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import LogClick from './LogClick';
import Search from './Search';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [overviewAverage, setOverviewAverage] = useState(0);
  const reviewScroll = useRef(null);

  //  Function to get all products.
  //  Makes a get request to the server
  //  expects to get an array of products
  //  if an error occurs log the error
  const getAllProducts = () => {
    axios.get('/api/allproducts')
      .then((results) => {
        // setAllProducts(results.data);
        setCurrentProduct(results.data[3]);
      })
      .catch((err) => console.log(err));
  };

  //  componentDidMount and componentDidUpdate in one.
  //  When whatever is inside of the array changes useEffect will run
  useEffect(() => getAllProducts(), []);

  return (
    <div id="App-div">
      <Search setCurrentProduct={setCurrentProduct} LogClick={LogClick} />
      {(currentProduct) ? (
        <Overview
          currentProduct={currentProduct}
          overviewAverage={overviewAverage}
          reviewScroll={reviewScroll}
          LogClick={LogClick}
        />
      ) : null}
      {(currentProduct) ? <QandA logClick={LogClick} id={currentProduct.id} title={currentProduct.name} /> : null}
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
