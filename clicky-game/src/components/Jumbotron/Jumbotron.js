import React from 'react';
import "./Jumbotron.css"

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <h3>Parks &amp; Recreation Edition</h3>
            <p className="lead">Click on each character once to win the game.  If you click on a character twice, you die! </p>
        </div>
    </div>
);

export default Jumbotron;