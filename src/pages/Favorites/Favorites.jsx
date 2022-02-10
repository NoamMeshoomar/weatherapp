import React from "react";
import { useSelector } from "react-redux";

import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";

import "./Favorites.css";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.favorites);

    return(
        <div className="Favorites">
            {favorites.map(favorite => {
                return <FavoriteCard key={favorite.id} info={favorite} />
            })}
        </div>
    )
}

export default Favorites;