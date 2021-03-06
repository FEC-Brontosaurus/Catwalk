import React, { useState, useEffect } from 'react';
import RenderStars from '../../renderStars.jsx';

const ProductBreakdown = ({ productMetadataObj }) => {
    const [ averageRating , setAverageRating ] = useState(0);
    const [ average5StarRating, setAverage5StarRating] = useState(0);

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

    const calculate5StarAverageRating = () => {
        var ratingsObj = productMetadataObj.ratings;
        var total5StarVotes = ratingsObj[5];
        var totalVotes = 0;
        for (var rating in ratingsObj) {
            totalVotes += Number(ratingsObj[rating]);
        }
        var starRatingValuePercentage = (total5StarVotes/totalVotes) * 100;
        setAverage5StarRating(starRatingValuePercentage.toFixed(1)) ;
    }
    
    useEffect(() => (productMetadataObj 
        ? (
          calculateAverageRating(),
          calculate5StarAverageRating()
        )
        : null), [productMetadataObj]);
    
    return (
        <div>
            <h3>ProductBreakdown</h3>
            <div>{averageRating}</div>
            <div>{RenderStars(Number(averageRating))}</div>
            <div>5 Stars <progress value={average5StarRating} max="100"></progress></div>
        </div>
    )
}

export default ProductBreakdown;