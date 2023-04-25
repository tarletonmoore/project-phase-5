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


import React, { useState, useEffect, useContext } from "react";
import UserContext from "./context/ContextUser";
import DeleteUserButton from "./DeleteUserButton";
import UserAvatar from "./UserAvatar";
import EditUser from "./EditUser";

function User({ handleUpdateUser, quizScore }) {
    const [user, setUser] = useContext(UserContext);

    console.log(user.username);

    return (
        <div className="profile">
            <h1>Name: {user.username}</h1>
            <h3>Bio: {user.bio}</h3>
            {/* <UserAvatar key={user.id} user={user} /> */}
            <h3>Quiz Score: {quizScore}</h3>
            <EditUser handleUpdateUser={handleUpdateUser} />
            <DeleteUserButton />
        </div>
    );
}

export default User;

// import React, { useState, useEffect, useContext } from "react";
// import UserContext from "./context/ContextUser";
// import DeleteUserButton from "./DeleteUserButton";
// import UserAvatar from "./UserAvatar";
// import EditUser from "./EditUser";

// function User({ handleUpdateUser, quizScores }) {
//     const [user, setUser] = useContext(UserContext);

//     console.log(user.username);

//     return (
//         <div className="profile">
//             <h1>Name: {user.username}</h1>
//             <h3>Bio: {user.bio}</h3>
//             {/* <UserAvatar key={user.id} user={user} /> */}
//             <h3>Quiz Scores:</h3>
//             {quizScores && (
//                 <ul>
//                     {quizScores.map((score, index) => (
//                         <li key={index}>Quiz {index + 1}: {score}%</li>
//                     ))}
//                 </ul>
//             )}

//             <EditUser handleUpdateUser={handleUpdateUser} />
//             <DeleteUserButton />
//         </div>
//     );
// }


// export default User;

