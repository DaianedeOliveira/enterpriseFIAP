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

    function Amanda(){        
        const [cep, setCep] = useState('01503010');
        const [mostrarEndereco, setMostrarEndereco] = useState(false);

        const ocultarEndereco = () => {
            setMostrarEndereco(false);
        };

        const [{ data, loading, error}, refetch ] = useAxios(
            "https://viacep.com.br/ws/01503010/json/",
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
                    <img src="https://i.imgur.com/5XXMBe8.png" alt="Foto da Amanda - Uma mulher de 26 anos com cabelos e olhos castanhos escuro, cacheados. Ela está sorrindo na foto e se encontra de perfil."></img>
                </div>
                <div className="texto">
                    <Title4>Amanda</Title4>
                    <p>Olá, meu nome é Amanda, tenho 26 anos e moro em São Paulo. Em 2020 migrei da área de atendimento pra área de tecnologia trabalhando por 2 anos como técnica de suporte para notebooks e desktops.Desde o início da minha carreira tenho feito cursos e participado de programas de aceleração para área de desenvolvimento e em 2022 iniciei minha graduação em Sistemas para Internet pela FIAP.  </p>
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


                <div className="card1">Formação Amanda</div>


                <div className="card2">Sistemas para Internet - Faculdade de Informática e Administração Paulista (FIAP)  - cursando.</div>

    </div>

        </div>

        <div className="experiencias">
            <div className="titulo1">

            <Title2><img src="https://i.imgur.com/IuD8mKo.png"></img>Experiências<img src="https://i.imgur.com/IuD8mKo.png"></img></Title2>
            </div>
            <div className="text">
                <ul>
                    <li>Suporte técnico</li>
                    <li> Decola Tech Avanade: desenvolvimento do app Flashlight usando o sensor de movimento do smartphone com React Native.</li>
                    <li>
    VLuiza Code 5a Edição - Python: desenvolvimento  em grupo de uma API em Python para o carrinho de compras de um e-commerce.
    </li>

                </ul>
            </div>
        </div>

        <div className="hobbies">
            <Title2><img src="https://i.imgur.com/PmHe8zV.png" className="white-line1"></img>Hobbies<img src="https://i.imgur.com/Ok0q8JI.png" className="white-line2"></img></Title2>

            <Card3>
                <div className="card4">
                    <p>Amanda: Meus hobbies são passeios com amigos, familiares, gosto de assistir documentários sobre animais selvagens , animais marinhos e crimes. 
    E sempre que posso tento aprendar a fazer um origami novo.  
                    </p>
                    <img src="https://i.imgur.com/tmxm7Ry.png" class="menina-sentada" alt="Desenho de uma garota sentada no chão com um violão no colo e fazendo sinal da paz com a mão esquerda"></img>
                </div>
            </Card3>

        </div>
        </Container>
    );
}

export default Amanda;