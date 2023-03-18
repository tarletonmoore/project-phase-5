import React, { useContext } from "react";
import UserContext from "./context/ContextUser";

function User() {

    const [user, setUser] = useContext(UserContext)
    console.log(user.username)
    return (
        <div>
            <h2>Name: {user.username}</h2>
            <p>Bio: {user.bio}</p>

        </div>



    )
}



export default User