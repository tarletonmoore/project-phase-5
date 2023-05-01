// import React from "react";
// import "./App.css"

// function StartQuizButton({ onStartQuiz }) {

//     return (
//         <button className="start-quiz-button" onClick={() => onStartQuiz(true)}>Start Quiz</button>
//     );
// }


// export default StartQuizButton;


import React, { useState } from "react";
import "./App.css"

function StartQuizButton({ onStartQuiz }) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            onStartQuiz(true);
        }, 1000);
    }

    return (
        <button className={`start-quiz-button ${isClicked ? "pixelate" : ""}`} onClick={handleClick}>
            Start Quiz
        </button>
    );
}

export default StartQuizButton;
