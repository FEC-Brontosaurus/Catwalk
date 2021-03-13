import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers';
import AnswerModal from './ModalAnswer';
import QuestionHelpClick from './QuestionHelpClick';
import QuestionReport from './QuestionReport';
import MoreAnswers from './MoreAnswers';
import styles from './styles/QuestionStyles.css';

const Question = ({
  questions, loadFlag, title, logClick, reRender, render,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentQId, setCurrentQId] = useState(0);
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [currentQuestAns, setCurrentQuestAns] = useState(0);

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
    logClick('add new answer to question', 'QandA');
    e.preventDefault();
    setCurrentQId(clickId);
    setOpenModal(true);
  };

  const handleMoreAnswers = (e, clickId) => {
    logClick('load more answers', 'QandA');
    e.preventDefault();
    setCurrentQuestAns(clickId);
    setMoreAnswers(true);
  };

  return (
    <div id="outer-question-container">
      {questions ? questions.map((question) => (
        question ? (
          <div key={question.question_id.toString()} className="inner-question-container">
            {question.question_id === currentQId
              ? (
                <AnswerModal
                  reRender={reRender}
                  render={render}
                  logClick={logClick}
                  open={openModal}
                  setOpen={setOpenModal}
                  title={title}
                  question={question.question_body}
                  id={question.question_id}
                />
              ) : null }

            <div className="QandA-question">
              <div className="q-style"> Q: </div>
              <div>
                {question.question_body}
              </div>
              <div className="question-accessories">
                <div className="question-helpful-yes" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  Helpful?
                  <div>
                    <QuestionHelpClick
                      reRender={reRender}
                      render={render}
                      logClick={logClick}
                      questId={question.question_id}
                    />
                  </div>
                  (
                  {question.question_helpfulness}
                  )
                </div>
                <div className="divider"> | </div>
                <div className="report-style">
                  <QuestionReport
                    logClick={logClick}
                    render={render}
                    reRender={reRender}
                    questId={question.question_id}
                  />
                </div>
                <button type="button" className="add-an-answer" onClick={(e) => handleAddAnswer(e, question.question_id)}> Add an Answer + </button>
              </div>
            </div>
            {Object.keys(question.answers).length > 2
              && question.question_id === currentQuestAns ? (
                <div className="outer-answer-container">
                  {' '}
                  <MoreAnswers
                    reRender={reRender}
                    render={render}
                    logClick={logClick}
                    questId={question.question_id}
                    answers={question.answers}
                  />
                  {' '}
                  <button className="more-answers" type="button" onClick={() => setCurrentQuestAns(0)}> Less Answers </button>
                  {' '}
                </div>
              ) : Object.keys(question.answers).length > 0 && (
              <div className="outer-answer-container">
                {' '}
                <Answers
                  reRender={reRender}
                  render={render}
                  logClick={logClick}
                  loadFlag={loadFlag}
                  answers={question.answers}
                />
                {Object.keys(question.answers).length < 2
                  ? null : <button className="more-answers" type="button" onClick={(event) => handleMoreAnswers(event, question.question_id)}> More Answers </button>}
              </div>
              ) }
          </div>
        ) : null
      )) : null }
    </div>
  );
};

export default Question;
