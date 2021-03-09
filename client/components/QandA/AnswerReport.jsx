import React, { useState } from 'react';
import axios from 'axios';


const AnswerReport = ({ ansId }) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (answerId) => {
    setReportClick(1);
    // console.log(ansId, 'was reported');
    axios.put(`/api/reportAnswer/${answerId}`)
      .catch((err) => console.log('report answer put error', err));
  }

  return (
    <>
      {reportClick < 1 ? <span className="report-style" onClick={() => handleReportClick(ansId)}> Report </span> : <span className="report-style"> Reported </span>}
    </>
  )
}

export default AnswerReport;