import React, { useState, useContext } from "react";
import UserContext from "./context/ContextUser";

function EditAvatar() {
    const [avatar, setAvatar] = useState(null);
    const [user, setUser] = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("avatar", avatar);

        fetch("/user/avatar", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setUser({ ...user, avatar: data.avatar });
                // console.log(data.avatar)
            })
            .catch((error) => console.error(error));
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        setAvatar(file);
    }
    console.log(user.avatar)
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="avatar" onChange={handleAvatarChange} />
            <button type="submit">Update Avatar</button>
        </form>
    );
}

export default EditAvatar;
