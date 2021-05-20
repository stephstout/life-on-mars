import React, { useState } from 'react';
import { Route, Link } from "react-router-dom"
import RoverGallery from "./RoverGallery"



const Nav = () => {

    return (
        <div>
            <ul className="nav-links">
            <Link to="/gallery">
                <li>gallery</li>
            </Link>

            </ul>
           
        </div>
    );
};

export default Nav;