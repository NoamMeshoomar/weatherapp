import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

const NavBar = () => {
    return(
        <div className="NavBar">
            <Link to="/" className="logo">
                <FontAwesomeIcon icon={faSun} />
                <h1 className="app-name">Weather APP</h1>
            </Link>
            <div className="nav-links">
                <NavLink to="/" className={({isActive}) => `nav-link${isActive ? " selected" : ""}`}>Home</NavLink>
                <NavLink to="/favorites" className={({isActive}) => `nav-link${isActive ? " selected" : ""}`}>Favorites</NavLink>
            </div>
        </div>
    )
}

export default NavBar;