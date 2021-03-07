import React, { useState, useEffect, useRef } from 'react';
import RenderStars from '../../renderStars.jsx';

const ProductBreakdown = ({ productMetadataObj }) => {
    const [ averageRating , setAverageRating ] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const currentFocusedElement = useRef(null);

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

    const calculateStarAverageRating = (num) => {
        var ratingsObj = productMetadataObj.ratings;
        var total5StarVotes = Number(num);
        var totalVotes = 0;
        for (var rating in ratingsObj) {
            totalVotes += Number(ratingsObj[rating]);
        }
        var starRatingValuePercentage = (total5StarVotes/totalVotes) * 100;
        return starRatingValuePercentage.toFixed(1);
    }

    //conditional style 
    const changeHoverBackgroundColor = () => {
        currentFocusedElement.current.focus();
        currentFocusedElement.current.style.color = "red";

    }
    
    useEffect(() => (productMetadataObj 
        ? (calculateAverageRating(),calculateStarAverageRating())
        : null), [productMetadataObj]
    );

    return (
        <div>
            <h3>ProductBreakdown</h3>
            <div>Average Rating: {averageRating}</div>
            <div>Total Reviews: {totalReviews}</div>
            <div>{RenderStars(Number(averageRating))}</div>
            <div 
              id="star-rating-hover-5"
              ref={currentFocusedElement}
              onMouseOver={() => {
                //   changeHoverBackgroundColor(`5`)
                changeHoverBackgroundColor()
                }}
            >5 Stars<progress value={calculateStarAverageRating(productMetadataObj.ratings[5])} max="100"></progress></div>
            <div>4 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[4])} max="100"></progress></div>
            <div>3 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[3])} max="100"></progress></div>
            <div>2 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[2])} max="100"></progress></div>
            <div>1 Star <progress value={calculateStarAverageRating(productMetadataObj.ratings[1])} max="100"></progress></div>
        </div>
    )
}

export default ProductBreakdown;