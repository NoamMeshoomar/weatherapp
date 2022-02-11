const INITIAL_STATE = {
    searchQuery: "",
    location: null,
    weatherDetails: null,
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "UPDATE_SEARCH_QUERY":
            return {...state, searchQuery: action.payload}
        case "UPDATE_LOCATION":
            return {...state, location: action.payload}
        case "UPDATE_WEATHER_DETAILS":
            return {...state, weatherDetails: action.payload}
        default:
            return state;
    }
}

export default favoritesReducer;