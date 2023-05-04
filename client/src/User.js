// import React, { useState, useEffect, useContext } from "react";
// import UserContext from "./context/ContextUser";
// import DeleteUserButton from "./DeleteUserButton";
// import UserAvatar from "./UserAvatar";
// import EditUser from "./EditUser";
// function User({ handleUpdateUser }) {

//     const [user, setUser] = useContext(UserContext)




//     console.log(user.username)

//     return (
//         <div>
//             <h2>Name: {user.username}</h2>
//             <p>Bio: {user.bio}</p>
//             <UserAvatar key={user.id} user={user} />
//             <EditUser handleUpdateUser={handleUpdateUser} />
//             <DeleteUserButton />
//         </div>


//     )
// }

// export default User;


// import React, { useState, useEffect, useContext } from "react";
// import UserContext from "./context/ContextUser";
// import DeleteUserButton from "./DeleteUserButton";
// import UserAvatar from "./UserAvatar";
// import EditUser from "./EditUser";

// function User({ handleUpdateUser,
//     // quizScore 
// }) {
//     const [user, setUser] = useContext(UserContext);
//     const [quizScore, setQuizScore] = useState(null);
//     console.log(user.username);
//     useEffect(() => {
//         fetch(`/users/:id/quiz_scores`)
//             .then((response) => response.json())
//             .then((data) => setQuizScore(data.quiz_scores))
//             .catch((error) => console.log(error));
//     }, []);
//     console.log(quizScore)
//     return (
//         <div className="profile">
//             <h1>Name: {user.username}</h1>
//             <h3>Bio: {user.bio}</h3>
//             {/* <UserAvatar key={user.id} user={user} /> */}
//             <h3>Quiz Score:
//                 {/* {quizScore} */}
//             </h3>
//             <h3>Quiz Score:</h3>
//             {quizScore ? (
//                 <ul>
//                     {quizScore.map((score, index) => (
//                         <li key={index}>{score}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No quiz score available.</p>
//             )}

//             <EditUser handleUpdateUser={handleUpdateUser} />
//             <DeleteUserButton />
//         </div>
//     );
// }

// export default User;

import React, { useState, useEffect, useContext } from "react";
import UserContext from "./context/ContextUser";
import DeleteUserButton from "./DeleteUserButton";
import UserAvatar from "./UserAvatar";
import EditUser from "./EditUser";

function User({ handleUpdateUser, quizScore, setQuizScore }) {
    const [user, setUser] = useContext(UserContext);

    console.log(user.username);

    useEffect(() => {
        fetch(`/users/${user.id}/quiz_scores`)
            .then((response) => response.json())
            .then((data) => setQuizScore(data.quiz_scores))
            .catch((error) => console.log(error));
    }, []);

    console.log(quizScore);
    return (
        <div className="profile">
            <h1>Name: {user.username}</h1>
            <h3>Bio: {user.bio}</h3>
            {/* <UserAvatar key={user.id} user={user} /> */}
            <h3>Quiz Score:</h3>
            {/* {quizScore ? (
                <ul>
                    {quizScore.map((score, index) => (
                        <li key={index}>{score}</li>
                    ))}
                </ul>
            ) : (
                <p>No quiz score available.</p>
            )} */}
            {Array.isArray(quizScore) && quizScore.length > 0 ? (
                <ul>
                    {quizScore.map((score, index) => (
                        <li key={index}>{score}</li>
                    ))}
                </ul>
            ) : (
                <p>No quiz score available.</p>
            )}

            <EditUser handleUpdateUser={handleUpdateUser} />
            <DeleteUserButton />
        </div>
    );
}

export default User;

