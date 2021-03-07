import React from 'react';

const CharacteristicsBreakdown = ({characteristicsObj}) => {

    return (
        <div>
        {/* On a scale where 5 is "perfect" */}
        {characteristicsObj.Comfort 
        ? <div><strong>Comfort</strong> Poor <progress value={characteristicsObj.Comfort.value} max="5"/> Perfect</div>
        : null }
        {characteristicsObj.Quality 
        ? <div><strong>Quality</strong> Poor <progress value={characteristicsObj.Quality.value} max="5"/> Perfect</div>
        : null }
        {characteristicsObj.Fit 
        ? <div><strong>Fit</strong> Does Not Fit <progress value={characteristicsObj.Fit.value} max="5"/> Perfect</div>
        : null }
        {/* Needs "Perfect" Middleground  */}
        {characteristicsObj.Size 
        ? <div><strong>Size</strong> Too Small <progress value={characteristicsObj.Quality.value} max="5"/> Too Large</div>
        : null }
        {characteristicsObj.Width 
        ? <div><strong>Width</strong> Too Small <progress value={characteristicsObj.Width.value} max="5"/> Too Large</div>
        : null }
        {characteristicsObj.Length 
        ? <div><strong>Length</strong> Too Short <progress value={characteristicsObj.Length.value} max="5"/> Too Long</div>
        : null }
        </div>
    )
}

export default CharacteristicsBreakdown;