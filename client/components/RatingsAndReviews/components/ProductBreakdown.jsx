import React, { useState, useEffect } from 'react';

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
            <div>ProductBreakdown</div>
            <div>{calculateAverageRating()}</div>
            {/* <div>Average Ratings here</div> */}
        </div>

    )
}

export default ProductBreakdown;