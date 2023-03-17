const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const app = express();
const cors = require('cors');
app.use(bodyParser.json())
app.use(cors()); // Add cors middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/input.html");
// })
    app.post('/api/submit', (req, res) => {
    // const answers = {
    //     Q1: "Talking to perople and collabarating on back end projects",
    //     Q2: "Back End Development",
    //     Q3: "Money",
    //     Q4: "Climbing the corporate ladder and achieving a high-level management position",
    //     Q5: "Collaborative and team-oriented"
    // };
    
        const answers = req.body;
        // console.log(formData);
    
    const score = `Pretend you are a career advisor. Look at these 5 questions with the answers user gave. Q1. What kind of work do you enjoy doing the most? Answer: ${answers.Q1}
    Q2. What are your top skills or strengths? Answer: ${answers.Q2}
    Q3. What motivates you in your work? Answer: ${answers.Q3}
    Q4. What are your long-term career goals? Answer: ${answers.Q4}
    Q5. What kind of company culture do you prefer? Answer: ${answers.Q5} Based on these answers give top 3 best career paths for the user. Make it friendly. Make it short. 
    the output should be in the format of direct the below nothing else dont start with anything else 
    1)title: description
    2)title: description
    3)title: description`; // create the input string for the Python script
    
    const pythonProcess = spawn('python',['pass-fail-checker.py',score]);
    pythonProcess.stdout.on('data', data => {
        const passOrFail = data.toString().trim();
        const careerPaths = passOrFail.split('\n') // split the input string into an array of lines
        .filter(Boolean) // remove any empty lines
        .map((line) => {
          const [title, description] = line.split(': '); // split each line into title and description using colon as a separator
          return { title, description };
        });
        res.json(careerPaths);
        //res.send(`${passOrFail}`);
        //res.send(careerPaths);
      });
});
app.post('/api/reSubmit', (req, res) => {
    
        const answers = JSON.stringify(req.body.part1);
        const solution = JSON.stringify(req.body.part2);
        const userSelected = JSON.stringify(req.body.part3);
        // console.log(answers,solution,userSelected);
    
    const score = `
    The user selected ${userSelected}. 
RECOMMEND TOP 2 BOOKS, THEN TOP 2 COLLEGES TO PURSUE IT, AND TOP 2 TEDX TALKS TO WATCH DONT DESCRIBE IT
The output should be in the format given below strictly. DON'T START WITH ANYTHING ELSE START WITH ONLY THE BEL
The output should be in the format given below strictly. DON'T START WITH ANYTHING ELSE START WITH ONLY THE BELOW FORMAT:
TOP 2 BOOKS:
1) Resource name : about this resource
2) Resource name : about this resource
TOP 2 Colleges:
1) Resource name : about this resource
2) Resource name : about this resource
TOP 2 TEDX TALKS:
1) Resource name : about this resource
2) Resource name : about this resource
 `; // create the input string for the Python script
    console.log(score)
    const pythonProcess = spawn('python',['pass-fail-checker.py',score]);
    pythonProcess.stdout.on('data', data => {
        const passOrFail = data.toString().trim();
        
        res.json(passOrFail);
        //res.send(`${passOrFail}`);
        //res.send(careerPaths);
      });
});
app.listen(5000,function(){
    console.log("server is running on port 5000")
})
// Question ${score}.\n