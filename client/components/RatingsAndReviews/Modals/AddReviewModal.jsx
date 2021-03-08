import React, {useRef} from 'react';
import styles from '../styles/RatingsAndReviewsStyles.css';


const AddReviewModal = () => {
    const reviewModalRef = useRef(null);
    // const closeModal

    const openReviewModal = (modal) => {
        console.log(modal.current)
        modal.current.focus();
        modal.current.style.display = "block";
    }
    return (
    <div>
        <button 
          id="myBtn"
          onClick={() => {
            //   console.log(reviewModalRef);
              openReviewModal(reviewModalRef)
            }}
          >Open Modal</button>
        <div 
          ref={reviewModalRef}
          id="myModal" 
          class="modal">    
            <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
            </div>
        </div>
      </div>
    )
}

export default AddReviewModal;