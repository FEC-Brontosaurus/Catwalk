/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _, { sortBy } from 'underscore';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import IndividualReviewTile from './components/IndividualReviewTile.jsx';
import SpecifiedCharacteristicsAddReviewModal from './Modals/SpecifiedCharacteristicsAddReviewModal.jsx';
// import AddReviewModal from './Modals/AddReviewModal.jsx';
import styles from './styles/RatingsAndReviewsStyles.css';

const RatingsAndReviews = ({
  currentProduct, setOverviewAverage, reviewScroll, LogClick,
}) => {
  // Data sets to refer to
  const [constantReviewArr, setConstantReviewArr] = useState([]);
  const [productReviewArr, setProductReviewArr] = useState([]);
  const [productMetadataObj, setProductMetadataObj] = useState({});
  const [characteristicsMetadataObj, setCharacteristicsMetadataObj] = useState({});
  // Display state for 'More Reviews' button
  const [currentProductReviewArrIndex, setCurrentProductReviewArrIndex] = useState(2);
  const [isDisplayingAllReviews, setIsDisplayingAllReviews] = useState(false);

  // given the id from the current product, make an API GET request
  const getAllReviews = () => {
    axios.get('/api/getAllReviews', { params: { id: currentProduct.id } })
      .then((results) => {
        // console.log('getAllReviews: ', results.data);
        setProductReviewArr(results.data.slice(0, 2));
        setConstantReviewArr(results.data);
      })
      .catch((err) => console.log(err));
  };

  // given the id from the current product, make an API GET request to get the review metadata for a given product
  const getProductMetadata = () => {
    axios.get('/api/getProductMetadata', { params: { id: currentProduct.id } })
      .then((results) => {
        // console.log('getProductMetaData: ', results.data);
        setProductMetadataObj(results.data);
        setCharacteristicsMetadataObj(results.data.characteristics);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => (currentProduct ? (getAllReviews(), getProductMetadata()) : null), [currentProduct]);

  // methods to change the reviews on that page and how they display
  const renderTwoMoreReviewTiles = () => {
    if (productReviewArr.length !== constantReviewArr.length) {
      const elementsToBeAddedToDisplay = constantReviewArr.slice(currentProductReviewArrIndex, (currentProductReviewArrIndex + 2));
      setProductReviewArr(productReviewArr.concat(elementsToBeAddedToDisplay));
      setCurrentProductReviewArrIndex(currentProductReviewArrIndex + 2);
    } else {
      setIsDisplayingAllReviews(true);
    }
  };

  const filterRatingReviewsDisplay = (ratingNum) => {
    const result = constantReviewArr.filter((reviewObj) => (reviewObj.rating === ratingNum));
    setProductReviewArr(result);
  };

  const sortReviewDisplay = (sortValue) => {
    if (sortValue === 'helpful') {
      const helpfulSortArr = _.sortBy(constantReviewArr, 'helpfulness');
      setProductReviewArr(helpfulSortArr.reverse());
    } else if (sortValue === 'newest') {
      const newestSortArr = _.sortBy(constantReviewArr, 'date');
      setProductReviewArr(newestSortArr.reverse());
    } else {
      const relevantSortArrByDate = _.sortBy(constantReviewArr, 'date');
      const relevanceSortArr = _.sortBy(relevantSortArrByDate, 'helpfuless');
      setProductReviewArr(relevanceSortArr.reverse());
    }
    setIsDisplayingAllReviews(true);
  };

  return (
    <div id="RatingsAndReviews">
      <div id="RatingsAndReviews-title">
        <h3>Ratings and Reviews</h3>
        <form id="title-sort-form" className="title-features">
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" id="sort-select" onChange={(event) => { sortReviewDisplay(event.target.value); LogClick('select', 'RatingsAndReviews'); }}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </form>
        {(productReviewArr.length === constantReviewArr.length)
          ? <button id="title-reset-button" className="title-features" type="button" style={{ color: '#a6a6a6' }}>Remove All Filters</button>
          : <button id="title-reset-button" className="title-features" type="button" onClick={() => { setProductReviewArr(constantReviewArr); LogClick('button', 'RatingsAndReviews'); }}>Remove All Filters</button>}
      </div>
      <div id="RatingsAndReviews-wrapper" ref={reviewScroll}>
        <div className="RatingsAndReviews-sidebar">
          {Object.keys(productMetadataObj).length > 0
            ? (
              <ProductBreakdown
                productMetadataObj={productMetadataObj}
                filterRatingReviewsDisplay={filterRatingReviewsDisplay}
                setOverviewAverage={setOverviewAverage}
                LogClick={LogClick}
              />
            )
            : null}
        </div>
        <div className="RatingsAndReviews-content">
          <div className="IndividualReviewTile-wrapper">
            {productReviewArr.length > 0
              ? productReviewArr.map((productReviewObj) => (
                <IndividualReviewTile
                  key={productReviewObj.review_id}
                  productReviewObj={productReviewObj}
                  LogClick={LogClick}
                />
              ))
              : <div>No reviews to display</div>}
          </div>
          <div id="RatingAndReviews-buttons">
            {Object.keys(characteristicsMetadataObj).length > 0
              ? (
                <SpecifiedCharacteristicsAddReviewModal
                  characteristicsMetadataObj={characteristicsMetadataObj}
                  currentProduct_id={currentProduct.id}
                  LogClick={LogClick}
                />
              )
              // : <AddReviewModal currentProduct_id={currentProduct.id}/> This modal could be an example for when a product has no reviews. Something to talk about with client
              // : <button type="button" style={{color: "#a6a6a6"}}>Add Review</button>
              : null}
            {isDisplayingAllReviews
              ? <button type="button" style={{ color: '#a6a6a6' }}>More Reviews</button>
              : <button type="button" onClick={() => { renderTwoMoreReviewTiles(); }}>More Reviews</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
