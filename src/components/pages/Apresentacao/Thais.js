import { useState, useEffect, React } from "react";
import styled from "styled-components";
import {Title2, Title4} from '../../assets/commom-components/Titles/Title';
import {Button} from '../../assets/commom-components/Button/Button'; 
import axios from "axios";
import useAxios from "axios-hooks";
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
    padding: 10%;
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
.endereco{
    margin-top: 5%;
}
.cep{
    margin: 2% 0;
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
    width: 40%;
    max-width: 550px;
    height: 579px;
    padding: 10%;
    text-align:center;
    position:absolute;
    z-index:99;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    margin-left: 30%;
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
    transition-delay: 10s;
}
.card2{
    width: 50%;
    max-width: 550px;
    height: 579px;
    padding: 5%;
    position: relative;
    margin-left: 10%;
    text-align:center;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.SEMIBOLD};
    font-size: ${FontSizes.ONE_HALF};
    font-family:${FontFamilies.SECONDARY};
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
}
    .experiencias{
        margin: 10% 0;
        width:100%;
    }
    .titulo1{
        display:flex;
        width:100%;
    }
    .experiencias img{
        margin:0 2%;
        width: 30%;
    }
    .text li{
        color:${Colors.NEUTRAL_WHITE};
        font-size:${FontSizes.ONE_HALF};
        font-family:${FontFamilies.PRIMARY};
        font-weight:${FontWeights.SEMIBOLD};
        margin: ${Spaces.FOUR};
    }
    .hobbies{
        width: 100%;
        height: 100%;
        margin-top: 5%;
    }
    .hobbies .white-line1{
        margin-bottom: -2%;
        margin-right:2%;
    }
    .hobbies .white-line2{
        margin-bottom: 3%;
        margin-left: 2%;
    }
    .hobbies .menina-sentada{
        position:absolute;
        margin-left: 45%;
        
    }
`;

const Card3 = styled.div`
    width: 100%;
    height: 350px;
    background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    margin: 5% 0;
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.ONE_QUARTER};
    display: flex;
    align-items:center;
    justify-content: center;
    .card4{
        width:75%;
        height: 75%;
        border-radius: 25px;
        padding: 5%;
        font-weight:${FontWeights.SEMIBOLD};
        font-size:${FontSizes.ONE_HALF};
        background:${Colors.BLACK_500};
    }
`
axios.defaults.baseURL = "https://viacep.com.br/ws";

function Thais(){        
    const [cep, setCep] = useState('04542011');
    const [mostrarEndereco, setMostrarEndereco] = useState(false);

    const ocultarEndereco = () => {
        setMostrarEndereco(false);
    };

    const [{ data, loading, error}, refetch ] = useAxios(
        "https://viacep.com.br/ws/04542011/json/",
        { manual: true },
    );

    useEffect(() => {
        if (data) {
        setMostrarEndereco(true);
        console.log(data);
        console.log(mostrarEndereco);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return(
        <Container>
        <Title2>Sobre</Title2>

        <div className="sobre">
            <div className="img-sobre">
                <img src="https://i.imgur.com/lOcdN4E.png" alt="Foto da Thais - Uma mulher de 21 anos com cabelos e olhos castanhos escuros, cacheados. Ela está sorrindo levemente na foto e se encontra de perfil."></img>
            </div>
            <div className="texto">
                <Title4>Thais</Title4>
                <p>Eu tenho 21 anos, sou brasileira e me identifico com o gênero feminino. Nasci e moro até hoje na Zona Leste de São Paulo.
                Sou apaixonada por tecnologia e tudo que envolve esse universo incrível. Sou uma pessoa reservada, mas gosto de fazer amizades e conhecer pessoas. Gosto de sair por aí conhecendo novos restaurantes e lugares legais para passar o final de semana. O centro de São Paulo e a Zona Oeste são meus point’s.</p>
                <div>        
                <div class="endereco">
                    <Title4>Endereço</Title4>
                </div>    

                <div className="cep">

                <p>Meu CEP {cep}:</p>      
                </div>
                </div>
                <Button onClick={mostrarEndereco ? ocultarEndereco : refetch}>
                {mostrarEndereco ? 'Ocultar meu Endereço' : 'Exibir meu Endereço'}    
                </Button>
                {mostrarEndereco && (
                    <div>                    
                        <div>{data && <p>Logadouro: {data.logradouro}</p>}</div>
                        <div>{data && <p>Complemento: {data.complemento}</p>}</div>
                        <div>{data && <p>Cidade: {data.localidade}</p>}</div>
                        <div>{data && <p>Estado: {data.uf}</p>}</div>
                    </div>
                )}
            </div>
        </div>

       <div className="formacao">
       <img src="https://i.imgur.com/Knal5Sh.png"></img>

        <div className="linha1">
            <Title2>
                <img src="https://i.imgur.com/pVAj4La.png"></img>
                Formação
            </Title2>
        </div>
        <div className="linha2">
            <img src="https://i.imgur.com/x46p4eQ.png" alt="Desenho de uma garota em pé sorrindo e segurando livros nas mãos"></img>


             <div className="card1">Formação Thais</div>


            <div className="card2">
                <p>Eu possuo uma formação técnica em Informática para Internet e atualmente, estou no 2º ano da graduação de Sistemas para Internet na FIAP.

                Pretendo fazer uma pós-graduação em Engenharia de Software.

                Recentemente iniciei um curso de inglês e pretendo me tornar fluente no idioma. </p>

            </div>

</div>
{/* 
Estagiária de Observabilidade


Participei do Bootcamp da Generation Brasil, o +{DEV}as, onde fui uma das 45 selecionadas entre 900 candidatas. Lá aprendi sobre Java, React e Spring Boot.


Participei do Bootcamp Code Girls da Santander, onde fiquei entre as 200 finalistas entre mais de 15 mil inscritas. Aprendi o básico de Java e pratiquei muita lógica de programação.  */}


       </div>

       <div className="experiencias">
        <div className="titulo1">

        <Title2><img src="https://i.imgur.com/IuD8mKo.png"></img>Experiências<img src="https://i.imgur.com/IuD8mKo.png"></img></Title2>
        </div>
        <div className="text">
            <ul>
                <li>Estagiária de Observabilidade</li>
                <li>Participei do Bootcamp da Generation Brasil, o +(DEV)as, onde fui uma das 45 selecionadas entre 900 candidatas. Lá aprendi sobre Java, React e Spring Boot.</li>
                <li>
                Participei do Bootcamp Code Girls da Santander, onde fiquei entre as 200 finalistas entre mais de 15 mil inscritas. Aprendi o básico de Java e pratiquei muita lógica de programação. </li>
    
            </ul>
        </div>
       </div>

       <div className="hobbies">
        <Title2><img src="https://i.imgur.com/PmHe8zV.png" className="white-line1"></img>Hobbies<img src="https://i.imgur.com/Ok0q8JI.png" className="white-line2"></img></Title2>

        <Card3>
            <div className="card4">
                <p>Thais:Meus hobbies são escrever e desenhar, adoro me envolver em atividades que exercitem a criatividade .  No meu tempo livre, quando não quero me envolver em atividades complexas gosto de assistir séries, animes e doramas. Também gosto de ler livros de ficção científica, romance e drama para refletir e me inspirar. 
                </p>
                <img src="https://i.imgur.com/tmxm7Ry.png" class="menina-sentada" alt="Desenho de uma garota sentada no chão com um violão no colo e fazendo sinal da paz com a mão esquerda"></img>
            </div>
        </Card3>

       </div>
    </Container>
    );
}

export default Thais;