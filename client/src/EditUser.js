import React, { useState, useContext } from "react";
import UserContext from "./context/ContextUser";


function EditUser({ handleUpdateUser, id, review }) {
    const [user, setUser] = useContext(UserContext)

    const [changeUser, setChangeUser] = useState(user.bio);

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bio: changeUser,
            }),
        })
            .then((r) => r.json())
            .then((updatedUser) => {
                handleUpdateUser(updatedUser);
                setUser(updatedUser);
            });
    }


    //     function updateMatch() {
    //         if (review.user_id === user.id) {
    //               return   <form onSubmit={handleFormSubmit}>
    //             <input
    //                 type="text"
    //                 name="review"
    //                  value={changeReview}
    //                  onChange={(e) => 
    //                     setChangeReview(e.target.value)

    //                 }/>
    //                 <input type="submit" value="Update" />
    // </form>


    //         }
    //         }


    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="bio"
                    value={changeUser}
                    onChange={(e) =>
                        // {if (review.user_id === user.id) {
                        setChangeUser(e.target.value)}

                // }
                // }
                />
                <input type="submit" value="Update Bio" />
            </form>
            {/* {updateMatch()} */}
        </div>
    );






}

export default EditUser