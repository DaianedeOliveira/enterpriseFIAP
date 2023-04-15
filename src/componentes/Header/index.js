import Logo from "../Logo";
import styled from "styled-components";

        const Container = styled.header`
        background-color: #282323;
        display: flex;
        justify-content: center;
        `

    function Header() {
        return (
            <Container>
<Logo/>

        </Container>
    )
}

export default Header()