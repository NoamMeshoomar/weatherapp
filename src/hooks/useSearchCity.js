import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import axios, { API_KEY } from "../helpers/axios";

let typingTimer;
let doneTypingInterval = 1000;

const useSearchCity = (searchQuery) => {
    const [city, setCity] = useState(null);

    const {addToast} = useToasts();

    const fetchCity = async () => {
        try {
            const response = await axios.get(`/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchQuery}`);
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