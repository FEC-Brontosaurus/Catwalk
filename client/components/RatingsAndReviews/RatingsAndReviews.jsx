import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductBreakdown from './components/ProductBreakdown.jsx'
import IndividualReviewTile from './components/IndividualReviewTile.jsx';


const RatingsAndReviews = ({ currentProduct }) => {
  const [productReviewArr, setProductReviewArr] = useState([]);
  const [productMetadataObj, setProductMetadataObj] = useState({});

  // given the id from the current product, make an API GET request
  const getAllReviews = () => {
    axios.get('http://localhost:3000/api/getAllReviews', { params: { 'id': currentProduct.id } })
      .then((results) => {
        // console.log('getAllReviews: ', results.data);
        setProductReviewArr(results.data);
      })
      .catch((err) => console.log(err));
  };

  //given the id from the current product, make an API GET request to get the review metadata for a given product
  const getProductMetadata = () => {
    axios.get('http://localhost:3000/api/getProductMetadata', { params: { 'id': currentProduct.id } })
      .then((results) => {
        // console.log('getProductMetaData: ', results.data);
        setProductMetadataObj(results.data)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => (currentProduct ? (getAllReviews(), getProductMetadata()) : null), [currentProduct]);

  return (
    <div id="RatingsAndReviews">
      <h3>Ratings and Reviews</h3>
      {Object.keys(productMetadataObj).length > 0
        ? <ProductBreakdown 
            productMetadataObj={productMetadataObj}
          />
        : null
      }
      {productReviewArr.length > 0 
        ? productReviewArr.map((productReviewObj) => (
          <IndividualReviewTile
            key={productReviewObj.review_id}
            productReviewObj={productReviewObj}
          />
        ))
      : <div>No reviews yet!</div>
    }
    </div>
  );
};

export default RatingsAndReviews;
