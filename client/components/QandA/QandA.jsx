import React from 'react';

const QandA = (props) => (
  <div id="QandA">
    <div id="QandA-Search"> SEARCH FOR QUESTIONS </div>
    <div className="QandA-question">Q: <span> random text </span> <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
    <div className="QandA-Answer"> A: Random text answer <span className="username-timestamp"> </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>
    <div className="QandA-question">Q: <span> random text </span> <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
    <div className="QandA-Answer"> A: Random text answer <span className="username-timestamp"> </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>
    <div className="QandA-question">Q: <span> random text </span> <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
    <div className="QandA-Answer"> A: Random text answer <span className="username-timestamp"> </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>
    <div className="QandA-question">Q: <span> random text </span> <span className="helpful-yes"> Helpful? <span href="#">yes</span></span> <span className="add-an-answer"> Add an Answer + </span></div>
    <div className="QandA-Answer"> A: Random text answer <span className="username-timestamp"> </span> <span className="helpful-yes"> Helpful? <span href="#"> yes </span> <span className="report-answer"> Report </span></span></div>
    <form>
      <button type="button"> More Answered Questions </button>
      <button type="button"> Add a Question </button>
    </form>
  </div>
);

export default QandA;