/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/extensions
import RenderStars from '../../renderStars.jsx';
// import styles from '../styles/RatingsAndReviewsStyles.css';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const ProductBreakdown = ({ productMetadataObj, filterRatingReviewsDisplay, setOverviewAverage, LogClick }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const currentFocusedElement5 = useRef(null);
  const currentFocusedElement4 = useRef(null);
  const currentFocusedElement3 = useRef(null);
  const currentFocusedElement2 = useRef(null);
  const currentFocusedElement1 = useRef(null);

  // calculation functions
  const calculateAverageRating = (ratingsObj) => {
    let totalReviews = 0;
    let weightedAverageRating = 0;
    for (const rating in ratingsObj) {
      weightedAverageRating += (Number(rating) * Number(ratingsObj[rating]));
      totalReviews += Number(ratingsObj[rating]);
    }
    setTotalReviews(totalReviews);
    setAverageRating((weightedAverageRating / totalReviews).toFixed(1));
    setOverviewAverage((weightedAverageRating / totalReviews).toFixed(1))
  };

  const calculateStarAverageRating = (ratingNum) => {
    const ratingsObj = productMetadataObj.ratings;
    const total5StarVotes = Number(ratingNum);
    let totalVotes = 0;
    for (const rating in ratingsObj) {
      totalVotes += Number(ratingsObj[rating]);
    }
    const starRatingValuePercentage = (total5StarVotes / totalVotes) * 100;
    return starRatingValuePercentage.toFixed(1);
  };

  const calculateRecommendedPercentage = (recommendedObj) => {
    let totalVotes = 0;
    for (const recommendation in recommendedObj) {
      totalVotes += Number(recommendedObj[recommendation]);
    }
    const recommendedPercentage = (Number(recommendedObj.true) / totalVotes) * 100;
    return recommendedPercentage.toFixed(1);
  };

  // conditional styling functions
  const changeHoverBackgroundColor = (currentFocusedElementInput) => {
    currentFocusedElementInput.current.focus();
    currentFocusedElementInput.current.style.backgroundColor = '#44c17b';
  };

  const removeHoverBackgroundColor = (currentFocusedElementInput) => {
    currentFocusedElementInput.current.focus();
    currentFocusedElementInput.current.style.backgroundColor = 'transparent';
  };

  // initialization
  useEffect(() => (productMetadataObj
    ? (calculateAverageRating(productMetadataObj.ratings))
    : null), [productMetadataObj]);
    
    return (
      <div id="product-breakdown">
      {/* <h3> Rating Breakdown</h3> */}
      <RenderStars rating={averageRating}/>
      <div
        ref={currentFocusedElement5}
        onClick={() => {filterRatingReviewsDisplay(5), LogClick('div', 'RatingsAndReviews')}}
        onMouseOver={() => changeHoverBackgroundColor(currentFocusedElement5)}
        onMouseOut={() => removeHoverBackgroundColor(currentFocusedElement5)}
      >5 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[5])} max="100" />
      </div>
      <div
        ref={currentFocusedElement4}
        onClick={() => {filterRatingReviewsDisplay(4), LogClick('div', 'RatingsAndReviews')}}
        onMouseOver={() => { changeHoverBackgroundColor(currentFocusedElement4); }}
        onMouseOut={() => { removeHoverBackgroundColor(currentFocusedElement4); }}
      >4 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[4])} max="100" />
      </div>
      <div
        ref={currentFocusedElement3}
        onClick={() => {filterRatingReviewsDisplay(3), LogClick('div', 'RatingsAndReviews')}}
        onMouseOver={() => { changeHoverBackgroundColor(currentFocusedElement3); }}
        onMouseOut={() => { removeHoverBackgroundColor(currentFocusedElement3); }}
      >3 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[3])} max="100" />
      </div>
      <div
        ref={currentFocusedElement2}
        onClick={() => {filterRatingReviewsDisplay(2), LogClick('div', 'RatingsAndReviews')}}
        onMouseOver={() => { changeHoverBackgroundColor(currentFocusedElement2); }}
        onMouseOut={() => { removeHoverBackgroundColor(currentFocusedElement2); }}
      >2 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[2])} max="100" />
      </div>
      <div
        ref={currentFocusedElement1}
        onClick={() => {filterRatingReviewsDisplay(1), LogClick('div', 'RatingsAndReviews')}}
        onMouseOver={() => { changeHoverBackgroundColor(currentFocusedElement1); }}
        onMouseOut={() => { removeHoverBackgroundColor(currentFocusedElement1); }}
      >1 Star <progress value={calculateStarAverageRating(productMetadataObj.ratings[1])} max="100" />
      </div>
      {Object.keys(productMetadataObj.recommended).length > 0
        ? <div>{calculateRecommendedPercentage(productMetadataObj.recommended)}% of reviews recommend this product!</div>
        : null}
      <div>Average Rating: {averageRating}</div>
      <div>Total Reviews: {totalReviews}</div>
      {/* Did not use mapping function because they object does not always have all five numbers to represent all five ratings */}
      {Object.keys(productMetadataObj.characteristics).length > 0
        ? <CharacteristicsBreakdown
            characteristicsObj={productMetadataObj.characteristics}
          />
        : <div>No characteristics to display</div>
      }
    </div>
  );
};

export default ProductBreakdown;
