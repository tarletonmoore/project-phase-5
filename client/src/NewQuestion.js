import React, { useState, useEffect } from "react";
import "./App.css"
const getQuizQuestions = async () => {
    try {
        const response = await fetch('/quiz_questions');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

function NewQuestion({ movies, handleAddQuestion, questions }) {
    const [addQuestion, setAddQuestion] = useState({
        question: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        correct_answer: "",
        movie_id: "",
    });
    const [quizQuestions, setQuizQuestions] = useState([]);


    const [selectedOption, setSelectedOption] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getQuizQuestions();
            setQuizQuestions(data);
        }
        fetchData();
    }, []);

    function handleChange(event) {
        setAddQuestion({
            ...addQuestion,
            [event.target.name]: event.target.value,
        });
    }

    function getMovieOptions() {
        return movies.map((movie) => {
            return (
                <option key={movie.id} value={movie.id}>
                    {movie.title}
                </option>
            );
        });
    }

    // function getOptionOptions() {
    //     return ["option_1", "option_2", "option_3", "option_4"].map((option) => (
    //         <option key={option} value={option}>
    //             {addQuestion[option]}
    //         </option>
    //     ));
    // }
    function getOptionOptions() {
        return ["option_1", "option_2", "option_3", "option_4"].map((option) => (
            <option key={option} value={addQuestion[option]}>
                {addQuestion[option]}
            </option>
        ));
    }


    function handleMovieSelectChange(event) {
        const movieId = parseInt(event.target.value);
        const selectedMovie = movies.find((movie) => movie.id === movieId);

        setSelectedMovie(selectedMovie);

        setAddQuestion({
            ...addQuestion,
            movie_id: movieId,
        });
    }

    function handleSelectChange(event) {
        setSelectedOption(event.target.value);
    }

    async function handleQuestionSubmit(event) {
        event.preventDefault();

        let quizId;

        if (!selectedMovie) {
            setErrors(["Please select a movie"]);
            return;
        }


        const movieQuestions = questions.filter(
            (question) => question.movie_id === selectedMovie?.id
        );



        if (movieQuestions.length === 0) {
            try {
                const response = await fetch("/quizzes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quiz: {
                            // user_id: currentUser.id,
                            result: "fail",
                            questions_attributes: [{
                                question: addQuestion.question,
                                option_1: addQuestion.option_1,
                                option_2: addQuestion.option_2,
                                option_3: addQuestion.option_3,
                                option_4: addQuestion.option_4,
                                correct_answer: selectedOption,
                                movie_id: selectedMovie.id
                            }]
                        }
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    quizId = data.quiz.id;
                    handleAddQuestion(data.question);
                    setAddQuestion({
                        question: "",
                        option_1: "",
                        option_2: "",
                        option_3: "",
                        option_4: "",
                        correct_answer: "",
                        movie_id: "",
                    });
                    setSelectedOption("");
                    setSelectedMovie(null);
                    setErrors([]);
                } else {
                    const errorData = await response.json();
                    setErrors(errorData.errors);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            quizId = movieQuestions[0].quiz_id;
            createQuestion();
        }

        function createQuestion() {
            fetch("/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quiz_id: quizId,
                    // question: {
                    question: addQuestion.question,
                    option_1: addQuestion.option_1,
                    option_2: addQuestion.option_2,
                    option_3: addQuestion.option_3,
                    option_4: addQuestion.option_4,
                    correct_answer: selectedOption,
                    movie_id: selectedMovie.id
                    // },
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        response.json().then((data) => {
                            handleAddQuestion(data);
                            setAddQuestion({
                                question: "",
                                option_1: "",
                                option_2: "",
                                option_3: "",
                                option_4: "",
                                correct_answer: "",
                                movie_id: "",
                            });
                            setSelectedOption("");
                            setSelectedMovie(null);
                            setErrors([]);
                        });
                    } else {
                        response.json().then((errorData) => {
                            console.log(errorData);
                            setErrors(errorData.errors);
                        });
                    }
                })
                .catch((error) => console.error(error));
        }
    }


    console.log(addQuestion.question)
    console.log(addQuestion.option_1)
    console.log(addQuestion.option_2)
    console.log(addQuestion.option_3)
    console.log(addQuestion.option_4)

    console.log(selectedOption)
    console.log(selectedMovie)

    console.log(questions)
    return (
        <div className="newquestion">
            <h2>Add a New Question</h2>
            <form onSubmit={handleQuestionSubmit}>
                <div>
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        name="question"
                        value={addQuestion.question}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="option_1">Option 1:</label>
                    <input
                        type="text"
                        name="option_1"
                        value={addQuestion.option_1}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="option_2">Option 2:</label>
                    <input
                        type="text"
                        name="option_2"
                        value={addQuestion.option_2}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="option_3">Option 3:</label>
                    <input
                        type="text"
                        name="option_3"
                        value={addQuestion.option_3}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="option_4">Option 4:</label>
                    <input
                        type="text"
                        name="option_4"
                        value={addQuestion.option_4}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="correct_answer">Correct Answer:</label>
                    <select
                        name="correct_answer"
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        {getOptionOptions()}
                    </select>
                </div>
                <div>
                    <label htmlFor="movie_id">Movie:</label>
                    <select
                        name="movie_id"
                        value={addQuestion.movie_id}
                        onChange={handleMovieSelectChange}
                    >
                        <option value="" disabled>
                            Select a movie
                        </option>
                        {getMovieOptions()}
                    </select>
                </div>
                <button type="submit"
                // className="disintegrate"
                >Submit</button>

            </form>
        </div>
    )
}



export default NewQuestion
