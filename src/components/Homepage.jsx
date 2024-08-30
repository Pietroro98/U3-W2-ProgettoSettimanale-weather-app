import { useState, useCallback } from 'react';

const useWeather = (apiKey) => {
    const [weatherData, setWeatherData] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherData = useCallback(async (city) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            });
        } catch (err) {
            setError(err.message);
            setWeatherData(null); 
        } finally {
            setLoading(false);
        }
    }, [apiKey]);

    return {
        weatherData,
        fetchWeatherData,
        loading,
        error
    };
};

export default useWeather;
