import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCheckFavorite = (locationKey) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const favorites = useSelector((state) => state.favorites.favorites);

    useEffect(() => {
        if(!locationKey) return;

        const favoriteExist = favorites.find(favorite => favorite.id === locationKey);

        if(!favoriteExist) {
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
    }, [locationKey, favorites]);

    return isFavorite;
}

export default useCheckFavorite;