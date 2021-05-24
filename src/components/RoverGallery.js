import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom"

const RoverGallery = ( { match } ) => {
    
    const [searchOptions, setSearchOptions] = useState({
        key: process.env.REACT_APP_API_KEY,
      })
        console.log(searchOptions)
      const [roverData, setRoverData] = useState()
     
        const curiosityGallery = () => {
          const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${match.params.rover}/photos?sol=1000&page=1&camera=${match.params.cam}&api_key=${searchOptions.key}`
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
            // <div>
            //     <h1>{`${roverData.rover.name} ${roverData.camera.full_name}`}</h1>
            <div className="gallery">
                {/* <h1 className="title"> Curiosity Rover : Chemistry + Camera Complex </h1> */}
            {roverData.map(image => {
                return (
                    <div className="card">
                        <img className="images" src={image.img_src} key={image.camera.id}/>
                        {/* <p>{`rover: ${image.rover.name} | status: ${image.rover.status}`}</p> */}
                    </div>
                    )}
                    )}
            </div>
            // </div>
        )
};

export default RoverGallery;