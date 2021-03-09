import React, {useState, useRef} from 'react';

const SpecifiedCharacteristicsAddReviewModal = ({characteristicsMetadataObj}) => {
    const [currentStarRatingText, setCurrentStarRatingText]= useState(null);
    const [reviewBody, setReviewBody] = useState('');
    //state to be sent in the post request 
    const [product_idPOST, setProduct_idPOST] = useState('');
    const [ratingPOST, setRatingPOST] = useState(null);
    const [summaryPOST, setSummaryPOST] = useState('');
    const [bodyPOST, setBodyPOST] = useState('');
    const [recommendPOST, setRecommendPOST] = useState(null);
    const [namePOST, setNamePOST] = useState('');
    const [emailPOST, setEmailPOST] = useState('');
    const [photosArrPOST, setPhototsArrPOST] = useState([]);
    const [characteristicsObjPOST, setCharacteristicsObjPOST] = useState({});
    //useRef for modal rendering
    const reviewModalRef = useRef(null);

    //POST request object
    const reviewObjPOST = {
        product_id: product_idPOST,
        rating: ratingPOST,
        summary: summaryPOST,
        body: bodyPOST,
        recommend: recommendPOST,
        name: namePOST,
        email: emailPOST,
        photos: photosArrPOST,
        characteristics: characteristicsObjPOST
     }

    //POST request object
    //submit review 
    const submitReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
        // const { product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
        // axios.post('http://localhost:3000/api/reviews', { product_id, rating, summary, body, recommend, name, email, photos, characteristics })
        //   .catch((err) => console.log(err));
    
        }

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

    return (
      <div>
        {/* {console.log(characteristicsMetadataObj)} */}
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Add Review</button>
        <div ref={reviewModalRef} id="myModal" className="modal">
            <div className="modal-content">            
            <span className="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h2>Add A Review</h2> 
            <h3>Overall Rating</h3>
            <div className="txt-center">
                <form>
                    <div className="rating"> 
                        <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
                        <label for="star5" onMouseOver={() => returnStarRatingText(5)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
                        <label for="star4" onMouseOver={() => returnStarRatingText(4)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
                        <label for="star3" onMouseOver={() => returnStarRatingText(3)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
                        <label for="star2" onMouseOver={() => returnStarRatingText(2)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
                        <label for="star1" onMouseOver={() => returnStarRatingText(1)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <div className="clear"></div>
                    </div>
                </form>
            </div>
            <div>{currentStarRatingText}</div>
            <h3>Do you recommend this product?</h3>
            <form>
              <input id="recommend-yes" name="recommend" type="radio" value="Yes" className="radio-btn recommend"/>
              <label for="recommend-yes">Yes</label>
              <input id="recommend-no" name="recommend" type="radio" value="No" className="radio-btn recommend"/>
              <label for="recommend-no">No</label>
            </form>
            <h3>Characteristic Review</h3>
            {/* {console.log(characteristicsMetadataObj)} */}
            {Object.keys(characteristicsMetadataObj).map((characteristicName) => {
              return (
                <React.Fragment > 
                    <h4 key={`${characteristicsMetadataObj[characteristicName].id}-title`}>{characteristicName}</h4>
                    <form key={`${characteristicsMetadataObj[characteristicName].id}-form`}>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input`}
                            id={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            className="radio-btn characteristics" 
                            onClick={(event) => {
                                setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.id]: 1})
                            }}
                        />
                        <label for={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 1)}</label>
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