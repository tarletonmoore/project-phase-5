import React from "react";
import Movie from "./Movie";


function MovieList({ user, movies, quiz, setQuiz, questions }) {



    return (
        <div>

            {movies.map(movie => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    user={user}
                    quiz={quiz}
                    setQuiz={setQuiz}
                    questions={questions}
                />
            ))}
        </div>
    );
}


export default MovieList;
