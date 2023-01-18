import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px",
      };

    return (
        <nav>
            <NavLink className="link" to="/" style={linkStyle}>User</NavLink>
            <NavLink className="link" to="/" style={linkStyle}>My Music</NavLink>
            <NavLink className="link" to="/" style={linkStyle}>Upload Album/Song</NavLink>
        </nav>
    );
}

export default NavBar;