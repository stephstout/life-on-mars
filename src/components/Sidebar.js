import React, { useState } from 'react';
import Nav from "./Nav"

const Sidebar = ( { curiosityGalleryImages } ) => {

    return (
        <div>
            <Nav />
            <button>curiosity</button>
        </div>
    );
};

export default Sidebar;