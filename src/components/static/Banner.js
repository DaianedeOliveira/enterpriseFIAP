import React from "react";
import styled from "styled-components";
import {Title} from '../assets/commom-components/Titles/Title';
import {Button} from '../assets/commom-components/Button/Button'; 
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
    width: 100%;
    height: 100%;
   .banner-apr{
    width: 100%;
    height:100%;
    background: ${Colors.BLACK_450};
    display: flex;
    justify-content: space-between;
    padding: 5% 2%;
   }
    img{
        width: 507px;
        height:531px;
        margin: 50px 50px;
    }
    .apr{
        width: 50%;
        padding: 150px 50px;
    }
    .scroll{
        width:100%;
        height: 100%;
        display:flex;
        justify-content:center;
        background: ${Colors.BLACK_450}
    }
    .scroll img{
        width:5%;
        height: 5%;
    }
    `;

function Banner (){
    return(
        <Container>
            <div class="banner-apr">

<div class="apr">

<Title>  Apresentação Pessoal</Title>

<Button>Conheça os Integrantes</Button>

</div>

<div>
<img src="https://i.imgur.com/PbTeQV0.png"></img>

</div>
</div>
<div class="scroll">

<img src="https://i.imgur.com/ynES8UE.png"></img>
</div>
        </Container>
    );
}

export default Banner;