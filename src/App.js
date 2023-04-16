import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { NormalizeStyles } from './shared/NormalizeStyles';
import Home from './components/pages/Home/Home';
import Sobre from './components/pages/Sobre/Sobre';
import Formacao from './components/pages/Formacao/Formacao';
import Experiencia from './components/pages/Experiencia/Experiencia';
import Hobbies from './components/pages/Hobbies/Hobbies';
import Contato from './components/pages/Contato/Contato';
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';

export function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <NormalizeStyles/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>      
        <Route path="/Sobre" element={<Sobre/>}></Route>
        <Route path="/Formacao" element={<Formacao/>}></Route>
        <Route path="/Experiencia" element={<Experiencia/>}></Route>
        <Route path="/Hobbies" element={<Hobbies/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
      </Routes>
    </BrowserRouter>

    <Footer/>
    </>

  );
}

export default App;
