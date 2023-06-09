import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import User from "./User";
import UserContext from "./context/ContextUser";
import MovieList from "./MovieList";
import NewMovie from "./NewMovie";
import EditAvatar from "./EditAvatar";
import Quiz from "./Quiz";
import NewQuestion from "./NewQuestion";

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([])
  const [quizScore, setQuizScore] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([])

  useEffect(() => {
    fetch("/quizzes")
      .then((r) => r.json())
      .then(setQuiz);
  }, []);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);

  useEffect(() => {
    fetch("/questions")
      .then((r) => r.json())
      .then(setQuestions);
  }, []);

  useEffect(() => {
    fetch(`/movies`)
      .then((r) => r.json())
      .then(setMovies)
    // .then(setQuiz);
  }, []);

  useEffect(() => {
    fetch("/quiz_questions")
      .then((r) => r.json())
      .then(setQuizQuestions);
  }, []);

  function handleAddMovie(newMovie) {

    setMovies([...movies, newMovie]);
  }

  function handleDeleteQuestion(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function handleUpdateUser(updatedUserObj) {
    if (Array.isArray(user)) {
      const updatedUsers = user.map((u) => {
        if (u.id === updatedUserObj.id) {
          return updatedUserObj;
        } else {
          return u;
        }
      });
      setUser(updatedUsers);
    }
  }



  function handleAddQuestion(newQuestion) {

    setQuestions([...questions, newQuestion]);
  }

  function handleQuizScore(newScore) {
    setQuizScore(newScore);
  }
  // function handleQuizScore(updatedScoreObj) {
  //   const updatedScores = quiz.map((q) => {
  //     if (q.id === updatedScoreObj.id) {
  //       return updatedScoreObj;
  //     } else {
  //       return q;
  //     }
  //   });
  //   setQuizScore(updatedScores);
  // }

  if (!user) return <Login onLogin={setUser} />;




  return (

    <>
      <UserContext.Provider value={[user, setUser]}>
        <NavBar
        //  user={user} setUser={setUser}
        />

        <main>

          <Routes>
            <Route exact path="/me" element={<User
              handleUpdateUser={handleUpdateUser}
              quizScore={quizScore}
              setQuizScore={setQuizScore}
            />}>

            </Route>
            <Route exact path="/signup" element={<SignUpForm
            />}>

            </Route>
            {/* <Route exact path="/user/avatar" element={<EditAvatar
            // onLogin={setUser}
            />}>
            </Route> */}

            <Route exact path="/new" element={<NewMovie user={user}
              onAddMovie={handleAddMovie}
            />}>

            </Route>
            <Route exact path="/movies" element={<MovieList
              movies={movies} setMovies={setMovies}
              quiz={quiz} setQuiz={setQuiz}
              questions={questions}
              handleQuizScore={handleQuizScore}
              quizScore={quizScore} setQuizScore={setQuizScore}
              quizQuestions={quizQuestions} setQuizQuestions={setQuizQuestions}
            // user={user} 
            />}>

            </Route>

            <Route exact path="/add_question" element={<NewQuestion
              movies={movies} setMovies={setMovies}
              quiz={quiz} setQuiz={setQuiz}
              questions={questions}
              handleAddQuestion={handleAddQuestion}
            // user={user} 
            />}>

            </Route>

          </Routes>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
