import React, {Fragment} from "react";
import TAMAC from "../../resources/images/tamac.png"
import RNATIVE from "../../resources/images/rnative.png"
import SERV from "../../resources/images/serv.png"
import "./styles.css";


function Activities() {
    return (
        <Fragment>
            <h2 id="actHeader">Atividades Desenvolvidas</h2>
            <div className="activitiesContainer">
                <a href="https://github.com/SirGhock/TAMAC"><div className="act"><img src={TAMAC} alt="" />TAMAC</div></a>
                <a href="https://github.com/SirGhock/FirstAPPReactNative"><div className="act"><img src={RNATIVE} alt="" />Meu primeiro APP em React-Native</div></a>
                <a href="https://github.com/SirGhock/ServerHTTP"><div className="act"><img src={SERV} alt="" />Servidor HTTP</div></a>
            </div>
        </Fragment>
    )
}

export default Activities;