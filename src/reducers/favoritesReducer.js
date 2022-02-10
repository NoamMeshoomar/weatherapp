const INITIAL_STATE = {
    favorites: JSON.parse(localStorage.getItem("favorites"))?.reverse() || []
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "UPDATE_FAVORITES":
            const updatedFavorites = [...state.favorites];
            const index = updatedFavorites.findIndex(favorite => favorite.id === action.payload.id);

            if(index > -1) {
                updatedFavorites.splice(index, 1);
            } else {
                updatedFavorites.push(action.payload);
            }
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites.reverse()));
            
            return {...state, favorites: updatedFavorites}
        default:
            return state;
    }
}

export default favoritesReducer;
