// import { useEffect, useState } from "react"
// import Question from "./Question";

// function Quiz({ questions, handleQuizScore, quizScore, setQuizScore }) {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [passFailStatus, setPassFailStatus] = useState(null);

//     useEffect(() => {
//         const percentageScore = (score / questions.length) * 100;
//         handleQuizScore(percentageScore);

//         if (percentageScore >= 70) {
//             setPassFailStatus("pass");
//         } else {
//             setPassFailStatus("fail");
//         }
//     }, [score, questions.length, handleQuizScore]);


//     function handleQuestionAnswered(correct) {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             setCurrentQuestionIndex(null);
//         }
//         if (correct) {
//             setScore(score + 1);
//         }
//     }

//     return (
//         <main>
//             <section className="quizspacer">
//                 <div className="innerspacer">
//                     {currentQuestionIndex !== null ? (
//                         <Question
//                             currentQuestion={questions[currentQuestionIndex]}
//                             onAnswered={handleQuestionAnswered}
//                         />
//                     ) : (
//                         <>
//                             <h1>Quiz Complete</h1>
//                             <h2>Total Correct: {score}/{questions.length}</h2>
//                             {passFailStatus && (
//                                 <h2>Pass/Fail: {passFailStatus}</h2>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </section>
//         </main>
//     );
// }

// export default Quiz;


// import { useEffect, useState } from "react"
// import Question from "./Question";

// function Quiz({ questions, handleQuizScore, quizScore, setQuizScore }) {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [passFailStatus, setPassFailStatus] = useState(null);

//     useEffect(() => {
//         const percentageScore = (score / questions.length) * 100;
//         handleQuizScore(percentageScore);

//         if (percentageScore >= 70) {
//             setPassFailStatus("pass");
//         } else {
//             setPassFailStatus("fail");
//         }
//     }, [score, questions.length, handleQuizScore]);


//     function handleQuestionAnswered(correct) {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             setCurrentQuestionIndex(null);

//             // Make a PATCH request to update user's quiz score
//             fetch(`/users/${user.id}/quiz_scores`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ quiz_scores: score + 1 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => setQuizScore(data.quiz_scores))
//                 .catch((error) => console.log(error));
//         }
//         if (correct) {
//             setScore(score + 1);
//         }
//     }


//     return (
//         <main>
//             <section className="quizspacer">
//                 <div className="innerspacer">
//                     {currentQuestionIndex !== null ? (
//                         <Question
//                             currentQuestion={questions[currentQuestionIndex]}
//                             onAnswered={handleQuestionAnswered}
//                         />
//                     ) : (
//                         <>
//                             <h1>Quiz Complete</h1>
//                             <h2>Total Correct: {score}/{questions.length}</h2>
//                             {passFailStatus && (
//                                 <h2>Pass/Fail: {passFailStatus}</h2>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </section>
//         </main>
//     );
// }

// export default Quiz;

import { useEffect, useState, useContext } from "react"
import Question from "./Question";
import UserContext from "./context/ContextUser";


function Quiz({ questions, handleQuizScore, quizScore, setQuizScore, quizQuestions, setQuizQuestions, quiz }) {
    const [user, setUser] = useContext(UserContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [passFailStatus, setPassFailStatus] = useState(null);



    useEffect(() => {
        const percentageScore = (score / questions.length) * 100;
        handleQuizScore(percentageScore);

        if (percentageScore >= 70) {
            setPassFailStatus("pass");
        } else {
            setPassFailStatus("fail");
        }
    }, [score, questions.length, handleQuizScore]);

    useEffect(() => {
        if (user && passFailStatus) {
            const requestOptions = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ result: passFailStatus }),
            };
            fetch(`/users/${user.id}/quiz_scores`, requestOptions)
                .then((response) => response.json())
                .then((data) =>
                    // console.log(quizQuestions))
                    setQuizScore(data.result))
                .catch((error) => console.log(error));
        }
    }, [user, passFailStatus, setQuizScore]);
    // useEffect(() => {
    //     if (user && passFailStatus) {
    //         const requestOptions = {
    //             method: "PATCH",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ result: passFailStatus }),
    //         };
    //         const quizId = questions[0].quiz_id; // get the quiz ID from the first question
    //         console.log(quiz.id)
    //         fetch(`/quizzes/${quizId}`, requestOptions)
    //             .then((response) => response.json())
    //             .then((data) => setQuizScore(data.result))
    //             .catch((error) => console.log(error));
    //     }
    // }, [user, passFailStatus, setQuizScore, questions]);





    function handleQuestionAnswered(correct) {
        const currentQuestion = questions[currentQuestionIndex];
        console.log(currentQuestion.id)
        if (correct) {
            setScore(score + 1);
        }

        if (user) {
            const update = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: correct ? "correct" : "incorrect" }),
            };
            fetch(`/quiz_questions/${currentQuestion.id}`, update)
                .then((response) => response.json())
                .then((data) => {
                    const updatedQuestions = [...quizQuestions];
                    const index = updatedQuestions.findIndex((q) => q.id === currentQuestion.id);
                    updatedQuestions[index].status = correct ? "correct" : "incorrect";
                    setQuizQuestions(updatedQuestions);
                })
                .catch((error) => console.log(error));
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCurrentQuestionIndex(null);
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
                            <h2>Total Correct: {score}/{questions.length}</h2>
                            {passFailStatus && (
                                <h2>Pass/Fail: {passFailStatus}</h2>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Quiz;