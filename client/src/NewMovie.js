import { useState } from "react";
// import { useNavigate } from "react-router";

function NewMovie({
    //  user, 
    onAddMovie }) {



    const [addMovie, setAddMovie] = useState({
        title: "",
        plot: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();
    const [errors, setErrors] = useState([])

    function handleChange(event) {
        setAddMovie({
            ...addMovie,
            [event.target.id]: event.target.value,
        });
    }


    function handleSubmit(e) {

        e.preventDefault();
        setIsLoading(true);
        fetch("/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: addMovie.title,
                plot: addMovie.plot,

            }),
        })

            .then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((data) => {
                        onAddMovie(data);
                        setAddMovie(
                            {
                                title: "",
                                plot: "",

                            }
                        );

                    });


                }
                else { r.json().then((errorData) => setErrors(errorData.errors)); }
            });

    }
    return (
        <div>
            <div>
                <h2>Create Movie</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={addMovie.title}
                            onChange={
                                handleChange
                                // (e) => setTitle(e.target.value)
                            }
                        />
                    </section>

                    <section>
                        <label htmlFor="plot">Plot</label>
                        <textarea
                            id="plot"
                            rows="10"
                            value={addMovie.plot}
                            onChange={
                                handleChange
                                // (e) => setInstructions(e.target.value)
                            }
                        />
                    </section>
                    <section>
                        <button type="submit">
                            {isLoading ? "Loading..." : "Submit Movie"}
                        </button>
                    </section>

                    {errors.length > 0 && (
                        <ul style={{ color: "dark red" }}>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    )}

                </form>
            </div>

        </div>
    );
}

export default NewMovie;