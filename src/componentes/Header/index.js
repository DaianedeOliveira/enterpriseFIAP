import Logo from "../Logo";
    import styled from "styled-components";
    import OpcoesHeader from "../OpcoesHeader";


            const Container = styled.header`
            background-color: #282323;
            display: flex;
            justify-content: center;
            `


        function Header() {
            return (
            <Container>
            
                
                <Logo />
                <OpcoesHeader />

            </Container>
            );
    }

    export default Header()