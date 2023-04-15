
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

const Container = styled.div`
display: flex;
`
const Button = styled.button`
width:300px;
height: 250px;
beckground-color: #90C2E7
border-radius: 15px;
font-weight: 900;
color: #ffff;

`

function Home() {

    return(
<Container>
    <Header/>
    
    <Button>
    <Link to="/Amanda"><button>Sobre</button></Link>

    <Link to="/Amanda"><button>Formação</button></Link>

    <Link to="/Amanda"><button> Experiência</button></Link>

        <Link to="/Amanda"><button>Hobbies</button></Link>
</Button>

    </Container>

        )
    }

    export default Home()