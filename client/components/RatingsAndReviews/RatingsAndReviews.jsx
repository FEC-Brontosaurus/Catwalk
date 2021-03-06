import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndividualReviewTile from './components/IndividualReviewTile.jsx';


const RatingsAndReviews = ({ currentProduct }) => {
  const [productReviewArr, setProductReviewArr] = useState([]);
  const [productMetadataObj, setProductMetadataObj] = useState({});

  // given the id from the current product, make an API GET request
  const getAllReviews = () => {
    axios.get('http://localhost:3000/api/getAllReviews', { params: { 'id': currentProduct.id } })
      .then((results) => {
        setProductReviewArr(results.data);
      })
      .catch((err) => console.log(err));
  };

  //given the id from the current product, make an API GET request to get the review metadata for a given product
  const getProductMetaData = () => {
    axios.get('http://localhost:3000/api/getProductMetadata', { params: { 'id': currentProduct.id } })
      .then((results) => {
        setProductMetadataObj(results.data)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => (currentProduct ? getAllReviews() : null), [currentProduct]);
  useEffect(() => (currentProduct ? getProductMetaData() : null), [currentProduct]);

  return (
    <div id="RatingsAndReviews">
      <h3>Ratings and Reviews</h3>
      {console.log('in return statement: ', productMetadataObj)}
      {productReviewArr.map((productReviewObj) => (
        <IndividualReviewTile
          key={productReviewObj.review_id}
          productReviewObj={productReviewObj}
        />
      ))}
    </div>
  );
};

export default RatingsAndReviews;
