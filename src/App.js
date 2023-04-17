<<<<<<< HEAD
=======
import './App.css';
>>>>>>> 34d3255341e334587e841b94ca1af4bce7594fe1
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { NormalizeStyles } from './shared/NormalizeStyles';
import Home from './components/pages/Home/Home';
import Formacao from './components/pages/Formacao/Formacao';
import Experiencia from './components/pages/Experiencia/Experiencia';
import Hobbies from './components/pages/Hobbies/Hobbies';
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';
import Daiane from './components/pages/Apresentacao/Daiane';

export function App() {
  return (
    <>
      <NormalizeStyles/>
<<<<<<< HEAD
    
=======
      <BrowserRouter>
      <Navbar/>
>>>>>>> 34d3255341e334587e841b94ca1af4bce7594fe1
      <Routes>
        <Route path="/" element={<Home/>}></Route>      
        <Route path="/Formacao" element={<Formacao/>}></Route>
        <Route path="/Experiencia" element={<Experiencia/>}></Route>
        <Route path="/Hobbies" element={<Hobbies/>}></Route>
<<<<<<< HEAD
=======
        <Route path="/Contato" element={<Contato/>}></Route>
        <Route path="/daiane" element={<Daiane/>}></Route>
>>>>>>> 34d3255341e334587e841b94ca1af4bce7594fe1
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;
