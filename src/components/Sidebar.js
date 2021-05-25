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
            <a href="https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest" alt="mars news">
                <h3>news</h3>
            </a>
            
            <Weather />
        </div>
    );
};

export default Sidebar;