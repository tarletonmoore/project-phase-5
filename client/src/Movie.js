import { useEffect, useState } from "react";
import React from "react";
import Quiz from "./Quiz";

// function Movie({ movie, user }) {
//     const [quiz, setQuiz] = useState([]);

//     useEffect(() => {
//         fetch("/quizzes")
//             .then((r) => r.json())
//             .then(setQuiz);
//     }, []);


//     return (
//         <div>
//             <h2>Movie: {movie.title}</h2>
//             <p>Plot: {movie.plot}</p>
//             <Quiz quiz={quiz} />

//         </div>
//     )
// }

function Movie({ movie, user, quiz, setQuiz }) {
    // const [quiz, setQuiz] = useState(null);

    // useEffect(() => {
    //     fetch(`/movies`)
    //         .then((r) => r.json())
    //         .then(setQuiz);
    // }, [movie.id]);

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <p>Plot: {movie.plot}</p>
            {/* {quiz ? <Quiz quiz={quiz} setQuiz={setQuiz}
            /> : <div>Loading quiz...</div>} */}
        </div>
    );
}



export default Movie