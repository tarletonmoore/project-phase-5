import React from "react";
import Movie from "./Movie";


function MovieList({ user, movies }) {



    return (
        <div>
            {movies.length > 0 ? (
                movies.map((movie) =>
                (
                    <Movie key={movie.id}
                        movie={movie}
                        user={user}

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
