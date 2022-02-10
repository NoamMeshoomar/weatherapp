import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegStar } from "@fortawesome/free-regular-svg-icons";

import Loading from "../Loading/Loading";

import useWeatherDetails from "../../hooks/useWeatherDetails";
import useCheckFavorite from "../../hooks/useCheckFavorite";

import { updateFavorites } from "../../actions/favoritesActions";

import "./WeatherDetails.css";

const WeatherDetails = () => {
    const location = useSelector((state) => state.weather.location);

    const dispatch = useDispatch();

    const [details, loading] = useWeatherDetails(location?.locationKey);
    const isFavorite = useCheckFavorite(location?.locationKey);

    const handleAddToFavorite = () => {
        dispatch(updateFavorites({
            id: location.locationKey,
            name: location.locationName,
            weather: `${details.Temperature.Metric.Value}°${details.Temperature.Metric.Unit}`
        }));
    }

    return(
        <div className="WeatherDetails">
            {loading || !location ? <Loading size={100} /> : <div className="details-container">
                <div className="top-details">
                    <div className="city-details">
                        <img src={`https://www.accuweather.com/images/weathericons/${details.WeatherIcon}.svg`} alt="weather-icon" />
                        <div>
                            <h1>{location.locationName}</h1>
                            <h3>{details.Temperature.Metric.Value}°{details.Temperature.Metric.Unit}</h3>
                        </div>
                    </div>
                    <div className="favorite-btn" onClick={handleAddToFavorite}>
                        <FontAwesomeIcon icon={isFavorite ? faStar : faRegStar} color={isFavorite ? "#edc10c" : "black"} size="2x" />
                    </div>
                </div>
                <h1 className="weather-text">{details.WeatherText}</h1>
                <div className="forecasts">
                    {details.Forecasts.map(forecast => {
                        return(
                            <div key={forecast.dayName} className="forecast">
                                <h3 style={{marginBottom: 10}}>{forecast.dayName}</h3>
                                <p>{forecast.Temperature.Maximum.Value}°{forecast.Temperature.Maximum.Unit}</p>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}

export default WeatherDetails;