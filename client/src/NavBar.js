import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./context/ContextUser";

function NavBar() {

    const [user, setUser] = useContext(UserContext)

    const linkStyles = {
        width: "25px",
        padding: "10px",
        margin: "0 3px 3px",
        color: "gray",
    };

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div>
            <NavLink
                to="/movies"
                style={linkStyles}>
                <button> Movies</button>
            </NavLink>

            <NavLink
                to="/new"
                style={linkStyles}>
                <button> New Movie</button>
            </NavLink>
            <NavLink to="me"
                style={linkStyles}>
                <button>Profile</button>
            </NavLink>
            <NavLink>
                <button onClick={handleLogoutClick}>
                    Logout
                </button>
            </NavLink>
            <NavLink to="user/avatar"
                style={linkStyles}>
                <button>Change Profile Picture</button>
            </NavLink>
        </div>
    );
}



export default NavBar;
