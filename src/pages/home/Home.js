import React from 'react'
import './Home.css'
import homeBlack from '../../images/home.jpg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <img src={homeBlack} alt='photo en noir et blanc' className='homeBlack'/> 
            <div className='containHome'>
            <h1><span className='spanTitre'>Charles Cantin </span>photographe</h1>
            <button><Link to='/contact' className='link'>Contact</Link></button>
            <button><Link to='/portfolio' className='link'>Portfolio</Link></button>
            </div>     
        </div>
    )
}

export default Home

