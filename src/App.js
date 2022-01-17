import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Tarif from './pages/tarif/Tarif';
import Contact from './pages/contact/Contact';
import Grossesse from './pages/portfolio/Grossesse'
import Bapteme from './pages/portfolio/Bapteme'
import Bebe from './pages/portfolio/Bebe'
import Couple from './pages/portfolio/Couple'
import Famille from './pages/portfolio/Famille'
import Mariage from './pages/portfolio/Mariage'
import Portrait from './pages/portfolio/Portrait'




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
      <Route path='/portfolio' element={<Portfolio/>}>
        <Route path='/portfolio/Grossesse' element={<Grossesse/>}/>
        <Route path='/portfolio/Bapteme' element={<Bapteme/>}/>
        <Route path='/portfolio/Bebe' element={<Bebe/>}/>
        <Route path='/portfolio/Couple' element={<Couple/>}/>
        <Route path='/portfolio/Famille' element={<Famille/>}/>
        <Route path='/portfolio/Mariage' element={<Mariage/>}/>
        <Route path='/portfolio/Portrait' element={<Portrait/>}/>
      </Route>
      <Route path='/tarif' element={<Tarif/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      
    </Routes>
    <Footer/>
    </div>
  ) 
}

export default App

