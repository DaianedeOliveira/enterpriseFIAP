import { useState, useEffect, React } from "react";
import styled from "styled-components";
import {Title2, Title4} from '../../assets/commom-components/Titles/Title';
import axios from "axios";
import useAxios from '../../../hooks/useAxios'
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
    width:100%;
    hright: 100%;
    background: ${Colors.BLACK_450};
    padding: 5%;
    .sobre{
    margin-top: 5%;
    display:flex;
    padding: 5% 15%;
    font-size: ${FontSizes.ONE_HALF};
    font-family: ${FontFamilies.SECONDARY};
    font-weight:${FontWeights.BLACK};
    color:${Colors.NEUTRAL_WHITE};
}
.img-sobre{
    width:50%;
}
.texto{
    width: 50%;
    text-align: left;
}
.linha1{
    width:100%;

    margin-top:5%;
}
.linha2{
    margin-top: 10%;
    display: flex;
}
.pont{
    display:flex;
    justify-content: right;
}
.pont-curv{
    width: 320px;
    height: 320px;
    margin-top: -20%;
}
.card1{
    width: 45%;
    height: 579px;
    padding:14%;
    text-align:center;
    position:absolute;
    z-index:99;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    margin-left: 35%;
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.THREE};
    font-family:${FontFamilies.SECONDARY};
    text-transform: uppercase;
    display: flex;
    align-items:center;
    justify-content: center;
}

&:hover .card1{
    display:none;
    transition: 5s;
}
.card2{
    width: 50%;
    height: 579px;
    padding: 2%;
    position: relative;
    margin-left: 15%;
    text-align:center;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.SEMIBOLD};
    font-size: ${FontSizes.ONE_HALF};
    font-family:${FontFamilies.SECONDARY};
    display: flex;
    align-items:center;
    justify-content: center;
}
    .experiencias{
        width:100%;
    }
    .titulo1{
        display:flex;
        width:100%;
    }
    .text li{
        color:${Colors.NEUTRAL_WHITE};
        font-size:${FontSizes.ONE_HALF};
        font-family:${FontFamilies.PRIMARY};
        font-weight:${FontWeights.SEMIBOLD};
        margin: ${Spaces.FOUR};
    }
`;

const Card3 = styled.div`
    width: 100%;
    height: 100%;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    margin: ${Spaces.HALF};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.ONE_QUARTER};
    display: flex;
    align-items:center;
    justify-content: center;
    .card4{
        width:75%;
        height:100%;
        background:${Colors.BLACK_500};
    }
`
axios.defaults.baseURL = "https://viacep.com.br/ws";

function Kevin(){        
    const [cep, setCep] = useState('05421551');

    const { response, loading, error } = useAxios({
        method: 'get',
        url: `/${cep}/json/`,
        headers: JSON.stringify({ accept: '*/*' }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            console.log(response);
            setData(response);
        }
    }, [response]);

    return(
        <Container>
        <Title2>Sobre</Title2>

        <div className="sobre">
            <div className="img-sobre">
                <img src="https://i.imgur.com/UE0J3Ur.png"></img>
            </div>
            <div className="texto">
                <Title4>Kevin</Title4>
                <p>Opa! Me chamo Kevin, tenho 27 anos e desde muito cedo sou apaixado por tecnologia e games. 

Fiz cursos de desenvolvimento para sistemas, games e IoT. Atualmente estou cursando Informática para Internet na FIAP.

No mundo de tecnologica comecei na área de Suporte Técnico e hoje atuo como Analista de Sistemas. </p>
            </div>
        </div>
        <div>Esse é meu CEP: {cep}</div>
        <div>{data && <p>{data.cep}</p>}</div>
        <div>{data && <p>{data.logradouro}</p>}</div>
        <div>{data && <p>{data.complemento}</p>}</div>
        <div>{data && <p>{data.localidade}</p>}</div>
        <div>{data && <p>{data.uf}</p>}</div>
        <div>{data && <p>{data.ibge}</p>}</div>
            <div>{data && <p>{data.gia}</p>}</div>
            <div>{data && <p>{data.ddd}</p>}</div>
            <div>{data && <p>{data.siafi}</p>}</div>

        <div className="formacao">
        <img src="https://i.imgur.com/Knal5Sh.png"></img>

        <div className="linha1">
            <Title2>
                <img src="https://i.imgur.com/pVAj4La.png"></img>
                Formação
            </Title2>
        </div>
            <div className="linha2">
                <img src="https://i.imgur.com/x46p4eQ.png"></img>


                <div className="card1">Formação Daiane</div>


                <div className="card2"><li> Desenvolvimento de Jogos Digitais - Etec</li>

<li>Desenvolvimento de Sistemas - Etec</li>

<li>Desenvolvimento Web - Etec</li>

<li>Informática para Internet - FIAP (em andamento)</li></div>

    </div>

        </div>

        <div className="experiencias">
            <div className="titulo1">

            <Title2><img src="https://i.imgur.com/IuD8mKo.png"></img>Experiências<img src="https://i.imgur.com/IuD8mKo.png"></img></Title2>
            </div>
            <div className="text">
                <ul>
                    <li>Estagiário Help Desk (suporte técnico)</li>
                    <li> Estagiário de Programação</li>
                    <li>Analista de Sistemas</li>
                    <li>Global Game Jam, hackathon para desenvolvimento de jogos da Samsung</li>
                    <li>Maratona Behind the Code: iniciativa de capacitação da IBM a desenvolvedores, estudantes e entusiastas de TI rumo à Transformação Digital.</li>
                </ul>
            </div>
        </div>

        <div className="hobbies">
            <Title2>Hobbies</Title2>

            <Card3>
                <div className="card4">
                    <p>Kevin: Amo tecnologia e games como um todo, além de jogar gosto de entender e conhecer sobre o processo de criação de jogos.

Adoro cinema, jogos de tabuleiro, e beisebol.  

    </p>
                </div>
            </Card3>


        </div>
        </Container>
        );
    }

    export default Kevin;