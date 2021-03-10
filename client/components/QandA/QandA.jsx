import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Search from './Search';
import QuestionModal from './QuestionModal';
import styles from './styles/QandAStyles.css';

const QandA = ({ id, title, logClick }) => {
  const [initialQuestions, setInitQuestions] = useState([]);
  const [loadMoreQuestions, setLoadMoreQuestions] = useState(false);
  const [masterList, setMasterList] = useState([]);
  const [questionModalToggle, setQuestionModalToggle] = useState(false);
  const [reRenderToggle, setReRenderToggle] = useState(false);

  const sortInitialQuestions = (initial) => {
    //  takes initial questions array
    // sorts by helpfulness
    const sorted = initial.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    return sorted;
  };

  const getInitialQuestions = () => {
    axios.get(`/api/qa/questions/${id}`)
      .then((result) => {
        // console.log(result.data);
        setInitQuestions(sortInitialQuestions(result.data.results));
        setMasterList(sortInitialQuestions(result.data.results));
      })
      .catch((err) => { console.log('error in getInitialQuestions get req:', err); });
  };

  useEffect(() => (id ? getInitialQuestions() : null), [id]);

  useEffect(() => (reRenderToggle ? getInitialQuestions() : null), [reRenderToggle]);

  const setDisplayQuestions = (sortedInitial) => {
    // set a display array from sorted initial questions
    // limit returned array by default number 4.
    const tempArr = [];
    if (sortedInitial.length > 4) {
      for (let i = 0; i < 4; i += 1) {
        tempArr.push(sortedInitial[i]);
      }
    } else {
      for (let i = 0; i < sortedInitial.length; i += 1) {
        tempArr.push(sortedInitial[i]);
      }
    }
    return tempArr;
  };

  const displaySearchResults = (searchTerm) => {
    setInitQuestions(masterList);
    let tempArr = [];
    for (let i = 0; i < initialQuestions.length; i+= 1) {
      if (initialQuestions[i].question_body.toLowerCase().includes(searchTerm.toLowerCase())) {
        tempArr.push(initialQuestions[i]);
      }
    }
    setInitQuestions(tempArr);
  }

  return (
    <div id="QandA">
      <h3>{ 'Questions & Answers' }</h3>
      <div id="QandA-Search">
       {initialQuestions && <Search logClick={logClick} searchResults={displaySearchResults} setQuestions={setInitQuestions} masterList={setDisplayQuestions(masterList)}/> }
      </div>
      <div id="questions-container">
        {initialQuestions.length > 0
        ? (
        <Question
          render={reRenderToggle}
          reRender={setReRenderToggle}
          logClick={logClick}
          title={title}
          loadFlag={loadMoreQuestions}
          questions={(!loadMoreQuestions ? setDisplayQuestions(initialQuestions)
            : initialQuestions)}
        />
        ) : null }
      </div>
      <form>
        {(!loadMoreQuestions
          ? <button type="button" onClick={() => setLoadMoreQuestions(true)}> More Answered Questions </button>
          : <button type="button" onClick={() => setLoadMoreQuestions(false)}> Less Questions </button>)}
        <button type="button" onClick={() => setQuestionModalToggle(true)}> Add a Question </button>
      </form>
      <QuestionModal render={reRenderToggle} reRender={setReRenderToggle} logClick={logClick} title={title} id={id} setOpen={setQuestionModalToggle} open={questionModalToggle}/>
    </div>
  );
};

export default QandA;
