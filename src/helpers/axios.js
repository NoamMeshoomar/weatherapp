import axios from "axios";

export const API_KEY = "G5lGKWaSdJyMwfsbVDtqT9qOOkzjOb7G";

export default axios.create({
    baseURL: "https://dataservice.accuweather.com"
});
