import React, {useRef} from 'react';

const ClickedImageModal = ({photoURL}) => {
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
        <img src={photoURL} className="IndividualReviewTile-img" alt="Individual Review Tile"onClick={() => openReviewModal(reviewModalRef)}/>
        <div ref={reviewModalRef} id="myModal" class="modal">
            <div class="modal-content">            
              <img src={photoURL} className="IndividualReviewTileInsideModal-img" alt="Individual Review Tile" onClick={() => openReviewModal(reviewModalRef)}/>
              <span class="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            </div>
        </div>
      </div>
    )
}

export default ClickedImageModal;