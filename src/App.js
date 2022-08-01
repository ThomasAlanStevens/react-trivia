import StartScreen from "./components/StartScreen";
import EasyQuiz from "./components/EasyQuiz";
import MediumQuiz from "./components/MediumQuiz"
import HardQuiz from "./components/HardQuiz"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<StartScreen/>}></Route>
          <Route path='/easy' element={<EasyQuiz/>}></Route>
          <Route path='/medium' element={<MediumQuiz/>}></Route>
          <Route path='/hard' element={<HardQuiz/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
