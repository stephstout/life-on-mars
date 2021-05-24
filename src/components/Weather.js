import React, { useState, useEffect } from 'react';

const Weather = () => {

    // const [weather, setWeather] = useState({
    //     key: process.env.REACT_APP_WEATHER_API_KEY,
    //   })
    //   console.log(weather)
        
      const [weatherData, setWeatherData] = useState()
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY

        const weatherWidget = () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=bozeman&appid=${apiKey}`
          fetch(url)
          .then(data => data.json())
          .then(data => setWeatherData(data))
          .catch(console.error)
          }

        useEffect(() => {
          return weatherWidget()
          }, [])  

          if (!weatherData) {
            return null
        }
          console.log(weatherData)

        // const farenheit = () => {
        //     (weatherData.main.temp - 273.15) * (9/5) + 32 
        //     return
        // }
        // console.log(farenheit)

    return (
        <div> 
            <h3>current temp</h3>
          <p>{`${Math.round(weatherData.main.temp - 273.15) * (9/5) + 32} degrees F`}</p>
        </div>
    );
};

export default Weather;