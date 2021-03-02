import React from 'react';
import Answers from './Answers.jsx';

const Question = (props) => {

  console.log('logging questions in Question.jsx', props.questions);

  return (
    <React.Fragment>
      {props.questions.map((question, index) => (
        <div><div className="QandA-question" key={question.question_id.toString() + index}>Q: <span> {question.question_body} </span>
        <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
        {Object.keys(question.answers).length > 0 && <Answers answers={question.answers}/>}</div>
      ))}
    </React.Fragment>

  )
}

export default Question;