import { Link } from 'react-router-dom';
import axios from 'axios';
import MedicalQuestion from './medicalQuestion';
import MedicalAnswerPage from './MedicalAnswerPage';
import { useState } from 'react';
const QuestionAnswer = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/', { question });
    setResponse(res.data);
    setQuestion('');
  };

  return (
    // <Router>
    <div className="container">
  <h1 style={{fontSize: "2.5rem", marginBottom: "2rem"}}>Ask a Question</h1>
  <form onSubmit={handleSubmit} style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
    <label htmlFor="question" style={{display: "block", marginBottom: "1rem", fontWeight: "bold", fontSize: "1.2rem"}}>
      Enter your question:
    </label>
    <br/>
    <input
      type="text"
      id="question"
      name="question"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      style={{padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: "0.25rem", border: "1px solid #ccc", marginBottom: "1rem"}}
    />
    <button type="submit" style={{padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: "0.25rem", border: "none", background: "#007bff", color: "#fff"}}>
      Ask
    </button>
  </form>
  {response && <div className="response" style={{marginTop: "2rem"}}>{response}<Link to="/medical-question"><MedicalQuestion/></Link></div>}
</div>

  );
};

export default QuestionAnswer;
