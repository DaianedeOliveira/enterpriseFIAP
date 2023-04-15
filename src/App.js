

import logo from './imagens/logo.svg'
import styled from 'styled-components';
import Header from './componentes/Header';

const AppContainer = styled.div`
  background-color: #292828;
  overflow-x: hidden;
  height: 100vh;
  padding: 5px;
`;


const Fiap = styled.div`
margin: 20px;
padding-left: 10px;
`;

function App() {
    return (
      <AppContainer>
<Header/>
        <Fiap>
          <img src={logo} className="App-logo" alt="logo" />
        </Fiap>

      </AppContainer>
    );
}

export default App;
