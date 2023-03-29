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

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])
  const [quiz, setQuiz] = useState(null);

  // const [quiz, setQuiz] = useState([]);

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

  // useEffect(() => {
  //   fetch("/movies")
  //     .then((r) => r.json())
  //     .then(setMovies);
  // }, []);


  useEffect(() => {
    fetch(`/movies`)
      .then((r) => r.json())
      .then(setMovies)
    // .then(setQuiz);
  }, []);

  function handleAddMovie(newMovie) {

    setMovies([...movies, newMovie]);
  }

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
            // user={user} setUser={setUser}
            />}>

            </Route>
            <Route exact path="/signup" element={<SignUpForm
            // onLogin={setUser}
            />}>

            </Route>
            <Route exact path="/user/avatar" element={<EditAvatar
            // onLogin={setUser}
            />}>
            </Route>

            <Route exact path="/new" element={<NewMovie user={user}
              onAddMovie={handleAddMovie}
            />}>

            </Route>
            <Route exact path="/movies" element={<MovieList
              movies={movies} setMovies={setMovies}
              quiz={quiz} setQuiz={setQuiz}
            // user={user} 
            />}>

            </Route>

            <Route exact path="/quizzes" element={<Quiz
              quiz={quiz} setQuiz={setQuiz}
            // user={user} setUser={setUser}
            />}>
            </Route>

          </Routes>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
