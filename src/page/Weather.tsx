import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

/// <reference types="@types/googlemaps" />

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<WeatherData>(
          'http://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=18ae536b002d38e1ced774f1f33ef919'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  // แปลงอุณหภูมิจากเคลวินเป็นองศาเซลเซียส
  const convertKelvinToCelsius = (kelvin: number) => kelvin - 273.15;

  // const htmlContent = `
  // `;
  return (
    <div>
      {weatherData ? (
        <div>
          <h1>สภาพอากาศวันนี้</h1>
{/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
          <p>City name: Thailand / Bangkok</p>
          <p>Temperature: {convertKelvinToCelsius(weatherData.main.temp).toFixed(2)} °C</p>
          {/* คำอธิบายอากาศ */}
          <p>{weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
