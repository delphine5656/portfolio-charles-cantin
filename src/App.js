import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Tarif from './pages/tarif/Tarif';
import Contact from './pages/contact/Contact';
import Bebe from './Bebe';




import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Connexion from './pages/connexion/Connexion';


function App() {
  
  return(
    <div className='app'>
    <Navbar/>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/bebe' element = {<Bebe/>}/>
      <Route path='/tarif' element={<Tarif/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      
    </Routes>
    <Footer/>
    </div>
  ) 
}

export default App

