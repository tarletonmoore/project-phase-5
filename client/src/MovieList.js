// import React from "react";
// import Movie from "./Movie";


// function MovieList({ user, movies, quiz, setQuiz, questions }) {

//     console.log(movies)

//     return (
//         <div>

//             {movies.map(movie => (
//                 <Movie
//                     key={movie.id}
//                     movie={movie}
//                     user={user}
//                     quiz={quiz}
//                     setQuiz={setQuiz}
//                     questions={questions}
//                 />
//             ))}
//         </div>
//     );
// }


// export default MovieList;


import React from "react";
import Movie from "./Movie";
import billy from "./image/billy.jpg"
import "./App.css"


function MovieList({ movies, handleQuizScore, quizScore, setQuizScore, quizQuestions, setQuizQuestions, quiz }) {
    console.log(movies);

    if (!Array.isArray(movies)) {
        return <div>No movies to display</div>;
    }

    return (
        <div>
            <img src={billy} alt="Billy" className="spinner" width="120" height="150" />

            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} handleQuizScore={handleQuizScore} setQuizScore={setQuizScore}
                    quizQuestions={quizQuestions} setQuizQuestions={setQuizQuestions}
                    quiz={quiz}
                    randomQuestions={movie.random_questions || []} />
            ))}
        </div>
    );
}

export default MovieList;


