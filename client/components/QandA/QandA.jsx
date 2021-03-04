import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const QandA = ({ id }) => {
  const [initialQuestions, setInitQuestions] = useState([]);
  const [loadMoreQuestions, setLoadMoreQuestions] = useState(false);

  const sortInitialQuestions = (initial) => {
    //  takes initial questions array
    // sorts by helpfulness
    const sorted = initial.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    console.log('sorted questions log', sorted);
    return sorted;
  };

  const getInitialQuestions = () => {
    axios.get(`/api/qa/questions/${id}`)
      .then((result) => {
        console.log(result.data);
        setInitQuestions(sortInitialQuestions(result.data.results));
      })
      .catch((err) => { console.log('error in getInitialQuestions get req:', err); });
  };

  useEffect(() => (id ? getInitialQuestions() : null), [id]);

  const setDisplayQuestions = (sortedInitial) => {
    // set a display array from sorted initial questions
    // limit returned array by default number 4.
    const tempArr = [];
    for (let i = 0; i < 4; i += 1) {
      tempArr.push(sortedInitial[i]);
    }
    return tempArr;
  };

  return (
    <div id="QandA">
      <div id="QandA-Search"> SEARCH FOR QUESTIONS </div>
      <div>
        {initialQuestions.length > 0
        && (
        <Question
          loadFlag={loadMoreQuestions}
          questions={(!loadMoreQuestions ? setDisplayQuestions(initialQuestions)
            : initialQuestions)}
        />
        )}
      </div>
      <form>
        {(!loadMoreQuestions
          ? <button type="button" onClick={() => setLoadMoreQuestions(true)}> More Answered Questions </button>
          : <button type="button" onClick={() => setLoadMoreQuestions(false)}> Less Questions </button>)}
        <button type="button"> Add a Question </button>
      </form>
    </div>
  );
};

export default QandA;
