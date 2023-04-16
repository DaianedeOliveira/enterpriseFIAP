import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { NormalizeStyles } from './shared/NormalizeStyles';
import Home from './components/pages/Home/Home';
import Navbar from './components/static/Navbar';

export function App() {
  return (
    <>
    <Navbar/>
    <NormalizeStyles/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
