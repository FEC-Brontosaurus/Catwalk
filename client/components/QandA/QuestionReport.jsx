import React, { useState } from 'react';
import axios from 'axios';


const QuestionReport = ({ questId, logClick, reRender, render }) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (questionId) => {
    logClick('Report Question Button', 'QandA');
    setReportClick(1);
    // console.log(questId, 'was reported');
    axios.put(`/api/reportQuestion/${questionId}`)
      .then((result) => reRender(!render))
      .catch((err) => console.log('report Question put error', err));
  }

  return (
    <>
      {reportClick < 1 ? <span className="report-style" onClick={() => handleReportClick(questId)}> Report </span> : <span className="report-style"> Reported </span>}
    </>
  )
}

export default QuestionReport;