import React, { useState } from 'react';

const HelpfulReviewFeedbackButton = () => {
    const [isHelpfulReviewFeedbackButtonClicked, setIsHelpfulReviewFeedbackButtonClicked] = useState(false);

    return (
        <div>Was this review helpful?
            {isHelpfulReviewFeedbackButtonClicked 
            ? (
              <div>
                <button
                  type="button"
                  style={{color: "#a6a6a6"}}
                >Yes</button>
                <div>INSERT YES TALLY HERE</div>
                <button
                type="button"
                style={{color: "#a6a6a6"}}
                >No</button>
                <div>INSERT NO TALLY</div>
              </div>
              )
            : (<div>
                <button
                  type="button"
                  onClick={() => {setIsHelpfulReviewFeedbackButtonClicked(true)}}
                >Yes</button>
                <div>INSERT YES TALLY HERE</div>
                <button
                type="button"
                onClick={() => {setIsHelpfulReviewFeedbackButtonClicked(true)}}
                >No</button>
                <div>INSERT NO TALLY</div>
              </div>)
        }
        </div>
    )
}

export default HelpfulReviewFeedbackButton;
