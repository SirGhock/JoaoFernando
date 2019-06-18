import React from "react";
import "./styles.css"

const Blog = (props) => {
    return (
        <div className="blogContainer"> 
            <div id="blogImage">
                <a href={props.link}><img src={props.image} alt="" /></a>
            </div>
            <div id="blogText">
                <a href={props.link}><h3>{props.titulo}</h3></a>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default Blog;