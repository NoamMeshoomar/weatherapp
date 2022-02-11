import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import axios, { API_KEY } from "../helpers/axios";

let typingTimer;

const useSearchCity = (searchQuery) => {
    const [city, setCity] = useState(null);

    const {addToast} = useToasts();

    const fetchCity = async (query) => {
        try {
            const response = await axios.get(`/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`);
            if(!response.data.length) {
                addToast("City not found!", {
                    appearance: "error",
                    autoDismiss: true
                });
            }
            setCity(response.data[0]);
        } catch (err) {
            addToast("The allowed number of requests has been exceeded.", {
                appearance: "error",
                autoDismiss: true
            });
        }
    }

    const fetchByGeoLocation = async ({latitude, longitude}) => {
        try {
            const response = await axios.get(`/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}`);
            setCity(response.data);
        } catch (err) {
            addToast("The allowed number of requests has been exceeded.", {
                appearance: "error",
                autoDismiss: true
            });
        }
    }

    useEffect(() => {
        // Wait for the end of typing
        clearTimeout(typingTimer);
        if(searchQuery) {
            typingTimer = setTimeout(() => fetchCity(searchQuery), 1000);
        } else {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                fetchByGeoLocation(coords);
            }, () => {
                fetchCity("tel aviv");
            });
        }
    }, [searchQuery]);

    return city;
}

export default useSearchCity;