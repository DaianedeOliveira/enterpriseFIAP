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
    height: 579px;
    padding: 15%;
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
    .experiencias img{
        margin:0 2%;
        width: 35%;
    }
    .text li{
        color:${Colors.NEUTRAL_WHITE};
        font-size:${FontSizes.ONE_HALF};
        font-family:${FontFamilies.PRIMARY};
        font-weight:${FontWeights.SEMIBOLD};
        margin: ${Spaces.FOUR};
    }
    .menina-sentada{
        position:absolute;
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

function Daiane(){        
    const [cep, setCep] = useState('01001000');
    const [mostrarEndereco, setMostrarEndereco] = useState(false);

    const ocultarEndereco = () => {
        setMostrarEndereco(false);
    };

    const [{ data, loading, error}, refetch ] = useAxios(
        "https://viacep.com.br/ws/01001000/json/",
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
                <img src="https://i.imgur.com/UE0J3Ur.png"></img>
            </div>
            <div className="texto">
                <Title4>Daiane</Title4>
                <p>Olá, meu nome é Daiane, tenho 18 anos e moro em São Paulo. Atualmente sou estudante de Sistemas para Internet na 
                FIAP. Sou uma pessoa bastante curiosa e adoro aprender coisas novas; uma das coisas que mais gosto de fazer no tempo 
                livre é ler livros, acredito que assim como Platão - filósofo grego da antiguidade - defendia que: 
                “livros dão alma ao universo, asas para a mente, voo para a imaginação, e vida a tudo”.  </p>
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
                        <div>{data && <p>Bairro: {data.bairro}</p>}</div>
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
            <img src="https://i.imgur.com/x46p4eQ.png"></img>


             <div className="card1">Formação Daiane</div>


            <div className="card2">Olá, me chamo Daiane, tenho 18 anos, sou brasileira e me identifico com o gênero feminino. 
            Sou apaixonada por tecnologia e tudo o que ela pode proporcionar, por isso, atualmente faço Sistemas para Internet na FIAP. Além disso, tenho como interesse a área de Business Intelligence, pois atualmente faço estágio na área e me encantou tudo que essa área propõe, assim venho participando de eventos na área e  fazendo cursos on-line para me aprimorar, como recentemente, finalizei a formação em PowerBI na Alura. Ademais, um dos meus objetivos é realizar uma pós-graduação em Data Analytics.</div>

</div>

       </div>

       <div className="experiencias">
        <div className="titulo1">

        <Title2><img src="https://i.imgur.com/IuD8mKo.png"></img>Experiências<img src="https://i.imgur.com/IuD8mKo.png"></img></Title2>
        </div>
        <div className="text">
            <ul>
                <li>Estagiária de Business Intelligence</li>
                <li> Voluntária no UNICEF Brasil : Em meio à pandemia do novo coronavírus, o UNICEF trabalha com adolescentes e jovens que atuem ativamente nas redes sociais enfrentando notícias falsas e promovendo os direitos de crianças e adolescentes.</li>
                <li>
Voluntária no 1Mio: Através do voluntário do UNICEF, eu também participei da iniciativa 1Mio, na qual tive como funções: compartilhar informações nas redes sociais, engajar nas publicações do 1Mio e participar de projetos e lives dentro da plataforma Discord.</li>
                <li>Embaixadora DioCampusExpert - 2022</li>
                <li>Bootcamp Code Like  a Girls e Decola Tech oferecidos na plataforma DIO.</li>
                <li> Em 2022, eu fui entre das 200 mulheres selecionadas para receber mentoria de carreira na Alumna </li>
            </ul>
        </div>
       </div>

       <div className="hobbies">
        <Title2>Hobbies</Title2>

        <Card3>
            <div className="card4">
                <p>Daiane: Um dos meus hobbies favoritos é ler livros, amo livros de romance, desenvolvimento pessoal e ficção científica, também tenho como hobby desenhar e aprender sobre diferentes culturas. Gosto de assistir sobre viagens e conhecer diferentes lugares.  

</p>
            </div>
        </Card3>

       </div>
    </Container>
    );
}

export default Daiane;