import React from "react";

function StartQuizButton({ onStartQuiz }) {

    return (
        <button onClick={() => onStartQuiz(true)}>Start Quiz</button>
    );
}


export default StartQuizButton;
