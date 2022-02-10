import React from "react";

import LoadingPNG from "../../assets/loading.png";

import "./Loading.css";

const Loading = ({size}) => {
    return(
        <div className="Loading">
            <img src={LoadingPNG} width={size} alt="" />
        </div>
    )
}

export default Loading;