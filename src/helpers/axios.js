import axios from "axios";

export const API_KEY = "Uf9VyPKFnjf31GfGDjYSnhAE6IL0ijvk";

export default axios.create({
    baseURL: "https://dataservice.accuweather.com"
});