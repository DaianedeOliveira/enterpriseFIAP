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
import Daiane from './components/pages/Apresentacao/Daiane';

export function App() {
  return (
    <>
      <NormalizeStyles/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>      
        <Route path="/Formacao" element={<Formacao/>}></Route>
        <Route path="/Experiencia" element={<Experiencia/>}></Route>
        <Route path="/Hobbies" element={<Hobbies/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
        <Route path="/daiane" element={<Daiane/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;
