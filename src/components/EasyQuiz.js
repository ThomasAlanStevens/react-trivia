import React from "react";

export default function EasyQuiz(){

    const [questions,setQuestions] = React.useState([])

    React.useEffect(() => {
        async function getQuestions(){
            try {
                let res = await (await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy'))
                let data = await res.json()
                setQuestions(data.results.map(result => result.question))  
            } catch (error) {
                console.error(error)
            }
        }

        getQuestions()

    }, [])

    return(
        <>
            <div>
                {questions}
            </div>
        </>
  
    )
}