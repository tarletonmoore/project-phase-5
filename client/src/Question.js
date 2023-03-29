// Question component
import React, { useEffect, useState } from "react";

function Question({ currentQuestion, onAnswered }) {
    const [timeRemaining, setTimeRemaining] = useState(15);
    const [chosenAnswer, setChosenAnswer] = useState(null);

    function handleOptionClick(option, currentQuestion) {
        setChosenAnswer(option);
        const isCorrect = option === currentQuestion.correct_answer;
        onAnswered(isCorrect);
    }


    useEffect(() => {
        setTimeRemaining(15);
    }, [currentQuestion]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeRemaining(timeRemaining - 1)
            if (timeRemaining === 0) {
                setTimeRemaining(15)
                onAnswered(false)
            }
        }, 1000)
        return () => clearTimeout(timer)

    })


    const { id, question, option_1, option_2, option_3, option_4 } = currentQuestion;
    console.log(currentQuestion)
    return (
        <div className="quiz">
            <h1> Question {id}</h1>
            <h3>{question}</h3>

            <button onClick={() => handleOptionClick(currentQuestion.option_1, currentQuestion)}>{currentQuestion.option_1}</button>
            <button onClick={() => handleOptionClick(currentQuestion.option_2, currentQuestion)}>{currentQuestion.option_2}</button>
            <button onClick={() => handleOptionClick(currentQuestion.option_3, currentQuestion)}>{currentQuestion.option_3}</button>
            <button onClick={() => handleOptionClick(currentQuestion.option_4, currentQuestion)}>{currentQuestion.option_4}</button>

            <h5>{timeRemaining} seconds remaining</h5>
        </div>
    );
}

export default Question;