import React, { useState } from 'react';
import axios from 'axios';

const AnswerHelpClick = ({
  ansId, logClick, render, reRender,
}) => {
  const [helpClick, setHelpClick] = useState(0);

  const handleHelpClick = (id) => {
    logClick('answerHelpClick', 'QandA');
    setHelpClick(1);
    // console.log('answer', id, 'has this many clicks', helpClick);
    axios.put(`/api/helpfulAnswer/${id}`)
      .then((result) => reRender(!render))
      .catch((err) => console.log('helpful answer put req error', err));
  };

  return (
    <div className="answer-help-style">
      {helpClick > 0 ? <div className="yes-style"> yes </div> : <button type="button" className="yes-style" onClick={() => handleHelpClick(ansId)}> yes </button>}
    </div>
  );
};

export default AnswerHelpClick;
