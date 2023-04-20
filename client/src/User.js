import React, { useContext } from "react";
import UserContext from "./context/ContextUser";
import DeleteUserButton from "./DeleteUserButton";
import UserAvatar from "./UserAvatar";
import EditUser from "./EditUser";
function User({ handleUpdateUser }) {

    const [user, setUser] = useContext(UserContext)

    console.log(user.username)
    return (
        <div>
            <h2>Name: {user.username}</h2>
            <p>Bio: {user.bio}</p>
            <UserAvatar key={user.id} user={user} />
            <EditUser handleUpdateUser={handleUpdateUser} />
            <DeleteUserButton />
        </div>



    )
}



export default User

