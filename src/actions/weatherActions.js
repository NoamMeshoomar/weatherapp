export const updateSearchQuery = (searchQuery) => {
    return {
        type: "UPDATE_SEARCH_QUERY",
        payload: searchQuery
    }
}

export const updateLocation = (location) => {
    return {
        type: "UPDATE_LOCATION",
        payload: location
    }
}

export const updateWeatherDetails = (weatherDetails) => {
    return {
        type: "UPDATE_LOCATION_DETAILS",
        payload: weatherDetails
    }
}