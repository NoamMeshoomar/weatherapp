import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import axios, { API_KEY } from "../helpers/axios";

let typingTimer;
let doneTypingInterval = 1000;

const useSearchCity = (searchQuery) => {
    const [city, setCity] = useState(null);

    const {addToast} = useToasts();

    const fetchCity = async () => {
        const {data} = await axios.get(`/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchQuery}`);
        if(!data.length) {
            addToast("City not found!", {
                appearance: "error",
                autoDismiss: true
            });
        }
        setCity(data[0]);
    }

    useEffect(() => {
        // Wait for the end of typing
        clearTimeout(typingTimer);
        if(searchQuery) {
            typingTimer = setTimeout(fetchCity, doneTypingInterval);
        }
    }, [searchQuery]);

    return city;
}

export default useSearchCity;