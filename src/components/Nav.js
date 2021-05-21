import React, { useState } from 'react';
import { Route, Link } from "react-router-dom"
import RoverGallery from "./RoverGallery"



const Nav = () => {

    return (
        <div>
            <ul className="nav-links">
            <Link to="/gallery/curiosity/mast">
                <li>curiosity</li>
            </Link>
                    <ul>
                    <li>chemcam</li>
                    <li>mast</li>
                    <li>navcam</li>
                    </ul>
            <Link to="/gallery/spirit/navcam">
                <li>spirit</li>
            </Link>
                    <ul>
                        <li>mini-TES</li>
                        <li>navcam</li>
                        <li>fhaz</li>
                    </ul>
            <Link to="/gallery/opportunity/navcam">
                <li>opportunity</li>
            </Link>
                    <ul>
                        <li>navcam</li>
                        <li>rhaz</li>
                        <li>pancam</li>
                    </ul>
            </ul>
           
        </div>
    );
};

export default Nav;