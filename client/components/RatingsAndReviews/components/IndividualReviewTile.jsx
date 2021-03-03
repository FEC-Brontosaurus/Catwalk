import { useState } from "react";
import React from 'react';
import TimeAgo from 'react-timeago';

const IndividualReviewTile = ({ productReviewObj }) => {

    const reformattedDate = (isoDate) => {
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

        const date = new Date(productReviewObj.date).toISOString().replace(/T.*/,'').split('-').reverse()
        date[0] = monthObj[date[0]];
        return date[0] + ' ' + date[1] + ', ' + date[2];
    }


    return (
        <div id="IndividualReviewTile-div">
            <div>{reformattedDate(productReviewObj.date)}</div>
        </div>

    )

    


}


export default IndividualReviewTile;