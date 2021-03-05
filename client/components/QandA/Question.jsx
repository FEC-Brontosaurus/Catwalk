import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers';
import AnswerModal from './ModalAnswer';

const Question = ({ questions, loadFlag }) => {
  const [openModal, setOpenModal] = useState(false);

  // const handleMoreAnswers = (e, value) => {
  //   e.preventDefault();
  //   axios.get(`/api/moreAnswers/${value}`)
  //     .then((result) => {
  //       setMoreAnswers(result.data.results);
  //       console.log(result.data.results);
  //     })
  //     .catch((err) => { console.log('error in handle more answers', err); });
  // };
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
            <button  className="add-an-answer" onClick={() => setOpenModal(true)}> Add an Answer + </button>
          </div>
          {Object.keys(question.answers).length > 0
            && <Answers loadFlag={loadFlag} answers={question.answers} /> }
        </div>
      )) }
      <AnswerModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Question;
