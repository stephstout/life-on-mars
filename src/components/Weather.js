import React, { useState, useEffect } from 'react';

const Weather = () => {

    const [searchOptions, setSearchOptions] = useState({
        key: process.env.REACT_APP_API_KEY,
        url: 'https://api.nasa.gov/mars-photos/api/',
        numberOfResults: 25,
      })
        
      const [weatherData, setWeatherData] = useState()
    
        const weatherWidget = () => {
          const url = `https://api.nasa.gov/insight_weather/?api_key=${searchOptions.key}&feedtype=json&ver=1.0`
          fetch(url)
          .then(data => data.json())
          .then(data => setWeatherData(data))
          .catch(console.error)
          }

        useEffect(() => {
          return weatherWidget()
          }, [])  
          console.log(weatherData)
    return (
        <div>
            {weatherData.map(temp => {
                return <p>{temp.sol_keys}</p>
                    })}
         
        </div>
    );
};

export default Weather;