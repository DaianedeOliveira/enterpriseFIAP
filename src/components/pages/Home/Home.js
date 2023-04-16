import React from 'react';
import styled from 'styled-components';
import {Button} from '../../assets/commom-components/Button/Button';
import {Title, Title2} from '../../assets/commom-components/Titles/Title';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
    FontSizes,
	FontWeights,
} from '../../../shared/DesignTokens';

    const Container = styled.div`
        width: 100%;
        height: 100%;
       .banner-apr{
        width: 100%;
        background: ${Colors.BLACK_450};
        display: flex;
        justify-content: space-between;
        padding: 150px 50px;
       }
        img{
            width: 507px;
            height:531px;
            margin: 50px 50px;
        }
        .apr{
            padding: 150px 50px;
        }
        .integrantes{
            width: 100%;
            height: 800px;
            padding: 50px;
            background:#1E1E1E;
            justify-content: center;
        }
        .linha1{
           width:100%;
           display:flex;!important;
           justify-content: space-around;
           margin: 100px 50px;
        }
        .linha2{
            width: 100%;
            display:flex;
            justify-content: space-around;
        }
        @media(max-width: 768px){
            img{
                display:none;
            }
        }
    `;

//     const Button = styled.button`
//     display: inline-block;
//     color: #fff;
//     font-size: 1em;
//     margin: 50px;
//     padding: 0.5em 2em;
//     border: 2px solid #90C2E7;
//     border-radius: 25px;
//     background: #292828!important;
//     display: block;
//   `;
function Home(){
    return (
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

        <div class="integrantes">
        <div> <Title2>Integrantes</Title2></div>
            <div class="linha1">
                
            <div class="card1">Amanda</div>
            <div class="card1">Cristina</div>
            <div class="card1">Daiane</div>
            </div>
            <div class="linha2">
                <div>Kevin</div>
                <div>Thais</div>
        </div>
            </div>
      
    </Container>
    );
}

export default Home;