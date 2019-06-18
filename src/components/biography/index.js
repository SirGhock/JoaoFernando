import React from "react";
import "./styles.css";
import PlayingPhoto from "../../resources/images/playing.JPG";


function Biography() {
    return (
        <>
            <h2>Biografia</h2>
            <div className="biographyContainer">
                <div className="textContainer">
                    <p>Natural de Londrina-PR, atual residente de Cornélio Procópio no estado Paraná,
                        com 21 anos de idade, estudante de Engenharia de Software pela Universidade
                        Tecnológica Federal do Paraná, empolgado para aprender mais sobre
                        tecnologias e sobre programação.
                    </p>
                    <p>Logo no ensino fundamental, já me deparava programando coisas simples, 
                       adorava programar meus próprios jogos, na época, me lembro de utilizar RPGMaker
                       no qual eu desenhava os mapas, colocava os inimigos, e decidia como todo o jogos
                       iria funcionar, e por fim, passava horas jogando e quando encontrava algum erro ou bug
                       no meu jogo, já ia correndo para a internet procurar como resolver, e repetia todo o 
                       processo de jogar até encontrar falhas. Passava horas, dias e até meses fazendo isso,
                       mas na época, não me via fazendo coisas fantásticas ou algo do tipo, na minha cabeça
                       era muito mais uma brincadeira.</p>
                </div>
                    <div>
                        <img src={PlayingPhoto} id="playingPhoto" alt="PlayingPhoto" />
                    </div>
                <div className="textContainer">
                    <p>Conforme o tempo foi passando, comecei a entender mais do que eu fazia, sai da interface
                        gráfica e comecei com pequenos ajustes em scripts, me aventurar e ir para outras
                        ferramentas, que dependiam de um pouco mais de código, conheci o Game Maker
                        e foi uma luta gigante, pois a interface não era muito amigável e já envolvia códigos,
                        laços de repetição, condições, mas com muito esforço, consegui aprender e fazer alguns jogos
                        simples. E tudo isso antes de estar no ensino médio, após isso fui conhecendo linguagens
                        como Python, um pouco de HTML com CSS, e fui tomando gosto pela coisa.
                    </p>
                    <p>Foi quando descobri que na minha cidade existia uma faculdade de Engenharia de Software
                        em uma universidade federal, me motivando ainda mais a estudar e querer saber mais sobre
                        programação, desenvolvimento e a comunicação entre pessoas que é de extrema importância
                        no decorrer da produção de um software.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Biography;