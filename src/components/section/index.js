import React, {Fragment} from "react";
import Card from "../card";
import "./styles.css";


function Secao() {
    return (
      <Fragment>
        <section className="container">
            <Card titulo="Interesses" texto="Aprender cada dia mais, conhecer novos lugares e pessoas."/>
            <Card titulo="Idiomas" texto="Português= Nativo; Ingles= Básico."/>
            <Card titulo="Formação" texto="Graduando em Engenharia de Software pela Universidade Tecnológica Federal do Paraná." />
        </section>
      </Fragment>
    );
}

export default Secao;