import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import Answers from './Answers.jsx';

const QandA = (props) => {

  const [initialQuestions, setInitQuestions] = useState([]);
  console.log('log of current product in QandA', props.id)

  const getInitialQuestions = () => {
    axios.get(`/api/qa/questions/${props.id}`)
      .then((result) => {
        console.log(result.data);
        setInitQuestions(result.data);
      })
      .catch((err) => { console.log('error in getInitialQuestions get req:', err) });
  };

  useEffect(() => (props.id ? getInitialQuestions() : null), [props.id]);

  return (
    <div id="QandA">
        <div id="QandA-Search"> SEARCH FOR QUESTIONS </div>
      <React.Fragment>
        {initialQuestions.length > 0 && <Question questions={initialQuestions.results}/>}
        {initialQuestions.length > 0 && <Answers answers={initialQuestions.results.answers}/>}
      </React.Fragment>
      <form>
        <button type="button"> More Answered Questions </button>
        <button type="button"> Add a Question </button>
      </form>
    </div>
  );
};

export default QandA;

// {initialQuestions.results.map((question, index) => {
//   <div className="QandA-question" key={question.question_id.toString() + index}>Q: <span> {question.question_body} </span>
//   <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>