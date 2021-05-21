import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Weather from "./Weather"
import Nav from "./Nav"

const Sidebar = ( { curiosityGallery } ) => {


    return (
        <div>
            <Link to="/">
            <h1>Life on Mars</h1>
            </Link>
            <Nav />
            {/* <Weather /> */}
        </div>
    );
};

export default Sidebar;