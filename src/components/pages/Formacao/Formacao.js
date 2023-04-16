import React from 'react';
import styled from 'styled-components';
import {Button} from '../../assets/commom-components/Button/Button';
import {Title, Title2} from '../../assets/commom-components/Titles/Title';
import {Card} from '../../assets/commom-components/Cards/Card';
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
            padding: 150px 50px;
        }
        .integrantes{
            width: 100%;
            height: 100%;
            padding: 50px;
            background:#1E1E1E;
            justify-content: center;
        }
        .linha1{
           width:100%;
           height: 285px;
           display:flex;!important;
           margin: 25px 0;
           justify-content: center;
        }
        .linha2{
            width: 100%;
            height: 285px;
            margin: 25px 0;
            display:flex;
            justify-content: center;
        }
        .pontos img{
            margin: 0;
            width: 100%;
            height: 20px;
        }
        @media(max-width: 768px){
            img{
                display:none;
            }
        }
    `;

function Home(){
    return (
    <Container>

        <div> <Title2>Formação</Title2></div>
              
    </Container>
    );
}

export default Home;