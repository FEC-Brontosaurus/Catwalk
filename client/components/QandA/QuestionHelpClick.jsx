import React, { useState } from 'react';
import axios from 'axios';

const QuestionHelpClick = ({
  questId, logClick, render, reRender,
}) => {
  const [helpClick, setHelpClick] = useState(0);

  const handleHelpClick = (id) => {
    logClick('Question was helpful', 'QandA');
    setHelpClick(1);
    // console.log('answer', id, 'has this many clicks', helpClick);
    axios.put(`/api/helpfulQuestion/${id}`)
      .then(() => reRender(!render))
      .catch((err) => console.log('helpful question put req error', err));
  };

  return (
    <div className="question-help-style">
      {helpClick > 0 ? <div className="yes-style"> yes </div> : <button type="button" className="yes-style" onClick={() => handleHelpClick(questId)}> yes </button>}
    </div>
  );
};

export default QuestionHelpClick;
