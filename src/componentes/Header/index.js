import Logo from "../Logo";
    import styled from "styled-components";
    import OpcoesHeader from "../OpcoesHeader";
    import Home from './componentes/Home';


            const Container = styled.header`
            background-color: #282323;
            display: flex;
            justify-content: center;
            `


        function Header() {
            return (
            <Container>
                <Home/>
                
                <Logo />
                <OpcoesHeader />

            </Container>
            );
    }

    export default Header()