import React from "react";

export default function EasyQuiz(props){

    const [clicked, setClicked] = React.useState(false)

    function checkAnswer(event){
        if(event.target.innerText == props.correct_answer){
            event.target.style.backgroundColor = 'green'
            setClicked(true)
        }
        else{
            event.target.style.backgroundColor = 'red' 
            setClicked(true)
        }
    }

    function alreadyClicked(){
        alert('You already answered this question!')
    }
    
    let answers = [...props.incorrect_answers, props.correct_answer].sort((a,b) => b.localeCompare(a))
    answers = answers.map((answer,ind,arr) => {
        return answer.indexOf('&rsquo;') != -1 ? answers[ind].replace('&rsquo;', '\'') : 
        answer.indexOf('&#039;') != -1 ? answers[ind].replace('&#039;',  '\'') :
        answer
    })

    let buttons = answers.map(answer => {
        return <button onClick={clicked ? alreadyClicked : checkAnswer}>{answer}</button>
    })

    let question = props.question
    question.indexOf('&rsquo;') != -1 ? question = question.replace('&rsquo;', '\'') : 
    question.indexOf('&#039;') != -1 ? question = question.replace('&#039;',  '\'') :
    question = question

    return(
        <div className="questions">
            <h3>{question}</h3>
            <div className="answers">
                {buttons}
            </div>
        </div>
    )
}