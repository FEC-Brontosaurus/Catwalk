import React, { useState, useEffect } from 'react';
import RenderStars from '../../renderStars.jsx';

const ProductBreakdown = ({ productMetadataObj }) => {
    const [ averageRating , setAverageRating ] = useState(0);

    const calculateAverageRating = () => {
        const ratingsObj = productMetadataObj.ratings;
        var totalVotes = 0;
        var weightedAverageRating = 0;
        for (var rating in ratingsObj) {
            weightedAverageRating += (Number(rating) * Number(ratingsObj[rating]));
            totalVotes += Number(ratingsObj[rating]);
        }
        setAverageRating((weightedAverageRating/totalVotes).toFixed(1));
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
    
    useEffect(() => (productMetadataObj 
        ? (
          calculateAverageRating(),
          calculateStarAverageRating()
        )
        : null), [productMetadataObj]);
    
    return (
        <div>
            <h3>ProductBreakdown</h3>
            <div>{averageRating}</div>
            <div>{RenderStars(Number(averageRating))}</div>
            <div>5 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[5])} max="100"></progress></div>
            <div>4 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[4])} max="100"></progress></div>
            <div>3 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[3])} max="100"></progress></div>
            <div>2 Stars <progress value={calculateStarAverageRating(productMetadataObj.ratings[2])} max="100"></progress></div>
            <div>1 Star <progress value={calculateStarAverageRating(productMetadataObj.ratings[1])} max="100"></progress></div>
        </div>
    )
}

export default ProductBreakdown;