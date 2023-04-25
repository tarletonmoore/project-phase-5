import { useEffect, useState } from "react"
import Question from "./Question";

function Quiz({ questions, handleQuizScore }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    // function handleQuestionAnswered(correct) {
    //     if (currentQuestionIndex < questions.length - 1) {
    //         setCurrentQuestionIndex(currentQuestionIndex + 1);
    //     } else {
    //         setCurrentQuestionIndex(null);
    //     }
    //     if (correct) {
    //         setScore(score + 1);
    //     }
    // }

    useEffect(() => {
        handleQuizScore((score / questions.length) * 100);
    }, [score, questions.length, handleQuizScore]);

    function handleQuestionAnswered(correct) {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCurrentQuestionIndex(null);
        }
        if (correct) {
            setScore(score + 1);
        }
    }



    return (
        <main>
            <section className="quizspacer">
                <div className="innerspacer">
                    {currentQuestionIndex !== null ? (
                        <Question
                            currentQuestion={questions[currentQuestionIndex]}
                            onAnswered={handleQuestionAnswered}
                        />
                    ) : (
                        <>
                            <h1>Quiz Complete</h1>
                            <h2>Total Correct: {(score / questions.length) * 100}%</h2>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Quiz