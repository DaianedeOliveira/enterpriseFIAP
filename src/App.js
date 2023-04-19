import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { NormalizeStyles } from './shared/NormalizeStyles';
import Home from './components/pages/Home/Home';
import Formacao from './components/pages/Formacao/Formacao';
import Experiencia from './components/pages/Experiencia/Experiencia';
import Hobbies from './components/pages/Hobbies/Hobbies';
import Contato from './components/pages/Contato/Contato';
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';
import Amanda from './components/pages/Apresentacao/Amanda';
import Cristina from './components/pages/Apresentacao/Cristina';
import Daiane from './components/pages/Apresentacao/Daiane';
import Amanda from './components/pages/Apresentacao/Amanda';
import Cristina from './components/pages/Apresentacao/Cristina';
import Kevin from './components/pages/Apresentacao/Kevin';
import Thais from './components/pages/Apresentacao/Thais';

export function App() {
  return (
    <>
      <NormalizeStyles/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>      
        <Route path="/daiane" element={<Daiane/>}></Route>
        <Route path="/amanda" element={<Amanda/>}></Route>
        <Route path="/cristina" element={<Cristina/>}></Route>
        <Route path="/kevin" element={<Kevin/>}></Route>
        <Route path="/thais" element={<Thais/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;
