import React from "react";

function UserAvatar({ user }) {
    return (
        <li>
            {/* <div>{user.username}</div> */}
            <img src={user.avatar} alt={`${user.username}'s avatar`} />
        </li>
    );
}


export default UserAvatar