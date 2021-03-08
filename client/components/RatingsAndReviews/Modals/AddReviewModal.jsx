import React, {useRef} from 'react';
import styles from '../styles/RatingsAndReviewsStyles.css';


const AddReviewModal = () => {
    const reviewModalRef = useRef(null);

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
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Open Modal</button>
        <div ref={reviewModalRef} id="myModal" class="modal">    
            <div class="modal-content">            
            <span class="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h3>Add Review</h3>
            </div>
        </div>
      </div>
    )
}

export default AddReviewModal;