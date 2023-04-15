
import styled from "styled-components";

    const textoOpcao = ['Sobre', 'Formação', 'Experiencia','Hobbies'];

    const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 120px;
    padding: 0 5px;
    cursor: pointer;
    `;

    const Opcoes = styled.ul`
    display: flex;
    margin-left: 50px;
    `;


    function OpcoesHeader() { 
    return(

        <Opcao> 
    {textoOpcao.map((texto) => (
        <Opcoes><p>{texto}</p> </Opcoes>

        ))}

        </Opcao>
        
    )

    }

    export default OpcoesHeader()