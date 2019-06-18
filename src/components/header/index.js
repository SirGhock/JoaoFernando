import React from "react";
import Logo from "../../resources/images/logo.png"
import "./styles.css";

function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <a href="#topAnchor"><img src={Logo} alt="" id="logo"/></a>
                </div>
                <div>
                    <ul id="navBar">
                        <li><a href="#topAnchor">Início</a></li>
                        <li><a href="#portAnchor">Portfólio</a></li>
                        <li><a href="#bioAnchor">Biografia</a></li>
                        <li><a href="#contactAnchor">Contato</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;