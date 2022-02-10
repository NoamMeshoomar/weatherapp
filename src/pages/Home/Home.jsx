import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from 'react-toast-notifications';

import { updateLocation, updateSearchQuery } from "../../actions/weatherActions";

import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";

import useSearchCity from "../../hooks/useSearchCity";

import "./Home.css";

const Home = () => {
    const searchQuery = useSelector((state) => state.weather.searchQuery);
    const dispatch = useDispatch();

    const location = useLocation();

    const city = useSearchCity(searchQuery);

    const {addToast} = useToasts();

    useEffect(() => {
        window.history.replaceState({query: "tel aviv"}, "/");
    }, []);

    useEffect(() => {
        if(location.state?.query) {
            dispatch(updateSearchQuery(location.state.query));
        }
    }, [location.state?.query]);

    useEffect(() => {
        if(city) {
            dispatch(updateLocation({
                locationName: city.LocalizedName,
                locationKey: city.Key
            }));
        }
    }, [city, dispatch]);

    const handleSearch = (value) => {
        // Check if value is only in english letters
        if(!(/^[a-zA-Z ]*$/.test(value))) {
            addToast("Only english letters are allowed!", {
                appearance: "error",
                autoDismiss: true
            });
            return;
        };
        dispatch(updateSearchQuery(value));
    }

    return(
        <div className="Home">
            <div className="search-container">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input className="search-input" type="text" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <WeatherDetails />
        </div>
    )
}

export default Home;