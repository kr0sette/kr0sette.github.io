import React from "react";
import "./NavBar.css";

const NavBar = props => (

    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <p className="top">Clicky Game</p>
                </li>
                <li className="nav-item">
                    <p className="top">{props.status}</p>
                </li>
                <li className="nav-item">
                    <p className="top"
                    >Score: {props.score} | Games Won: {props.gamesWon}
                    </p>
                </li>
            </ul>
        </div>
    </nav>

);


export default NavBar;