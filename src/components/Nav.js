import React, { useState } from 'react';
import { Route, Link } from "react-router-dom"
import {LinkContainer} from 'react-router-bootstrap'
import "bootswatch/dist/solar/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'




const Nav = () => {

    return (
        <div>
                <div className="dropdown-menu">
                    <ul className="nav">
                        <li className="roverList nav-item dropdown">curiosity</li>
                    <LinkContainer to="/gallery/curiosity/chemcam">
                        <li>chemcam</li>
                    </LinkContainer>
                    <Link to="/gallery/curiosity/mast">
                        <li>mast</li>
                    </Link>
                    <Link to="/gallery/curiosity/navcam">
                        <li>navcam</li>
                    </Link> 
                    </ul>
                </div>
                <ul>
                    <li className="roverList">spirit</li>
                <ul>
                <Link to="/gallery/spirit/minites">
                    <li>mini-TES</li>
                </Link>
                <Link to="/gallery/spirit/navcam">
                    <li>navcam</li>
                </Link>
                <Link to="/gallery/spirit/fhaz">
                        <li>fhaz</li>
                </Link>
                </ul>
                    <li className="roverList">opportunity</li>
                <ul>
                <Link to="/gallery/opportunity/navcam">
                    <li>navcam</li>
                </Link>
                <Link to="/gallery/opportunity/rhaz">
                    <li>rhaz</li>
                </Link>
                <Link to="/gallery/opportunity/pancam">
                    <li>pancam</li>
                </Link>
                </ul>
            </ul>
           
        </div>
    );
};

export default Nav;