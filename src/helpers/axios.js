import axios from "axios";

export const API_KEY = "lFJtpA52CTScsfjTWElPEJrLoxZYdEJP";

export default axios.create({
    baseURL: "https://dataservice.accuweather.com"
});