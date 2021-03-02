import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';


const QandA = (props) => {

  const [initialQuestions, setInitQuestions] = useState([]);

  const getInitialQuestions = () => {
    axios.get(`/api/qa/questions/${props.id}`)
      .then((result) => {
        console.log(result.data);
        setInitQuestions(result.data.results);
        //console.log('initial questions log', initialQuestions);
      })
      .catch((err) => { console.log('error in getInitialQuestions get req:', err) });
  };

  useEffect(() => (props.id ? getInitialQuestions() : null), [props.id]);

  return (
    <div id="QandA">
        <div id="QandA-Search"> SEARCH FOR QUESTIONS </div>
      <React.Fragment>
        {initialQuestions.length > 0 && <Question questions={initialQuestions}/>}
      </React.Fragment>
      <form>
        <button type="button"> More Answered Questions </button>
        <button type="button"> Add a Question </button>
      </form>
    </div>
  );
};

export default QandA;