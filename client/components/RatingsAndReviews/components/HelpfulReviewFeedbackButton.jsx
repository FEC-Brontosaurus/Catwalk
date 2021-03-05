import React, { useState } from 'react';
import LogClick from '../../LogClick.jsx'

const HelpfulReviewFeedbackButton = ({ helpfulnessRating }) => {
    const [isHelpfulReviewFeedbackButtonClicked, setIsHelpfulReviewFeedbackButtonClicked] = useState(false);

    return (
      <div>Was this review helpful?
        {isHelpfulReviewFeedbackButtonClicked 
        ? (
          <div>
            <div><button type="button" style={{color: "#a6a6a6"}}>Yes</button>{helpfulnessRating}</div>
            <div><button type="button" style={{color: "#a6a6a6"}}>No</button>INSERT NO TALLY</div>
          </div>
          )
        : (
          <div>
            <div><button type="button" onClick={() => {setIsHelpfulReviewFeedbackButtonClicked(true); LogClick('button', 'RatingsAndReviews_HelpfulReviewFeedbackButton_Yes')}}>Yes</button>{helpfulnessRating}</div>
            <div><button type="button" onClick={() => {setIsHelpfulReviewFeedbackButtonClicked(true); LogClick('button', 'RatingsAndReviews_HelpfulReviewFeedbackButton_No')}}>No</button>INSERT NO TALLY</div>
          </div>
          )
        }
      </div>
    )
}

export default HelpfulReviewFeedbackButton;
