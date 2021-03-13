import React, { useState } from 'react';
import axios from 'axios';

const QuestionReport = ({
  questId, logClick, reRender, render,
}) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (questionId) => {
    logClick('Report Question Button', 'QandA');
    setReportClick(1);
    // console.log(questId, 'was reported');
    axios.put(`/api/reportQuestion/${questionId}`)
      .then(() => reRender(!render))
      .catch((err) => console.log('report Question put error', err));
  };

  return (
    <div className="question-report-style">
      {reportClick < 1 ? <div className="report-style" onClick={() => handleReportClick(questId)}> Report </div> : <div className="report-style"> Reported </div>}
    </div>
  );
};

export default QuestionReport;
