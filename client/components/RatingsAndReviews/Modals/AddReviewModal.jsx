import React, { useRef, useState } from 'react';
import styles from '../styles/RatingsAndReviewsStyles.css';


const AddReviewModal = () => {
    const [currentStarRatingText, setCurrentStarRatingText]= useState(null);
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

    //reformatting functions
    const returnStarRatingText = (value) => {
        const starRatingTextObj = {
            5: 'Great',
            4: 'Good',
            3: 'Average', 
            2: 'Fair', 
            1: 'Poor'
        };
        setCurrentStarRatingText(starRatingTextObj[value]);
    }


    return (
      <div>
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Add Review</button>
        <div ref={reviewModalRef} id="myModal" class="modal">
            <div class="modal-content">            
            <span class="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h3>Add Review</h3> 
            <h4>Overall Rating</h4>
            <div class="txt-center">
                <form>
                    <div class="rating"> 
                        <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
                        <label for="star5" onMouseOver={() => returnStarRatingText(5)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                        <label for="star4" onMouseOver={() => returnStarRatingText(4)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                        <label for="star3" onMouseOver={() => returnStarRatingText(3)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                        <label for="star2" onMouseOver={() => returnStarRatingText(2)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                        <label for="star1" onMouseOver={() => returnStarRatingText(1)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
            <div>{currentStarRatingText}</div>
            <h4>Do you recommend this product?</h4>
            <form>
              <input id="recommend-yes" name="recommend" type="radio" value="Yes" class="radio-btn recommend"/>
              <label for="recommend-yes">Yes</label>
              <input id="recommend-no" name="recommend" type="radio" value="No" class="radio-btn recommend"/>
              <label for="recommend-no">No</label>
            </form>
          </div>
        </div>
      </div>
    )
}

export default AddReviewModal;