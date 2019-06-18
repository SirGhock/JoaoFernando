import React from "react";
import SEMPRE from "../../resources/images/100pre.png"
import WRAS from "../../resources/images/compac.png"
import "./styles.css";


function Portfolio() {
    return (
        <>
            <div className="portfolioContainer">
                <div className="opacBack">
                    <h2>Portfólio</h2>
                    <a name="bioAnchor" href="index.html"> </a>
                    <div id="works">
                        <div className="trab"><a href="https://www.demolayparana.org.br/gabinete/"><img src={SEMPRE} alt="" /></a></div>
                        <div className="trab"><a href="http://wrastreadores.com.br"><img id ="wras" src={WRAS} alt="" /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;