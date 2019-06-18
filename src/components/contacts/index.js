import React from "react";
import "./styles.css"

const Contacts = (props) =>{
    return(
        <a href={props.link} target="blank"><img src={props.image} alt="" id="contact"/></a>
    )
}

export default Contacts;