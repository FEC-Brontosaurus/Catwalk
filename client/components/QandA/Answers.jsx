import React from 'react';

const Answers = (props) => {


  return (
    <React.Fragment>
      {props.answers && Object.entries(props.answers).map(([key, value], index) => (
        <div className="QandA-Answer" key={index.toString + key}> A: {value.body} <span className="username-timestamp"> {value.answerer_name} </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>))}
    </React.Fragment>
  )
}

export default Answers;