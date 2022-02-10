import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

import axios, { API_KEY } from "../helpers/axios";

const useWeatherDetails = (locationKey) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const {addToast} = useToasts();

    const fetchWeatherDetails = async () => {
        setLoading(true);
        try {
            const {data} = await axios.get(`/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
            const {data: {DailyForecasts}} = await axios.get(`/forecasts/v1/daily/5day/${locationKey}?metric=true&apikey=${API_KEY}`);
            DailyForecasts.forEach(day => day.dayName = new Date(day.Date).toString().split(' ')[0]);
            data[0].Forecasts = DailyForecasts;
            setDetails(data[0]);
            setLoading(false);    
        } catch (err) {
            addToast("The allowed number of requests has been exceeded.", {
                appearance: "error",
                autoDismiss: true
            });
        }
    }

    useEffect(() => {
        if(!locationKey) return;
        
        fetchWeatherDetails();
    }, [locationKey]);

    return [details, loading];
}

export default useWeatherDetails;