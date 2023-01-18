import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "30px",
      };

    return (
        <nav>
            <NavLink className="link" to="/user" style={linkStyle}>User</NavLink>
            <NavLink className="link" to="/" style={linkStyle}>Discover</NavLink>
            <NavLink className="link" to="/music" style={linkStyle}>My Music</NavLink>
            <NavLink className="link" to="/upload" style={linkStyle}>Upload Album/Song</NavLink>
        </nav>
    );
}

export default NavBar;