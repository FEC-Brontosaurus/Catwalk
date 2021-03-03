import React, { useState } from 'react';
import Answers from './Answers.jsx';
import axios from 'axios';

const Question = (props) => {

  const [moreAnswers, setMoreAnswers] = useState([])

  const handleMoreAnswers = (e, value) => {
    e.preventDefault();
    axios.get(`/api/moreAnswers/${value}`)
      .then((result) => {
        setMoreAnswers(result.data.results);
        console.log(result.data.results);
      })
      .catch((err) => { console.log('error in handle more answers', err) });

  }

  return (
    <React.Fragment>
      {props.questions.map((question, index) => (
        <div><div className="QandA-question" key={question.question_id.toString() + index}>Q: <span> {question.question_body} </span>
        <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
        {Object.keys(question.answers).length > 0 && <Answers questId={question.question_id} moreAnswers={moreAnswers}/>}
        <button type="button" value={question.question_id} onClick={(event) => handleMoreAnswers(event, question.question_id)}> More Answers </button>
        </div>
      ))}
    </React.Fragment>

  )
}

export default Question;