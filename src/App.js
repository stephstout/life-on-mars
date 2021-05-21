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
          <Route path="/">
            <Home />
          </Route>
          <Route 
            path="/gallery/:rover/:cam"
            render={(routerProps) => <RoverGallery match={routerProps.match}/>
            }
            />
           
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

      </div>
  );
    
  }

export default App;
