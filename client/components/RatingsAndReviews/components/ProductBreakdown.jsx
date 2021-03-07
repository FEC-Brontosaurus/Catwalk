import React, { useState, useEffect, useRef } from 'react';
import RenderStars from '../../renderStars.jsx';
import styles from '../styles/RatingsAndReviewsStyles.css';

const ProductBreakdown = ({ productMetadataObj, filterRatingReviewsDisplay }) => {
    const [ averageRating , setAverageRating ] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [isFiltered, setIsFiltered] = useState(false);
    const currentFocusedElement5 = useRef(null);
    const currentFocusedElement4 = useRef(null);
    const currentFocusedElement3 = useRef(null);
    const currentFocusedElement2 = useRef(null);
    const currentFocusedElement1 = useRef(null);

    //calculation functions
    const calculateAverageRating = () => {
        const ratingsObj = productMetadataObj.ratings;
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

    //conditional styling functions
    const changeHoverBackgroundColor = (currentFocusedElementInput) => {
        currentFocusedElementInput.current.focus();
        currentFocusedElementInput.current.style.backgroundColor = "#44c17b";
    }

    const removeHoverBackgroundColor = (currentFocusedElementInput) => {
        currentFocusedElementInput.current.focus();
        currentFocusedElementInput.current.style.backgroundColor = "transparent";
    }
    
    useEffect(() => (productMetadataObj 
        ? (calculateAverageRating(),calculateStarAverageRating())
        : null), [productMetadataObj]
    );

    return (
        <div>
            {/* {console.log('productMetadataObj in ProductBreakdown: ', productMetadataObj)} */}
            <h3> Rating Breakdown</h3>
            {}
            <div>Average Rating: {averageRating}</div>
            <div>Total Reviews: {totalReviews}</div>
            <div>{RenderStars(Number(averageRating))}</div>
            {isFiltered
            ? <div><button type="button" onClick={setIsFiltered(false)}>Remove all filters</button></div>
            : null
            }
            {/* Did not use mapping function because they object does not always have all five numbers to represent all five ratings */}
            <div ref={currentFocusedElement5}
            //   onClick={() => {handleStarRatingClick(5), setIsFiltered(true)}}
              onClick={() => {filterRatingReviewsDisplay(5), setIsFiltered(true)}}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement5)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement5)}}
            >5 Stars<progress value={calculateStarAverageRating(productMetadataObj.ratings[5])} max="100"></progress></div>
            {/* <div ref={currentFocusedElement4}
              onClick={() => (handleStarRatingClick(4), setIsFiltered(true))}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement4)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement4)}}
            >4 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[4])} max="100"></progress></div>
            <div ref={currentFocusedElement3}
              onClick={() => (handleStarRatingClick(3), setIsFiltered(true))}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement3)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement3)}}
            >3 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[3])} max="100"></progress></div>
            <div ref={currentFocusedElement2}
              onClick={() => (handleStarRatingClick(2), setIsFiltered(true))}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement2)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement2)}}
            >2 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[2])} max="100"></progress></div>
            <div ref={currentFocusedElement1}
              onClick={() => (handleStarRatingClick(1), setIsFiltered(true))}
              onMouseOver={() => {changeHoverBackgroundColor(currentFocusedElement1)}}
              onMouseOut={() => {removeHoverBackgroundColor(currentFocusedElement1)}}
            >1 Star <progress value={calculateStarAverageRating(productMetadataObj.ratings[1])} max="100"></progress></div> */}
        </div>
    )
}

export default ProductBreakdown;