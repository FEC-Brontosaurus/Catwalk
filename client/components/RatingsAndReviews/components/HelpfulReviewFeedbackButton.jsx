/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';

const HelpfulReviewFeedbackButton = ({ review_id, helpfulnessRating, LogClick }) => {
  const [isHelpfulReviewFeedbackButtonClicked, setIsHelpfulReviewFeedbackButtonClicked] = useState(false);

  // axios put request to show that the review was found to be helpful
  const reviewWasHelpful = ({ review_id }) => {
    axios.put(`/api/reviews/${review_id}/helpful`)
      .then()
      .catch(() => console.log('The error is on the client side'));
  };

  return (
    <div className="IndividualReviewTile-helpful-button">
      Was this review helpful?&nbsp;
      {isHelpfulReviewFeedbackButtonClicked
        ? (
          <div>
            <button type="button" style={{ color: '#a6a6a6' }}>Yes</button>
            {helpfulnessRating + 1}
            {/* <div><button type="button" style={{color: "#a6a6a6"}}>No</button>INSERT NO TALLY</div> */}
          </div>
        )
        : (
          <div>
            <button
              type="button"
              onClick={() => {
                setIsHelpfulReviewFeedbackButtonClicked(true);
                LogClick('button', 'RatingsAndReviews');
                reviewWasHelpful({ review_id });
              }}
            >
              Yes
            </button>
            &nbsp;
            {helpfulnessRating}
            {/* <div><button type="button" onClick={() => {setIsHelpfulReviewFeedbackButtonClicked(true); LogClick('button', 'RatingsAndReviews_HelpfulReviewFeedbackButton_No')}}>No</button>INSERT NO TALLY</div> */}
          </div>
        )
      }
    </div>
  )
}

export default HelpfulReviewFeedbackButton;
