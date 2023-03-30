import React from "react";

function StartQuizButton({ onStartQuiz }) {
    console.log("Rendering StartQuizButton...");
    console.log(onStartQuiz)
    return (
        <button onClick={() => onStartQuiz(true)}>Start Quiz</button>
    );
}


export default StartQuizButton;
