import { useState } from "react";

function QuizQuestionForm({ quiz }) {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            question: question,
            option_1: option1,
            option_2: option2,
            option_3: option3,
            option_4: option4,
            correct_answer: correctAnswer,
            movie_id: movieId,
        };
        //  submit the form data to the server
    }

    return (
        <div>
            <h2>Add Quiz Question</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Question:
                        <input
                            type="text"
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Option 1:
                        <input
                            type="text"
                            value={option1}
                            onChange={(event) => setOption1(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Option 2:
                        <input
                            type="text"
                            value={option2}
                            onChange={(event) => setOption2(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Option 3:
                        <input
                            type="text"
                            value={option3}
                            onChange={(event) => setOption3(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Option 4:
                        <input
                            type="text"
                            value={option4}
                            onChange={(event) => setOption4(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Correct Answer:
                        <input
                            type="text"
                            value={correctAnswer}
                            onChange={(event) => setCorrectAnswer(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Add Question</button>
                </div>
            </form>
        </div>
    );
}

export default QuizQuestionForm;
