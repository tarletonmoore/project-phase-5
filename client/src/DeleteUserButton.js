// import React, { useContext } from "react";
// import UserContext from "./context/ContextUser";
// import SignUpForm from "./SignUpForm";
// import { useNavigate } from "react-router-dom";

// function DeleteUserButton({ onUserDeleted }) {
//     const [user, setUser] = useContext(UserContext);
//     const navigate = useNavigate();

//     const handleDeleteUser = () => {
//         fetch(`/me`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     setUser(null);
//                     onUserDeleted(); // call the callback function
//                     navigate('/signup'); // navigate to sign up page
//                 }
//             })
//             .catch((error) => console.log(error));
//     };

//     return (
//         <>
//             <button onClick={handleDeleteUser}>Delete Account</button>
//             {user === null && <SignUpForm />}
//         </>
//     );
// }

// export default DeleteUserButton;


import React, { useContext } from "react";
import UserContext from "./context/ContextUser";
// import { useNavigate } from "react-router-dom";

function DeleteUserButton() {
    const [user, setUser] = useContext(UserContext);
    // const navigate = useNavigate();

    const handleDeleteUser = () => {
        fetch(`/me`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    setUser(null);
                    // navigate("/login", { replace: true }); // navigate to sign up page
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <button onClick={handleDeleteUser}>Delete Account</button>
        </>
    );
}

export default DeleteUserButton;




