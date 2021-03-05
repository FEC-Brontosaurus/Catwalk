import React from 'react';

//A function that given a number (can be non-integer) will produce an HTML element to be inserted into the DOM
//Styling is in public/styles.css

const RenderStars = ({rating}) => {
    const starTotal = 5;
    const starPercentage = (rating / starTotal)*100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    return (
        <div className="stars-outer">
            <div className="stars-inner" style={{width: starPercentageRounded}}></div>
        </div>
    )
};

export default RenderStars;