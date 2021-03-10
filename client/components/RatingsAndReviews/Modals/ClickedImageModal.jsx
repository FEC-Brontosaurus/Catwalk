import React, {useRef} from 'react';

const ClickedImageModal = ({photoURL, LogClick}) => {
    const reviewModalRef = useRef(null);

    //modal functions
    const openReviewModal = (modal) => {
        modal.current.focus();
        modal.current.style.display = "block";
    }

    const closeReviewModal = (modal) => {
        modal.current.focus();
        modal.current.style.display = "none";
    }

    return (
      <div>
        <img src={photoURL} className="IndividualReviewTile-img" alt="Individual Review Tile" onClick={() => {openReviewModal(reviewModalRef), LogClick('button', 'RatingsAndReviews')}}/>
        <div ref={reviewModalRef} id="myModal" className="modal">
            <div className="modal-content">            
              <img src={photoURL} className="IndividualReviewTileInsideModal-img" alt="Individual Review Tile" onClick={() => {openReviewModal(reviewModalRef), LogClick('button', 'RatingsAndReviews')}}/>
              <span className="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            </div>
        </div>
      </div>
    )
}

export default ClickedImageModal;