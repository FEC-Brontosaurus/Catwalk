import React from 'react';

const CharacteristicsBreakdown = ({characteristicsObj}) => {

    return (
        <div>
        {/* On a scale where 5 is "perfect" */}
        {characteristicsObj.Comfort 
        ? (<div>
            <h4>Comfort</h4> 
            <div>Poor <progress value={characteristicsObj.Comfort.value} max="5"/> Perfect</div>
          </div>)
        : null }
        {characteristicsObj.Quality 
        ? (<div>
            <h4>Quality</h4> 
            <div>Poor <progress value={characteristicsObj.Quality.value} max="5"/> Perfect</div>
          </div>)
        : null }
        {characteristicsObj.Fit 
        ? (<div>
            <h4>Fit</h4> 
            <div>Poor <progress value={characteristicsObj.Fit.value} max="5"/> Perfect</div>
          </div>)
        : null }

        {/* Needs "Perfect" Middleground  */}
        {characteristicsObj.Size 
        ? (<div>
            <h4>Size</h4>
            <div><progress value={characteristicsObj.Size.value} max="5"/></div>
            <div>Too Small - Perfect - Too Large</div>
          </div>)
        : null }
        {characteristicsObj.Width 
        ? (<div>
            <h4>Width</h4>
            <div><progress value={characteristicsObj.Width.value} max="5"/></div>
            <div>Too Small - Perfect - Too Large</div>
          </div>)
        : null }
        {characteristicsObj.Length 
        ? (<div>
            <h4>Length</h4>
            <div><progress value={characteristicsObj.Length.value} max="5"/></div>
            <div>Too Short - Perfect - Too Long</div>
          </div>)
        : null }
        </div>
    )
}

export default CharacteristicsBreakdown;