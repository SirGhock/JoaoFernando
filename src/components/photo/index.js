import React from "react";
import "./styles.css";
import PersonalPhoto from "../../resources/images/foto.JPG";


function Photo() {
    return (
        <>
            <div id="indexAnchor">
                <img src={PersonalPhoto} id="mainPhoto" alt="PersonalPhoto"/>
                <p>Estudante de Engenharia de Software, apreciador de programação e conceitos de design.</p>
            </div>
        </>
    )
}

export default Photo;