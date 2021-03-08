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
            <table>
                <tbody>
                <tr>
                    <td><strong>Overall Rating</strong></td>
                    <td>
                        <button>Poor &#9733;</button>
                        <button>Fair &#9733;&#9733;</button>
                        <button>Average &#9733;&#9733;&#9733;</button>
                        <button>Good &#9733;&#9733;&#9733;&#9733;</button>
                        <button>Great &#9733;&#9733;&#9733;&#9733;&#9733;</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
      </div>
    )
}

export default AddReviewModal;