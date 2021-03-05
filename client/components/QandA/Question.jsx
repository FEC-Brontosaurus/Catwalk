import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers';

const Question = ({ questions, loadFlag }) => {
  const [moreAnswers, setMoreAnswers] = useState([]);

  // const handleMoreAnswers = (e, value) => {
  //   e.preventDefault();
  //   axios.get(`/api/moreAnswers/${value}`)
  //     .then((result) => {
  //       setMoreAnswers(result.data.results);
  //       console.log(result.data.results);
  //     })
  //     .catch((err) => { console.log('error in handle more answers', err); });
  // };
  console.log(questions);
  return (
    <div>
      {questions && questions.map((question) => (
        <div>
          <div className="QandA-question" key={question.question_id.toString()}>
            Q:
            <span>
              {question.question_body}
            </span>
            <span className="helpful-yes">
              Helpful?
              <span href="#">
                yes
              </span>
            </span>
            <span className="add-an-answer"> Add an Answer + </span>
          </div>
          {Object.keys(question.answers).length > 0
            && <Answers loadFlag={loadFlag} answers={question.answers} /> }
        </div>
      )) }
    </div>
  );
};

export default Question;
