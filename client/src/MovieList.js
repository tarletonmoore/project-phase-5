import React from "react";
import Movie from "./Movie";


function MovieList({ user, movies, quiz, setQuiz }) {



    return (
        <div>
            {movies.length > 0 ? (
                movies.map((movie) =>
                (
                    <Movie key={movie.id}
                        movie={movie}
                        user={user}
                        quiz={quiz} setQuiz={setQuiz}

                    />

                )
                )
            ) : (
                <>
                    <h2>No Movies Found</h2>

                </>
            )}

        </div>
    );
}


export default MovieList;
