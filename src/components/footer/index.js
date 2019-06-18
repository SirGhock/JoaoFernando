import React from "react";
import Contacts from "../contacts";
import Instagram from "../../resources/images/instagram.png";
import GitHub from "../../resources/images/github.png";
import Behance from "../../resources/images/behance.png";
import "./styles.css";

function Footer() {
    return (
      <>
        <div className="footerContainer">
            <Contacts
                link={"https://www.instagram.com/joao_ofernando/"} 
                image={Instagram} 
            />
            <Contacts
                link={"https://github.com/SirGhock/"}
                image={GitHub}
            />
            <Contacts
                link={"https://www.behance.net/joasouec46"} 
                image={Behance} 
            />
        </div>
      </>
    );
}

export default Footer;