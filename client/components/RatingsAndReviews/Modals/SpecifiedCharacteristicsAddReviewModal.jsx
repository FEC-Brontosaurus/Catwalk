import React, {useState, useRef} from 'react';

const SpecifiedCharacteristicsAddReviewModal = ({characteristicsMetadataObj}) => {
    const [currentStarRatingText, setCurrentStarRatingText]= useState(null);
    const [reviewBody, setReviewBody] = useState('');
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

    const reformatCharacteristicRatingDescriptions = (characteristicName, num) => {
        const ratingDescriptionObj = {
            Size: {
              1: 'A size too small',
              2: 'Half a size too small',
              3: 'Perfect',
              4: 'Half a size too big',
              5: 'A size too wide',
            },
            Width: {
              1: 'Too narrow',
              2: 'Slightly narrow',
              3: 'Perfect',
              4: 'Slightly wide',
              5: 'Too wide',
            },
            Comfort: {
              1: 'Uncomfortable',
              2: 'Slightly uncomfortable',
              3: 'Okay',
              4: 'Comfortable',
              5: 'Perfect',
            },
            Quality: {
              1: 'Poor',
              2: 'Below average',
              3: 'What I expected',
              4: 'Pretty great',
              5: 'Perfect',
            },
            Length: {
              1: 'Runs short',
              2: 'Runs slightly short',
              3: 'Perfect',
              4: 'Runs slightly long',
              5: 'Runs long',
            },
            Fit: {
              1: 'Runs tight',
              2: 'Runs slightly tight',
              3: 'Perfect',
              4: 'Runs slightly long',
              5: 'Runs long',
            },
          };
          return ratingDescriptionObj[characteristicName][num];
    }

    const reviewBodyCharCount = (num) => {
      var returnStatment = '';
      if (num < 50) {
        returnStatment = `Minimum required characters left: ${50 - num}`;
      } else {
        returnStatment = 'Minimum reached';
      }
      return returnStatment;
    }

    //submit review 
    const submitReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
      // const { product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
      // axios.post('http://localhost:3000/api/reviews', { product_id, rating, summary, body, recommend, name, email, photos, characteristics })
      //   .catch((err) => console.log(err));

    }

    return (
      <div>
        {/* {console.log(characteristicsMetadataObj)} */}
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Add Review</button>
        <div ref={reviewModalRef} id="myModal" class="modal">
            <div class="modal-content">            
            <span class="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h2>Add A Review</h2> 
            <h3>Overall Rating</h3>
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
            <h3>Do you recommend this product?</h3>
            <form>
              <input id="recommend-yes" name="recommend" type="radio" value="Yes" class="radio-btn recommend"/>
              <label for="recommend-yes">Yes</label>
              <input id="recommend-no" name="recommend" type="radio" value="No" class="radio-btn recommend"/>
              <label for="recommend-no">No</label>
            </form>
            <h3>Characteristic Review</h3>
            {console.log(characteristicsMetadataObj)}
            {Object.keys(characteristicsMetadataObj).map((characteristicName) => {
              return (
                  
                <React.Fragment 
                //   key={}
                > {console.log(characteristicName)}
                    <h4>{characteristicName}</h4>
                    <form>
                        <input id={`characteristics-review-${characteristicName}1`} name={characteristicName} type="radio" value="1" class="radio-btn characteristics"/>
                        <label for={`characteristics-review-${characteristicName}1`} >{reformatCharacteristicRatingDescriptions(characteristicName, 1)}</label>
                        <input id={`characteristics-review-${characteristicName}2`} name={characteristicName} type="radio" value="2" class="radio-btn characteristics"/>
                        <label for={`characteristics-review-${characteristicName}2`} >{reformatCharacteristicRatingDescriptions(characteristicName, 2)}</label>
                        <input id={`characteristics-review-${characteristicName}3`} name={characteristicName} type="radio" value="3" class="radio-btn characteristics"/>
                        <label for={`characteristics-review-${characteristicName}3`} >{reformatCharacteristicRatingDescriptions(characteristicName, 3)}</label>
                        <input id={`characteristics-review-${characteristicName}4`} name={characteristicName} type="radio" value="4" class="radio-btn characteristics"/>
                        <label for={`characteristics-review-${characteristicName}4`} >{reformatCharacteristicRatingDescriptions(characteristicName, 4)}</label>
                        <input id={`characteristics-review-${characteristicName}5`} name={characteristicName} type="radio" value="5" class="radio-btn characteristics"/>
                        <label for={`characteristics-review-${characteristicName}5`} >{reformatCharacteristicRatingDescriptions(characteristicName, 5)}</label>
                    </form>
                </React.Fragment>
              )
            })}
            <h3>Review Summary</h3>
            <form>
              <input type="text" id="review-summary-user" size="70" maxLength="60" placeholder="Example: Best purchase ever!"></input>
            </form>
            <h3>Review Body</h3>
              <input type="text" id="review-body-user" size="70" maxLength="1000" placeholder="Why did you like this product or not?" value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}></input>
              <div>{reviewBodyCharCount(reviewBody.length)}</div>
            <h3>What is your nickname?</h3>
              <input type="text" id="review-body-nickname" size="70" maxLength="60" placeholder="Example: jackson11!" /*value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}*/></input>
              <div>For privacy reasons, do not use your full name or email address</div>
            <h3>What is your email?</h3>
              <input type="text" id="review-body-email" size="70" maxLength="60" placeholder="Example: jackson11@email.com" /*value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}*/></input>
              <div>For authentication reasons, you will not be emailed</div><br></br>
            <button
              type="button"
              //product_id, rating, summary, body, recommend, name, email, photos, characteristics
              onClick={() => console.log('I was clicked!')}
            >Submit Review</button>
          </div>
        </div>
      </div>
    )
}

export default SpecifiedCharacteristicsAddReviewModal;