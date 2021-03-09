import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers';
import AnswerModal from './ModalAnswer';
import QuestionHelpClick from './QuestionHelpClick';
import QuestionReport from './QuestionReport';
import MoreAnswers from './MoreAnswers';

const Question = ({ questions, loadFlag, title }) => {
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
    e.preventDefault();
    setCurrentQId(clickId);
    setOpenModal(true);
  }

  const handleMoreAnswers = (e, clickId) => {
    e.preventDefault();
    setCurrentQuestAns(clickId);
    setMoreAnswers(true);
  }


  return (
    <div>
      {questions ? questions.map((question, index) => (
        question ? <div key={question.question_id.toString() + index}>
         {question.question_id === currentQId ? <AnswerModal open={openModal} setOpen={setOpenModal} title={title} question={question.question_body} id={question.question_id}/> : null }
          <div className="QandA-question">
            Q:
            <span>
              {question.question_body}
            </span>
            <span className="helpful-yes">
              Helpful?
              <>
                <QuestionHelpClick questId={question.question_id}/>
              </>
              ({question.question_helpfulness})
            </span>
            <span className="report-style">
              <QuestionReport questId={question.question_id} />
            </span>
            <button  className="add-an-answer" onClick={(e) => handleAddAnswer(e, question.question_id)}> Add an Answer + </button>
          </div>
          {Object.keys(question.answers).length > 0 && question.question_id === currentQuestAns ? <> <MoreAnswers questId={question.question_id} answers={question.answers}/> <button type="button" onClick={() => setCurrentQuestAns(0)}> Less Answers </button> </> : Object.keys(question.answers).length > 0 && <> <Answers loadFlag={loadFlag} answers={question.answers} />
          <button type="button" onClick={(event) => handleMoreAnswers(event, question.question_id)}> More Answers </button> </> }
        </div> : null
      )) : null }
    </div>
  );
};

export default Question;

// <> <MoreAnswers questId={question.question_id} answers={question.answers}/> <button type="button" onClick={() => setMoreAnswers(false)}> Less Answers </button> </>