import React from 'react';

const Question = (props) => {


  return (
    <React.Fragment>
      {props.questions.map((question, index) => {
        <div className="QandA-question" key={question.question_id.toString() + index}>Q: <span> {question.question_body} </span>
        <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
        })}
    </React.Fragment>

  )
}

export default Question;