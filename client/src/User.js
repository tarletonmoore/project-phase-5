import React, { useContext } from "react";
import UserContext from "./context/ContextUser";
import UserAvatar from "./UserAvatar";
function User() {

    const [user, setUser] = useContext(UserContext)
    console.log(user.username)
    return (
        <div>
            <h2>Name: {user.username}</h2>
            <p>Bio: {user.bio}</p>
            <UserAvatar key={user.id} user={user} />
        </div>



    )
}



export default User