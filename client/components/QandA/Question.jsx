import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers';
import AnswerModal from './ModalAnswer';
import QuestionHelpClick from './QuestionHelpClick';

const Question = ({ questions, loadFlag, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentQId, setCurrentQId] = useState(0);

  // const handleMoreAnswers = (e, value) => {
  //   e.preventDefault();
  //   axios.get(`/api/moreAnswers/${value}`)
  //     .then((result) => {
  //       setMoreAnswers(result.data.results);
  //       console.log(result.data.results);
  //     })
  //     .catch((err) => { console.log('error in handle more answers', err); });
  // };
  const handleAddAnswer = (e, clickId) => {
    e.preventDefault();
    setCurrentQId(clickId);
    setOpenModal(true);
  }

  return (
    <div>
      {questions ? questions.map((question) => (
        <div>
         {question.question_id === currentQId ? <AnswerModal open={openModal} setOpen={setOpenModal} title={title} question={question.question_body} id={question.question_id}/> : null }
          <div className="QandA-question" key={question.question_id.toString()}>
            Q:
            <span>
              {question.question_body}
            </span>
            <span className="helpful-yes">
              Helpful?
              <>
                <QuestionHelpClick questId={question.question_id}/>
              </>
            </span>
            <button  className="add-an-answer" onClick={(e) => handleAddAnswer(e, question.question_id)}> Add an Answer + </button>
          </div>
          {Object.keys(question.answers).length > 0
            && <Answers loadFlag={loadFlag} answers={question.answers} /> }
        </div>
      )) : null }
    </div>
  );
};

export default Question;
