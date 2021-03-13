import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _, { escape } from 'underscore';
import axios from 'axios';
import styles from './styles/ModalStyles.css';

const QuestionModal = ({
  open, setOpen, title, id, logClick, reRender, render,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userQuestion, setUserQuestion] = useState('');

  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '300px',
    height: '250px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f4f9f9',
    padding: '50px',
    zIndex: 1000,
    overflow: 'scroll',
  };

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .35)',
    zIndex: 1000,
  };

  const discardQuestion = () => {
    logClick('discard new question', 'QandA');
    setUserEmail('');
    setUserName('');
    setUserQuestion('');
    setOpen(false);
  };
  const postQuestion = (name, email, question) => {
    axios.post('/api/addQuestion', {
      params: {
        body: question,
        name,
        email,
        product_id: id,
      },
    })
      .then(() => reRender(!render))
      .catch((err) => console.log('error in post new question post req:', err));
  };
  const handleSubmitQuestion = (e) => {
    const emailEsc = _.escape(userEmail);
    const nameEsc = _.escape(userName);
    const questionEsc = _.escape(userQuestion);
    e.preventDefault();
    // console.log(`name: ${userName}, email: ${userEmail}, question: ${userQuestion}`);
    discardQuestion();
    postQuestion(nameEsc, emailEsc, questionEsc);
  };


  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={() => discardQuestion()} />
      <div style={MODAL_STYLE}>
        <h2> Ask Your Question </h2>
        <h3>
          {' '}
          About the:
          {title}
        </h3>
        <form>
          <h3>Question*</h3>
          <label className="hidden-style" htmlFor="question-question-input">Question *</label>
          <input type="text" id="question-question-input" maxLength="1000" placeholder="Why did you like the product or not?" value={userQuestion} onInput={(event) => setUserQuestion(event.target.value)} required />
          <h3> Name* </h3>
          <label className="hidden-style" htmlFor="question-name-input">Name *</label>
          <input type="text" maxLength="60" value={userName} id="question-name-input" onInput={(event) => setUserName(event.target.value)} required placeholder="Example: jackson11!" />
          <p>For privacy reasons, do not use your full name or email address.</p>
          <h3> Email* </h3>
          <label className="hidden-style" htmlFor="question-email-input">Email *</label>
          <input type="email" maxLength="60" id="question-email-input" value={userEmail} onInput={(event) => setUserEmail(event.target.value)} required placeholder="Example: jack@email.com" />
          <p>For authentication reasons, you will not be emailed</p>
          <button type="button" onClick={(event) => handleSubmitQuestion(event)}> Submit Question </button>
        </form>
        <button className="discard-question" type="button" onClick={() => discardQuestion()}> Discard Question </button>

      </div>

    </>, document.getElementById('portal'),

  );
};

export default QuestionModal;
