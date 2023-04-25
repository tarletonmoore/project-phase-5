import React from "react";
import "./App.css"

function StartQuizButton({ onStartQuiz }) {

    return (
        <button className="start-quiz-button" onClick={() => onStartQuiz(true)}>Start Quiz</button>
    );
}


export default StartQuizButton;
