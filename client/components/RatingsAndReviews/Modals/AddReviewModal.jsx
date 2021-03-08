import React, {useRef} from 'react';
import styles from '../styles/RatingsAndReviewsStyles.css';


const AddReviewModal = () => {
    const myModalRef = useRef(null);

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
            //   console.log(myModalRef);
              openReviewModal(myModalRef)
            }}
          >Open Modal</button>
        <div 
          ref={myModalRef}
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