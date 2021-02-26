import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [currentProduct, setCurrentProduct] = useState({});

  //  Function to get all products.
  //  Makes a get request to the server
  //  expects to get an array of products
  //  if an error occurs log the error
  const getAllProducts = () => {
    axios.get('http://localhost:3000/api/allproducts')
      .then((results) => {
        setAllProducts(results.data);
        setCurrentProduct(results.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getAllProducts(), []);

  const display = () => {
    console.log(allProducts);
    console.log(currentProduct);
  };

  return (
    <button type="button" onClick={display}>Display Products</button>
  );
};

export default App;
