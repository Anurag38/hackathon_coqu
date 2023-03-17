import React from 'react';
import './medicalQuestion.css'
const MedicalQuestion = () => {
  return (
    <div className="medical-question-container">
      <p className="medical-question-text">Here is a question referred in medical terms.</p>
      <br/>
      <br></br>
      <p className="medical-question-text">Are you satified with the question. If yes then</p>
      <button className="ai-button">Ask AI</button>
    </div>
  );
};

export default MedicalQuestion;
