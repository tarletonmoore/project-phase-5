import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import User from "./User";
import UserContext from "./context/ContextUser";

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);



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


          </Routes>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
