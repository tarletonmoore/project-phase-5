// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import UserContext from "./context/ContextUser";
// import "NavBar.css"

// function NavBar() {

//     const [user, setUser] = useContext(UserContext)

//     // const linkStyles = {
//     //     width: "25px",
//     //     padding: "10px",
//     //     margin: "0 3px 3px",
//     //     color: "gray",
//     // };

//     function handleLogoutClick() {
//         fetch("/logout", { method: "DELETE" }).then((r) => {
//             if (r.ok) {
//                 setUser(null);
//             }
//         });
//     }

//     return (
//         <div>
//             <NavLink
//                 to="/movies"
//                 // style={linkStyles}>
//                 className="nav-button"
//                 activeClassName="nav-active"
//             >

//                 <button className="nav-button"> Movies</button>
//             </NavLink>

//             <NavLink
//                 to="/new"
//                 // style={linkStyles}>
//                 className="nav-button"
//                 activeClassName="nav-active"
//             >
//                 <button className="nav-button"> New Movie</button>
//             </NavLink>
//             <NavLink to="me"
//                 // style={linkStyles}>
//                 className="nav-button"
//                 activeClassName="nav-active"
//             >
//                 <button className="nav-button">Profile</button>
//             </NavLink>

//             {/* <NavLink to="user/avatar"
//                 style={linkStyles}>
//                 <button>Change Profile Picture</button>
//             </NavLink> */}

//             <NavLink to="add_question"
//                 // style={linkStyles}>
//                 className="nav-link"
//                 activeClassName="nav-active"
//             >
//                 <button className="nav-button">Add Question</button>
//             </NavLink>
//             <NavLink>
//                 <button className="nav-button" onClick={handleLogoutClick}>
//                     Logout
//                 </button>
//             </NavLink>
//         </div>
//     );
// }



// export default NavBar;


// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import UserContext from "./context/ContextUser";
// import "./NavBar.css";

// function NavBar() {
//     const [user, setUser] = useContext(UserContext);

//     // function handleClick(e) {
//     //     e.preventDefault(); // prevent the default link behavior
//     //     const button = e.currentTarget;
//     //     button.classList.add("spin");

//     //     setTimeout(() => {
//     //         window.location.href = button.href;
//     //     }, 80); // redirect the user after 500 milliseconds (0.5 seconds)
//     // }

//     function handleLogoutClick() {
//         fetch("/logout", { method: "DELETE" }).then((r) => {
//             if (r.ok) {
//                 setUser(null);
//             }
//         });
//     }

//     return (
//         <div className="navbar">
//             <NavLink to="/movies" className="nav-button" onClick={handleClick}>
//                 Movies
//             </NavLink>
//             <NavLink to="/new" className="nav-button" onClick={handleClick}>
//                 New Movie
//             </NavLink>
//             <NavLink to="me" className="nav-button" onClick={handleClick}>
//                 Profile
//             </NavLink>
//             <NavLink
//                 to="add_question"
//                 className="nav-button"
//                 onClick={handleClick}
//             >
//                 Add Question
//             </NavLink>
//             <button className="nav-button" onClick={handleLogoutClick}>
//                 Logout
//             </button>
//         </div>
//     );
// }

// export default NavBar;

// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import UserContext from "./context/ContextUser";
// import "./App.css";

// function NavBar() {

//     const [user, setUser] = useContext(UserContext)

//     function handleLogoutClick() {
//         fetch("/logout", { method: "DELETE" }).then((r) => {
//             if (r.ok) {
//                 setUser(null);
//             }
//         });
//     }

//     return (
//         <div>
//             <NavLink
//                 to="/movies"
//                 className="nav-link">
//                 <button className="nav-button"> Movies</button>
//             </NavLink>

//             <NavLink
//                 to="/new"
//                 className="nav-link">
//                 <button className="nav-button"> New Movie</button>
//             </NavLink>
//             <NavLink to="me"
//                 className="nav-link">
//                 <button className="nav-button">Profile</button>
//             </NavLink>

//             <NavLink to="add_question"
//                 className="nav-link">
//                 <button className="nav-button">Add Question</button>
//             </NavLink>
//             <NavLink>
//                 <button className="nav-button" onClick={handleLogoutClick}>
//                     Logout
//                 </button>
//             </NavLink>
//         </div>
//     );
// }

// export default NavBar;


import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./context/ContextUser";
import "./App.css";

function NavBar() {
    const [user, setUser] = useContext(UserContext);
    const [showDropdown, setShowDropdown] = useState(false);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    function handleDropdownClick() {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="navbar">
            {/* <NavLink to="/" className="nav-link">
                <h1>My App</h1>
            </NavLink> */}

            <div className="nav-dropdown">
                <button className="nav-button" onClick={handleDropdownClick}>
                    Menu
                </button>
                {showDropdown && (
                    <div className="nav-dropdown-content">
                        <NavLink to="/movies" className="nav-link">
                            <button className="nav-button">Movies</button>
                        </NavLink>
                        <NavLink to="/new" className="nav-link">
                            <button className="nav-button">New Movie</button>
                        </NavLink>
                        <NavLink to="/add_question" className="nav-link">
                            <button className="nav-button">Add Question</button>
                        </NavLink>
                        <NavLink to="/me" className="nav-link">
                            <button className="nav-button">Profile</button>
                        </NavLink>


                        <NavLink>
                            <button className="nav-button" onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </NavLink>
                    </div>
                )}
            </div>


        </div>
    );
}

export default NavBar;

