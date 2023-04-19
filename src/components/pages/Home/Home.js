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
    import { Link } from 'react-router-dom';

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
                list-style: none;

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
                        .cards {
                    font-weight: ${FontWeights.BOLD};
                    color: ${Colors.NEUTRAL_WHITE};
                    width: 10em;
                    list-style: none;
            padding: 2%;
            position: relative;
            margin-left: 15%;
            text-align:center;
            outline:none;
            list-style: none;


                }

                .cards:hover{
                    cursor:pointer;
                    background-color:#054f77;
                    background-opacity: 20%;
                    color: #282323;
                }
                .cards::focus{
                    color:#054f77;
                    list-style:none;
                    text-decoration:none;
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

        <Link to="/Amanda"><Card className='cards'>Amanda </Card>
                            </Link> 

                                <Link to="/Cristina"><Card className='cards'>Cristina </Card>
                            </Link> 
                                <Link to="/Daiane"><Card className='cards'>Daiane </Card>
                            </Link> 
                            
                                </div>
                        <div class="linha2">
        <Link to="/Kevin"><Card className='cards'> Kevin</Card> </Link>    
        <Link to="/Thais"> <Card className='cards'> Thais</Card></Link> 


                </div>
                <div class="pontos">

            <img src="https://i.imgur.com/Knal5Sh.png"></img>
            </div>
                </div>
        
        </Container>
        );
    }

export default Home;