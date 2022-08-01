import StartScreen from "./components/StartScreen";
import EasyQuiz from "./components/EasyQuiz";
import MediumQuiz from "./components/MediumQuiz"
import HardQuiz from "./components/HardQuiz"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import React from "react";

function App() {

  const [easyQuestions, setEasyQuestions] = React.useState([])
  const [mediumQuestions, setMediumQuestions] = React.useState([])
  const [hardQuestions, setHardQuestions] = React.useState([])

  React.useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy')
      .then(res => res.json())
      .then(data => setEasyQuestions(data.results))
  }, [])

  React.useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium')
      .then(res => res.json())
      .then(data => setMediumQuestions(data.results))
  }, [])

  React.useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=hard')
      .then(res => res.json())
      .then(data => setHardQuestions(data.results))
  }, [])

let easyQuestionsArr = easyQuestions.map(questionInfo => {
  return <EasyQuiz question={questionInfo.question} correct_answer={questionInfo.correct_answer} incorrect_answers={questionInfo.incorrect_answers}/>
})

let mediumQuestionsArr = mediumQuestions.map(questionInfo => {
  return <EasyQuiz question={questionInfo.question} correct_answer={questionInfo.correct_answer} incorrect_answers={questionInfo.incorrect_answers}/>
})

let hardQuestionsArr = hardQuestions.map(questionInfo => {
  return <EasyQuiz question={questionInfo.question} correct_answer={questionInfo.correct_answer} incorrect_answers={questionInfo.incorrect_answers}/>
})

  return (
    <div className="app">
      <Router>

        <Routes>
          <Route path='/' element={<StartScreen/>}/>
          <Route path='/easy' element={<><h1 className="quizTitle">Quizzical: Easy Mode</h1>{easyQuestionsArr}<Link to='/' className="playAgain">Play Again!</Link></>}/>
          <Route path='/Medium' element={<><h1 className="quizTitle">Quizzical: Medium Mode</h1>{easyQuestionsArr}<Link to='/' className="playAgain">Play Again!</Link></>}/>
          <Route path='/Hard' element={<><h1 className="quizTitle">Quizzical: Hard Mode</h1>{easyQuestionsArr}<Link to='/' className="playAgain">Play Again!</Link></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
