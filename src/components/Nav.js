import React, { useState } from 'react';
import { Route, Link } from "react-router-dom"

const Nav = () => {

    return (
        <div>
                    <ul>
                        <h2 className="list-header">curiosity</h2>
                        
                            <Link to="/gallery/curiosity/chemcam">
                                <li>chemcam</li>
                            </Link>
                            <Link to="/gallery/curiosity/mast">
                                <li>mast</li>
                            </Link>
                            <Link to="/gallery/curiosity/navcam">
                                <li>navcam</li>
                            </Link> 
                        
                
                    
                        <h2 className="list-header">spirit</h2>
                   
                        <Link to="/gallery/spirit/minites">
                            <li>mini-TES</li>
                        </Link>
                        <Link to="/gallery/spirit/navcam">
                            <li>navcam</li>
                        </Link>
                        <Link to="/gallery/spirit/fhaz">
                            <li>fhaz</li>
                        </Link>
                  
                        <h2 className="list-header">opportunity</h2>
                  
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
           
        </div>
)
};

export default Nav;