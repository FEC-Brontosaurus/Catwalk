import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/ModalStyles.css';
import axios from 'axios';
import _, { escape } from 'underscore';
import ImageUpload from './ImageUpload';
const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '300px',
  height: '250px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  overflow: 'scroll'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .35)',
  zIndex: 1000
}


const AnswerModal = ({ open, setOpen, question, title, id, logClick, reRender, render }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [imageUploadToggle, setImageUploadToggle] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

  const submitAnswer = (event, name, email, answer) => {
    logClick('Submit New Answer Button', 'QandA');
    const answerEsc = _.escape(answer);
    const emailEsc = _.escape(email);
    const nameEsc = _.escape(name);
    event.preventDefault();
    axios.post(`/api/qa/questions/${id}/answers`, {
      params: {
        'body': answerEsc,
        'name': nameEsc,
        'email': emailEsc,
        'photos': []
      }
    })
     .then((result) => {
      //  console.log('submitanswer success')
       setUserAnswer('');
       setUserEmail('');
       setUserName('');
       setOpen(false);
       reRender(!render);
      })
     .catch((err) => console.log('error in client submitanswer post:', err));
  }

  const discardAnswer = () => {
    logClick('discard new answer button', 'QandA');
    setUserAnswer('');
    setUserEmail('');
    setUserName('');
    setImageFiles([]);
    setImageUploadToggle(false);
    setOpen(false);
  }


  if(!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
      <div id="OVERLAY_STYLES" onClick={() => discardAnswer()}></div>
      <div style={MODAL_STYLE}>
        <h2>Submit Your Answer</h2>
        <h3> Product: {title} </h3>
        <h3> Question: {question} </h3>
        {/* <h4> ID: {id} </h4> */}
        {!imageUploadToggle ? <form onSubmit={(event) => submitAnswer(event, userName, userEmail, userAnswer)}>
          <label>Username *</label>
          <input type="text" placeholder="Example: jack543!" value={userName} onInput={(event) => setUserName(event.target.value)} maxLength="60" required></input>
          <p>For privacy reasons, do not use your full name or email address</p>
          <label>Answer *</label>
          <input type="text" placeholder="Answer" value={userAnswer} onInput={(event) => setUserAnswer(event.target.value)} maxLength="1000" required></input>
          <label>Email *</label>
          <input type="email" placeholder="Example: jack@email.com" value={userEmail} onInput={(event) => setUserEmail(event.target.value)} maxLength="60" required></input>
          <p>For authentication reasons, you will not be emailed</p>
          <button type="button" onClick={() => setImageUploadToggle(true)}> Upload Images </button>
          <button type="Submit">Submit Answer</button>
        </form> : <ImageUpload imageFiles={imageFiles} setImage={setImageFiles} toggleClose={setImageUploadToggle}/>}
        <div>{imageFiles.length > 0 ? <div className="upload-image-div">{imageFiles.map((image) => (
          <img className="thumbnail-image" src={image} style={{width: '100px', height: '100px'}}></img>
        ))}</div> : null}</div>
        <button type="button" onClick={() => discardAnswer()}>Discard Answer</button>
      </div>
      </>, document.getElementById('portal')
    )
  }


}

export default AnswerModal;

