import React from "react";
import styled from "styled-components";
import{Title3, Title5} from '../assets/commom-components/Titles/Title';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
    FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';

    const Container = styled.div`
        width:100%;
        height:100%;
        background: ${Colors.BLACK_450};
        padding: 10%;
        .texto{
            margin-top: 2%;
            text-align:center;
            font-size: ${FontSizes.ONE_HALF};
            font-family:${FontFamilies.SECONDARY};
            font-weight:${FontWeights.SEMIBOLD};
            color:${Colors.NEUTRAL_WHITE};

        }
        .texto-azul{
            font-style: none;
            color:${Colors.BLUE_450};
        }
        .imagens{
            margin-top: 5%;
            margin-bottom: 5%;
            display: flex;
            justify-content: center;
        }
        .fasedois{
            margin-top: 5%;
        }
    
    `;

function Footer(){
 return(
    <Container>
        <Title3> Fale Conosco!</Title3>

        <div>
            <p className="texto">Gostou do que viu? </p>
            <p className="texto">Saiba que nos <b className="texto-azul">empenhamos para realizá-lo</b>!
            Mas também <b className="texto-azul">gostariamos de te conhecer</b> e quem sabe trocar alguma experiência.
            Se quiser nos conhecer mais, fique a vontade para usar os canais abaixo:</p>
        </div>

        <div className="imagens">
            <img src="https://i.imgur.com/k5CcdSU.png"></img>
            <img src="https://i.imgur.com/jIxDCOb.png"></img>
        </div>

        <div className="pontos">
            <img src="https://i.imgur.com/Knal5Sh.png"></img>
        </div>

        <div className="fasedois">
        <Title5>@FaseDois</Title5>
        <Title5>2023</Title5>
        </div>
    </Container>
 );
}

export default Footer;