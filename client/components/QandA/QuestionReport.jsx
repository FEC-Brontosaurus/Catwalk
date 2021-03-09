import React, { useState } from 'react';
import axios from 'axios';


const QuestionReport = ({ questId }) => {
  const [reportClick, setReportClick] = useState(0);

  const handleReportClick = (questionId) => {
    setReportClick(1);
    // console.log(questId, 'was reported');
    axios.put(`/api/reportQuestion/${questionId}`)
      .catch((err) => console.log('report Question put error', err));
  }

  return (
    <>
      {reportClick < 1 ? <span className="report-style" onClick={() => handleReportClick(questId)}> Report </span> : <span className="report-style"> Reported </span>}
    </>
  )
}

export default QuestionReport;