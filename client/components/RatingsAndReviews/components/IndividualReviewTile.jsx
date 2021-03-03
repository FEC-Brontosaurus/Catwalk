import { useState } from "react";
import React from 'react';
import TimeAgo from 'react-timeago';

const IndividualReviewTile = ({ productReviewObj }) => (
<div id="IndividualReviewTile-div">
    <TimeAgo date={productReviewObj.date}/>
</div>
    


)


export default IndividualReviewTile;