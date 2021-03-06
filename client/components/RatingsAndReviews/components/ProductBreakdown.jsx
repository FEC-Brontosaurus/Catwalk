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
        return (weightedAverageRating/totalVotes).toFixed(1);
    }

    useEffect(() => (productMetadataObj ? setAverageRating(calculateAverageRating()) : null), [productMetadataObj]);
    
    return (
        <div>
            {console.log(productMetadataObj)}
            <h3>ProductBreakdown</h3>
            <div>{calculateAverageRating()}</div>
            <div>{RenderStars(Number(averageRating))}</div>
        </div>
    )
}

export default ProductBreakdown;