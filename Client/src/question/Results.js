import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Bars} from 'react-loader-spinner'
import NextResult from './NextResult';
// import io from 'socket.io-client'; // Add this
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Results = ({ userAnswers, score, restartQuiz }) => {
  // const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here
  const [result,setResult] = useState(false)
  const [res, setRes] = useState(null)
  const [active,setActive] = useState(false);
  const [final,setFinal] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = async(userAnswers) => {
    // Send the form data as a JSON object to the server
    const data =  userAnswers.reduce((acc, cur) => {
      const key = Object.keys(cur)[0];
      const value = cur[key];
      acc[key] = value;
      return acc;
    }, {});
    // console.log(data);
    // console.log(userAnswers);  
    axios.post('http://localhost:5000/api/submit', data,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(response => response.data)
    .then(data => {
      console.log(data)
      if(data!== undefined && data.length>0){
        setRes(data);
      }
    })
    .catch(error => {
      console.error(error);
    });
  };
  useEffect(async() => {
    // Connect to the server using Socket.IO
    // const socket = io('http://localhost:4000');
    if (userAnswers !== '' && result!==true) {
      await handleSubmit(userAnswers)
      setResult(true)
    }
  }, [res]);
  // const joinRoom = () => {
    const submitSecondRes = (element)=>{
      const obj = {
        part1:userAnswers,
        part2:JSON.stringify(res),
        part3:element
      }
      axios.post('http://localhost:5000/api/resubmit', obj,{
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
      })
      .then(response => {
        console.log(response.data)
        if(response.data!==undefined && response.data.length>0){
          setActive(true);
          navigate('/final', { state: response.data });
          // <NextResult data={response.data}/>
          setFinal(response.data);
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
    }
    
  // };
  if(active){
    return(<>
      {final==''?<div className="centerPos"><Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{setTimeout((console.log(active)),1000)}</div>:<>
      <h1>Suggestions</h1>
      <div>

      </div>
      {final}
      <a onClick={restartQuiz}>Restart Quiz</a>
    </>
  }</>)
  }
  else
  return (
    <>{ res!==undefined && res!==null?
      // <NextResult restartQuiz={restartQuiz} response={res} userAnswers={userAnswers}/>
      <div className="results-container">
        <h1>Great!</h1><p>Click a link to learn about them.</p>
        {res.map((ele,i)=>{
          return (
            <div className='link_a' key={i} onClick={()=>{submitSecondRes(ele)}}>
              <h2>{ele?.title}</h2>
              <p>{ele?.description}</p>
            </div>
          )
        })}
        <a onClick={restartQuiz}>Restart Quiz</a>
      </div>
      :
      <div className="centerPos"><Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /></div>
    }</>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
