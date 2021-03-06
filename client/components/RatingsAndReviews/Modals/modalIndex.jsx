import React from 'react';
import styles from '../styles/RatingsAndReviewsStyles.css'; 

const Modal = ({
  isModalShowing, setIsModalShowing, clickedImageSrc, setClickedImageSrc,
}) => (
  <div>
    {isModalShowing
      ? (
        <div className="modal" id="modal">
          <h3>Modal Window</h3>
          <img
            id="IndividualReviewTile-modal-img"
            src={clickedImageSrc}
            alt="Modal Render"
          />
          <button
            type="button"
            onClick={() => {
              setIsModalShowing(false);
              setClickedImageSrc(null);
            }}
          >
            Close Modal
          </button>
        </div>
      )
      : null}
  </div>
);

export default Modal;
