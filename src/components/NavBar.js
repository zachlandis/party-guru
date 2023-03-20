import React from "react";
import { Link } from "react-router-dom"
import '../index.css';

function NavBar() {
    return (
        <nav className="Header">
            <Link to="/" id="white-text">Home</Link> 
            <Link to="/about" id="white-text" >About</Link> 
            <Link to="/events"id="white-text" >Events</Link> 
        </nav> 
    )
}

export default NavBar