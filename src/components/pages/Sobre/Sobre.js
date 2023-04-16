

import React from 'react';
import styled from 'styled-components';
import {Button} from '../../assets/commom-components/Button/Button';
import {Title, Title2} from '../../assets/commom-components/Titles/Title';
import {Card} from '../../assets/commom-components/Cards/Card';
import fotoa from '../../assets/commom-components/Imagens/fotoa.svg'
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
    display: flex;
    align-items: center;
    justify-content: center;
            overflow-x:hidden;
            
            .banner-apr{
                width: 100%;
            height:100%;

            background: ${Colors.BLACK_450};
            display: flex;
            justify-content: space-between;
            padding: 5% 2%;
        }
            .Conteudo{
                height: 500px;
                background: ${Colors.BLACK_450};
                padding-top: 50px;
        
            }
            .Conjunto{
            margin-left: 180px;
        
            }
        .titulo{
            margin-right:4em;
        }



                    @media(max-width: 768px){
                        img{
                            display:none;
                        }
                    }
            `
    const Opcao = styled.div`
    padding-top: 50px;
    margin-left: 10px;
    padding-left:2px;
    text-align: left;
    max-width: 80%;
    font-size: 20px;
    color: ${Colors.NEUTRAL_WHITE};
    `

    const Imagem = styled.div`
    float: left;
    margin-right: 17px;
    `
            
        function Home(){
            return (
        <Container>
        
            <div className='Conteudo'> <Title2 className='titulo'>Sobre</Title2>
            <div className='Conjunto'> 
            <Imagem>
                <img src={fotoa}/> 
                </Imagem>
                
            <Opcao> <p> 
                Olá, meu nome é Amanda, tenho 26 anos e moro em São Paulo. Em 2020 migrei da área de atendimento pra área de tecnologia trabalhando por 2 anos como técnica de suporte para notebooks e desktops. Desde o início da minha carreira tenho feito cursos e participado de programas de aceleração para área de desenvolvimento e em 2022 iniciei minha graduação em Sistemas para Internet pela FIAP.</p></Opcao>
                </div>
        
    </div>

        </Container>
        
        );
    }

    export default Home;