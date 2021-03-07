import React, { useState, useEffect, useRef } from 'react';
import RenderStars from '../../renderStars.jsx';
import styles from '../styles/RatingsAndReviewsStyles.css';

const ProductBreakdown = ({ productMetadataObj, filterRatingReviewsDisplay }) => {
    const [ averageRating , setAverageRating ] = useState(0);
    const [ totalReviews, setTotalReviews ] = useState(0);
    const currentFocusedElement5 = useRef(null);
    const currentFocusedElement4 = useRef(null);
    const currentFocusedElement3 = useRef(null);
    const currentFocusedElement2 = useRef(null);
    const currentFocusedElement1 = useRef(null);

    //calculation functions
    const calculateAverageRating = (ratingsObj) => {
        var totalReviews = 0;
        var weightedAverageRating = 0;
        for (var rating in ratingsObj) {
            weightedAverageRating += (Number(rating) * Number(ratingsObj[rating]));
            totalReviews += Number(ratingsObj[rating]);
        }
        setTotalReviews(totalReviews);
        setAverageRating((weightedAverageRating/totalReviews).toFixed(1));
    }

    const calculateStarAverageRating = (ratingNum) => {
        var ratingsObj = productMetadataObj.ratings;
        var total5StarVotes = Number(ratingNum);
        var totalVotes = 0;
        for (var rating in ratingsObj) {
            totalVotes += Number(ratingsObj[rating]);
        }
        var starRatingValuePercentage = (total5StarVotes/totalVotes) * 100;
        return starRatingValuePercentage.toFixed(1);
    }

    const calculateRecommendedPercentage = (recommendedObj) => {
        var totalVotes = 0
        for (var recommendation in recommendedObj) {
            totalVotes += Number(recommendedObj[recommendation])
        }
        var recommendedPercentage = (Number(recommendedObj[true])/totalVotes)*100;
        return recommendedPercentage.toFixed(1);
    }

    //conditional styling functions
    const changeHoverBackgroundColor = (currentFocusedElementInput) => {
        currentFocusedElementInput.current.focus();
        currentFocusedElementInput.current.style.backgroundColor = "#44c17b";
    }

    const removeHoverBackgroundColor = (currentFocusedElementInput) => {
        currentFocusedElementInput.current.focus();
        currentFocusedElementInput.current.style.backgroundColor = "transparent";
    }
    
    //initialization
    useEffect(() => (productMetadataObj 
        ? (calculateAverageRating(productMetadataObj.ratings))
        : null), [productMetadataObj]
    );

    return (
        <div>
            {console.log('productMetadataObj in ProductBreakdown: ', productMetadataObj)}
            <h3> Rating Breakdown</h3>
            <div>Average Rating: {averageRating}</div>
            <div>Total Reviews: {totalReviews}</div>
            <div>{RenderStars(Number(averageRating))}</div>
            {/* Did not use mapping function because they object does not always have all five numbers to represent all five ratings */}
            <div ref={currentFocusedElement5}
              onClick={() => filterRatingReviewsDisplay(5)}
              onMouseOver={() => changeHoverBackgroundColor(currentFocusedElement5)}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement5)}}
            >5 Stars<progress value={calculateStarAverageRating(productMetadataObj.ratings[5])} max="100"></progress></div>
            <div ref={currentFocusedElement4}
              onClick={() => filterRatingReviewsDisplay(4)}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement4)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement4)}}
            >4 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[4])} max="100"></progress></div>
            <div ref={currentFocusedElement3}
              onClick={() => filterRatingReviewsDisplay(3)}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement3)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement3)}}
            >3 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[3])} max="100"></progress></div>
            <div ref={currentFocusedElement2}
              onClick={() => filterRatingReviewsDisplay(2)}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement2)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement2)}}
            >2 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[2])} max="100"></progress></div>
            <div ref={currentFocusedElement1}
              onClick={() => filterRatingReviewsDisplay(1)}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement1)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement1)}}
            >1 Star <progress value={calculateStarAverageRating(productMetadataObj.ratings[1])} max="100"></progress></div>
            {Object.keys(productMetadataObj.recommended).length > 0 
              ? <div>{calculateRecommendedPercentage(productMetadataObj.recommended)}% of reviews recommend this product!</div>
              : null
            }
        </div>
    )
}

export default ProductBreakdown;