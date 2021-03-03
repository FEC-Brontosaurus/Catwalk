import { useState } from "react";
import React from 'react';

const IndividualReviewTile = ({ productReviewObj }) => {

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


    return (
        <div id="IndividualReviewTile-div">
            <div>{reformattedDate(productReviewObj.date)}</div>
            <div><strong>{reformattedSummary(productReviewObj.summary)}</strong></div>
        </div>
    )
}


export default IndividualReviewTile;