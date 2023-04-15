

import logo from './imagens/logo.svg'
import Header from './componentes/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
            <Router>
      
          <AppContainer>
          
  <Header/> 
          <Fiap>
            <img src={logo} className="App-logo" alt="logo" />
            
    <Link to="/Amanda"><button className="button">Amanda</button></Link>

    <Link to="/Amanda"><button>Daiane</button></Link>

    <Link to="/Amanda"><button>Thais</button></Link>

        <Link to="/Amanda"><button>Cris</button></Link>
        
        <Link to="/Amanda"><button>Kevin</button></Link>
          </Fiap>
        
          </AppContainer>
          <Routes />
          </Router>
    );
}

export default App;
