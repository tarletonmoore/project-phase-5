// import React, { useState } from "react";
// import StartQuizButton from "./StartQuizButton";
// import Quiz from "./Quiz";

// function Movie({ movie, user, quiz, setQuiz, questions }) {
//     const [quizStarted, setQuizStarted] = useState(false);

//     function generateQuestionsForMovie(movieId, questions) {
//         if (!questions || !Array.isArray(questions) || questions.length === 0) {
//             return [];

//         }

//         const questionsForMovie = questions.filter(
//             (q) =>
//                 q.hasOwnProperty("movie") && q.movie.id === movieId
//         );

//         const shuffledQuestions = questionsForMovie.sort(
//             () => Math.random() - 0.5
//         );
//         return shuffledQuestions.slice(0, 5);
//     }

//     const movieQuestions = generateQuestionsForMovie(movie.id, questions);

//     if (!movieQuestions || movieQuestions.length === 0) {
//         return (
//             <div>
//                 <h2>Movie: {movie.title}</h2>
//                 <p>Plot: {movie.plot}</p>
//                 <p>No questions available for this movie.</p>
//             </div>
//         );
//     }


//     console.log(questions)

//     return (
//         <div>
//             <h2>Movie: {movie.title}</h2>
//             <p>Plot: {movie.plot}</p>
//             {quizStarted ? (
//                 <Quiz questions={movieQuestions} />
//             ) : (
//                 <StartQuizButton onStartQuiz={() => setQuizStarted(true)} />
//             )}
//         </div>
//     );

// }

// export default Movie;


import React, { useState, useEffect } from "react";
import StartQuizButton from "./StartQuizButton";
import Quiz from "./Quiz";

function Movie({ movie, user, quiz, setQuiz, questions }) {
    const [quizStarted, setQuizStarted] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [movieQuestions, setMovieQuestions] = useState([]);

    useEffect(() => {
        if (!questions || !Array.isArray(questions) || questions.length === 0) {
            setMovieQuestions([]);
            return;
        }

        const questionsForMovie = questions.filter(
            (q) => q.hasOwnProperty("movie") && q.movie.id === movie.id
        );

        const shuffledQuestions = questionsForMovie.sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffledQuestions.slice(0, 5);

        setMovieQuestions(selectedQuestions);
        setQuestionCount(selectedQuestions.length);
    }, [movie.id, questions]);

    if (!movieQuestions || movieQuestions.length === 0) {
        return (
            <div>
                <h2>Movie: {movie.title}</h2>
                <p>Plot: {movie.plot}</p>
                <p>No questions available for this movie.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <p>Plot: {movie.plot}</p>
            <p>Number of questions: {questionCount}</p>
            {quizStarted ? (
                <Quiz questions={movieQuestions} />
            ) : (
                <StartQuizButton onStartQuiz={() => setQuizStarted(true)} />
            )}
        </div>
    );
}

export default Movie;
