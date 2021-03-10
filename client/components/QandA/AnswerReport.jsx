import React, { useState } from 'react';
import axios from 'axios';


const AnswerReport = ({ ansId, logClick, reRender, render }) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (answerId) => {
    logClick('Report Answer Button', 'QandA');
    setReportClick(1);
    // console.log(ansId, 'was reported');
    axios.put(`/api/reportAnswer/${answerId}`)
      .then((result) => reRender(!render))
      .catch((err) => console.log('report answer put error', err));
  }

  return (
    <>
      {reportClick < 1 ? <span className="report-style" onClick={() => handleReportClick(ansId)}> Report </span> : <span className="report-style"> Reported </span>}
    </>
  )
}

export default AnswerReport;