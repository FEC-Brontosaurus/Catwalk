import React, { useState } from 'react';
import HelpfulReviewFeedbackButton from '../components/HelpfulReviewFeedbackButton.jsx'
import ClickedImageModal from '../Modals/ClickedImageModal.jsx';
import RenderStars from '../../renderStars.jsx';
import styles from '../styles/RatingsAndReviewsStyles.css';

const IndividualReviewTile = ({ productReviewObj }) => {
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

  const reformattedSummary = () => {
    if (productReviewObj.summary.length === 0) {
      return '[No summary provided]';
    }
    if (productReviewObj.summary.length >= 60) {
      return productReviewObj.summary.slice(0, 60);
    }
    return productReviewObj.summary;
  };

  const reformattedBody = () => {
    if (isShowingFullReviewBody) {
      return productReviewObj.body;
    } else {
      const shortenedStr = productReviewObj.body.slice(0, 250);
      return `${shortenedStr}...`;
    }
  };

  return (
    <div id="IndividualReviewTile-div">
      <RenderStars rating={productReviewObj.rating}/>
      <div>{reformattedDate(productReviewObj.date)}</div>
      <div><strong>{reformattedSummary(productReviewObj.summary)}</strong></div>
      {productReviewObj.body.length >= 250
        ? (
          <div>
            {reformattedBody(productReviewObj.body)}
            <button type="button" onClick={() => { setIsShowingFullReviewBody(!isShowingFullReviewBody); }}>{isShowingFullReviewBody ? 'Show Less' : 'Show More'}</button>
          </div>
        )
        : <div>{productReviewObj.body}</div>}
      {productReviewObj.photos
        ? productReviewObj.photos.map((photoObj) => (
          <div>
            <ClickedImageModal 
              id="IndividualReviewTile-img"
              key={photoObj.id}
              photoURL={photoObj.url}
              alt="Individual Review Tile"
            />
          </div>
        ))
      : null}
      <div>{productReviewObj.reviewer_name}</div>
      {productReviewObj.response
      ? <div>Response from seller: <i>{productReviewObj.response}</i></div>
      : null}
      {productReviewObj.recommend
        ? <div><span>&#10003;</span>I recommend this product</div>
        : null
      }
      <HelpfulReviewFeedbackButton 
        review_id={productReviewObj.review_id}
        helpfulnessRating={productReviewObj.helpfulness}/>
      <br></br>
    </div>
  );
};

export default IndividualReviewTile;
