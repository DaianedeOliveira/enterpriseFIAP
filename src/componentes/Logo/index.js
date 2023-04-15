

import logo from '../../imagens/logo.svg'
import styled from 'styled-components';


const LogoImage = styled.img`
margin-right: 10px;
max-width: 90px;
`
    function Logo() {
    return (
        <LogoImage>
        <img src={logo} alt="logo"></img>
        </LogoImage>
    );
    }

    export default Logo();