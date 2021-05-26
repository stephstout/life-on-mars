import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"

const RoverGallery = ( {match} ) => {
   

    const [searchOptions, setSearchOptions] = useState({
        key: process.env.REACT_APP_API_KEY,
      })
    
    const [pageParams, setPageParams] = useState() 
      if (match.params != pageParams) {
        setPageParams(match.params)
      } 

      const [roverData, setRoverData] = useState()
     
        const curiosityGallery = () => {
          const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${match.params.rover}/photos?sol=1000&page=1&camera=${match.params.cam}&api_key=${searchOptions.key}`
          fetch(url)
          .then(data => data.json())
          .then(data => setRoverData(data.photos))
          .catch(console.error)
          }

        useEffect(() => {
          curiosityGallery()
        }, [pageParams])

        if (!roverData) {
            return "loading"
        }
        
        return (
            
            <div className="gallery">
                {roverData? <h1 className="title">{`${roverData[0]?.rover?.name} ${roverData[0]?.camera?.full_name}`}</h1>: null}
            {roverData.map(image => {
              return (
                <div className="rover-images">
                        <img className="images" src={image.img_src} key={image.camera.id}/>
                        <p>{`rover: ${image.rover.name} | status: ${image.rover.status}`}</p>
                    </div>
                    )}
                    )}
                </div>
          )
};

export default RoverGallery;