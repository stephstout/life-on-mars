import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import RoverGallery from "./components/RoverGallery"
import About from "./components/About"
import './App.css';

function App() {
 
  return (
    
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/gallery" >
            <RoverGallery />
          </Route>

        </Switch>
      </div>
  );
    
  }

export default App;
