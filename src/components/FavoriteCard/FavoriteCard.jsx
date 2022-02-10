import React from "react";
import { Link } from "react-router-dom";

import "./FavoriteCard.css";

const FavoriteCard = ({info}) => {
    return(
        <Link to="/" state={{query: info.name.toLowerCase()}} className="FavoriteCard">
            <h3>{info.name}</h3>
            <p>{info.weather}</p>
        </Link>
    )
}

export default FavoriteCard;