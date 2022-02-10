import { useEffect, useState } from "react";

import axios, { API_KEY } from "../helpers/axios";

const useWeatherDetails = (locationKey) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWeatherDetails = async () => {
        setLoading(true);
        const {data} = await axios.get(`/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
        const {data: {DailyForecasts}} = await axios.get(`/forecasts/v1/daily/5day/${locationKey}?metric=true&apikey=${API_KEY}`);
        DailyForecasts.forEach(day => day.dayName = new Date(day.Date).toString().split(' ')[0]);
        data[0].Forecasts = DailyForecasts;
        setDetails(data[0]);
        setLoading(false);
    }

    useEffect(() => {
        if(!locationKey) return;
        
        fetchWeatherDetails();
    }, [locationKey]);

    return [details, loading];
}

export default useWeatherDetails;