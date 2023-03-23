import React from "react";



function Movie({ movie, user }) {


    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <p>Plot: {movie.plot}</p>


        </div>
    )
}
export default Movie