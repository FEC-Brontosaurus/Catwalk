import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Answers = (props) => {

  const [initialAnswers, setInitAnswers] = useState([])

 const getInitialAnswers = (questId) => {
    axios.get(`/api/qa/questions/${questId}/answers`)
      .then((result) => {
        setInitAnswers(result.data.results);
        console.log(result.data.results);
      })
      .catch((err) => { console.log('error in answers get req', err); });
  }

  useEffect(() => { (props.questId ? getInitialAnswers(props.questId) : null) }, [props.questId]);

  return (
    <React.Fragment>
      {props.questId && initialAnswers.map((answer, index) => (
        <div className="QandA-Answer" key={index.toString() + answer.answer_id}> A: {answer.body} <span className="username-timestamp"> {answer.answerer_name} </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>)) }
    </React.Fragment>
  )
}

export default Answers;