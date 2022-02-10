import { combineReducers } from "redux";

import weatherReducer from "./weatherReducer";
import favoritesReducer from "./favoritesReducer";

const combinedReducers = combineReducers({
    weather: weatherReducer,
    favorites: favoritesReducer
});

export default combinedReducers;