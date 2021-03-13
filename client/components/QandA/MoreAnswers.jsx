import React, { useState, useEffect } from 'react';
import TimeAgo from 'react-timeago';
import axios from 'axios';
import _, { unescape } from 'underscore';
import styles from './styles/AnswerStyles.css';
import AnswerHelpClick from './AnswerHelpClick';
import AnswerReport from './AnswerReport';

const MoreAnswers = ({
  questId, logClick, reRender, render,
}) => {
  const [initialAnswers, setInitAnswers] = useState([]);
  const sortAnswers = (unsortedAnswers) => {
    const tempArr = [];
    Object.entries(unsortedAnswers).forEach(([key, value]) => {
      const obj = {};
      obj.answer_id = key;
      obj.body = value.body;
      obj.date = value.date;
      obj.answerer_name = value.answerer_name;
      obj.helpfulness = value.helpfulness;
      obj.photos = value.photos;
      tempArr.push(obj);
    });
    const sellers = tempArr.filter((answer) => answer.answerer_name === 'Seller');
    const buyers = tempArr.filter((answer) => answer.answerer_name.toLowerCase() !== 'seller');
    // const helpSort = buyers.sort((a, b) => b.helpfulness - a.helpfulness);
    setInitAnswers(sellers.concat(buyers));
  };
  const getInitialAnswers = (questionId) => {
    axios.get(`/api/moreAnswers/${questionId}`)
      .then((result) => {
        sortAnswers(result.data.results);
      })
      .catch((err) => { console.log('error in answers get req', err); });
  };

  useEffect(() => (questId ? getInitialAnswers(questId) : null), [questId]);

  return (
    <>
      {initialAnswers
        ? initialAnswers.map((answer) => (
          answer ? (
            <div className="answer-container" key={answer.answer_id.toString()}>
              <div className="QandA-Answer">
                A:
                {_.unescape(answer.body)}
                <div className="helpful-yes">
                  Helpful?
                  <div className="helpClick">
                    {' '}
                    <AnswerHelpClick
                      reRender={reRender}
                      render={render}
                      logClick={logClick}
                      ansId={answer.answer_id}
                    />
                    {' '}
                    <div className="answer-helpfulness">
                      {' '}
                      (
                      {answer.helpfulness}
                      )
                    </div>
                    {' '}
                  </div>
                  <div className="reportClick"><AnswerReport reRender={reRender} render={render} logClick={logClick} ansId={answer.answer_id} /></div>
                </div>
              </div>
              <div className="answer-image-container">
                {answer.photos.length > 0 ? answer.photos.map((photo) => (<>{typeof photo === 'string' ? <img key={photo} className="answer-image" alt="Unavailable" src={photo} /> : null }</>)) : null }
              </div>
              <div className="username-timestamp">
                {' '}
                by
                {answer.answerer_name}
                ,
                <TimeAgo date={answer.date} />
              </div>
            </div>
          )
            : null))
        : null }
    </>
  );
};

export default MoreAnswers;
