import React, {useState, useRef} from 'react';

const SpecifiedCharacteristicsAddReviewModal = ({characteristicsMetadataObj, currentProduct_id}) => {
    const [currentStarRatingText, setCurrentStarRatingText]= useState(null);
    //state to be sent in the post request 
    const [canSubmitPOST, setCanSubmitPOST] = useState(false);
    const [ratingPOST, setRatingPOST] = useState(null);
    const [summaryPOST, setSummaryPOST] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [recommendPOST, setRecommendPOST] = useState(null);
    const [namePOST, setNamePOST] = useState('');
    const [emailPOST, setEmailPOST] = useState('');
    const [photosArrPOST, setPhototsArrPOST] = useState([]);
    const [characteristicsObjPOST, setCharacteristicsObjPOST] = useState({});
    //useRef for modal rendering
    const reviewModalRef = useRef(null);

    //POST request object
    const reviewObjPOST = {
        product_id: currentProduct_id,
        rating: ratingPOST,
        summary: summaryPOST,
        body: reviewBody,
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

    //validation functions
    const validateOverallRating = (ratingNum) => {
        if (!ratingNum) {
            alert('Please enter Overall Rating on the star bar');
            setRatingPOST(null);
            return setCanSubmitPOST(false);
        }
        return ratingNum;
    }

    const validateRecommemd = (recommendBool) => {
        if (recommendBool === null) {
            alert('Please enter a recommendation for this product');
            setRecommendPOST(null);
            return setCanSubmitPOST(false);
        }
        return recommendBool;
    }

    const validateCharactertics = (characteristicsObj) => {
        if (Object.keys(characteristicsObj).length !== Object.keys(characteristicsMetadataObj).length) {
            alert('Please enter a rating for all characteristics');
            setRecommendPOST({});
            return setCanSubmitPOST(false);
        }
        return characteristicsObj;
    }
    
    const validateName = (name) => {
        if (name.length === 0) {
            alert('Please enter a nickname');
            setNamePOST('');
            return setCanSubmitPOST(false);
        }
        return name;
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert('Please enter valid email');
            setEmailPOST('');
            return setCanSubmitPOST(false);
        } else {
            setCanSubmitPOST(true);
        }
        return re.test(email);
    }

    return (
      <div>
        {/* {console.log(characteristicsMetadataObj)} */}
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Add Review</button>
        <div ref={reviewModalRef} id="myModal" className="modal">
            <div className="modal-content">            
            <span className="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h2>Add a Review</h2> 
            <h3>Overall Rating</h3>
            <div className="txt-center">
                <form>
                    <div className="rating"> 
                        <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" onClick={() => setRatingPOST(5)}/>
                        <label htmlFor="star5" onMouseOver={() => returnStarRatingText(5)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" onClick={() => setRatingPOST(4)}/>
                        <label htmlFor="star4" onMouseOver={() => returnStarRatingText(4)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" onClick={() => setRatingPOST(3)}/>
                        <label htmlFor="star3" onMouseOver={() => returnStarRatingText(3)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" onClick={() => setRatingPOST(2)}/>
                        <label htmlFor="star2" onMouseOver={() => returnStarRatingText(2)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" onClick={() => setRatingPOST(1)}/>
                        <label htmlFor="star1" onMouseOver={() => returnStarRatingText(1)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <div className="clear"></div>
                    </div>
                </form>
            </div>
            <div>{currentStarRatingText}</div>
            <h3>Do you recommend this product?</h3>
            <form>
              <input id="recommend-yes" name="recommend" type="radio" value="Yes" className="radio-btn recommend" onClick={() => setRecommendPOST(true)}/>
              <label htmlFor="recommend-yes">Yes</label>
              <input id="recommend-no" name="recommend" type="radio" value="No" className="radio-btn recommend" onClick={() => setRecommendPOST(false)}/>
              <label htmlFor="recommend-no">No</label>
            </form>
            <h3>Characteristic Review</h3>
            {/* {console.log(characteristicsMetadataObj)} */}
            {Object.keys(characteristicsMetadataObj).map((characteristicName) => {
              return (
                <React.Fragment key={`${characteristicName}-fragment`}> 
                    <h4 key={`${characteristicsMetadataObj[characteristicName].id}-title`}>{characteristicName}</h4>
                    <form key={`${characteristicsMetadataObj[characteristicName].id}-form`}>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input-1`}
                            className={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            onClick={(event) => {setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.className]: 1})}}
                        />
                        <label 
                          key={`${characteristicsMetadataObj[characteristicName].id}-label-1`}
                          htmlFor={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 1)}
                        </label>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input-2`}
                            className={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            onClick={(event) => {setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.className]: 2})}}
                        />
                        <label 
                          key={`${characteristicsMetadataObj[characteristicName].id}-label-2`}
                          htmlFor={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 2)}
                        </label>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input-3`}
                            className={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            onClick={(event) => {setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.className]: 3})}}
                        />
                        <label 
                          key={`${characteristicsMetadataObj[characteristicName].id}-label-3`}
                          htmlFor={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 3)}
                        </label>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input-4`}
                            className={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            onClick={(event) => {setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.className]: 4})}}
                        />
                        <label 
                          key={`${characteristicsMetadataObj[characteristicName].id}-label-4`}
                          htmlFor={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 4)}
                        </label>
                        <input 
                            key={`${characteristicsMetadataObj[characteristicName].id}-input-5`}
                            className={characteristicsMetadataObj[characteristicName].id} 
                            name={characteristicName}
                            type="radio" 
                            onClick={(event) => {setCharacteristicsObjPOST({...characteristicsObjPOST, [event.target.className]: 5})}}
                        />
                        <label 
                          key={`${characteristicsMetadataObj[characteristicName].id}-label-5`}
                          htmlFor={characteristicsMetadataObj[characteristicName].id}>{reformatCharacteristicRatingDescriptions(characteristicName, 5)}
                        </label>
                    </form>
                </React.Fragment>
              )
            })}
            <h3>Review Summary</h3>
            <form>
              <input type="text" id="review-summary-user" size="70" maxLength="60" placeholder="Example: Best purchase ever!" value={summaryPOST} onChange={(event) => {setSummaryPOST(event.target.value)}}></input>
            </form>

            <h3>Review Body</h3>
              <input type="text" id="review-body-user" size="70" maxLength="1000" placeholder="Why did you like this product or not?" value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}></input>
              <div>{reviewBodyCharCount(reviewBody.length)}</div>

              <h3>COME BACK HERE FOR PHOTOS COMPONENT</h3>

            <h3>What is your nickname?</h3>
              <input type="text" id="review-body-nickname" size="70" maxLength="60" placeholder="Example: jackson11!" value={namePOST} onChange={(event) => {setNamePOST(event.target.value)}}></input>
              <div>For privacy reasons, do not use your full name or email address</div>

            <h3>What is your email?</h3>
              <input type="text" id="review-body-email" size="70" maxLength="60" placeholder="Example: jackson11@email.com" value={emailPOST} onChange={(event) => {setEmailPOST(event.target.value)}}></input>
              <div>For authentication reasons, you will not be emailed</div><br></br>

            <button
              type="button"
              //product_id, rating, summary, body, recommend, name, email, photos, characteristics
              onClick={() => {
                  console.log('I was clicked!', reviewObjPOST);
                  validateOverallRating(ratingPOST);
                  validateRecommemd(recommendPOST);
                  validateCharactertics(characteristicsObjPOST);
                  validateName(namePOST);
                  validateEmail(emailPOST);
                  {canSubmitPOST 
                    ? console.log('I can be submitted as a POST request!')
                    : alert('Processing information. Please wait one a moment!');
                  }

                }}
            >Submit Review</button>
          </div>
        </div>
      </div>
    )
}

export default SpecifiedCharacteristicsAddReviewModal;