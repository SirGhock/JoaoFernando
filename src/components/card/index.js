import React from "react";
import "./styles.css"

const Card = (props) => {
    return (
        <div className="cardContainer"> 
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card;