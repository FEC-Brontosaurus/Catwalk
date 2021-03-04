import React, { useState } from "react";

const IndividualReviewTile = ({ productReviewObj }) => {
    const [isShowingFullReviewBody, setIsShowingFullReviewBody] = useState(false);

    const reformattedDate = () => {
        const monthObj = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July', 
            '08': 'August',
            '09': 'September',
            '10': 'October', 
            '11': 'November',
            '12': 'December'
        };
        const date = new Date(productReviewObj.date).toISOString().replace(/T.*/,'').split('-');
        date[1] = monthObj[date[1]];
        return `${date[1]} ${date[2]}, ${date[0]}`;
    }

    const reformattedSummary = () => {
        if (productReviewObj.summary.length === 0) {
            return '[No summary provided]';
        }
        if (productReviewObj.summary.length >= 60) {
             return productReviewObj.summary.slice(0, 60);
        }
        return productReviewObj.summary;
    }


    // var test = 'THIS IS A TEST TO MAKE SURE THAT THE BUTTON RENDERS THE INFORMATION WE NEED: Sapiente repudiafjaslkfjdlkfjskldfjksdlfjdskfjdsn;jiopra;vrewi;cmrjeowiruxiewruthrjrjhbrekriwhjrknejwdidflekndae laudantium numquam dolor. Sit in sint sint quae harum amet. Magnam incidunt quaerat dolores dignissimos ipsum sed. Quas facilis nesciunt aut. Quod eligendi veritatis quam nisi quasi vel temporibus nesciunt quaefhdjskfhsjkfhdsjfhdsjkfdshf';

    const reformattedBody = () => {
        if (isShowingFullReviewBody) {
            return productReviewObj.body;
        } else {
            var shortenedStr = productReviewObj.body.slice(0, 250);
            return shortenedStr + '...';
        }
    }

    return (
        <div id="IndividualReviewTile-div">
            <div>{reformattedDate(productReviewObj.date)}</div>
            <div><strong>{reformattedSummary(productReviewObj.summary)}</strong></div>
            {productReviewObj.body.length >= 250 
              ? <div>{reformattedBody(productReviewObj.body)}
                  <button onClick={(event) => {setIsShowingFullReviewBody(!isShowingFullReviewBody)}}
                  >{isShowingFullReviewBody ? `Show Less` : 'Show More'}</button>
                </div> 
              : <div>{productReviewObj.body}</div>
            }
            {productReviewObj.photos.length > 0 
            && productReviewObj.photos.map((photoObj) => (
                <img
                  id="IndividualReviewTile-img"
                  key={photoObj.id}
                  src={photoObj.url} 
                  alt="Individual Review Tile Photo"
                />
            ))}
        </div>
    )
}


export default IndividualReviewTile;