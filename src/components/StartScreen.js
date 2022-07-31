import React from "react";

export default function StartScreen(){

    const [displayStartScreen, setDisplayStartScreen] = React.useState(true)

    function toggleStartScreen(){
        setDisplayStartScreen(prevBool => !prevBool)
    }

    return(
        <section className="startScreen">
            <h1>Quizzical</h1>
            <h2>Test your animal knowlege skills!</h2>
            <button onClick={toggleStartScreen} show={displayStartScreen}>Start Quiz</button>
        </section>

    )
}