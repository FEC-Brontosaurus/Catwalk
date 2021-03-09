import React, { useRef, useState } from 'react';
import axios from 'axios';

const AnswerHelpClick = ({ ansId }) => {
  const [helpClick, setHelpClick] = useState(0);

  const handleHelpClick = (id) => {
    setHelpClick(1);
    // console.log('answer', id, 'has this many clicks', helpClick);
    axios.put(`/api/helpfulAnswer/${id}`)
      // .then((result) => console.log('helpful answer put req success'))
      .catch((err) => console.log('helpful answer put req error', err));
  }


  return (
    <>
     {helpClick > 0 ? <span className="yes-style"> yes </span> : <button className="yes-style" onClick={() => handleHelpClick(ansId)}> yes </button>}
    </>
  )
}

export default AnswerHelpClick;