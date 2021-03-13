/* eslint-disable quote-props */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import _, { unescape } from 'underscore';
import HelpfulReviewFeedbackButton from './HelpfulReviewFeedbackButton.jsx';
import ClickedImageModal from '../Modals/ClickedImageModal.jsx';
import RenderStars from '../../renderStars.jsx';
import styles from '../styles/RatingsAndReviewsStyles.css';

const IndividualReviewTile = ({ productReviewObj, LogClick }) => {
  const [isShowingFullReviewBody, setIsShowingFullReviewBody] = useState(false);

  const reformattedDate = () => {
    const monthObj = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    const date = new Date(productReviewObj.date).toISOString().replace(/T.*/, '').split('-');
    date[1] = monthObj[date[1]];
    return `${date[1]} ${date[2]}, ${date[0]}`;
  };

  const reformattedSummary = (summary) => {
    const summaryUnescaped = _.unescape(summary);

    if (summaryUnescaped.length === 0) {
      return '[No summary provided]';
    }
    if (summaryUnescaped.length >= 60) {
      return summaryUnescaped.slice(0, 60);
    }
    return summaryUnescaped;
  };

  const reformattedBody = (body) => {
    const bodyUnescaped = _.unescape(body);

    if (isShowingFullReviewBody) {
      return bodyUnescaped;
    }
    const shortenedStr = bodyUnescaped.slice(0, 250);
    return `${shortenedStr}...`;
  };

  return (
    <div className="IndividualReviewTile-content">
      <div className="IndividualReviewTile-content-title">
        <RenderStars rating={productReviewObj.rating} />
        <div className="IndividualReviewTile-content-username">{_.unescape(productReviewObj.reviewer_name)}</div>
        <div className="IndividualReviewTile-content-date">{reformattedDate(productReviewObj.date)}</div>
      </div>

      <div className="IndividualReviewTile-content-summary"><strong>{reformattedSummary(productReviewObj.summary)}</strong></div>

      {productReviewObj.body.length >= 250
        ? (
          <div className="IndividualReviewTile-content-body">
            {reformattedBody(productReviewObj.body)}
            <button type="button" onClick={() => { setIsShowingFullReviewBody(!isShowingFullReviewBody); LogClick('button', 'RatingsAndReviews'); }}>{isShowingFullReviewBody ? 'Show Less' : 'Show More'}</button>
          </div>
        )
        : <div className="IndividualReviewTile-content-body">{reformattedBody(productReviewObj.body)}</div>}
      <div className="IndividualReviewTile-images">
        {productReviewObj.photos
          ? productReviewObj.photos.map((photoObj) => (
            <div key={`${photoObj.id}-div`}>
              <ClickedImageModal
                id="IndividualReviewTile-img"
                key={photoObj.id}
                photoURL={photoObj.url}
                alt="Individual Review Tile"
                LogClick={LogClick}
              />
            </div>
          ))
          : null}
      </div>

      {productReviewObj.response
        ? (
          <div className="IndividualReviewTile-content-response">
            Response from seller:
            {' '}
            <i>{_.unescape(productReviewObj.response)}</i>
          </div>
        )
        : null}
      {productReviewObj.recommend
        ? (
          <div className="IndividualReviewTile-content-recommend">
            <span>&#10003;</span>
            I recommend this product
          </div>
        )
        : null}
      <HelpfulReviewFeedbackButton
        review_id={productReviewObj.review_id}
        helpfulnessRating={productReviewObj.helpfulness}
        LogClick={LogClick}
      />
      <br />
    </div>
  );
};

export default IndividualReviewTile;
