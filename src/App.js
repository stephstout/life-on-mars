import React, { useState, useEffect } from "react"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import './App.css';

function App() {
  const [searchOptions, setSearchOptions] = useState({
    key: process.env.REACT_APP_API_KEY,
    url: 'https://api.nasa.gov/mars-photos/api/',
    numberOfResults: 25,
  })

  const curiosityGalleryImages = () => {
    const url = `${searchOptions.url}/v1/rovers/curiosity/photos&api_key=${searchOptions.key}`
    fetch(url)
    .then((res) => res.json())
    .then(res  => setSearchOptions(res))
  }
  console.log(curiosityGalleryImages)
 

  return (
    <div className="container">
    <div className="sidebar">
      <Sidebar curiosityGalleryImages={curiosityGalleryImages}/>
    </div>
      <Switch>
        <Route path="/" />
          <Home />
        <Route path="/about" />
          <About />
      </Switch>
    </div>
  );
}

export default App;
