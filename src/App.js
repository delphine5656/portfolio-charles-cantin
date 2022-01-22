import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Tarif from './pages/tarif/Tarif';
import Contact from './pages/contact/Contact';
import Bebe from './pages/categorie/Bebe';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Connexion from './pages/connexion/Connexion';
import Family from './pages/categorie/Family';
import Example from './Example';
import Post from './pages/Post'
import NotFound from "./pages/notfound"


function App() {
  
  return(
    <div className='app'>
    <Navbar/>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/bebe' element = {<Bebe/>}/>
      <Route path='/famille' element = {<Family/>}/>
      <Route path='/tarif' element={<Tarif/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/example' element={<Example/>}/>
      <Route path="/post/:id" element={props => <Post {...props} />} />
      <Route path="/404" component={<NotFound/>} />
      
    </Routes>
    <Footer/>
    </div>
  ) 
}

export default App

