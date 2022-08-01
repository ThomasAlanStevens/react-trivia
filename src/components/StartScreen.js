import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function StartScreen(){

    const [difficulty, setDifficulty] = React.useState('Medium')

    function changeDifficulty(event){
        setDifficulty(event.target.innerText)
    }



    return(
        <section className="startScreen">
            <h1>Quizzical</h1>
            <h2>Test your animal knowlege skills!</h2>
            <h3>Select Difficulty</h3>
            <ul className="diffculties">
                <li><button onClick={changeDifficulty}>Easy</button></li>
                <li><button onClick={changeDifficulty}>Medium</button></li>
                <li><button onClick={changeDifficulty}>Hard</button></li>
            </ul>
            <Link to={`../${difficulty.toLowerCase()}`}><button><span>Start Quiz</span><span className="difficulty">{difficulty}</span></button></Link>
        </section>
    )

    
}