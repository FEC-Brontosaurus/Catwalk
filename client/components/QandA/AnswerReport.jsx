import React, { useState } from 'react';
import axios from 'axios';

const AnswerReport = ({
  ansId, logClick, reRender, render,
}) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (answerId) => {
    logClick('Report Answer Button', 'QandA');
    setReportClick(1);
    // console.log(ansId, 'was reported');
    axios.put(`/api/reportAnswer/${answerId}`)
      .then(() => reRender(!render))
      .catch((err) => console.log('report answer put error', err));
  };

  return (
    <div className="answer-report-style">
      {reportClick < 1 ? <div className="report-style" onClick={() => handleReportClick(ansId)}> Report </div> : <div className="report-style"> Reported </div>}
    </div>
  );
};

export default AnswerReport;
