// import React, { useState, useEffect } from "react";
// import Question from "./Question";
// import QuizQuestion from "./QuizQuestion";


// function Quiz({ quiz }) {

//     const [question, setQuestion] = useState([]);
//     const [quizQuestions, setQuizQuestions] = useState([])


//     useEffect(() => {
//         fetch("/quiz_questions")
//             .then((r) => r.json())
//             .then(setQuizQuestions);
//     }, []);

//     useEffect(() => {
//         fetch("/questions")
//             .then((r) => r.json())
//             .then(setQuestion);
//     }, []);


//     // if (!quiz || !quiz.quiz_questions) {
//     //     return <div>Loading...</div>
//     // }
//     // console.log(quiz.questions)
//     return (
//         // <div>
//         //     <h2>{quiz.result}</h2>
//         //     {quiz.quiz_questions.map((quizQuestion) => (
//         //         <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion} />
//         //     ))}
//         // </div>
//         <div>
//             {
//                 quiz.map((q) => {
//                     console.log(quizQuestions)
//                     if (q.id === quizQuestions.quiz_id) {
//                         // if (review.baked_good.title === bakedgood.title) {
//                         return <Question key={question.id}

//                             q={q}
//                             question={question}

//                         //    onUpdateReview={onUpdateReview}
//                         //    onDeleteReview={onDeleteReview}
//                         />



//                     }


//                 }
//                 )


//             }
//         </div>
//         // <div>
//         /* <h2>{quiz.result}</h2> */
//         /* {quiz.questions.map((qquestion) => (
//             <Question key={qquestion.id} question={qquestion} />
//         ))} */
//         // </div>
//     );

// }

// export default Quiz;



// function Quiz({ quiz }) {
//     const [questions, setQuestions] = useState([]);
//     const [quizQuestions, setQuizQuestions] = useState([]);
//     const [currentQuestionId, setCurrentQuestion] = useState(1);
//     const [score, setScore] = useState(0);
//     const currentQuestion = questions.find((q) => q.id === currentQuestionId);

//     useEffect(() => {
//         fetch("/questions")
//             .then((r) => r.json())
//             .then(setQuestions);
//     }, []);

//     useEffect(() => {
//         fetch("/quiz_questions")
//             .then((r) => r.json())
//             .then(setQuizQuestions);
//     }, []);

//     function handleQuestionAnswered(correct) {
//         if (currentQuestionId < questions.length) {
//             setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
//         } else {
//             setCurrentQuestion(null);
//         }
//         if (correct) {
//             setScore((score) => score + 1);
//         }
//     }

//     if (!questions.length || !quizQuestions.length) {
//         return <div>Loading...</div>;
//     }

//     const quizQuestionsForQuiz = quizQuestions.filter(
//         (qq) => qq.quiz_id === quiz.id
//     );
//     console.log("quizQuestionsForQuiz:", quizQuestionsForQuiz);
//     console.log("questions:", questions);

//     return (
//         <div>
//             <h2>{quiz.result}</h2>
//             {quizQuestionsForQuiz.map((qq) => {
//                 const question = questions.find((q) => q.id === qq.question_id);
//                 console.log(question)
//                 return <QuizQuestion key={qq.id}
//                     // question={qq} 
//                     quizQuestion={qq}
//                 />;
//             })}
//         </div>
//         //         <main>
//         //             <section>
//         // //                 {currentQuestion ? (
//         //                     <QuizQuestion
//         //                         question={currentQuestion}
//         //                         onAnswered={handleQuestionAnswered}
//         //                     />
//         //                 ) : (
//         //                     <>
//         //                         <h1>Game Over</h1>
//         //                         {/* <h2>Total Correct: {score}</h2> */}
//         //                     </>
//         //                 )}
//         //             </section>
//         //         </main>
//     );
// }

// export default Quiz;

// import React, { useState, useEffect } from "react";
// import QuizQuestion from "./QuizQuestion";

// function Quiz({ quiz }) {
//     console.log(quiz)
//     const [questions, setQuestions] = useState([]);
//     const [quizQuestions, setQuizQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showResults, setShowResults] = useState(false);

//     useEffect(() => {
//         fetch("/questions")
//             .then((r) => r.json())
//             .then(setQuestions);
//     }, []);

//     useEffect(() => {
//         fetch("/quiz_questions")
//             .then((r) => r.json())
//             .then(setQuizQuestions);
//     }, []);

//     function handleQuestionAnswered(correct) {
//         if (correct) {
//             setScore((score) => score + 1);
//         }

//         if (currentQuestionIndex < quizQuestions.length - 1) {
//             setCurrentQuestionIndex((index) => index + 1);
//         } else {
//             setShowResults(true);
//         }
//     }

//     function startQuiz() {
//         setCurrentQuestionIndex(0);
//         setScore(0);
//         setShowResults(false);
//     }

//     function nextQuestion() {
//         setCurrentQuestionIndex((index) => index + 1);
//     }

//     if (!questions.length || !quizQuestions.length) {
//         return <div>Loading...</div>;
//     }

//     if (showResults) {
//         return (
//             <div>
//                 <h2>Game Over</h2>
//                 <p>Final Score: {score}</p>
//                 <button onClick={startQuiz}>Start Over</button>
//             </div>
//         );
//     }

//     const currentQuizQuestion = quizQuestions[currentQuestionIndex];
//     const currentQuestion = questions.find((q) => console.log(currentQuizQuestion.quiz_id))
//     // q.id === currentQuizQuestion);
//     console.log(currentQuestion)
//     return (
//         <div>
//             <QuizQuestion key={currentQuizQuestion.id} question={currentQuestion} onAnswered={handleQuestionAnswered} />
//             <button onClick={nextQuestion}>Next Question</button>
//         </div>
//     );
// }

// export default Quiz;

import React, { useState, useEffect } from "react";
import Question from "./Question";


function Quiz() {
    const [questions, setQuestions] = useState([]);

    const [currentQuestionId, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const individualQuestion = questions.map((q) => q)
    const currentQuestion = individualQuestion.find((q) => q.id === currentQuestionId);
    //     const [quizQuestions, setQuizQuestions] = useState([]);
    //     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    //     const [showResults, setShowResults] = useState(false);



    useEffect(() => {
        fetch("/questions")
            .then((r) => r.json())
            .then(setQuestions);
    }, []);
    function handleQuestionAnswered(correct) {
        if (currentQuestionId < questions.length) {
            setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
        } else {
            setCurrentQuestion(null);
        }
        if (correct) {
            setScore((score) => score + 1);
        }
    }



    return (
        <main>
            <section className="quizspacer">
                <div className="innerspacer">
                    {currentQuestion ? (
                        <Question
                            currentQuestion={currentQuestion}
                            onAnswered={handleQuestionAnswered}
                        />
                    ) : (
                        <>
                            <h1>Quiz Complete</h1>
                            <h2>Total Correct: {((score / questions.length) * 100)}%</h2>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Quiz;

