import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"

const RoverGallery = () => {
    
    const [searchOptions, setSearchOptions] = useState({
        key: process.env.REACT_APP_API_KEY,
        url: 'https://api.nasa.gov/mars-photos/api/',
        numberOfResults: 25,
      })
        
      const [roverData, setRoverData] = useState()
     
        const curiosityGallery = () => {
          const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=mast&api_key=${searchOptions.key}`
          fetch(url)
          .then(data => data.json())
          .then(data => setRoverData(data.photos))
          .catch(console.error)
          }

        useEffect(() => {
          return curiosityGallery()
          }, [])

        if (!roverData) {
            return "loading"
        }

        console.log(roverData)
        
        return (
            <div className="gallery">
            
            {roverData.map(image => {
                return <img style={{height: "100px"}}src={image.img_src}></img>
                    })}
         
        </div>
    )
};

export default RoverGallery;