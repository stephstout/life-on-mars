import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"

const RoverGallery = () => {
    
    const [searchOptions, setSearchOptions] = useState({
        key: process.env.REACT_APP_API_KEY,
        url: 'https://api.nasa.gov/mars-photos/api/',
        numberOfResults: 25,
      })
        
      const [roverData, setRoverData] = useState()
          // holds the array of photos
        const curiosityGallery = () => {
          const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${searchOptions.key}`
          fetch(url)
          .then(data => data.json())
          .then(data => setRoverData(data))
          .catch(console.error)
          }
            useEffect(() => {
              return curiosityGallery()
            }, [])

        if (!roverData) {
            return "loading"
        }
        console.log(roverData)

        const curiosityImages = roverData.map(image => {
            return (
                <div>{image.camera}</div>
            )
            })
            console.log(curiosityImages)
    return (
        <div className="gallery">
            <p>this is the gallery</p>
            <p>{curiosityImages}</p>
            
        </div>
    )
};

export default RoverGallery;