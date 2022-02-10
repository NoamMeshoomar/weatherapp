export const updateFavorites = (favorite) => {
    return {
        type: "UPDATE_FAVORITES",
        payload: favorite
    }
}