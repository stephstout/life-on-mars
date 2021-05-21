import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Weather from "./Weather"
import Nav from "./Nav"
import About from "./About"


const Sidebar = () => {


    return (
        <div>
            <Link to="/">
            <h1>Life 
                On
                Mars
            </h1>
            </Link>
            <Nav />
            <Link to="/about">
                <h3>about</h3>
            </Link>
            <Link to="/news">
                <h3>news</h3>
            </Link>
            {/* <Weather /> */}
        </div>
    );
};

export default Sidebar;